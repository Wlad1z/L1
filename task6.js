const users = [
    {
        name: "John",
        age: 14
    },
    {
        name: "Ben",
        age: 44
    },
    {
        name: "Anna",
        age: 19
    },
    {
        name: "Jack",
        age: 32
    },
    {
        name: "Patrick",
        age: 22
    },
    {
        name: "Harry",
        age: 22
    },
    {
        name: "Ann",
        age: 8
    },
    
]

users.sort((a, b) => {
    if (a.age === b.age) {
      return a.name.localeCompare(b.name); // сортировка по алфавиту
    }
    return a.age - b.age; // сортировка по возрастанию возраста
  });
  
// console.log(users);