$(window).load(function() {
	$('.loading-wrapper').hide();
});

$('.wrapper-project').hover(function() {
	$(this).find(".project-preview").css("opacity", "1");
}, function() {
	$(this).find(".project-preview").css("opacity", "0");
})

var service = $('.services').waypoint({
  handler: function() {
  	$('.services li').css("visibility", "visible");
    $('.services li').addClass("animated fadeInRight");
  },
  offset: "70%"
})

var leftHistory = $('.wrapper-left').waypoint({
  handler: function(direction) {
  	$(this.element).css("visibility", "visible");
    $(this.element).addClass("animated fadeInLeft");
  },
  offset: "70%"
})

var rightHistory = $('.wrapper-right').waypoint({
  handler: function(direction) {
  	$(this.element).css("visibility", "visible");
    $(this.element).addClass("animated fadeInRight");
  },
  offset: "70%"
})

var projectHeader = $('.wrapper-project .project-header').waypoint({
  handler: function(direction) {
  	$(this.element).css("visibility", "visible");
    $(this.element).addClass("animated fadeInLeft");
  },
  offset: "90%"
})

var projectHeader = $('.wrapper-project .project-sub-header').waypoint({
  handler: function(direction) {
  	$(this.element).css("visibility", "visible");
    $(this.element).addClass("animated fadeInLeft");
  },
  offset: "90%"
})