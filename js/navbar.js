import jwt_token_check from "./common/jwt_token_check";

const btnGoBack = document.getElementById('back-button');
const btnGoCart = document.getElementById('cart-button');
const btnGoMyPage = document.getElementById('mypage-button');

btnGoBack.addEventListener('click', () => {
  history.back();
})

btnGoCart.addEventListener('click', () => {
  if (jwt_token_check.checkTokenExistence()) {
    window.location.href = './cart.html';
  } else {
    window.location.href = './login.html';
  }
});

btnGoMyPage.addEventListener('click', () => {
  if (jwt_token_check.checkTokenExistence()) {
    if (jwt_token_check.checkUserRole() === 'seller') {
      window.location.href = './mypage_seller.html';
    } else if (jwt_token_check.checkUserRole() === 'customer') {
      window.location.href = './mypage_customer.html';
    }
  } else {
    window.location.href = './login.html';
  }
});
