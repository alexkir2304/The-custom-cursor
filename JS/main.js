let resultX = document.querySelector('.resultX')
let resultY = document.querySelector('.resultY')
let cursor = document.querySelector('.cursor')
let lineX = document.querySelector('.lineX')
let lineY = document.querySelector('.lineY')

document.addEventListener('mousemove', function() {

    customCursor(event);

})

function customCursor(a) {
    let x = a.clientX;
    resultX.innerHTML = 'X = ' + x;
    let y = a.clientY;
    resultY.innerHTML = 'Y = ' + y;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    lineX.style.top = y + 'px';
    lineY.style.left = x + 'px';

    if (x > (document.documentElement.clientWidth - 10) || y > (document.documentElement.clientHeight) - 10) {   //'fixing' a scrollbar bug, maybe there may be a smarter solution...
                                                                                                                 // alert('hi');
        cursor.style.display = 'none';
    } else {
        cursor.style.display = 'block';
    }
}