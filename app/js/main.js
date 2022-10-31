import '../sass/style.scss';
import * as $ from 'jquery';
import 'slick-carousel';
import 'bootstrap';
import '../../node_modules/lightgallery/dist/js/lightgallery-all';


$(function(){

    function fixedMenu() {
        var height = $(window).scrollTop();
        if (height > 200) {
            $('.home #header').addClass('header--black');
        }
        else {
            $('.home #header').removeClass('header--black');
        }
    }
    
    $(function () {
        var mainPage = document.getElementsByTagName('body');
        if (mainPage.length > 0) {
            fixedMenu();
            $(window).scroll(function () {
                fixedMenu();
            });
        }
    });

    // open/close sidebar
    $('#openSidebar').click(function(){
        $('.sidebar').addClass('sidebar--open');
    });

    $('#closeSidebar').click(function(){
        $('.sidebar').removeClass('sidebar--open');
    });

    $('.sidebar__link').click(function(){
        $('.sidebar').removeClass('sidebar--open');
    });


    //smoth scroll
    $(".smooth a[href^='#']").click(function(event) {
        event.preventDefault();
        
        var location = $(this.hash);
        var offset = 0;
                var speed = 1200;
    
         $("html,body").animate({
                scrollTop: location.offset().top - offset
            }, speed );
            return false
    });
});