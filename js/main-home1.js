let fetchdata = []; // Initialize fetchdata array
var myHeaders = new Headers();

attachMenuClickEvent();

// 추천 상품 load
function loadRecommendList() {
    console.log(token);
    // url 이후에 추가하기!!
    fetch(url, {
        headers: myHeaders,
    })
        .then((response) => response.json())
        .then((data) => {
            let data1 = data.data;
            console.log(data1);
            fetchdata = data1;
            renderTable(data1);
        })
        .catch((error) => {
            console.error('An error occurred while loading store data:', error);
        });
}

// 추천 상품 render
function renderRecommendList(products) {
    const productList = document.getElementById("product-list");
    // 데이터를 기반으로 제품 목록을 생성
    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${product.imgUrl}" alt="${product.productName}" class="prod-img">
            <div class="prod-info">
                <div class="product">
                    <div class="brands">
                        <p>${product.brand}</p>
                        <img src="../images/cart_icon.svg" class="cart-img" />
                    </div>
                    <div class="prod-name"><p>${product.productName}</p></div>
                </div>
                <div class="price">${product.price}</div>
            </div>
        `;
        productList.appendChild(li);
    })
}

// click 시 해당 카테고리 페이지(main-home2로 이동)
function attachMenuClickEvent() {
    const categoryElems = document.querySelectorAll('.category-elem');
    let pageNum = 0;

    // 각 이미지에 클릭 이벤트 리스너를 추가
    categoryElems.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            if (index === 0) {
                console.log(0);
                // 농산물 페이지인거 main-home2.js에 넘겨주기
            }
            else if (index === 1) {
                console.log(1);
                // 축산물 페이지인거 main-home2.js에 넘겨주기
            }
            else if (index === 2) {
                console.log(2);
                // 해산물 페이지인거 main-home2.js에 넘겨주기
            }
            else if (index === 3) {
                console.log(3);
                // 가공식품 페이지인거 main-home2.js에 넘겨주기
            }
        });
        pageNum++;
    });
}




