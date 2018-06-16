$(document).ready(function(){
    $('.menu-button').on("click", function(){
      $('.menu').width("200px");
    });

    $('.close-button').on("click", function() {
      $('.menu').width("0px");
    });

    $('.twitter-button').on("click", function() {
      $('.twitter-menu').width("102px");
      $('.twitter-menu').css("display", "block");
    });

    $(document).mouseup(function(e) {
      var container = $(".twitter-menu");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        $(".twitter-menu").unbind( 'click', clickDocument );
      }
    });

    $('.fa-arrow-circle-down').hide();

    var waypoint = new Waypoint({
      element: document.getElementById('main-h1'),
      handler: function() {
        $('.fa-arrow-circle-down').show();
      },
        offset: -100
    });

    $("a[href='#main-h1']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});


});
