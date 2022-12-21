const cheerio = require('cheerio');
const htmlparser2 = require('htmlparser2');
const fs = require('fs');

const $ = cheerio.load(fs.readFileSync('data/2002.mhtml'));
const shows = $('.showlistings', 'body');
console.log(shows.html())