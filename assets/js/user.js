function User(id, name, surname, age, isMale, email, isSubscribed) {
  this.id = id;
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
    i + 1,
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() < 0.5,
    `useremail${i}@gmail.com`,
    Math.random() < 0.5
  );
  users.push(user);
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
console.table(users);
// ---------------------------
console.group('Не підписані користувачі');

const notSubscribed = users.filter((u) => !u.isSubscribed);
console.table(notSubscribed);

console.groupEnd();
// ---------------------------
console.group('Список повних імен користувачів');

users.forEach((u) => {
  console.log(u.getFullName());
});

console.groupEnd();
// ---------------------------
console.group(
  'Масив повних імен осіб жіночої статі шкільного віку (6 – 18 років)'
);

const femaleNames = users
  .filter((u) => !u.isMale && u.age >= 6 && u.age <= 18)
  .map((u) => u.getFullName());
console.log('femaleNames', femaleNames);

console.groupEnd();
// ---------------------------
console.group('Масив без користувача з email  useremail5@gmail.com');

const indexToDelete = users.findIndex(
  (e) => e.email === 'useremail5@gmail.com'
);
if (indexToDelete > -1) {
  users.splice(indexToDelete, 1);
}
console.table(users);

console.groupEnd();
// ---------------------------

console.group('Зміна email користувачу з id 2');

const userToUpdate = users.find((user) => user.id === 2);
if (userToUpdate) {
  userToUpdate.email = 'test@test.test';
} else {
  console.log('Користувач з id 2 не знайдений');
}
console.table(users);

console.groupEnd();
// ---------------------------

console.group('Який відсоток користувачів підписані (subscribed): ');

const total = users.length;
const subscribedUsersCount = users.filter((u) => u.isSubscribed).length;
const percentage = (subscribedUsers / total) * 100;
console.log(
  `Який відсоток користувачів підписані (subscribed): ${percentage}%`
);

console.group('Який відсоток користувачів не підписані (subscribed): ');
const percentageNotSb = (notSubscribed.length / total) * 100;
console.log(
  `Який відсоток користувачів не підписані (subscribed): ${percentageNotSb}%`
);

console.log(`чи всі користувачі підписані`);
console.groupEnd();
// ---------------------------

console.group('Cередній вік користувачів: ');
const ageSum = users.reduce((sum, user) => sum + user.age, 0);
const avgAge = ageSum / users.length;
console.log('Cередній вік користувачів', avgAge);
console.groupEnd();

// ---------------------------
console.log('Впорядкувати користувачів за віком: ');
console.table(users.sort((a, b) => a.age - b.age));

console.log(
  'Перевірити, чи є серед користувачів користувач з email`ом useremail7@gmail.com',
  users.some((u) => u.email === 'useremail7@gmail.com')
);

console.log(
  'Перевірити, чи всі користувачі підписані',
  users.every((u) => u.isSubscribed)
);
