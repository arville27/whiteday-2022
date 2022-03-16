import { generateCard, auspigirls, profileCard, generateImpressionPopup } from './utils.js';

$('#gallery-container').append(auspigirls.map((girl) => generateCard(girl)));

// Profile button kalau di click
$('.profile').on('click', (e) => {
    const id = $(e.target).attr('data-id');
    const person = auspigirls.find((girl) => girl.id === id);
    const container = $('.popup-container');
    container.empty().fadeIn(250).css({ display: 'flex' }).append(profileCard(person));
    $('.close-btn').on('click', () => container.fadeOut(250).empty());
    bodymovin.loadAnimation({
        wrapper: $('#animation-frame')[0],
        animType: 'svg',
        loop: true,
        path: 'animation/circle.json',
    });
});

// Impression button kalau di click
$('.impression').on('click', (e) => {
    const id = $(e.target).attr('data-id');
    const person = auspigirls.find((girl) => girl.id === id);
    const container = $('.popup-container');
    container.empty().fadeIn(250).css({ display: 'flex' }).append(generateImpressionPopup(person));
    $('.close-btn').on('click', () => container.fadeOut(250).empty());
});

let prev = window.pageYOffset;

$(window).on('scroll', () => {
    let current = window.scrollY;
    if (current > prev) $('#mainNav').css({ top: '-60px', transition: '0.5s' });
    else $('#mainNav').css({ top: '0', transition: '0.5s' });
    prev = current;

    const toTop = $('#scroll-to-top');
    if (window.scrollY > 300 && !toTop.hasClass('show')) {
        $('#scroll-to-top').toggleClass('show');
    } else if (window.scrollY < 300 && toTop.hasClass('show')) {
        $('#scroll-to-top').toggleClass('show');
    }

    if (window.scrollY > 650) {
        $('#mainNav').css({ 'background-color': 'black' });
    } else {
        $('#mainNav').css({ 'background-color': 'transparent' });
    }
});

bodymovin.loadAnimation({
    wrapper: $('#animation-love')[0],
    animType: 'svg',
    loop: true,
    path: 'animation/heart.json',
});

bodymovin.loadAnimation({
    wrapper: $('#animation-celebrate')[0],
    animType: 'svg',
    loop: true,
    path: 'animation/celebrate.json',
});

bodymovin.loadAnimation({
    wrapper: $('#animation-star')[0],
    animType: 'svg',
    loop: true,
    path: 'animation/star.json',
});
