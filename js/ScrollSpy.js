const section = document.querySelectorAll('.block');
const link = document.querySelectorAll('.link-item');

window.onscroll = function() {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            link.forEach(lin => {
                lin.classList.remove('activate');
                document.querySelector('.link-item[href*='+id+']').classList.add('activate');
            })
        }
    })
}