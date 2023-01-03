const cheerio = require('cheerio');
const fs = require('fs');

let shows = [];
let show_count = 0;
let date;
let bands;
let venue;
const year = 2012;
const filename = year + '-Feb';
const $ = cheerio.load(fs.readFileSync('data/HTML/' + filename + '.html'));
const rows = $('.showlistings tr td', 'body');

rows.each((i, el) => {
  const td = $(el);

  if( td.hasClass('maindate') ) {
    date = td.text();
  }

  if( td.hasClass('venue') ) {
    venue = td.text().trim();
  }

  if( td.hasClass('bandlist')) {
    bands = [];

    $('b', td).each((i, el) => {
      const b = $(el);
      bands[i] = b.text();
    })

    shows[show_count] = {
      date : date,
      venue: venue,
      bands: bands
    }
    show_count++;
  }
});

console.log(shows)
fs.writeFileSync('data/JSON/' + filename + '.json', JSON.stringify(shows));