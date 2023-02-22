(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$('.slider').slick({
  autoplay: false,
  //自動的に動き出すか。初期値はfalse。
  infinite: true,
  //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 3,
  //スライドを画面に3枚見せる
  slidesToScroll: 3,
  //1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',
  //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',
  //矢印部分NextのHTMLを変更
  // dots: false,//下部ドットナビゲーションの表示
  responsive: [{
    breakpoint: 769,
    //モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,
      //スライドを画面に2枚見せる
      slidesToScroll: 2 //1回のスクロールで2枚の写真を移動して見せる

    }
  }, {
    breakpoint: 426,
    //モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1,
      //スライドを画面に1枚見せる
      slidesToScroll: 1 //1回のスクロールで1枚の写真を移動して見せる

    }
  }]
});

},{}],2:[function(require,module,exports){
'use strict';

var test = require('./common/test.js');

test;

},{"./common/test.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYmFiZWwvY29tbW9uL3Rlc3QuanMiLCJzcmMvYmFiZWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxLQUFiLENBQW1CO0FBQ2pCLEVBQUEsUUFBUSxFQUFFLEtBRE87QUFDRDtBQUNoQixFQUFBLFFBQVEsRUFBRSxJQUZPO0FBRUY7QUFDZixFQUFBLFlBQVksRUFBRSxDQUhHO0FBR0Q7QUFDaEIsRUFBQSxjQUFjLEVBQUUsQ0FKQztBQUlDO0FBQ2xCLEVBQUEsU0FBUyxFQUFFLGdDQUxNO0FBSzJCO0FBQzVDLEVBQUEsU0FBUyxFQUFFLGdDQU5NO0FBTTJCO0FBQzVDO0FBQ0EsRUFBQSxVQUFVLEVBQUUsQ0FDVjtBQUNBLElBQUEsVUFBVSxFQUFFLEdBRFo7QUFDZ0I7QUFDaEIsSUFBQSxRQUFRLEVBQUU7QUFDUixNQUFBLFlBQVksRUFBRSxDQUROO0FBQ1E7QUFDaEIsTUFBQSxjQUFjLEVBQUUsQ0FGUixDQUVVOztBQUZWO0FBRlYsR0FEVSxFQVFaO0FBQ0UsSUFBQSxVQUFVLEVBQUUsR0FEZDtBQUNrQjtBQUNoQixJQUFBLFFBQVEsRUFBRTtBQUNSLE1BQUEsWUFBWSxFQUFFLENBRE47QUFDUTtBQUNoQixNQUFBLGNBQWMsRUFBRSxDQUZSLENBRVU7O0FBRlY7QUFGWixHQVJZO0FBUkssQ0FBbkI7OztBQ0FBOztBQUVBLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFFQSxJQUFJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJCgnLnNsaWRlcicpLnNsaWNrKHtcbiAgYXV0b3BsYXk6IGZhbHNlLC8v6Ieq5YuV55qE44Gr5YuV44GN5Ye644GZ44GL44CC5Yid5pyf5YCk44GvZmFsc2XjgIJcbiAgaW5maW5pdGU6IHRydWUsLy/jgrnjg6njgqTjg4njgpLjg6vjg7zjg5fjgZXjgZvjgovjgYvjganjgYbjgYvjgILliJ3mnJ/lgKTjga90cnVl44CCXG4gIHNsaWRlc1RvU2hvdzogMywvL+OCueODqeOCpOODieOCkueUu+mdouOBqzPmnpropovjgZvjgotcbiAgc2xpZGVzVG9TY3JvbGw6IDMsLy8x5Zue44Gu44K544Kv44Ot44O844Or44GnM+aemuOBruWGmeecn+OCkuenu+WLleOBl+OBpuimi+OBm+OCi1xuICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwic2xpY2stcHJldlwiPjwvZGl2PicsLy/nn6LljbDpg6jliIZQcmV2aWV344GuSFRNTOOCkuWkieabtFxuICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwic2xpY2stbmV4dFwiPjwvZGl2PicsLy/nn6LljbDpg6jliIZOZXh044GuSFRNTOOCkuWkieabtFxuICAvLyBkb3RzOiBmYWxzZSwvL+S4i+mDqOODieODg+ODiOODiuODk+OCsuODvOOCt+ODp+ODs+OBruihqOekulxuICByZXNwb25zaXZlOiBbXG4gICAge1xuICAgIGJyZWFrcG9pbnQ6IDc2OSwvL+ODouODi+OCv+ODvOOBruaoquW5heOBjDc2OXB45Lul5LiL44Gu6KaL44Gb5pa5XG4gICAgc2V0dGluZ3M6IHtcbiAgICAgIHNsaWRlc1RvU2hvdzogMiwvL+OCueODqeOCpOODieOCkueUu+mdouOBqzLmnpropovjgZvjgotcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLC8vMeWbnuOBruOCueOCr+ODreODvOODq+OBpzLmnprjga7lhpnnnJ/jgpLnp7vli5XjgZfjgabopovjgZvjgotcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBicmVha3BvaW50OiA0MjYsLy/jg6Ljg4vjgr/jg7zjga7mqKrluYXjgYw0MjZweOS7peS4i+OBruimi+OBm+aWuVxuICAgIHNldHRpbmdzOiB7XG4gICAgICBzbGlkZXNUb1Nob3c6IDEsLy/jgrnjg6njgqTjg4njgpLnlLvpnaLjgasx5p6a6KaL44Gb44KLXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSwvLzHlm57jga7jgrnjgq/jg63jg7zjg6vjgacx5p6a44Gu5YaZ55yf44KS56e75YuV44GX44Gm6KaL44Gb44KLXG4gICAgfVxuICB9XG5dXG59KTsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHRlc3QgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXN0LmpzJyk7XG5cbnRlc3Q7Il19
