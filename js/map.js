var client = $('.price');
var clientTop = client.offset().top;

$(window).bind('scroll', function () {
  var windowTop = $(this).scrollTop();  
	if (windowTop > clientTop) {
		$('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2e6d708277e58d67c007bddcf6763e09b302c057fda63099d3ee54ef48044a83&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false">');
		console.log('докрутили');
		$(window).unbind('scroll');
	}
})
