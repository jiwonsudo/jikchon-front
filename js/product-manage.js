let fetchData = [];
var myHeaders = new Headers;



function loadProdManageData() {
    /* 통신용 코드 */
    fetch(url, {
        // headers: myHeaders,
    })
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
        changeBtn.onclick = moveChangePage; // 버튼에 이벤트 연결
    
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '삭제하기';
        deleteBtn.addEventListener('click', () => {
            const clickedItemId = item.id; // 클릭된 버튼의 항목 ID 가져오기
            deleteOrderItem(clickedItemId);
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

function moveChangePage(){
    // product id 같이 넘겨주기

    window.location.href = "../html/mypage_sell_enrollItem.html";
}

function deleteProduct(itemId){
    let url = `/products/${itemId}`
    /* 통신용 코드 */
    fetch(url, {
        // method: 'delete',
        // headers: myHeaders,
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