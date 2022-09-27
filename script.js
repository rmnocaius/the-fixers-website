// var glide = new Glide('.glide', {
//     type: 'carousel',
//     perView: 3,
//     focusAt: 'center',
// })

// glide.mount()

// const [red, green, blue] = [249, 82, 4];
// const section = document.querySelector('nav');

// window.addEventListener("scroll", () => {
//     var y = 1 + (window.scrollY || window.pageYOffset);
//     y = y < 1 ? 1 : y
//     const [r,g,b] = [red + y, green + y, blue + y].map(Math.round);
//     section.style.backgroundColor = `rgb(${r},${g},${b})`
// })

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY || window.pageYOffset > 600)
        nav.style.backgroundColor = 'rgba(0, 0, 0, .50)'
    else nav.style.backgroundColor = 'transparent'
})