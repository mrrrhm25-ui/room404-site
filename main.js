// ==========================================
// ファーストビューのスライダー（Swiper）設定
// ==========================================
const swiper = new Swiper('.mySwiper', {
    loop: true, // 最後の画像の次は、最初の画像に戻る（無限ループ）
    speed: 1000, // 1秒かけてスライドする（数字を大きくするとゆっくりになります）
    
    // 自動で流れるようにする設定
    autoplay: {
      delay: 3000, // 3秒（3000ミリ秒）ごとに自動でスライド
      disableOnInteraction: false, // ユーザーが触った後も自動再生を止めない
    },
    
    // ぽっち（ページネーション）の設定
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // ぽっちをクリックして切り替えられるようにする
    },
    
    // 左右の矢印の設定
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // ==========================================
// 2つ目：カテゴリー用のスライダー設定
// ==========================================
const categorySwiper = new Swiper('.category-swiper', {
    slidesPerView: 4.5, // スマホでは3つ半（スクロールできることをアピール）見せる
    spaceBetween: 15, // 丸と丸の隙間
    
    // スクロールバーを有効にする
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true, // バーを直接ドラッグして動かせるようにする
    },
  
    // 画面の幅に応じた表示数の切り替え（ブレイクポイント）
    breakpoints: {
      // 画面幅が 768px 以上（パソコンやタブレット）の時の設定
      768: {
        slidesPerView: 5, // 5個を綺麗に並べる
        spaceBetween: 30, // 隙間を広げる
      }
    }
  });

  const fadeElements = document.querySelectorAll('.js-fade');

// 2. 画面に入ってきた時の指示を定義する
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -15% 0px', // ★画面の下から15%の位置に要素が来たら発動
  threshold: 0
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    // 要素が画面領域（判定ライン）に入ったら
    if (entry.isIntersecting) {
      // 「is-fadein」クラスを追加してアニメーションを開始！
      entry.target.classList.add('is-fadein');
      // 一度現れたら監視を終了する（スクロールのたびに消えないようにする）
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

// 3. すべての要素を見張り台（Observer）に登録する
fadeElements.forEach(el => {
  observer.observe(el);
});

// 404 SNAPS用のスライダー設定（手動スライド版）
const snapsSwiper = new Swiper('.snaps-swiper', {
  slidesPerView: 2.2, // 2.2枚見せて「横にあるよ」と気づかせる
  spaceBetween: 15,
  freeMode: true, // ★ピタッと止まらず、スワイプした勢いでスルスル動く（アナログ感UP）
  
  // ★追加：下のスライドバーの設定
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, // バーを直接つかんでドラッグ可能にする
  },
  
  breakpoints: {
    768: {
      slidesPerView: 3.5, 
      spaceBetween: 30,
    }
  }
});