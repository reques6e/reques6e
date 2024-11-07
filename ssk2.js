// Устарел
// Получаем значения из cookie
const userToken = getCookie('userToken');
const userPhoneNumber = getCookie('userPhoneNumber');
const PHPSESSID = getCookie('PHPSESSID');

// Выводим значения в консоль
console.log(`Ваш токен: ${userToken}`);
console.log(`Ваш номер телефона: ${userPhoneNumber}`);
console.log(`Ваша сессия: ${PHPSESSID}`);

// Функция для получения значения из cookie по имени
function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');
  
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }

  
  
  return ''; // Если cookie с таким именем не найден
}
