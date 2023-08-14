import { checkTokenValid, checkTokenExistence, checkUserRole } from './common/jwt_token_check.js';

let fetchdata = []; // Initialize fetchdata array
let pageNum = 0;

/* Header 설정 */
const token = localStorage.getItem('access_token');
var myHeaders  = new Headers();
myHeaders.append('Authorization', 'Bearer ' + token);
myHeaders.append('Content-Type', 'application/json');

function loadCartData() {
    let url = `/members/cart?page=${pageNum}`;
    /* 통신용 코드 */
    fetch(url, {
        headers: myHeaders,
        method: "GET"
    })
        .then(checkTokenValid(response))
        .then((response) => response.json())
        .then((data) => {
            let data1 = data.data;
            console.log(data1);
            fetchData = data1;
        })
        .catch((error) => {
            console.error('An error occurred while loading store data:', error);
        });
}


/* 통신 data로 cart rendering */
function renderCartData(data) {
    const productList = document.getElementById("cart-li");
    data.forEach(product => {
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${product.imageSrc}" alt="" class="prod-img">
            <div class="cart-component">
                <div class="row-dir-box">
                    <p class="brands">${product.brandName}</p>
                    <div class="amount-box">
                        <button class="quantity-down-btn"">-</button>
                        <input type="text" class="quantity-input" value="1">
                        <button class="quantity-up-btn"">+</button>
                    </div>
                </div>
                <p class="prod-name">${product.productName}</p>
                <p class="address">${product.address}</p>
                <p class="price">${product.price}</p>
            </div>
        `;
        cartList.appendChild(li);
    });
}


function getCartListIndex() {
    const cartList = document.getElementById("cart-li");

    cartList.addEventListener("click", function (event) {
        const clickedLi = event.target.closest("li");

        if (clickedLi) {
            // 클릭한 li 요소의 인덱스를 찾아서 사용
            liIndex = Array.from(cartList.children).indexOf(clickedLi);
        }
    });
}

function decreaseQuantity() {
    var selectComp = `cart-li li:nth-child(${liIndex + 1}) .quantity-input`

    const quantityInput = document.querySelector(selectComp);
    const currentValue = parseInt(quantityInput.value);

    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function increaseQuantity() {
    var selectComp = `cart-li li:nth-child(${liIndex + 1}) .quantity-input`

    const quantityInput = document.querySelector(selectComp);
    const currentValue = parseInt(quantityInput.value);

    quantityInput.value = currentValue + 1;
}

function payCart() {
    const cartItems = document.querySelectorAll("#cart-li li");
    var formData = [
        {
            id: fetchData.id,
            quantity: quantity
        }
    ];

    cartItems.forEach((item, index) => {
        const quantityInput = item.querySelector(".quantity-input");
        const quantityValue = quantityInput.value;

        // formData.append(`item[${index}][quantity]`, quantityValue);
        formData.append(`item[${index}][quantity]`, quantityValue);
    });
    

}

function returnMainHome() {
    const buyBtn = document.querySelector(".buy-btn");

    buyBtn.addEventListener("click", () => {        
        window.location.href = "../html/main-home1.html";
    })
}

window.onload = function main() {
    // loadCartData();
    // renderCartData();
    decreaseQuantity();
    increaseQuantity();
    returnMainHome();
    payCart();
}

