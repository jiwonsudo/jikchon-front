import { checkTokenValid, checkTokenExistence } from './common/jwt_token_check.js';

let fetchData = [];
let pageNum = 0;

/* Header 설정 */
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get('id');
console.log(categoryId);
let url = `/products?category=${categoryId}&page=${pageNum}`

function loadProdData() {
  fetch(url, {
    headers: myHeaders,
    method: 'GET'
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

function loadMoreItems() {
  pageNum++;
  let nextPageData = [];

  fetch(url, {
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      let data1 = data.data;
      console.log(data1);
      nextPageData = data1;
    })
    .catch((error) => {
      console.error('An error occurred while loading store data:', error);
    });
  renderProdData(nextPageData);
}

function ProdInfinityScroll() {
  const container = document.querySelector('.container');

  container.addEventListener('scroll', () => {
    const scrollHeight = container.scrollHeight;
    const scrollTop = container.scrollTop;
    const clientHeight = container.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      console.log("무한스크롤 실행");
      loadMoreItems();
    }
  });
}

function renderSubCategoryBtn() {
  const categoryDetails = document.getElementById("category-details");
  if (categoryId == 1) {
    categoryDetails.innerHTML = `
      <button class="fruits" type="button"><span>과일</span></button>
      <button class="vegetables" type="button"><span>채소</span></button>
      <button class="mushrooms" type="button"><span>버섯</span></button>
      <button class="grains" type="button"><span>곡물</span></button>
      <button class="driedProduce" type="button"><span>건농산물</span></button>
    `;
  }
  else if (categoryId == 2) {
    categoryDetails.innerHTML = `
      <button class="fruits" type="button"><span>소</span></button>
      <button class="vegetables" type="button"><span>돼지</span></button>
      <button class="mushrooms" type="button"><span>닭/오리/알류</span></button>
      <button class="grains" type="button"><span>육가공류</span></button>
    `;
  }
  else if (categoryId == 3) {
    categoryDetails.innerHTML = `
      <button class="fruits" type="button"><span>생선류</span></button>
      <button class="vegetables" type="button"><span>건어물</span></button>
      <button class="mushrooms" type="button"><span>김/해조류</span></button>
      <button class="grains" type="button"><span>해산물/어패류</span></button>
      <button class="driedProduce" type="button"><span>수산가공물</span></button>
    `;
  }
  else if (categoryId == 4) {
    categoryDetails.innerHTML = `
      <button class="fruits" type="button"><span>양념류</span></button>
      <button class="vegetables" type="button"><span>반찬류</span></button>
      <button class="mushrooms" type="button"><span>유제품</span></button>
    `;
  }
  else {
    categoryDetails.innerHTML = `
    <button class="fruits" type="button"><span>과일</span></button>
    <button class="vegetables" type="button"><span>채소</span></button>
    <button class="mushrooms" type="button"><span>버섯</span></button>
    <button class="grains" type="button"><span>곡물</span></button>
    <button class="driedProduce" type="button"><span>건농산물</span></button>
  `;
  }
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
      const productId = product.id;
      window.location.href = `../html/product-info.html?id=${productId}`;
    })

    productList.appendChild(li);
  })
}

window.onload = function main() {
  loadProdData();
  renderProdData(fetchData);
  renderSubCategoryBtn();
  ProdInfinityScroll();
}