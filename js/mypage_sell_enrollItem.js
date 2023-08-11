document.addEventListener("DOMContentLoaded", function() {
  setCategory();
});

function setCategory(){
  var bigCategorySelect = document.getElementById("item-big-category");
    var smallCategorySelect = document.getElementById("item-small-category");
    
    // bigCategorySelect의 변경에 따라 smallCategorySelect 옵션을 설정하는 함수
    bigCategorySelect.addEventListener("change", function() {
      var selectedValue = bigCategorySelect.value;
      smallCategorySelect.innerHTML = ""; // 기존 옵션 제거
      
      if (selectedValue === "농산물") {
        populateSmallCategory(["과일", "채소", "버섯","곡물","건농산물"]);
      } else if (selectedValue === "축산물") {
        populateSmallCategory(["소", "돼지", "닭/오리/알류","육가공륙"]);
      }else if (selectedValue === "수산물") {
        populateSmallCategory(["생선류", "건어물", "김/해조류","해산물/어패류","수산가공물"]);
      }else if (selectedValue === "가공식품") {
        populateSmallCategory(["앙념류", "반찬류", "유제품"]);
      }
      // 추가할 다른 카테고리들에 대한 조건문을 여기에 작성할 수 있습니다.
    });
    
    function populateSmallCategory(categories) {
      categories.forEach(function(category) {
        var option = document.createElement("option");
        option.value = category;
        option.text = category;
        smallCategorySelect.appendChild(option);
      });
    }
}

function loadFile(event){
    console.log("file load");
    var reader = new FileReader();
    reader.onload = function(event){
      var img = document.createElement("img");
      img.setAttribute("src",event.target.result);
      img.style.width = "10rem"; // 이미지의 가로 크기를 100px로 설정
      img.style.height = "10rem"; // 이미지의 세로 크기를 100px로 설정
      var image_container = document.getElementById("image-container");
      image_container.innerHTML = ''
      image_container.appendChild(img);
    }
    reader.readAsDataURL(event.target.files[0]);
  
  }

  function submit(){
    var productName = document.getElementById('item-name').value;
    var smallCategory = document.getElementById('item-small-category').value;
    var price = document.getElementById('item-price').value;
    var quantity = document.getElementById('item-amount').value;
    var intro = document.getElementById('item-introduce').value;

    const fileInput = document.getElementById("item-image")

    const itemRequest = {
        'productName': productName,
        'price' : price,
        'quantity' : quantity,
        // 'smallCategory':smallCategory,
        'intro' : intro
    }

    // const formData = newFormData();
    // formData.append(
    //     new Blob([Json.stringify(itemRequest)],{
    //         type:'application/json'
    //     })
    // );
    // const url = "http://127.0.0.1:8000";
    // const tokenn = localStorage.getItem('token');
    // var myHeaders = new Headers();
    // myHeaders.append('Authorization','Bearer'+token);
    // fetch(url{
    //     headers: myHeaders,
    //     body:formData,
    //     method: "POST"
    // })
    // .then((Response)=>Response.json())
    // .then((result)=>console.log(result))
    // .catch((error)=>{
    //     console.error(error);
    // })
    console.log("전송완료 : ",selectedItem)
  }

