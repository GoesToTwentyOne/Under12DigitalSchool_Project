
$(function(){
  // venubox
  $(document).ready(function(){
      $('.venobox').venobox();
  });


// back to top
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

$(".back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 100);
 });

 // typed js started
 $(function(){
	$(".typed").typed({
		strings: [" Play Group .","Nursery ."," Class One .", "Class Two .", " Class Three.", "Class Four ."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

 // type js end
 // slick slider js started

$('.banner-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
  infinite:true,
   breakpoint: 480,
  autoplaySpeed: 2000,
});
 // slick slider js preStringTyped

 // preloader part started
 $(window).on('load',function(){
   $('.preloader').delay(1000).fadeOut(1000);
 });
 // preloader part end
 // mixit up js started
 var containerEl = document.querySelector('.filter');

            var mixer = mixitup(containerEl);
 // maxitup js end


});
