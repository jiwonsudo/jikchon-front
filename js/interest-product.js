// 회원가입 api
// 로그인 api


let prodList = [
    {
        imgUrl: '../images/lemon.png',
        productName: '레몬',
        category: '과일',
        categoryNum: 101
    },
    {
        imgUrl: '../images/apple.png',
        productName: '사과',
        category: '과일',
        categoryNum: 101
    },
    {
        imgUrl: '../images/eggs.png',
        productName: '계란',
        category: '닭/오리/알류',
        categoryNum: 203
    },
    {
        imgUrl: '../images/mushroom.png',
        productName: '버섯',
        category: '버섯',
        categoryNum: 103
    },
    {
        imgUrl: '../images/milk.png',
        productName: '우유',
        category: '유제품',
        categoryNum: 403
    },
    {
        imgUrl: '../images/recommendLIst-3.jpg',
        productName: '바나나',
        category: '과일',
        categoryNum: 101
    },
    {
        imgUrl: '../images/sausages.jpg',
        productName: '소세지',
        category: '육가공류',
        categoryNum: 204
    },
    {
        imgUrl: '../images/tuna_can.jpg',
        productName: '참치캔',
        category: '수산가공물',
        categoryNum: 305
    },
    {
        imgUrl: '../images/seaweed.jpg',
        productName: '김',
        category: '김/해조류',
        categoryNum: 303
    },
    {
        imgUrl: '../images/redpepper_paste.jpg',
        productName: '고추장',
        category: '양념류',
        categoryNum: 401
    },
    {
        imgUrl: '../images/leek.png',
        productName: '파',
        category: '야채',
        categoryNum: 102
    }
];

var myHeaders = new Headers();
const token = localStorage.getItem('token');


let interestProd = {
    interestCategory: []
}

let prodStartIndex = 0;
let prodEndIndex = 9;

window.onload = function() {
    loadInterestedList();
    var teadbear = 'Bearer ' + token;        
    myHeaders.append('Authorization', 'Bearer ' + token);
};

function loadInterestedList() {
    const recommendList = document.getElementById('recommendList');

    // 처음부터 9개의 항목만 가져오기
    if (prodEndIndex > prodList.length) {
        prodEndIndex = prodList.length;
    }
    const firstNineItems = prodList.slice(prodStartIndex, prodEndIndex);

    firstNineItems.forEach(item => {
        const listItem = document.createElement('li');

        const image = document.createElement('img');
        image.src = item.imgUrl;
        image.alt = '';
        image.className = 'prod-img';

        const prodName = document.createElement('p');
        prodName.className = 'prod-name';
        prodName.textContent = item.productName;

        listItem.appendChild(image);
        listItem.appendChild(prodName);
        listItem.addEventListener('click', () => {
            const categoryName = item.category;
            const categoryNum = item.categoryNum;
            interestProd.interestCategory.push(categoryName);
            console.log('category: ' + categoryName);
            console.log('categoryNum: ' + categoryNum);
            console.log(interestProd);
        })

        recommendList.appendChild(listItem);
    });
    prodStartIndex += 9;
    prodEndIndex += 9;
}

function postInterestCategory() {
    var url;
    /* 통신용 코드 */
    // fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(interestProd)
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error("관심카테고리 선택 실패");
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log("관심카테고리 선택 성공.", data);
    // })
    // .catch(error => {
    //     console.error(error);
    // });        
}

