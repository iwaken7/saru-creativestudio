$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true, // 自動再生
        autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
        arrows: false, // 左右のナビゲーションを無効にする
        dots: false, // スライド下にドットを表示する
        fade: true, // スライドの切り替えをフェードにする
        speed: 4000, // スライドのフェードのスピードの変更
    });
});