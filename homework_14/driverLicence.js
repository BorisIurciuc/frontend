
function calcRandomValue(){
    return Math.random() - 0.3;
}

function getDriveLicence(success , failure) {
    const randomValue = calcRandomValue();
    return new Promise(function(resolve, reject) {
        if(randomValue > 0.1) {
            resolve(success(randomValue))} 
            else {
            reject(new Error (failure(randomValue)));
        }
    })
}

function success(randomValue){
    return `Успешно завершено c результатом - ${randomValue}`;
}

function failure(randomValue){
    return `Завершено c ошибкой - ${randomValue}`;
}

getDriveLicence(success, failure)
    .then((data) => console.log(data))
    .catch((e) => console.log(e.message));