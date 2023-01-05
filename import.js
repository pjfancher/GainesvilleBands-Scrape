const fs = require('fs');
const path = require('path');
const csv=require('csvtojson')

getCSV();

async function getCSV() {
  const fileName = './data/testing/gvb-selection.csv';
  const jsonArray=await csv().fromFile(fileName);
  console.log(jsonArray);
}