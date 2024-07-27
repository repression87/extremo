function updateCount() {
    const maxChars = 50;
    const textInput = document.getElementById('textInput');
    const totalCount = textInput.value.length;
    const remainingCount = maxChars - totalCount;

    document.getElementById('totalCount').innerText = totalCount;
    document.getElementById('remainingCount').innerText = remainingCount;

    if (remainingCount < 0) {
        document.getElementById('remainingCount').style.color = 'red';
    } else {
        document.getElementById('remainingCount').style.color = '#FF4500';
    }
}
