$(document).ready(function(){
    $('.carousel-past').slick({
    centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
    centerPadding: '5%', // センターモード時のサイドパディング。見切れるスライドの幅。’px’または’％’。
    dots: true, // ドットインジケーターの表示
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 5000, // 自動再生のスピード（ミリ秒単位）
    speed: 2000, // スライド/フェードアニメーションの速度を設定
    infinite: true // スライドのループを有効にするか
  });
});