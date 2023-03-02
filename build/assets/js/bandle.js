(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var slide = require('./slide.js');

slide; // const swiper = require ('./swiper-bundle.min.js');
// swiper;

},{"./slide.js":2}],2:[function(require,module,exports){
// window.addEventListener('DOMContentLoaded', function() {
//   var swiper03 = new Swiper('.sample03 .swiper-container', {
//     pagination: '.swiper-pagination',
//     paginationClickable: true,
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//     loop: true,
//     slidesPerView: 3,
//     loopedSlides: 3,
//     centeredSlides : true,
//     slideToClickedSlide: true,
//     spaceBetween: 10,
//     breakpoints: {
//       543: {
//         slidesPerView: 2,
//       }
//     }
//   });
// }, false);
"use strict";

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYmFiZWwvaW5kZXguanMiLCJzcmMvYmFiZWwvc2xpZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUUsWUFBRixDQUFyQjs7QUFFQSxLQUFLLEMsQ0FHTDtBQUVBOzs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2xpZGUgPSByZXF1aXJlICgnLi9zbGlkZS5qcycpO1xuXG5zbGlkZTtcblxuXG4vLyBjb25zdCBzd2lwZXIgPSByZXF1aXJlICgnLi9zd2lwZXItYnVuZGxlLm1pbi5qcycpO1xuXG4vLyBzd2lwZXI7IiwiLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbi8vICAgdmFyIHN3aXBlcjAzID0gbmV3IFN3aXBlcignLnNhbXBsZTAzIC5zd2lwZXItY29udGFpbmVyJywge1xuLy8gICAgIHBhZ2luYXRpb246ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuLy8gICAgIHBhZ2luYXRpb25DbGlja2FibGU6IHRydWUsXG4vLyAgICAgbmV4dEJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuLy8gICAgIHByZXZCdXR0b246ICcuc3dpcGVyLWJ1dHRvbi1wcmV2Jyxcbi8vICAgICBsb29wOiB0cnVlLFxuLy8gICAgIHNsaWRlc1BlclZpZXc6IDMsXG4vLyAgICAgbG9vcGVkU2xpZGVzOiAzLFxuLy8gICAgIGNlbnRlcmVkU2xpZGVzIDogdHJ1ZSxcbi8vICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxuLy8gICAgIHNwYWNlQmV0d2VlbjogMTAsXG4vLyAgICAgYnJlYWtwb2ludHM6IHtcbi8vICAgICAgIDU0Mzoge1xuLy8gICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9LCBmYWxzZSk7Il19
