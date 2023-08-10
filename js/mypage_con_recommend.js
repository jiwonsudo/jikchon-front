document.addEventListener("DOMContentLoaded", function() {
    var itemImages = document.querySelectorAll(".item-image");
    var selectedItemNames = [];

    itemImages.forEach(function(itemImage) {
        itemImage.addEventListener("click", function() {
            var parentBox = itemImage.closest(".recommend-item-box");
            var itemName = itemImage.getAttribute("data-item-name");

            if (selectedItemNames.includes(itemName)) {
                selectedItemNames = selectedItemNames.filter(name => name !== itemName);
                parentBox.style.border = "none"; 
            } else {
                selectedItemNames.push(itemName);
                parentBox.style.border = "2px solid gray";
            }

            console.log("Selected Items:", selectedItemNames);
        });
    });
    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function() {
        // 서버로 보내는 로직 추가
        console.log("Sending selected items to server:", selectedItemNames);
    });
});


