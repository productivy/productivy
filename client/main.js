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


// Sections
(function($){
    $.fn.modalF = function(input) {
      let openModal;
      let object = input || {};
      let color = object.color || false;
      let speed = object.speed || 300;
      this.each( function(){
  
        $('.m-modal').css('display','none');
        $('.m-body').css('display','none');
        $('.m-close').css({
          "position":"fixed",
          "top":"15px",
          "right":"15px",
          "display":"none",
          "cursor":"pointer"
        });
  
        $(this).click(function(){
          openModal  = $(this);
          let pos = $(this).offset();
          let x = pos.left;
          let y = pos.top;
          let w = $(this).width();
          let h = $(this).height();
          let r = $(this).css('border-radius');
          let c;
          if (!color) {
            c = $(this).css('background-color');
          }else{
            c = color;
          }
  
          let modalText = $(this).attr('m-open');
          let modal = $('.m-modal[m-modal="'+modalText+'"]');
          let body = modal.children('.m-body')
          let close = modal.children('.m-close');
  
          modal.css({
            "background-color":c,
            "width":w+'px',
            "height":h+'px',
            "border-radius":r,
            "display":"block",
            "position":"fixed",
            "top":y+'px',
            "left":x+'px',
            "z-index":'9999999',
            "transition":"none"
          });
  
          modal.animate({
  
            width:"150%",
            height:"150vh",
            top:"-60px",
            left:"-110px"
  
          },speed,function(){
  
            modal.animate({
  
              width:"100%",
              height:"100vh",
              top:"0",
              left:"0",
              borderRadius:"0"
  
            },speed/3,function(){
  
              body.fadeIn('slow');
              close.fadeIn('slow');
  
            });
  
          });
  
          close.click(function(){
            nPos = openModal.offset();
            close.fadeOut('slow');
            body.fadeOut('slow',function(){
              modal.animate({
  
                width:"150%",
                height:"150vh",
                top:"-60px",
                left:"-110px",
                borderRadius:r
  
              },0,function(){
  
                modal.animate({
  
                  width:w+"px",
                  height:h+"px",
                  top:nPos.top+"px",
                  left:nPos.left+"px",
                  borderRadius:r
  
                },speed,function(){
  
                  modal.hide(0);
  
                });
              });
            });
          });
        });
      });
    }
  })(jQuery)

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

$.ajax({
    type: "get",
    url: "http://localhost:3000/jokes",
})
.done((joke)=>{joke})
.fail((err)=>{err})
