let li = document.querySelector('.liElementAbout')


li.onclick = () => {
    document.querySelector('.about').scrollIntoView({behavior: "smooth"})
}

// function myFunc() {
//     let x = document.querySelector('#myMenu')
//     if (x.className === 'menu') {
//         x.className += ' responsive'
//     } else {
//         x.className = 'menu';
//     }
// }