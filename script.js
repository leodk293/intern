const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('tab.xlsx');

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json(worksheet);

fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2));

console.log('Conversion terminée avec succès !');




