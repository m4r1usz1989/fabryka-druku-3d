import '../scss/style.scss';
import * as $ from 'jquery';
import 'bootstrap';
import { event } from 'jquery';


function fixedMenu() {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('#header').addClass('header--black');
    }
    else {
        $('#header').removeClass('header--black');
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

$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });