// Плавный скролл для nav
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Валидация формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }
    if (!/^[^
@]+@[^
@]+\.[^
@]+$/.test(email)) {
        alert('Введите корректный email!');
        return;
        }

    alert('Сообщение отправлено! (Для реальной отправки используй Formspree или Netlify Forms)');
    this.reset(); // Очищаем форму
});