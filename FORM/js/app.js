let nam = document.getElementsByClassName('name')
let form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let username = document.getElementById('username').value;

    if (username[0] !== username[0].toUpperCase()) {
        alert('Birinci herf boyuk olmalidi');
    } else if (username.length < 6) {
        alert('Minimum 6 herf olsun');
    } else if (username.length > 10) {
        alert('Maximum 10 herf ola biler');
    } else {
        console.log('true');
    }

    let email = document.getElementById("email").value;

    if(!email.includes("@")) {
        alert("Emailde @ olamalidi");
    }
    let password = document.getElementById('password').value;
    if (6 < password.length < 10) {
        alert('parol minimum 6 max 10 olmalidir')
    }
})


