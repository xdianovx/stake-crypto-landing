const navScroll = () => {
    const links = document.querySelectorAll('.sidebar__li');
const sections = document.querySelectorAll('section');
function changeLinkState() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}
changeLinkState();

window.addEventListener('scroll', changeLinkState);
const anchors = document.querySelectorAll('.sidebar__li a')
anchors.forEach(item => {
    item.classList.remove('active')
    item.addEventListener('click', (e) => {
        e.preventDefault()
        item.classList.remove('active')
        const blockID = item.getAttribute('href')
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})
}

export default navScroll