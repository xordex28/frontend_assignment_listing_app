const phones = require('./phone.json');
const country = require('./country.json');
const fs = require('fs');
const keys = Object.keys(country);

let custom = {};

keys.forEach((countries) => {
    custom[countries] = {
        "name": country[countries],
        "phone": (phones[countries]) ? (phones[countries].replace('+', '')) : ''
    }
});

fs.writeFile('full.json', JSON.stringify(custom), function (err) {
  if (err) return console.log(err);
  console.log('Data > full.json');
});