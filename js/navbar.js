import {checkTokenExistence, checkUserRole} from './common/jwt_token_check.js';

const btnGoBack = document.getElementById('back-button');
const btnGoCart = document.getElementById('cart-button');
const btnGoMyPage = document.getElementById('mypage-button');

btnGoBack.addEventListener('click', () => {
  history.back();
})

btnGoCart.addEventListener('click', () => {
  if (checkTokenExistence()) {
    window.location.href = './cart.html';
  } else {
    window.location.href = './login.html';
  }
});

btnGoMyPage.addEventListener('click', () => {
  if (checkTokenExistence()) {
    if (checkUserRole() === 'seller') {
      window.location.href = './mypage_seller.html';
    } else if (checkUserRole() === 'customer') {
      window.location.href = './mypage_customer.html';
    }
  } else {
    window.location.href = './login.html';
  }
});
