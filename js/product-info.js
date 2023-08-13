let fetchData = [];
var postHeaders = new Headers();

 // prod id 받아오기

function loadProdData() {

    /* 통신용 코드 */
    // fetch(url, {
    //     // headers: myHeaders,
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         let data1 = data.data;
    //         console.log(data1);
    //         fetchData = data1;
    //     })
    //     .catch((error) => {
    //         console.error('An error occurred while loading store data:', error);
    //     });
}

// function renderProdData(data) {
//     // prod-info 섹션 요소를 가져옴
//     const prodInfoSection = document.getElementById("prod-info");

//     // 데이터를 사용하여 섹션 내부의 내용을 변경
//     const imgElement = prodInfoSection.querySelector(".prod-img");
//     imgElement.src = data.imageSrc;

//     const brandElement = prodInfoSection.querySelector(".brands");
//     brandElement.textContent = data.brandName;

//     const productNameElement = prodInfoSection.querySelector(".prod-name1");
//     productNameElement.textContent = data.productName;

//     const addressElement = prodInfoSection.querySelector(".address");
//     addressElement.textContent = data.address;

//     const priceElement = prodInfoSection.querySelector(".price");
//     priceElement.textContent = data.price;
// }

function decreaseQuantity() {
    const quantityInput = document.querySelector(".quantity-input");
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function increaseQuantity() {
    const quantityInput = document.querySelector(".quantity-input");
    const currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
}

function buy_postFormData() {
    const buyButton = document.querySelector(".buy-btn");
    const quantityInput = document.querySelector(".quantity-input");
    
    var formData = {
        id: fetchData.id,
        quantity: quantityInput.value
    };

    console.log(formData);

    /* 통신용 코드 */
    // fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error("구매 요청이 실패하였습니다.");
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log("구매 요청이 성공적으로 전송되었습니다.", data);
    // })
    // .catch(error => {
    //     console.error(error);
    // });        
}

function cart_postFormData() {
    const cartButton = document.querySelector(".cart-btn");
    const quantityInput = document.querySelector(".quantity-input");
    
    var formData = {
        id: fetchData.id,
        quantity: quantityInput.value
    };

    console.log(formData);
    /* 통신용 코드 */
    // fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error("구매 요청이 실패하였습니다.");
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log("구매 요청이 성공적으로 전송되었습니다.", data);
    // })
    // .catch(error => {
    //     console.error(error);
    // });
}
