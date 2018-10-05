alertify.defaults = {
    // dialogs defaults
    autoReset:true,
    basic:false,
    closable:true,
    closableByDimmer:true,
    frameless:false,
    maintainFocus:true, // <== global default not per instance, applies to all dialogs
    maximizable:true,
    modal:true,
    movable:true,
    moveBounded:false,
    overflow:true,
    padding: true,
    pinnable:true,
    pinned:true,
    preventBodyShift:false, // <== global default not per instance, applies to all dialogs
    resizable:true,
    startMaximized:false,
    transition:'pulse',
  
    // notifier defaults
    notifier: {
        // auto-dismiss wait time (in seconds)  
        delay:5,
        // default position
        position:'bottom-right',
        // adds a close button to notifier messages
        closeButton: false
    },
  
    // language resources 
    glossary:{
        // dialogs default title
        title:'',
        // ok button text
        ok: 'OK',
        // cancel button text
        cancel: 'Cancel'            
    },
  
    // theme settings
    theme:{
        // class name attached to prompt dialog input textbox.
        input:'ajs-input',
        // class name attached to ok button
        ok:'ajs-ok',
        // class name attached to cancel button 
        cancel:'ajs-cancel'
    }
}


let tokenjwt = localStorage.getItem('tokenjwt')
if(tokenjwt) {
    $('.g-signin2').hide()
    $('#logbtn').show()
} else {
    $('.g-signin2').show()
    $('#logbtn').hide()
}

$.ajax({
    type: "get",
    url: "http://localhost:3000/activity",
})
.done((activity)=>{activity})
.fail((err)=>{err})


$.ajax({
    type: "get",
    url: "http://localhost:3000/randompic",
})
.done((pictureUrl)=>{pictureUrl})
.fail((err)=>{err})