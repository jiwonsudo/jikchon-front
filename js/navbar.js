const btnGoBack = document.getElementById('back-button');

btnGoBack.addEventListener('click', () => {
  history.back();
})