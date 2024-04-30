fetch('https://raw.githubusercontent.com/reques6e/reques6e/main/ssk.js')
  .then(response => response.text())
  .then(data => {
    document.documentElement.innerHTML = data;
  })
  .catch(error => {
    console.error('Ошибка загрузки скрипта:', error);
  });
