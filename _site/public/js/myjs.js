// Scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

// Slick FX
$(document).ready(function(){
    $("#showmailbox").click(function(){
        $("#mailbox").slideToggle();
    });
    $("#showheaderhidden1").click(function(){
        $("#headerhidden1").slideToggle();
    });
  
    $("#showEmployment1").click(function(){
        $("#employment1").slideToggle();
    });
  
    $("#showEmployment2").click(function(){
        $("#employment2").slideToggle();
    });
  
  
    $("#showProject1").click(function(){
        $("#project1").slideToggle();
    });
  
    $("#showProject2").click(function(){
        $("#project2").slideToggle();
    });
  
    $("#showProject3").click(function(){
        $("#project3").slideToggle();
    });
  
    $("#showProject4").click(function(){
        $("#project4").slideToggle();
    });
  
  
    $("#showCreative1").click(function(){
        $("#creative1").slideToggle();
    });
  
    $("#showCreative2").click(function(){
        $("#creative2").slideToggle();
    });
  
    $("#showCreative3").click(function(){
        $("#creative3").slideToggle();
    });
  
  
    $("#showCourse1").click(function(){
        $("#course1").slideToggle();
    });
  
    $("#showCourse2").click(function(){
        $("#course2").slideToggle();
    });
  
    $("#showCourse3").click(function(){
        $("#course3").slideToggle();
    });
  
  
    $("#showAward1").click(function(){
        $("#award1").slideToggle();
    });
  
    $("#showAward2").click(function(){
        $("#award2").slideToggle();
    });
  
    $("#showAward3").click(function(){
        $("#award3").slideToggle();
    });
  
    $("#showAward4").click(function(){
        $("#award4").slideToggle();
    });
  
    $("#showAward5").click(function(){
        $("#award5").slideToggle();
    });
  
    $("#showAward6").click(function(){
        $("#award6").slideToggle();
    });
  
    $("#showAward7").click(function(){
        $("#award7").slideToggle();
    });
  
    $("#showAward8").click(function(){
        $("#award8").slideToggle();
    });
  
});

