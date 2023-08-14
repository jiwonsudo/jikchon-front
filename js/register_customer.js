const inputName = document.getElementById('input-name');
const inputPW = document.getElementById('input-password');
const inputPWCheck = document.getElementById('input-password-check');
const inputEmail1 = document.getElementById('input-email-1');
const inputEmail2 = document.getElementById('input-email-2');
const inputPhoneNumber1 = document.getElementById('input-phone-1');
const inputPhoneNumber2 = document.getElementById('input-phone-2');
const inputPhoneNumber3 = document.getElementById('input-phone-3');
const inputZipcode = document.getElementById('input-zipcode');
const inputAddress = document.getElementById('input-address');
const inputDetailAddress = document.getElementById('input-detail-address');

const warningPW = document.getElementById('warn-password');
const warningPWCheck = document.getElementById('warn-password-check');
const warningEmail = document.getElementById('warn-email');
const warningPhoneNumber = document.getElementById('warn-phone');

const warningMSGPhoneNumber = document.getElementById('warn-msg-phone');

const btnRegister = document.getElementById('register-button');

const REGEX_PHONENUMBER = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // 앞자리가 01이며 (0,1,6,7,8,9) 이며 중간에 3~4자리, 세번째는 4자리인 전화번호
const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // 영어와 숫자를 포함한 8자리 이상의 비밀번호
const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// 빈칸 검사 함수
function checkAnyInputEmpty() {
  return inputName.value === '' || inputPW.value === '' || inputPWCheck.value === '' || inputEmail1.value === '' || inputEmail2.value === '' || inputPhoneNumber1.value === '' || inputPhoneNumber2.value === '' || inputPhoneNumber3.value === '' || inputZipcode.value === '' || inputAddress.value === '' || inputDetailAddress.value === '';
}

// 이메일 중복 검사 함수
function checkEmailValid() {
  const email = inputEmail1.value + '@' + inputEmail2.value;
  // 이메일 유효성 검사
  if (!REGEX_EMAIL.test(email)) {
    warningEmail.classList.add('show');
  } else {
    warningEmail.classList.remove('show');
  }
}

// 전화번호 유효성 검사 함수
function checkPhoneNumberValid() {
  const phoneNumber = inputPhoneNumber1.value + inputPhoneNumber2.value + inputPhoneNumber3.value;
  // 전화번호 유효성 검사
  if (!REGEX_PHONENUMBER.test(phoneNumber)) {
    warningPhoneNumber.classList.add('show');
    warningMSGPhoneNumber.innerText = '올바른 전화번호 형식인지 확인해 주세요.';
  } else {
    warningPhoneNumber.classList.remove('show');
  }
}

// 전화번호 중복 검사 함수
function checkPhoneNumberNotDuplicated() {
  const phoneNumber = inputPhoneNumber1.value + inputPhoneNumber2.value + inputPhoneNumber3.value;
  // 전화번호 중복 검사
  fetch('/members/phone-number', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phoneNumber: phoneNumber,
    }),
  })
  .then(response => response.json())
  .then(response => {
    if (response.status === 200) {
      warningPhoneNumber.classList.remove('show');
    } else if (response.status === 40002) {
      warningPhoneNumber.classList.add('show');
      warningMSGPhoneNumber.innerText = '이미 가입된 전화번호예요.';
    }
  });
}


inputPW.onblur = () => {
  // 비밀번호 유효성 검사
  if (!REGEX_PASSWORD.test(inputPW.value)) {
    warningPW.classList.add('show');
  } else {
    warningPW.classList.remove('show');
  }
};

inputPWCheck.onblur = () => {
  // 비밀번호-비밀번호 확인란 일치 검사
  if (inputPW.value !== inputPWCheck.value) {
    warningPWCheck.classList.add('show');
  } else {
    warningPWCheck.classList.remove('show');
  }
}

inputEmail1.onblur = checkEmailValid;
inputEmail2.onblur = checkEmailValid;

inputPhoneNumber1.onblur = checkPhoneNumberValid;
inputPhoneNumber2.onblur = checkPhoneNumberValid;
inputPhoneNumber3.onblur = checkPhoneNumberValid;

btnRegister.addEventListener('click', () => {
  if (checkAnyInputEmpty()) {
    window.alert('빈칸을 모두 입력해 주세요.');
  } else if (warningPW.classList.contains('show')) {
    window.alert('비밀번호를 올바르게 입력해 주세요.');
  } else if (warningPWCheck.classList.contains('show')) {
    window.alert('비밀번호가 일치하지 않습니다.');
  } else if (warningEmail.classList.contains('show')) {
    window.alert('이메일을 올바르게 입력해 주세요.');
  } else if (warningPhoneNumber.classList.contains('show')) {
    window.alert('전화번호를 올바르게 입력해 주세요.');
  } else {
    const email = inputEmail1.value + '@' + inputEmail2.value;
    const phoneNumber = inputPhoneNumber1.value + inputPhoneNumber2.value + inputPhoneNumber3.value;
    fetch('/members/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "phoneNumber": phoneNumber,
        "password": inputPW.value,
        "userName": inputName.value,
        "zipcode": inputZipcode.value,
        "address": inputAddress.value + ' ' + inputDetailAddress.value,
      }),
    })
    .then(response => response.json())
    .then(response => {
      if (response.status === 200) {
        window.alert('회원가입에 성공하였습니다.');
        window.location.href = '/login.html';
      } else {
        window.alert(`${response.status}: 회원가입에 실패하였습니다.`);
      }
    });
  }
});
