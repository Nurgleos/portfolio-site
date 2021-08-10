// Open/close form
const btns = document.querySelectorAll('.talk-btn');
// Скорость забагована, когда нибудь поправлю
const speedAnimation = 0.8; // sec 

btns.forEach((event) => {
    let form = document.querySelector('.open-form');
    event.onclick = () => {
        form.classList.add('active', 'openAnimation');
        document.querySelector('.openAnimation').style.animationDuration = speedAnimation;
        setTimeout(() => form.classList.remove('openAnimation'), speedAnimation * 1000 - 50)
    };
});

document.querySelector('.close').onclick = () => {
    document.querySelector('.open-form').classList.add('closeAnimation');
    document.querySelector('.closeAnimation').style.animationDuration = speedAnimation;
    setTimeout(() => document.querySelector('.open-form').classList.remove('active', 'closeAnimation'), speedAnimation * 1000 - 50)

};
