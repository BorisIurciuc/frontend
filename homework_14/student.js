const findStudentName = "Anri";
const findStudentAge = 32;

function getStudent(name, age) {
    return new Promise(function(resolve, reject) {
        if(name === findStudentName && age === findStudentAge) {
            setInterval(() =>{
                resolve(`There is student - ${name}, ${age}`)
            }, 4000);
        } else {
            setInterval(() => {
                reject(new Error(`No such student - ${name}, ${age}`));
            }, 4000);
        }
    })
}

const student1 = getStudent("Anri", 32);
student1
    .then((data) => console.log(data))
    .catch((e) => console.log(e.message));

const student2 = getStudent("Alex", 32);
student2
    .then((data) => console.log(data))
    .catch((e) => console.log(e.message));

const student3 = getStudent("Anri", 28);
student3
    .then((data) => console.log(data))
    .catch((e) => console.log(e.message));
    

