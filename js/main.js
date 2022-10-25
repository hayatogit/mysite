// メニューアイコンの動作
// const menu = document.querySelector(".menu-icon");
// menu.addEventListener('click', function() {

// menu.classList.toggle('menu-open')
// })

class MenuOpen {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".menu-icon");
    this.DOM.global = document.querySelector('#global-container');
    this.DOM.btn.addEventListener('click', this._toggle.bind(this));
    

  }
  _toggle() {
    this.DOM.global.classList.toggle('menu-open');

  }

}
new MenuOpen();



// スクロール検知でクラス付与

document.addEventListener('DOMContentLoaded', function () {



  const inview = function (el, isIntersecting) {
      if(isIntersecting) {
          // 付与するクラスを指定
          el.classList.add('inview');
      }
  } 


  // 付与されるクラスを指定
  const io = new ScrollObserver('.appear', inview);
  const io2 = new ScrollObserver('.side', inview);
});

// ヒーロースライダー初期化処理

document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper');
  hero.start();
});



