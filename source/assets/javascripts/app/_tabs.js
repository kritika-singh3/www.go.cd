//horizontal tabs
var startTabContainer = function($) {
  $(".tab_content").hide();
  $(".tab_content:first").show();
  $("ul.tabs li:first").addClass("active");
  $(".tab_container .tab-accordion_heading:first").addClass("d_active");

  //tab mode
  $("ul.tabs li").click(function() {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab-accordion_heading").removeClass("d_active");
    $(".tab-accordion_heading[rel^='"+activeTab+"']").addClass("d_active");

    var target = $('.tabs');
    $('html,body').animate({
      scrollTop: target.offset().top + -100
    }, 1000);
  });

  /* accordion mode */
  $(".tab-accordion_heading").click(function() {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#"+d_activeTab).fadeIn();

    $(".tab-accordion_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");

    var dtarget= $('.tab_container');
    $('html,body').animate({
      scrollTop: dtarget.offset().top + -100
       }, 1000);
  });

  if(window.location.hash) {
    release = window.location.hash.substring(1).replace(/\./g,'-');
    $('[rel=tab-' + release + ']').click();
  }

};
