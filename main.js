const btn = document.querySelector('#btn');

btn.onclick = function myMove() {
    const animateBox = document.getElementById('animate_box');
    let position = 0;
    
    const interval = setInterval(frame, 5);

    function frame() {
        if (position < 250) {

            position++;
            animateBox.style.top = position + 'px';
            animateBox.style.left = position + 'px';
        } else {
            clearInterval(interval);
        }
    }

}
