let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//download btn
document.getElementById('downloadBtn').addEventListener('click', function () {
    // Create a hidden link element
    const link = document.createElement('a');
    link.href = 'Updated CV.pdf'; // <-- Replace with your CV file path
    link.download = 'Updated CV.pdf'; // <-- Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
