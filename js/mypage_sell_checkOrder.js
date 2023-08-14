document.addEventListener("DOMContentLoaded", function() {
    var orders = [
        {
            id : 1,
            productImage:"../images/apple.png",
            orderDate:"2023.01.01",
            orderPrice: "00000원",
            orderName:"프로덕트 이름",
            orderNum:"수량 0개",
            conName:"김직촌",
        },
        {
            productImage:"../images/milk.png",
            orderDate:"2023.01.01",
            orderPrice: "00000원",
            orderName:"프로덕트 이름",
            orderNum:"수량 0개",
            conName:"김직촌",
        }
    ];
    const url = '/members/products?page=0';
    var myHeaders = new Headers();
    const token = localStorage.getItem('access_token');
    myHeaders.append('Authorization','Bearer'+token);  
    fetch(url,{
        headers:myHeaders,
        method:"GET",
    })
    .then((response)=>{
        return response.json();
    })
    .then(date => {
        if(data.httpStatus==='OK'){
            var orders = data.data.itemList;
        } else {
            console.error("데이터 가져오기 실패");
        }
    })
    .catch((error)=>{
        console.error("오류발생",error);
    });
    
    setOrderList(orders);
    
});

function setOrderList(orders){
    var orderList= document.getElementById("order-list");
    orders.forEach(function(order){
        var orderBox = document.createElement("div");
        orderBox.classList.add("order-box");

        var leftBox = document.createElement("div");
        leftBox.classList.add("order-left-box");

        var leftBox2 = document.createElement('div');
        leftBox2.classList.add("order-left-box2")

        var orderDate = document.createElement("p");
        orderDate.classList.add("order-date");
        orderDate.textContent = order.orderDate;

        var leftBox1 = document.createElement('div');
        leftBox1.classList.add("order-left-box1")
        
        var itemImage = document.createElement("img");
        itemImage.classList.add("order-img");
        itemImage.src = order.productImage;

        var orderName = document.createElement("p");
        orderName.classList.add("order-name");
        orderName.textContent = order.orderName;

        var orderNum = document.createElement("p");
        orderNum.classList.add("order-num");
        orderNum.textContent = order.orderNum;

        leftBox2.appendChild(orderName);
        leftBox2.appendChild(orderNum);
        leftBox1.appendChild(itemImage);
        leftBox1.appendChild(leftBox2);
        leftBox.appendChild(orderDate);
        leftBox.appendChild(leftBox1);

        var rightBox = document.createElement("div");
        rightBox.classList.add("order-right-box");

        var conName = document.createElement("p");
        conName.classList.add("order-con-name");
        conName.textContent = "주문자명 : " + order.conName;

        var orderPrice = document.createElement("p");
        orderPrice.classList.add("order-price");
        orderPrice.textContent = order.orderPrice;

        var orderDetail = document.createElement("a");
        orderDetail.classList.add("order-detail");
        orderDetail.textContent = "자세히보기";
        orderDetail.href = '/seller/receipt/'+order.id;

        rightBox.appendChild(conName);
        rightBox.appendChild(orderPrice);
        rightBox.appendChild(orderDetail);

        orderBox.appendChild(leftBox);
        orderBox.appendChild(rightBox);
        orderList.appendChild(orderBox);

    });
}
