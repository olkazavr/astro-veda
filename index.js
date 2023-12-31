const items = document.querySelectorAll('.item');


items.forEach (item => {
    item.addEventListener('mouseover', () => {
    removeFocus();    
    item.classList.add('selected');

})

removeFocus = () => {
    items.forEach(item => {
        item.classList.remove('selected');
    })
}
})

const back = document.querySelector("#back");
const next = document.querySelector("#next");
const photos = ["fb1.jpg", "fb2.jpg", "fb3.jpg", "fb4.jpg", "fb5.jpg", "fb6.jpg", "fb7.jpg"];

let i = 0;
next.addEventListener('click', () => {
    i++;
    if (i > photos.length - 1) {
        i = 0;
    }
    document.querySelector("#pictures").src = photos[i];
})

back.addEventListener('click',() => {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    document.querySelector("#pictures").src = photos[i];
})
