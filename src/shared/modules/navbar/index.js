
document.addEventListener('DOMContentLoaded', () => {

    const autorizationBtn = document.querySelector('.autorization-btn');
    const registerBack = document.querySelector('.register-background');
    const closeModalBtn = document.querySelector('.close-modal');
    const userField = document.querySelector('.user-field');
    const userName = document.querySelector('.user-name');
    const telInput = document.querySelector('.tel-input');
    const form = document.querySelector('#form');

    const searchInput = document.querySelector('.search-input');

    const products = document.querySelectorAll('.products a');

    function hideAllProducts() {
        products.forEach(product => product.classList.add('hidden'));
    }

    hideAllProducts();

    function filterProducts() {
        const searchInput = document.querySelector('.search-input').value.toLowerCase();

        hideAllProducts();

        products.forEach(product => {
            const productText = product.textContent.toLowerCase();
            if (productText.includes(searchInput) && searchInput) {
                product.classList.remove('hidden'); 
            }
        });
    }

    searchInput.addEventListener('input', filterProducts)




    class User {
        constructor(id, name, phone, img) {
            this.id = id;
            this.name = name;
            this.phone = phone;
            this.img = img;
        }
    }

    const users = [
    new User(1, 'Алексей', '+79876543210', ''),
    new User(2, 'Иван', '+79876543211', ''),
    new User(3, 'Фауст', '+79876543212', '')
];

const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

autorizationBtn.addEventListener('click', () => {
    registerBack.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    registerBack.style.display = 'none';
});

const savedNumber = localStorage.getItem('userPhoneNumber');
if (savedNumber) {
    telInput.value = savedNumber;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const phoneNumber = telInput.value.trim();


    const phonePattern = /^\+7\d{10}$/;


    if (!phonePattern.test(phoneNumber)) {
        alert('Пожалуйста, введите корректный номер телефона в формате +7XXXXXXXXXX.');
        return;
    }

    const user = users.find(u => u.phone === phoneNumber);
    if (user) {
        localStorage.setItem('userPhoneNumber', phoneNumber);

        if (!savedUsers.find(u => u.phone === phoneNumber)) {
            savedUsers.push(user);
            localStorage.setItem('users', JSON.stringify(savedUsers));
        }

        userName.textContent = user.name;


        alert(`Добро пожаловать, ${user.name}!`);

        setTimeout(() => {
            autorizationBtn.style.display = 'none';
            userField.style.display = 'flex';
        }, 500);

        registerBack.style.display = 'none';
    } else {
        alert('Пройдите регистрацию, пожалуйста!');
    }
});
});



