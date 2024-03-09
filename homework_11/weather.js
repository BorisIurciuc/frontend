const decoder = (codWeather, textWeather) => ({cod: codWeather, text: textWeather});

let codWeather = "HZ";

const objSQ = decoder(codWeather, "шквал");
const objPO = decoder(codWeather, "пыльный вихрь");
const objFC = decoder(codWeather, "торнадо");
const objBR = decoder(codWeather, "дымка (видимость от 1 до 9 км)");
const objHZ = decoder(codWeather, "мгла (видимость менее 10 км)");
const objFU = decoder(codWeather, "дым (видимость менее 10 км)");
const objDS = decoder(codWeather, "пыльная буря (видимость менее 10 км)");
const objSS = decoder(codWeather, "песчаная буря (видимость менее 10 км)");

switch (codWeather) {
    case "SQ": console.log(objSQ);
    break;
    case "PO": console.log(objPO);
    break;
    case "FC": console.log(objFC);
    break
    case "BR": console.log(objBR);
    break
    case "HZ": console.log(objHZ);
    break
    case "FU": console.log(objFU);
    break
    case "DS": console.log(objDS);
    break
    case "SS": console.log(objSS);
    break
    default: console.log("error");
}
