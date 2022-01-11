document.getElementById('save').addEventListener('click', function () {
        localStorage.setItem('email', document.getElementById('email').value);
})

document.getElementById('email').value = localStorage.getItem('email')