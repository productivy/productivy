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