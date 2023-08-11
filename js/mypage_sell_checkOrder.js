document.addEventListener("DOMContentLoaded", function() {
    var orders = [
        {
            orderNumber:"12345678",
            itemImages:["../images/apple.png","../images/eggs.png","../images/cabbage.png"],
            orderDate:"2023.01.01",
            orderPrice: "00000원"
        },
        {
            orderNumber:"23456789",
            itemImages:["../images/eggs.png","../images/garlic.png","../images/milk.png"],
            orderDate:"2023.02.02",
            orderPrice:"11111원"
        }
    ];
    // const url = 'http://127.0.0.1:8000/members/products?page=0';
    // const token = localStorage.getItem('token');
    // var myHeaders = new Headers();
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
    //         var orders = data.data.itemList;
    //     } else {
    //         console.error("데이터 가져오기 실패");
    //     }
    // })
    // .catch((error)=>{
    //     console.error("오류발생",error);
    // });
    
    setOrderList(orders);
    
});

function setOrderList(orders){
    var orderList= document.getElementById("order-list");
    orders.forEach(function(order){
        var orderBox = document.createElement("div");
        orderBox.classList.add("order-box");

        var leftBox = document.createElement("div");
        leftBox.classList.add("order-box-left");

        var orderNumber = document.createElement("p");
        orderNumber.classList.add("order-number");
        orderNumber.textContent = "주문번호" + order.orderNumber;

        var itemImageBox = document.createElement("div");
        itemImageBox.classList.add("item-image-box");

        order.itemImages.forEach(function(imageSrc){
            var itemImage = document.createElement("img")
            itemImage.classList.add("item-image");
            itemImage.src = imageSrc;
            itemImageBox.appendChild(itemImage);
        });
        leftBox.appendChild(orderNumber);
        leftBox.appendChild(itemImageBox);

        var rightBox = document.createElement("div");
        rightBox.classList.add("order-box-right");

        var orderDate = document.createElement("p");
        orderDate.classList.add("order-date");
        orderDate.textContent = order.orderDate;

        var orderPrice = document.createElement("p");
        orderPrice.classList.add("order-price");
        orderPrice.textContent = order.orderPrice;

        var orderDetailLink = document.createElement("a");
        orderDetailLink.href = '' // 자세히 보기에 연결된 링크

        var orderDetail = document.createElement("p");
        orderDetail.classList.add('order-detail');
        orderDetail.textContent = "자세히보기";

        orderDetailLink.appendChild(orderDetail);

        rightBox.appendChild(orderDate);
        rightBox.appendChild(orderPrice);
        rightBox.appendChild(orderDetailLink);
        
        orderBox.appendChild(leftBox);
        orderBox.appendChild(rightBox);
        orderList.appendChild(orderBox);

    });
}
