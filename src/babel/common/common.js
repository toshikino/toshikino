let $html;
let $body;
let $header;
let $footer;
let click_event;

const getOffsetTop = $el => {
  const rect = $el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
};

window.addEventListener('DOMContentLoaded', event => {
  $html = document.querySelector('html');
  $body = document.querySelector('body');
  $header = document.querySelector('.l-header');
  $footer = document.querySelector('.l-footer');
  click_event = window.ontouchstart !== null ? 'click' : 'touchend'; // /* --------------------
  // Accordion
  // -------------------- */
  // アコーディオン取得

  const $accordions = document.querySelectorAll('.js-accordion'); // 高さの配列格納用

  let menuHeight = [];
  $accordions.forEach((accordion, i) => {
    let menus = accordion.querySelectorAll('.accordion_toggle');
    menuHeight[i] = [];
    menus.forEach((menu, j) => {
      // 開閉用の要素の取得
      let item = menu.nextElementSibling; // 高さ取得

      menuHeight[i].push(item.clientHeight);
      menu.addEventListener('click', () => {
        //スタイル属性があったら削除
        //なければ閉じている状態なのでheight付与
        item.getAttribute('style') ? item.removeAttribute('style') : item.setAttribute('style', `height: ${menuHeight[i][j]}px`);
      });
    }); //アコーディオンの開閉する要素のheightを0にするクラスを親要素に付与

    accordion.classList.add('close');
  }); // /* --------------------
  // Breakpoint
  // -------------------- */

  let device_is;

  const checkBreakPoint = mql => {
    //モバイル向け
    if (!mql.matches) {
      setNav();
      device_is = 'MOBILE';
    } //デスクトップ向け
    else {
      destNav();
      device_is = 'DESKTOP';
    }
  }; // /* --------------------
  // HashLink
  // -------------------- */

  /*  ``````````````````````````````
  
      <!-- ページ内リンク -->
      <a href="#test">リンク</a>
  
      ``````````````````````````````  */
  // リンク取得


  let $hash_links = document.querySelectorAll('a[href^="#"]');
  $hash_links.forEach((link, i) => {
    const speed = 500;
    link.addEventListener('click', () => {
      event.preventDefault();
      const href = link.getAttribute('href');
      const $target = document.querySelector(href == "#" || href == "" ? 'html' : href);
      let margin;

      switch (device_is) {
        case 'DESKTOP':
          margin = 160;
          break;

        default:
          margin = 80;
      }

      const position = getOffsetTop($target) - margin;
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  }); // /* --------------------
  // Inview
  // -------------------- */

  /*  ``````````````````````````````
  
      <!-- 単体 -->
      <div class="fadein">フェード</div>
  
      <!-- 連続 -->
      <ul class="fadein_order">
        <li>フェード1</li>
        <li>フェード2</li>
        <li>フェード3</li>
      </ul>
  
      ``````````````````````````````  */

  const inview = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // 個別フェードイン

    let $fade_obj = document.querySelectorAll('.fadein');
    $fade_obj.forEach((obj, i) => {
      const elemPos = getOffsetTop(obj);
      const delay = 200;

      if (scrollTop > elemPos - windowHeight + delay) {
        obj.classList.add('scrollin');
      }
    }); // グループフェードイン

    let $fade_array = document.querySelectorAll('.fadein_order');
    $fade_array.forEach((obj, i) => {
      const elemPos = getOffsetTop(obj);
      const delay = 200;

      if (scrollTop > elemPos - windowHeight + delay) {
        Array.from(obj.children).forEach((el, i) => {
          setTimeout(function () {
            el.classList.add('scrollin');
          }, 200 * i);
        });
      }
    });
  };

  window.addEventListener('DOMContentLoaded', inview);
  window.addEventListener('scroll', inview); // /* --------------------
  // LockScreen
  // -------------------- */

  let scrollPosition;

  const lockScreen = () => {
    scrollPosition = window.pageYOffset;
    $body.classList.add('fixed');
    $body.style.top = -scrollPosition + "px";
  };

  const unlockScreen = () => {
    $body.classList.remove('fixed');
    $body.style.top = "";
    window.scroll({
      top: scrollPosition,
      behavior: "instant"
    });
  };
  /* ----------------------------------------
  // Modal
  ---------------------------------------- */

  /*  ``````````````````````````````
  
      <a href="" data-modal="{#ID}" class="js-modal-open">開くボタン</a>
  
      <div class="hide">
  
        <div class="{#ID}">
          <div class="inner">
            <p>TEST</p>
            <a class="js-modal-close">CLOSE</a>
          </div>
        </div>
  
      </div>
      
      ``````````````````````````````  */


  let current_modal;
  let m_close_callback;
  const $m_toggle_open = document.querySelectorAll('.js-modal-open');
  const $m_toggle_close = document.querySelectorAll('.js-modal-close');
  const $m_modal = document.querySelector('.modal');
  const $m_wrap = document.querySelector('.modal-wrap');
  const $m_container = document.querySelector('.modal-container');
  $m_container.addEventListener('transitionend', () => {
    if (m_close_callback) {
      m_close_callback();
      $m_wrap.style.display = 'none';
      m_close_callback = '';
    }
  }); // オープントグル

  $m_toggle_open.forEach((obj, i) => {
    obj.addEventListener('click', () => {
      const target = obj.getAttribute('data-modal');
      modal_open(target);
      return false;
    }, false);
  }); // クローズトグル

  const closeBtnEnable = () => {
    $m_toggle_close.forEach((obj, i) => {
      obj.addEventListener('click', modal_close, false);
    });
  }; // モーダルオープン


  const modal_open = modal_name => {
    $html.classList.add('modal_open');
    $m_wrap.style.display = 'flex';
    const $current_modal = document.querySelector('.' + modal_name);
    const $new_modal = $current_modal.cloneNode(true);
    const $new_modal_toggle = $new_modal.querySelectorAll('.js-modal-close');
    $new_modal_toggle.forEach((obj, i) => {
      obj.addEventListener('click', modal_close, false);
    });
    $m_container.textContent = '';
    $m_container.appendChild($new_modal);
    ol_open(() => {
      $m_wrap.classList.add('open');
    });
  }; // モーダルクローズ


  const modal_close = () => {
    m_close_callback = ol_close;
    $m_wrap.classList.remove('open');
  }; // /* --------------------
  // Navigation
  // -------------------- */

  /*  ``````````````````````````````
  
    <!-- トグル -->
    <div class="menu-trigger">
      <span class="js-menu-trigger">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
  
    <!-- メニュー -->
    <nav class="l-header_gnavi gnavi js-globalnav">
      <ul class="gnavi-menu">
        <li class="gnavi-menu_item"><a href="#">MENU01</a></li>
      </ul>
    </nav>
  
  ``````````````````````````````  */


  const $menus = document.querySelector('.js-globalnav');
  const $toggle = document.querySelector('.js-menu-trigger');

  const setNav = () => {
    toggleSet();
  };

  const destNav = () => {
    $toggle.removeEventListener('click', openNav);
    $menus.classList.remove('open');
    $toggle.parentNode.classList.remove('active', 'active--back');
    unlockScreen();
  };

  const openNav = () => {
    $menus.classList.add('open');
    lockScreen();
    toggleSetClose();
  };

  const closeNav = () => {
    $menus.classList.remove('open');
    unlockScreen();
    toggleSet();
  };

  const toggleSet = () => {
    console.log('HOHOHOH');
    $toggle.removeEventListener('click', closeNav);
    $toggle.parentNode.classList.remove('active', 'active--back');
    $toggle.addEventListener('click', openNav);
  };

  const toggleSetClose = () => {
    $toggle.removeEventListener('click', openNav);
    $toggle.parentNode.classList.add('active');
    $toggle.parentNode.classList.remove('active--back');
    $toggle.addEventListener('click', closeNav);
  }; // /* --------------------
  // One View Scroll
  // -------------------- */

  /*  ``````````````````````````````
  
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
      <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
  
      <!-- スライダー -->
      <div class="swiper-oneview">
  
        <!-- slide -->
        <div class="swiper-wrapper">
          <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/800/?random);"></span></div>
          <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/840/?random);"></span></div>
          <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/900/?random);"></span></div>
        </div>
  
        <!-- pagination -->
        <div class="swiper-pagination"></div>
  
        <!-- scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
  ``````````````````````````````  */


  var oneview_swiper = new Swiper(".swiper-oneview", {
    direction: "vertical",
    autoHeight: true,
    mousewheel: true,
    scrollbar: {
      el: ".swiper-scrollbar"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  /* ----------------------------------------
  // Overlay
  ---------------------------------------- */

  let ol_callback = '';
  const $ol = document.createElement('div');
  $ol.className = 'overlay';
  $ol.addEventListener('animationend', () => {
    if (ol_callback) ol_callback();
  });
  $body.appendChild($ol);

  const ol_open = fn => {
    ol_callback = fn;
    lockScreen();
    $ol.classList.add('is_show');
  };

  function ol_close(callback) {
    $html.classList.remove('modal_open');
    $ol.classList.remove('is_show');
    unlockScreen();
  } // /* --------------------
  // ResponsiveImage
  // -------------------- */


  var view;

  const watchView = () => {
    const wid = $(window).width();

    if (wid <= 767) {
      if (view == "sp") return;
      view = "sp";
      imgChange();
    } else {
      if (view == "pc") return;
      view = "pc";
      imgChange();
    }
  };

  const imgChange = () => {
    let current_path;
    let change_path;

    switch (view) {
      case "sp":
        current_path = "_pc";
        change_path = "_sp";
        break;

      case "pc":
        current_path = "_sp";
        change_path = "_pc";
        break;
    }

    let $res_obj = document.querySelectorAll('.img_res');
    $res_obj.forEach((obj, i) => {
      const file_name = obj.getAttribute('src').replace(current_path, change_path);
      obj.setAttribute();
    });
  };

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
  }); // /* --------------------
  // Slider
  // -------------------- */

  /*  ``````````````````````````````
  
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
      <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
  
      <!-- スライダー -->
      <div class="swiper-container">
  
        <!-- slide -->
        <div class="swiper-wrapper">
          <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/800/?random);"></span></div>
          <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/840/?random);"></span></div>
          <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/900/?random);"></span></div>
        </div>
  
        <!-- pagination -->
        <div class="swiper-pagination"></div>
  
        <!-- navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
  
      ``````````````````````````````  */

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    // vertical : horizontal
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  }); // /* --------------------
  // Spy
  // -------------------- */

  /*  ``````````````````````````````
  
    <div class="spy">
      <a href="#" class="spy_obj js-spy_obj store">spy</a>
    </div>
  
    ``````````````````````````````  */

  const $el_spy = document.querySelector('.js-spy_obj');
  let header_h;
  let footer_h; // 現れるタイミング

  const setTopToggle = function () {
    const scrl_t = document.documentElement.scrollTop || document.body.scrollTop;
    header_h = $header.offsetHeight;
    footer_h = $footer.offsetHeight; // ページ最上部かどうか

    if (scrl_t < 100) {
      hideTopToggle(); // if (getOffsetTop($footer) - header_h - 100 < document.body.clientHeight + 100) {
      //   showTopToggle();
      // } else {
      //   hideTopToggle();
      // }
      // ページ最下部かどうか
    } else {
      const scrollHeight = document.body.clientHeight;
      const scrollPosition = window.innerHeight + scrl_t;
      const footHeight = $footer.offsetHeight - $el_spy.offsetHeight;

      if (scrollHeight - scrollPosition <= footHeight) {
        storeTopToggle();
      } else {
        showTopToggle();
      }
    }

    ;
  }; // スクロールトップ


  const hideTopToggle = function () {
    $el_spy.classList.add('spy_hide');
    $header.classList.remove('min');
  }; // スクロールボトム


  const storeTopToggle = function () {
    $el_spy.classList.add('store');
  }; // スクロール中


  const showTopToggle = function () {
    $el_spy.classList.remove('store');
    $el_spy.classList.remove('spy_hide');
    $header.classList.add('min');
  };

  window.addEventListener('scroll', setTopToggle);
  setTopToggle();
  const mql = window.matchMedia('screen and (min-width: 1024px)');
  mql.addListener(checkBreakPoint);
  checkBreakPoint(mql);
});