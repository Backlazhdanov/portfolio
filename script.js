document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Заполните все поля!');
        return;
    }
    if (!email.includes('@')) {
        alert('Некорректный email!');
        return;
    }
    
    alert('Сообщение отправлено! (В реальности добавь backend, например, Formspree)');
    // Здесь можно добавить реальную отправку, например, через fetch к API.
});