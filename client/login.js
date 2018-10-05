function onSignIn(googleUser) {
    let id_token = googleUser.getAuthResponse().id_token
    
    $.ajax({
      method: "POST",
      url: `http://localhost:3000/google-signin`,
      data: {
        googleToken: id_token
      }
    })
    .done(function(data) {
        if (data.token) {
            localStorage.setItem('tokenjwt', data.token)
            $('.g-signin2').hide()
            $('#logbtn').show()
            
            $(".m-open").modalF()
            $(".m-modal").css("visibility", "visible")
            // window.location.reload
        }
    })
    .fail(err => {
        alertify.alert(err.message)
    })
} 

function signOut() {
let auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut().then(function () {
        console.log('User signed out.')
        localStorage.clear()
    })
    window.location.reload()
}

var userChanged = function (user) {
    console.log('User now: ', user);
    googleUser = user;
    updateGoogleUser();
    document.getElementById('curr-user-cell').innerText =
      JSON.stringify(user, undefined, 2);
};
  
/**
 * Updates the properties in the Google User table using the current user.
*/
var updateGoogleUser = function () {
    if (googleUser) {
      document.getElementById('user-id').innerText = googleUser.getId();
      document.getElementById('user-scopes').innerText =
        googleUser.getGrantedScopes();
      document.getElementById('auth-response').innerText =
        JSON.stringify(googleUser.getAuthResponse(), undefined, 2);
    } else {
      document.getElementById('user-id').innerText = '--';
      document.getElementById('user-scopes').innerText = '--';
      document.getElementById('auth-response').innerText = '--';
    }
};

var refreshValues = function() {
    if (auth2){
        console.log('Refreshing values...');

        googleUser = auth2.currentUser.get();

        document.getElementById('curr-user-cell').innerText =
        JSON.stringify(googleUser, undefined, 2);
        document.getElementById('signed-in-cell').innerText =
        auth2.isSignedIn.get();

        updateGoogleUser();
    }
}