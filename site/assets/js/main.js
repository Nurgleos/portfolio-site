// Open/close form
document.querySelector('.talk-btn').onclick = (event) => {
    console.log(event);
    document.querySelector('.open-form').classList.add('active');
}

document.querySelector('.close').onclick = () => {
    document.querySelector('.open-form').classList.remove('active');

}