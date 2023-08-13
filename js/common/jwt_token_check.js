let accessToken = "access_token"; // 초기 액세스 토큰
const refreshToken = "refresh_token"; // 리프레시 토큰

/** 
 * 페이지 이동 시 초기 토큰 확인 함수
 * 
 * 로컬 스토리지에 토큰이 없으면 로그인 페이지로 이동합니다.
 * valid 여부는 확인하지 않습니다.
 * 
 * @return none
 */
function checkToken() {
  if (localStorage.getItem("access_token") === null) {
    window.location.href = "../login";
  }
}

/** 
 * 토큰 유효성 검사 함수
 * 
 * 토큰의 유효성을 검사하고, 유효하지 않으면 리프레시 토큰으로 갱신합니다.
 * 
 * @param {Promise} response: fetch() 함수의 반환값
 * @returns none
*/
function checkTokenValid(response) {
  if (response.status === 401) {
    fetch('https://api.example.com/refresh', {
      method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("access_token", data.accessToken);
    });
  }
}

/**
 * 로그아웃 함수 (추후 구현 예정)
 */


// 예시 - 장바구니 조회 함수
function inquireCart() {
  fetch("https://api.example.com/cart", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`
    },
  })
  .then(checkTokenValid(response))
  .then(response => response.json())
  .then(data => {
    console.log(data); // 가져온 데이터 처리
  });
}



export default {checkToken, checkTokenValid};