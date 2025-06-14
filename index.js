// 2 Деструктуризация

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

const users = [ { name: 'Ира', age: 20 }, { name: 'Олег', age: 30 }, { name: 'Женя', age: 25 } ]
const usersAge = users.filter(({age}) => age > 21).map(({name}) => name)
console.log(usersAge)

// 3 Call, Apply, Bind

// Есть объект user с методом sayHello. Скопируй метод в переменную и вызови его так, чтобы this остался равен user.
const userHi = {
  nameUs: 'Alex',
  age: 19,
  sayHello() { // метод
    console.log(`Привет ${this.nameUs}`)
  }
}

const copyHi = userHi.sayHello // копирую метод в переменную

copyHi.call(userHi) // вызываю метод объекта через копию

// Есть функция greet(greeting), которая выводит "greeting, меня зовут this.name". Вызови её с помощью call так, чтобы this указывал на объект person с полем name: 'Анна'.
function greet() {
  console.log(`Меня зовут ${this.name}!`)
}

const person = {
  name: 'Анна',
}

greet.call(person) // принимает аргументы как параметры

// Повтори задачу 2, но используй apply вместо call.

greet.apply(person) // принимает массив аргументов

// Создай новую функцию sayHi, которая привязана к объекту person с полем name: 'Миша'. При вызове sayHi('Привет') должно выводиться "Привет, меня зовут Миша".
function sayHi(hi) {
  console.log(`${hi}, меня зовут ${this.name}`)
}
// **
const person2 = {
  name: 'Миша',
}

sayHi.bind(person2, 'Привет')()

// Есть массив [1, 2, 3] и объект mathOps с методом sum, использующим this.reduce. Вызови метод так, чтобы он вернул сумму элементов массива, используя call.
const arr = [1, 2, 3]
const mathOps = {
  sum() {
    return this.reduce((acc, curr) => acc + curr, 0)
  }
}

console.log(mathOps.sum.call(arr))

// Почему следующий код выведет undefined? setTimeout(obj.say, 1000), если obj = { name: 'Лена', say() { console.log(this.name); } }. Исправь, чтобы выводилось "Лена".
const obj = { 
  name: 'Лена',
  say() { 
    console.log(this.name)
  }
}
setTimeout(obj.say.bind(obj), 1000)

// Есть функция introduce(age, city), выводящая "Меня зовут this.name, мне age лет, я из city". Вызови её с помощью call и apply для двух разных объектов с именами.
function introduce(age, city) {
  return `Меня зовут ${this.name}, мне ${age} лет, я из ${city}`
}

const objFirst = { name: 'Alice', }
const objSecond = { name: 'Vlad', }

console.log(introduce.call(objFirst, 25, 'Москвы'))
console.log(introduce.apply(objSecond, [20, 'Кишенёва']))

// Напиши функцию multiply(a, b). Используя bind, создай новую функцию double, которая всегда умножает на 2. Пример: double(5) должно вернуть 10.
function multiply(a, b) {
  return a * b
}

const double = multiply.bind(null, 2)
console.log(double(5))

// 4 Рекурсия

// Напиши функцию fibonacci(n), которая возвращает n-е число в последовательности Фибоначчи
function fibonacci(n) {
  if (n <= 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(5))
console.log(fibonacci(10))


// Дополнительное задание
// Сначала реализуй с рекурсией
// Затем попробуй сделать то же самое с циклом для улучшения производительности

// НЕ РЕШИЛ ЗАДАЧУ САМ НИЧЕГО НЕ ПОНИМАЮ ПРАКТИЧЕСКИ
function fibonacci2(n) {
  if (n === 0) return 0 // Обработка нулевого случая
  if (n === 1) return 1 // Обработка единичного случая
  let a = 0, b = 1; // Начальные значения последовательности
  let sum;

  for (let i = 2; i <= n; i++) { // Цикл от второго до n-го элемента
    sum = a + b // Следующее число — сумма двух предыдущих
    a = b // Смещаемся вперед: a становится предыдущим b
    b = sum // b становится новым числом последовательности
  }
  return b // После цикла b содержит n-е число Фибоначчи
}

console.log(fibonacci2(10)) // 55

// Напиши функцию, которая принимает число n и возвращает сумму всех чисел от 1 до n, используя рекурсию.
//  Пример: sumTo(5) должно вернуть 15.

function sumTo(n) {

  for (let i = 0; i < n; i++) {
    if (n === 1) { // указываю условия завершения цикла 
      return 1
    }
  }
  return n + sumTo(n - 1) // складываю 1 со значением введённом в sumTo и отнимаю 1. будет выполняться пока не достигнет условя выхода тоеть 1
}
// 1 + 2 + 3 + 4 + 5
console.log(sumTo(5))

// Напиши рекурсивную функцию factorial(n), которая возвращает факториал числа n.
//  Пример: factorial(4) должно вернуть 24.

function factorial(n) {

  for (let i = 0; i < n; i++) {
    if (n === 1) {
      return 1
    }
  }
  return n * factorial(n - 1)
}
// 1 * 2 * 3 * 4 = 24
console.log(factorial(4))

// Реализуй функцию pow(x, n), которая возвращает x в степени n, используя рекурсию.
//  Пример: pow(2, 3) должно вернуть 8.

// НЕ РЕШИЛ ЗАДАЧУ САM
function pow(x, n) {
  if (n === 0) {
    return 1 // Любое число в степени 0 равно 1
  } else if (n < 0) {
    return 1 / pow(x, -n) // Для отрицательных степеней возвращаем обратное число
  } else {
    return x * pow(x, n - 1) // Для положительных степеней: x * pow(x, n-1)
  }
}
// 2 * 2 * 2 = 8 
console.log(pow(2, 3))

// Напиши функцию reverseString(str), которая возвращает строку в обратном порядке, используя рекурсию.
// Пример: reverseString('cat') → 'tac'.

function reverseString(str) {
  if (str <= 1) return str
  return str[str.length - 1] + reverseString(str.slice(0, -1))
}

console.log(reverseString('cat'))

// Напиши рекурсивную функцию flatten, которая превращает вложенный массив в одномерный. Пример: flatten([1, [2, [3, 4]], 5]) → [1, 2, 3, 4, 5]
function flatten(arr) {
  let res = []

  for (let el of arr) {
    if (Array.isArray(el)) { // проверяю что елемент являетсь массивом
      res = res.concat(flatten(el));
    } else {
      res.push(el)
    }
  }
  
  return res
}

console.log(flatten([1, [2, [3, 4]], 5]))