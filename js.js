function validateForm() {
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let otch = document.getElementById('otch').value;
    let email = document.getElementById('email').value;
    let pswd1 = document.getElementById('pswd1').value;
    let pswd2 = document.getElementById('pswd2').value;
    let num = document.getElementById('tel').value;

    // Проверка на заполненность полей
    if (name === "" || lastname === "" || otch === "" || email === "" || pswd1 === "" || pswd2 === "") {
        alert("Пожалуйста, заполните все поля!");
        return; // Прерываем выполнение функции, если есть пустые поля
    }
    
    if(pswd1 !== pswd2){
        alert("Пароли не совпадают!");
        return;
    }

    // Проверка на корректность номера телефона
    if (num.length !== 11 || isNaN(num)) {
        alert("Введите корректный номер телефона!");
        return; // Прерываем выполнение функции, если номер некорректен
    }

    // Если все проверки пройдены, переходим на главную страницу
    alert(goIndex());
}

function goIndex() {
    window.location.href = 'index.html';
    return "Вход выполнен!";
}

const correctPassword = "1111";

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const passwordInput = document.getElementById('password').value.trim();

    if (passwordInput === correctPassword) {
        
        window.location.href = 'index2.html';
    } 
    
    else {
        alert('Неверный пароль. Попробуйте еще раз.');
    }
});