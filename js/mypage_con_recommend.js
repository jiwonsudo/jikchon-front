document.addEventListener("DOMContentLoaded", function() {
    var itemImages = document.querySelectorAll(".item-image");
    var selectedItem = [];

    itemImages.forEach(function(itemImage) {
        itemImage.addEventListener("click", function() {
            var parentBox = itemImage.closest(".recommend-item-box");
            var itemName = itemImage.getAttribute("data-item-name");

            if (selectedItem.includes(itemName)) {
                selectedItem = selectedItem.filter(name => name !== itemName);
                parentBox.style.border = "none"; 
            } else {
                selectedItem.push(itemName);
                parentBox.style.border = "2px solid gray";
            }

            console.log("선택한 아이템들:", selectedItem);
        });
    });
    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function() {
        sendList(selectedItem);
    });
    
});

function sendList(selectedItem){
    const formData = newFormData();
    formData.append(
        "interestCategory",
        new Blob([Json.stringify(selectedItem)],{
            type:'application/json'
        })
    );
    const url = "/members/interest";
    var myHeaders = new Headers();
    const token = localStorage.getItem('access_token');
    myHeaders.append('Authorization','Bearer'+token);
    fetch(url,{
        headers: myHeaders,
        body:formData,
        method: "POST"
    })
    .then((Response)=>Response.json())
    .then((result)=>console.log(result))
    .catch((error)=>{
        console.error(error);
    })
    console.log("전송완료 : ",selectedItem)
}
