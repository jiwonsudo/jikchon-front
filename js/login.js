const REGEX_PHONENUMBER = '/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/'; // 앞자리가 01이며 (0,1,6,7,8,9) 이며 중간에 3~4자리, 세번째는 4자리인 전화번호
const REGEX_PASSWORD = '' //TODO 추후 비밀번호 정규식 작성하기

const inputUserID = document.getElementById('phoneNumber');
const inputUserPW = document.getElementById('password');
const btnLogin = document.getElementById('login-button');

function login() {
  const userID = inputUserID.value;
  const userPW = inputUserPW.value;

  console.log(typeof(userID))

  if (userID === '' || userPW === '') {
    window.alert('아이디와 비밀번호를 모두 입력해 주세요.');
  } else {
    fetch('example.com/members/login', {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber: userID,
        password: userPW,
      }),
    })
    .then(response => response.json())
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem('access_token', response.data.accessToken);
        localStorage.setItem('user_role', response.data.role);
        window.alert('로그인에 성공하였습니다.');
        window.location.href = './';
      } else {
        window.alert(`${response.status}: 로그인에 실패하였습니다.`);
      }
    });
  }
}

btnLogin.addEventListener('click', login);

