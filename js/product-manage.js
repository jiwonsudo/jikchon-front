import { checkTokenValid, checkTokenExistence, checkUserRole } from './common/jwt_token_check.js';
let fetchData = [];
let pageNum = 0;
let urls = `products?page=${pageNum}`;

/* Header 설정 */
const token = localStorage.getItem('access_token');
var myHeaders = new Headers();
myHeaders.append('Authorization', 'Bearer ' + token);
myHeaders.append('Content-Type', 'application/json');

function loadProdManageData() {
    /* 통신용 코드 */
    if (checkTokenExistence()) {
        if (checkUserRole() === 'seller') {
            fetch(urls, {
                headers: myHeaders,
                method: 'GET'
            })
                .then((response) => response.json())
                .then((data) => {
                    let data1 = data.data;
                    fetchData = data1;
                })
                .catch((error) => {
                    console.error('An error occurred while loading store data:', error);
                });
        }
    }
}

function loadMoreItems() {
    pageNum++;
    let nextPageData = [];

    fetch(urls, {
        headers: myHeaders,
    })
        .then((response) => response.json())
        .then((data) => {
            let data1 = data.data;
            nextPageData = data1;
        })
        .catch((error) => {
            console.error('An error occurred while loading store data:', error);
        });
    renderProdManageData(nextPageData);
}

function ProdInfinityScroll() {
    const orderList = document.querySelector('.order-list');
    console.log("함수실행");

    container.addEventListener('scroll', () => {
        console.log("scroll 리스너 실행");
        const scrollHeight = orderList.scrollHeight;
        const scrollTop = orderList.scrollTop;
        const clientHeight = orderList.clientHeight;

        if (scrollHeight-scrollTop >= (clientHeight+20)) {
            console.log("무한스크롤실행");
            loadMoreItems();
        }
    });
}

let indexOfClickBtn = 0;

function renderProdManageData(data) {
    const orderList = document.getElementById('orderList');

    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'order-comp';
        listItem.id = item.id;

        const image = document.createElement('img');
        image.src = item.imageUrl;
        image.alt = '';

        const orderInfoBox = document.createElement('div');
        orderInfoBox.className = 'order-info-box';

        const orderInfo = document.createElement('div');
        orderInfo.className = 'order-info';

        const prodName = document.createElement('p');
        prodName.className = 'prod-name';
        prodName.textContent = item.productName;

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = item.price;

        const inventoryQuantity = document.createElement('p');
        inventoryQuantity.className = 'inventory-quantity';
        inventoryQuantity.textContent = '수량 ' + item.quantity;

        orderInfo.appendChild(prodName);
        orderInfo.appendChild(price);
        orderInfo.appendChild(inventoryQuantity);

        const btnBox = document.createElement('div');
        btnBox.className = 'btn-box';

        const changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn';
        changeBtn.textContent = '수정하기';
        changeBtn.addEventListener('click', () => {
            const clickedItemId = item.id; // 클릭된 버튼의 항목 ID 가져오기
            window.location.href = `../html/mypage_sell_enrollItem.html?id=${clickedItemId}`
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '삭제하기';
        deleteBtn.addEventListener('click', () => {
            const clickedItemId = item.id; // 클릭된 버튼의 항목 ID 가져오기
            deleteProduct(clickedItemId);
            listItem.remove();
        });

        btnBox.appendChild(changeBtn);
        btnBox.appendChild(deleteBtn);

        orderInfoBox.appendChild(orderInfo);
        orderInfoBox.appendChild(btnBox);

        listItem.appendChild(image);
        listItem.appendChild(orderInfoBox);

        orderList.appendChild(listItem);
    });
}

function deleteProduct(itemId) {
    let url = `/products/${itemId}`
    /* 통신용 코드 */
    fetch(url, {
        method: 'delete',
        headers: myHeaders,
    })
        .then((response) => {
            response.json()
            const deletedItem = document.getElementById(`${itemId}`);
            if (deletedItem) {
                deletedItem.remove();
            }
        })
        .catch((error) => {
            console.error('An error occurred while loading store data:', error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    ProdInfinityScroll();
});

window.onload = function main() {
    loadProdManageData();
    renderProdManageData(fetchData);
}