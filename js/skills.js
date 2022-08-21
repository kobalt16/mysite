const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
    card.addEventListener('mouseover', startRotate);
    card.addEventListener('mouseout', stopRotate);
}

function startRotate() {
    const cardItem = this.querySelector('.card-item');
    // cardItem.innerText = 'x:' + event.offsetX + ' y:' + event.offsetY;
    const halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 5 +'deg) rotateY(' +(event.offsetX - halfHeight) / 5 + 'deg)';
                                
}
function stopRotate() {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotateX(0)';
}
