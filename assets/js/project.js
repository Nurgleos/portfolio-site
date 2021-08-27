// SLICK SLIDER
$('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: false,
    speed: 2000
});


// PREVIEW ITEMS
function getRandomColor() {
    let alphabet = '0123456789abcdef';
    let color = '#';

    // let test = {};
    for (let i = 0; i < 6; i++) {
        let randInt = Math.floor(Math.random() * alphabet.length);
        color += alphabet[randInt];

        // test на процентное сообношение выпадения рандомных чисел
        // if (test[randInt]) test[randInt]++;
        // else test[randInt] = 1;
    }
    // console.log(test);
    return color;
}

const prevItems = document.querySelectorAll('.preview-item');
for (let item of prevItems) {
    let randColor = getRandomColor();
    item.style.backgroundColor = randColor;
}