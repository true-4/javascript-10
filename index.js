// 2

// Задача: Вытяни имя
//  Дан объект:
//  const user = { name: 'Аня', age: 25, city: 'Москва' };
//  Твоя задача: Получи переменную name с помощью деструктуризации.

 const user = { name: 'Аня', age: 25, city: 'Москва' }
 const {name} = user
 console.log(name)

//  Задача: Переименуй переменные
//  const user = { name: 'Игорь', age: 30 };
// Твоя задача: Вытяни name и age, но назови их userName и userAge.

 const user2 = { name2: 'Игорь', age2: 30 }
 const { name2: userName, age2: userAge } = user2
console.log(userName, userAge)

// Задача: Первый и второй элемент
//  const colors = ['красный', 'синий', 'зелёный'];
// Твоя задача: Вытяни первый и второй элемент массива в переменные first и second.

const colors = ['красный', 'синий', 'зелёный']
const [first, second] = colors
console.log(first, second)

// Задача: Обмен местами
//  let a = 5;
//  let b = 10;
// Твоя задача: Поменяй местами значения переменных с помощью деструктуризации.

 let a = 5;
 let b = 10;

console.log('a =', a);
console.log('b =', b);

[a, b] = [b, a]

console.log('a =', a)
console.log('b =', b)

// Задача: Аргументы как объект
//  Напиши функцию showInfo, которая принимает объект с ключами name и age, и использует деструктуризацию прямо в параметрах функции.
//  Пример вызова: showInfo({ name: 'Катя', age: 22 });

const showInfo = ({name, age}) => {
  return `Вас зовут ${name}, Вам ${age}`
}
console.log(showInfo({ name: 'Катя', age: 22 }))

// Задача: Значения по умолчанию
// const settings = { theme: 'dark', fontSize: 14 };
// Твоя задача: Получи переменные theme, fontSize и language (по умолчанию 'ru') с помощью деструктуризации.

const settings = { theme: 'dark', fontSize: 14 }
const {theme, fontSize, language = 'ru'} = settings

console.log(theme, fontSize, language)

// Задача: Вложенная деструктуризация
//  const user = { name: 'Лена', contacts: { email: 'lena@mail.ru', phone: '123-456' } };
// Твоя задача: Получи переменную email из объекта user с помощью деструктуризации.

const user7 = { name: 'Лена', contacts: { email: 'lena@mail.ru', phone: '123-456' } }
const {contacts: {email}} = user7
console.log(email)

// Задача: Фильтрация с деструктуризацией
//  const users = [ { name: 'Ира', age: 20 }, { name: 'Олег', age: 30 }, { name: 'Женя', age: 25 } ];
// Твоя задача: Составь новый массив с именами тех, кто старше 21, используя деструктуризацию.

const users = [ { name9: 'Ира', age: 20 }, { name9: 'Олег', age: 30 }, { name9: 'Женя', age: 25 } ]
const usersAge = users.filter(({age}) => age > 21).map(({name9}) => name9)
console.log(usersAge)