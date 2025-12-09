const emailCorrect = "amirzeroual17@gmail.com";
const passwordCorrect = "2008";
document.getElementById('sign').addEventListener('submit', (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === emailCorrect && password === passwordCorrect) {
        window.location.href = "menu.html"
    } else {
        alert("Incorrecte !!")
    }
});




 
