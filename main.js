// JavaScript Document

// JavaScript Document

$(document).ready(function() {
	
	
	var owlsmart = $("#carousel-smartphone");
			
	owlsmart.owlCarousel({
		  navigation : false,
		  pagination: false,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem:true,
		  autoPlay:true
	});
	  
	$("#carousel-next").click(function(){
		owlsmart.trigger('owl.next');
	})
	
	$("#carousel-prev").click(function(){
		owlsmart.trigger('owl.prev');
	})
	
	
	
	$("a[href='#'],area[href='#']").click(function (event) {
        event.preventDefault();
    });
	
	$("#page .right .gocce .goccia02 map area").hover(function() {
			$(this).parent().parent().find(".image").addClass("hover");
	});
	$("#page .right .gocce .goccia03 map area").hover(function() {
			$(this).parent().parent().find(".image").addClass("hover");
	});
	$("#page .right .gocce .goccia04 map area").hover(function() {
			$(this).parent().parent().find(".image").addClass("hover");
	});
	

	
	
	$(window).scroll(function(e)
    {
        if($(this).scrollLeft()>0)
        {
            window.scrollTo(0,$(this).scrollTop());
        }
    });
	
	$("#pull").click(function() {
		$("#nav").slideToggle(200);
	});
	
	$("#search-icon").click(function() {
		$("#search").slideToggle(200);
	});
	
	$("#linksottomobile01, #linksottomobile02").click(function() {
		var position01 = $('#home-sections').height();
		$("html, body").animate({scrollTop:position01}, 1000);
	});

	window.onload = (function(){
	  $(window).scroll(function () { 
		if( $(window).scrollTop() > 200 ) {
			$(".scrolldown").fadeOut();
		}else{
			$(".scrolldown").fadeIn();
		}
	  })
	})
	

	var titolo01 = "Registrazione";
	var frase01 = "Confermi di abbandonare questo sito per andare al modulo di iscrizione su Edott?";

	var titolo02 = "Richiesta password";
	var frase02 = "Per usare la funzione di invio della password lascerai questo sito e sarai mandato sul portale GSK eDott.<br />Confermi di voler abbandonare questo sito?";

	var titolo03 = "Attenzione";
	var frase03 = "Attenzione, stai uscendo da www.questionidiprostata.it<br />Confermi di voler abbandonare questo sito?";

	var titolo05 = "Accesso FAD";
	var frase05 = "Confermi di abbandonare questo sito per andare sulla piattaforma di Formazione a Distanza?";


	$('.linkesterno').click(function () {

	    var collegamento = this;
	    var numero = $(collegamento).attr('rel');
	    var linkesterno = $(collegamento).attr('sito');

	    $.fancybox.open({
	        href: '#linkesterno',
	        padding: 0,
	        openEffect: 'none',
	        closeEffect: 'none',
	        beforeLoad: function () {

	            $("#linkesterno .titolo h1").empty();
	            $("#linkesterno .testo").empty();


	            if (numero == 1) {
	                $("#linkesterno .titolo h1").append(titolo01);
	                $("#linkesterno .testo").append(frase01);

	            }
	            else if (numero == 2) {
	                $("#linkesterno .titolo h1").append(titolo02);
	                $("#linkesterno .testo").append(frase02);

	            }

	            else if (numero == 5) {
	                $("#linkesterno .titolo h1").append(titolo05);
	                $("#linkesterno .testo").append(frase05);

	            }
	            else {
	                $("#linkesterno .titolo h1").append(titolo03);
	                $("#linkesterno .testo").append(frase03);

	            }

	            $("#linkesterno a.apri").unbind();
	            $("#linkesterno a.apri").click(function () {

	                window.open(linkesterno, '_blank');
	                $.fancybox.close();
	                event.preventDefault();
	            });



	        }
	    });

	});
	
	
	$('#linkesterno.popup .riga .azioni a.chiudi').click(function () {
	    $.fancybox.close();
	});
					
});	