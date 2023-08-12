let fetchData = [];
var myHeaders = new Headers();

function loadProdData() {
    fetch(url, {
        headers: myHeaders,
    })
        .then((response) => response.json())
        .then((data) => {
            let data1 = data.data;
            console.log(data1);
            fetchdata = data1;
        })
        .catch((error) => {
            console.error('An error occurred while loading store data:', error);
        });
}

function renderProdData(data) {
    const productList = document.getElementById("product-list");
    productsData.forEach(product => {
        const li = document.createElement("li");

        li.innerHTML = `
          <img src="${product.imageSrc}" alt="${product.productName}" class="prod-img">
          <div class="prod-info">
            <div class="product">
              <div class="brands">
                <p>${product.brandName}</p>
                <img src="../images/cart-icon.svg" class="cart-img" />
              </div>
              <div class="prod-name">
                <p>${product.productName}</p>
              </div>
            </div>
            <div class="price">${product.price}</div>
          </div>
        `;

        // li click 시 상세페이지로 이동
        li.addEventListener("click", () => {
            window.location.href = "../html/product-info.html";
        })

        productList.appendChild(li);
    })
}

function categoryFilter() {
    $('.category-details button').on('click', function (event) {
        event.preventDefault(); // 기본 동작 중지

        let selectedCategory = $(this).find('span').text();

        // 선택한 카테고리에 해당하는 데이터만 필터링
        let filteredData = fetchData.filter(function (store) {
            return store.category === selectedCategory;
        });

        renderProdData(filteredData); // 필터링된 데이터를 테이블에 출력
    });
}