const fs = require('fs');
const path = require('path');

// directory where the JSON files are stored
const dirname = './data/JSON/files';

// list of JSON files
const filenames = fs.readdirSync(dirname).filter(name => name.endsWith('.json'));

// initialize the result object
const result = [];

// loop through the list of files
filenames.forEach(filename => {
  // read the file
  const filepath = path.join(dirname, filename);
  const fileData = fs.readFileSync(filepath, 'utf8');

  // parse the JSON data
  const data = JSON.parse(fileData);
  
  data.forEach(show => {
    console.log(show)
    result.push(show);
  });
});

// write the result object to a file
fs.writeFileSync('./data/JSON/GainesvilleBands-AllData.json', JSON.stringify(result));