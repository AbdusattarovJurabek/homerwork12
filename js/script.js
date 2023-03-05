"use strict";

const numberOfSeries = prompt("Nechta serial ko'rdingiz");


const serialDB = {
    count: numberOfSeries, series: {}, actors: {}, genders: [], private: false

}

const a = prompt("Oxirgi ko’rgan serialingiz?");
const b = prompt("Nechi baxo berasiz?");
const c = prompt("Oxirgi ko’rgan serialingiz?");
const d = prompt("Nechi baxo berasiz?");


serialDB.series[a] = b;
serialDB.series[c] = d;

console.log(serialDB);


