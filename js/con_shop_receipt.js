document.addEventListener("DOMContentLoaded", function() {

    var data = {
        orderId: 2,
        totalPrice : 55000,
        purchaseList : 
        {
            id: 1,
            productName: "사과",
            quantity: 3,
            price: 12000
        }
    }   

    // const url = '/members/products?page=0';
    // var myHeaders = new Headers();
    // const token = localStorage.getItem('access_token');
    // myHeaders.append('Authorization','Bearer'+token);  
    // fetch(url,{
    //     headers:myHeaders,
    //     method:"GET",
    // })
    // .then((response)=>{
    //     return response.json();
    // })
    // .then(date => {
    //     if(data.httpStatus==='OK'){
    //         data = data;
    //     } else {
    //         console.error("데이터 가져오기 실패");
    //     }
    // })
    // .catch((error)=>{
    //     console.error("오류발생",error);
    // });
    
    setPurchaseList(data);
    
});

function setPurchaseList(data){

    document.getElementById("buyer-num").textContent = data.orderId;
    document.getElementById("total-price").textContent = data.totalPrice;

    var purchaseList = data.purchaseList;
    var productName= document.getElementById("product-name");
    var quantity= document.getElementById("product-quantity");
    var price = document.getElementById("product-price");

    productName.textContent = purchaseList.productName;
    quantity.textContent = purchaseList.quantity;
    price.textContent = purchaseList.price;

}