let name = ["Семен", "Иван", "Петр", "Татьяна"];
let age = [18, 27, 74, 34];
console.log(name, age);

let persons = [];
for (let i = 0; i < name.length; i++) {
    persons[i] = name[i] + " " + age[i] + " лет/годов";
}
console.log(persons);

let reverse = [];
for (let i = 0; i <name.length; i++) { 
    reverse[i] = persons.pop();
}
console.log(reverse);