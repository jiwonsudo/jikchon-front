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
        // 서버로 보내는 로직 추가
        sendList(selectedItem);
    });
    
});

// function sendList(selectedItem){
//     const formData = newFormData();
//     formData.append(
//         new Blob([Json.stringify(selectedItem)],{
//             type:'application/json'
//         })
//     );
//     const url = "http://127.0.0.1:8000";
//     const tokenn = localStorage.getItem('token');
//     var myHeaders = new Headers();
//     myHeaders.append('Authorization','Bearer'+token);
//     fetch(url{
//         headers: myHeaders,
//         body:formData,
//         method: "POST"
//     })
//     .then((Response)=>Response.json())
//     .then((result)=>console.log(result))
//     .catch((error)=>{
//         console.error(error);
//     })
//     console.log("전송완료 : ",selectedItem)
// }
