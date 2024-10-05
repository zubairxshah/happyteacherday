function showMessage() {
    document.getElementById('message').style.display = 'block';
    document.getElementById('message2').style.display = 'block';
    document.getElementById('message3').style.display = 'block';
    document.getElementById('message4').style.display = 'block';
}
function blinkText() {
    const text = document.getElementById('blinkingText');
    setInterval(() => {
        text.style.visibility = (text.style.visibility === 'hidden' ? 'visible' : 'hidden');
    }, 500); 
}


window.onload = blinkText;
