/*
Theme Name: Korea National Park
Author: css3studio
Version:1.0
*/
var device_status = "";
var $ = jQuery;
$(window).resize(function() {
	var dw = viewport().width;
	if(dw <= 768 && device_status == "pc"){	//PC에서 모바일로 변경시
		$("body").removeClass('pc');
		$("body").addClass('mobile');
		init_mobile();
		device_status = "mobile";
	}else if(dw > 768 && device_status == "mobile"){	//모바일에서 PC로 변경시
		$("body").removeClass('mobile');
		$("body").addClass('pc');
		init_pc();
		device_status = "pc";
	}
});

/* 메뉴고정 
$(window).scroll(function(e){

	if ($(window).scrollTop() > 100) {
		$("body.pc").addClass("scrolling");
	} else {
		$("body.pc").removeClass("scrolling");
	}
});
*/
$(document).ready(function() {

	var dw = viewport().width;
	if(dw <= 768){	//모바일
		$("body").removeClass('pc');
		$("body").addClass('mobile');
		init_mobile();
		device_status = "mobile";
	}else{	//PC
		$("body").removeClass('mobile');
		$("body").addClass('pc');
		init_pc();
		device_status = "pc";
	}

    //메인 국립공원 슬라이더
    if($('.slider-carousel-main').length > 0){
        $('.slider-carousel-main .slider-area ul').slick({
            infinite: true,
            speed: 500,
            autoplay:true,
            slidesToShow: 1,
            //centerMode: true,
            variableWidth: true
        });
    }
    //기록으로 보는 탐방지도 슬라이더
    if($('.slider-archive-map .map-slider').length > 0){
        $('.slider-archive-map .map-slider').slick({
            fade: true,
            speed:500,
            infinite: true,
            arrows: false,
            asNavFor: '.slider-paging ul'
            
        });
        $('.slider-archive-map .slider-paging ul').slick({
            infinite: true,
            initialSlide:0,
            slidesToShow: 10,
            asNavFor: '.map-slider',
            centerMode: true,
            //variableWidth: true,
            focusOnSelect: true
        });
        $('.slider-archive-map .slider-paging ul li a').on('click', function(event) {
            event.preventDefault();
        });
    }
    //기록으로 보는 탐방지도 > 컨텐츠 뷰  > 탐방코스 탭메뉴
    $('.menu-tab02 li a').bind("click",function(event){
        $(this).parentsUntil('.menu-tab02').find('li').removeClass("current");
        $(this).parent().addClass("current");
        /*
        var target = "#" + $(this).attr('data-target');
        $('.history .dataA ul').hide();
        $('.history .dataA ul' + target).show();
        */
        event.preventDefault();
    });
    /*
    //소개  탭메뉴
    $('.menu-tab03 li a').bind("click",function(event){
        $(this).parentsUntil('.menu-tab03').find('li').removeClass("current");
        $(this).parent().addClass("current");
        
        var target = $(this).attr('href');
        $('.contents-about li').hide();
        $('.contents-about li' + target).show();
        
        event.preventDefault();
    });*/
    //메인 검색하기
    $(".banner-main-search .form-search").on('submit', function(event) {
        var input = $("input",$(this));
        if(input.val().trim() == ""){
            alert("검색어를 입력해 주세요");
            input.focus();
            event.preventDefault();
        }
    });
    //메인 ASMR
    $(".play-asmr > a").on('click', function(event) {
        if(!$(this).parent().hasClass('playing')){
            $(this).parent().addClass('playing');
            $(".play-asmr audio")[0].play();
        }else{
            $(this).parent().removeClass('playing');
            $(".play-asmr audio")[0].pause();
        }
        event.preventDefault();
    });
    
    //이미지 가로-세로 비율 - jquery
    $('img').each(function() {
        var img = new Image();
        img.src = $(this).attr('src');
        var this_img = $(this);
        img.onload = function() {
            var fillClass = (img.height > img.width)
                    ? 'fillheight' : 'fillwidth';
            this_img.addClass(fillClass);
        };
    });

});


//PC버젼 초기화
function init_pc(){
    //아이템 상세 > 컨텐츠 높이 조절
    setTimeout(function(){
        if($('.item-container .contents-area').height() < $('.item-container .media-info').height()){
            $('.item-container .contents-area').height( $('.item-container .media-info').height() );
        }
    },1000);

}
//모바일 버젼 초기화
function init_mobile(){

/*
    //슬라이더 멀티 4개
    if($('.container02 .list-thumb01 .slick-list').length < 1){
        $('.container02:not(.classic-list) .list-thumb01').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
*/

}

function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

function numberPad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}


