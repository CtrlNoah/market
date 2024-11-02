import { getProduct, getNewProducts, getBeforeProducts } from "./api.js"

const autorizationBtn = document.querySelector('.autorization-btn');
let coutCart = 0;

const registerBackground = document.querySelector('.register-background');
const cartCount = document.querySelector('.cart-count');
const userField = document.querySelector('.user-field');

const showProducts = async () => {
    try {
        const products = await getProduct();
        const newProducts = await getNewProducts();
        const boughtProducts = await getBeforeProducts();

        // Акции
        const promotionContent = document.querySelector('.promotion-content');

        const productContent = document.createElement('div');
        productContent.classList.add('product-content');


        function createProduct(element) {
            const product = document.createElement('div');
            product.classList.add('product');

            const imgContent = document.createElement('div');
            imgContent.classList.add('img-content');

            const proDuctImg = document.createElement('img');
            proDuctImg.classList.add('product-img')
            proDuctImg.src = element.img;

            const discountIcon = document.createElement('img');
            discountIcon.classList.add('discount-icon');
            discountIcon.src = element.discountIcon;

            const likeImg = document.createElement('img');
            likeImg.classList.add('like-img', 'liked');
            likeImg.src = element.like;

            imgContent.append(proDuctImg, likeImg, discountIcon);

            const payMethods = document.createElement('div');
            payMethods.classList.add('pay-methods');

            const payWithCard = document.createElement('div');
            payWithCard.classList.add('pay-with-card');

            const payCardPrice = document.createElement('p');
            payCardPrice.classList.add('pay-card-price');
            payCardPrice.textContent = element.payWithCard;

            const payCardText = document.createElement('p');
            payCardText.classList.add('pay-card-text');
            payCardText.textContent = element.payWithCardText;

            payWithCard.append(payCardPrice, payCardText);

            const payWithOutCard = document.createElement('div');
            payWithOutCard.classList.add('pay-withno-card');

            const noCardPrice = document.createElement('p');
            noCardPrice.classList.add('no-card-price');
            noCardPrice.textContent = element.noCard;

            const noCardText = document.createElement('p');
            noCardText.classList.add('no-card-text');
            noCardText.textContent = element.noCardText;
            payWithOutCard.append(noCardPrice, noCardText);
            payMethods.append(payWithCard, payWithOutCard);

            const productDescr = document.createElement('p');
            productDescr.textContent = element.productDescription;
            productDescr.classList.add('product-description');

            const starMark = document.createElement('div');
            starMark.classList.add('star-mark');

            function highlightStars(starContainer, rating) {
                const stars = starContainer.querySelectorAll('.star');
                stars.forEach((star, index) => {
                    if (index < rating) {
                        star.classList.add('star-filled');
                        star.classList.remove('star-empty');
                    } else {
                        star.classList.remove('star-filled');
                        star.classList.add('star-empty');
                    }
                });
            }

            for (let i = 0; i < 5; i++) {
                const starImg = document.createElement('img');
                starImg.src = element.star;
                starImg.dataset.rating = i + 1;
                starImg.classList.add('star', 'star-empty');

                starImg.addEventListener('click', (event) => {
                    if (userField.style.display === 'flex') {
                        const rating = event.target.dataset.rating;
                        highlightStars(starMark, rating);
                    } else {
                        registerBackground.style.display = 'flex';
                    }
                });

                starMark.append(starImg);
            }


            const buttonCart = document.createElement('button');
            buttonCart.classList.add('button-cart');
            buttonCart.textContent = element.cart;


            buttonCart.addEventListener('click', () => {
                if (userField.style.display === 'flex') {
                    ++coutCart;
                    cartCount.textContent = coutCart;
                } else {
                    registerBackground.style.display = 'flex';
                }
            })

            product.append(imgContent, payMethods, productDescr, starMark, buttonCart);
            productContent.append(product);
        }

        products.forEach(element => {
            if (element.type === 'blinchiks') {
                createProduct(element);
            }
            if (element.type === 'milk') {
                createProduct(element);
            }
            if (element.type === 'sausage') {
                createProduct(element);
            }
            if (element.type === 'sausage-boiled') {
                createProduct(element);
            }

        });

        promotionContent.append(productContent);



        // Новинки
        const newProductsContainer = document.querySelector('.new-products');

        const newProductContent = document.createElement('div');
        newProductContent.classList.add('new-product-content');


        function createNewProduct(element) {

            const product = document.createElement('div');
            product.classList.add('product');

            const imgContent = document.createElement('div');
            imgContent.classList.add('img-content');

            const proDuctImg = document.createElement('img');
            proDuctImg.classList.add('product-img')
            proDuctImg.src = element.img;

            const likeImg = document.createElement('img');
            likeImg.classList.add('like-img', 'liked');
            likeImg.src = element.like;


            imgContent.append(proDuctImg, likeImg);

            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = element.price;

            const productDescr = document.createElement('p');
            productDescr.textContent = element.productDescription;
            productDescr.classList.add('product-description');

            const starMark = document.createElement('div');
            starMark.classList.add('star-mark');

            function highlightStars(starContainer, rating) {
                const stars = starContainer.querySelectorAll('.star');
                stars.forEach((star, index) => {
                    if (index < rating) {
                        star.classList.add('star-filled');
                        star.classList.remove('star-empty');
                    } else {
                        star.classList.remove('star-filled');
                        star.classList.add('star-empty');
                    }
                });
            }

            for (let i = 0; i < 5; i++) {
                const starImg = document.createElement('img');
                starImg.src = element.star;
                starImg.dataset.rating = i + 1;
                starImg.classList.add('star', 'star-empty');


                starImg.addEventListener('click', (event) => {
                    if (userField.style.display === 'flex') {
                        const rating = event.target.dataset.rating;
                        highlightStars(starMark, rating);
                    } else {
                        registerBackground.style.display = 'flex';
                    }
                });

                starMark.append(starImg);
            }


            const buttonCart = document.createElement('button');
            buttonCart.classList.add('button-cart');
            buttonCart.textContent = element.cart;


            buttonCart.addEventListener('click', () => {
                if (userField.style.display === 'flex') {
                    ++coutCart;
                    cartCount.textContent = coutCart;
                } else {
                    registerBackground.style.display = 'flex';
                }
            })

            product.append(imgContent, price, productDescr, starMark, buttonCart);
            newProductContent.append(product);
        }

        newProducts.forEach(element => {
            if (element.type === 'combinedKZC') {
                createNewProduct(element);
            }
            if (element.type === 'combined-history') {
                createNewProduct(element);
            }
            if (element.type === 'combined-polese') {
                createNewProduct(element);
            }
            if (element.type === 'milk') {
                createNewProduct(element);
            }


        })

        newProductsContainer.append(newProductContent);

        // Покупали раньше 
        const beforeProductsContainer = document.querySelector('.bought-before-container');

        const beforeProductContent = document.createElement('div');
        beforeProductContent.classList.add('before-product-content');

        function createBoughtProduct(element) {

            const product = document.createElement('div');
            product.classList.add('product');

            const imgContent = document.createElement('div');
            imgContent.classList.add('img-content');

            const proDuctImg = document.createElement('img');
            proDuctImg.classList.add('product-img')
            proDuctImg.src = element.img;

            const likeImg = document.createElement('img');
            likeImg.classList.add('like-img', 'liked');
            likeImg.src = element.like;


            imgContent.append(proDuctImg, likeImg);

            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = element.price;

            const productDescr = document.createElement('p');
            productDescr.textContent = element.productDescription;
            productDescr.classList.add('product-description');

            const starMark = document.createElement('div');
            starMark.classList.add('star-mark');

            function highlightStars(starContainer, rating) {
                const stars = starContainer.querySelectorAll('.star');
                stars.forEach((star, index) => {
                    if (index < rating) {
                        star.classList.add('star-filled');
                        star.classList.remove('star-empty');
                    } else {
                        star.classList.remove('star-filled');
                        star.classList.add('star-empty');
                    }
                });
            }

            for (let i = 0; i < 5; i++) {
                const starImg = document.createElement('img');
                starImg.src = element.star;
                starImg.dataset.rating = i + 1;
                starImg.classList.add('star', 'star-empty');


                starImg.addEventListener('click', (event) => {
                    if (userField.style.display === 'flex') {
                        const rating = event.target.dataset.rating;
                        highlightStars(starMark, rating);
                    } else {
                        registerBackground.style.display = 'flex';
                    }
                });

                starMark.append(starImg);
            }


            const buttonCart = document.createElement('button');
            buttonCart.classList.add('button-cart');
            buttonCart.textContent = element.cart;


            buttonCart.addEventListener('click', () => {
                if (userField.style.display === 'flex') {
                    ++coutCart;
                    cartCount.textContent = coutCart;
                } else {
                    registerBackground.style.display = 'flex';
                }
            })

            product.append(imgContent, price, productDescr, starMark, buttonCart);
            beforeProductContent.append(product);
        }

        boughtProducts.forEach(element => {
            if (element.type === 'combined-before-1') {
                createBoughtProduct(element);
            }
            if (element.type === 'combined-before-2') {
                createBoughtProduct(element);
            }
            if (element.type === 'combined-before-3') {
                createBoughtProduct(element);
            }
            if (element.type === 'milk') {
                createBoughtProduct(element);
            }

        })
        beforeProductsContainer.append(beforeProductContent);

    } catch (e) {
        console.error(e)
    }
}



showProducts();
