document.getElementById('header-container').style.backgroundColor = 'green';

let a = document.getElementsByClassName('emergency-tasks');
let b = document.getElementsByClassName('no-emergency-tasks');

a[0].style.backgroundColor = 'pink'
b[0].style.backgroundColor = 'yellow'

let c = document.querySelectorAll('.emergency-tasks h3');

c[0].style.backgroundColor = 'violet';
c[1].style.backgroundColor = 'violet';

let d = document.querySelectorAll('.no-emergency-tasks h3');

d[0].style.backgroundColor = 'black';
d[1].style.backgroundColor = 'black';

let footer = document.getElementById('footer-container');

footer.style.backgroundColor = 'green'