"use strict";

class Users {
  constructor(users) {
    this._users = users;
  }
  get users() {
    return this._users;
  }
  get allNames() {
    console.log(this.users.map(user => user.name));
    return this;
  }
  EyeColor(color) {
    console.log(this.users.filter(user => user.eyeColor === color));
    return this;
  }
  getUsersByGender(gender) {
    console.log(
      this.users.filter(user => user.gender === gender).map(user => user.name)
    );
    return this;
  }
  get inactiveUsers() {
    console.log(this.users.filter(user => !user.isActive));
    return this;
  }
  getUserByEmail(email) {
    console.log(this.users.find(user => user.email === email));
    return this;
  }
  getUsersWithAge(min, max) {
    console.log(this.users.filter(user => user.age > min && user.age < max));
    return this;
  }
  get TotalBalance() {
    console.log(
      this.users.reduce((totalBalance, user) => totalBalance + user.balance, 0)
    );
    return this;
  }
  getUsersByFriend(name) {
    const usersFilter = this.users.filter(user => {
      return user.friends.includes(name);
    });
    console.log(usersFilter.map(user => user.name));
    return this;
  }
  get uniqueSkills() {
    let arry = [];
    const skillPush = this.users.map(user =>
      user.skills.forEach(element => {
        arry.push(element);
      })
    );
    arry = arry.sort();

    const unqiue = arry.reduce((accumulator, element) => {
      if (!accumulator.includes(element)) {
        accumulator.push(element);
      }

      return accumulator;
    }, []);
    console.log(unqiue);
    return this;
  }
  get namesSortedByFriendsCount() {
    const sortByActiveDays = (a, b) => a.friends.length - b.friends.length;
    console.log(this.users.sort(sortByActiveDays).map(user => user.name));
    return this;
  }
}

const initialUsers = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27
  },
  {
    guid: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39
  }
];
const users = new Users(initialUsers);

users.allNames
  .EyeColor("blue")
  .getUsersByGender("male")
  .inactiveUsers.getUserByEmail("shereeanthony@kog.com")
  .getUserByEmail("elmahead@omatom.com")
  .getUsersWithAge(20, 30)
  .getUsersWithAge(30, 40)
  .TotalBalance.getUsersByFriend("Briana Decker")
  .getUsersByFriend("Goldie Gentry").uniqueSkills.namesSortedByFriendsCount;
