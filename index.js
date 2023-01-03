const cheerio = require('cheerio');
const fs = require('fs');

let shows = [];
let show_count = 0;
let date;
let bands;
let venue;

const year = 2008;
const filename = year + '-Oct';
const $ = cheerio.load(fs.readFileSync('data/HTML/' + filename + '.html'));
const rows = $('table tr', 'body');

rows.each((i, row) => {
  const tds = $(row).find('td');
  // console.log(tds.length)
  if(tds.length < 1) return; //skip the header row
  date  = $(tds[2]).text().trim() + ', ' + year;
  venue = $(tds[3]).text().trim();
  bands = $(tds[5]).text().split(',');
  bands = bands.map(band => band.trim()); //trim the leading spaces

  shows[show_count] = {
    date  : date,
    venue : venue,
    bands : bands
  }
  show_count++;
});


console.log(JSON.stringify(shows))
fs.writeFileSync('data/JSON/' + filename + '.json', JSON.stringify(shows));