interface Airplane {
    numberOfEngines: number;
    isJet: string;
    maxHeight: number;
    capacity: number;
}
const boing777: Airplane = {
    numberOfEngines: 2,
    isJet: "турбовентиляторный ",
    maxHeight: 13140,
    capacity: 365,
}
const a320: Airplane = {
    numberOfEngines: 2,
    isJet: "турбовентиляторный",
    maxHeight: 12000,
    capacity: 180,
}
const l410: Airplane = {
    numberOfEngines: 2,
    isJet: "турбовинтовой",
    maxHeight: 4100,
    capacity: 19,
}
console.log(boing777);
console.log(a320);
console.log(l410);





