const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_KEY = process.env.AIRTABLE_BASE_KEY;
const token = process.env.token;


var Conversation = require('hubot-conversation');
const auth = 'Bearer ' + AIRTABLE_API_KEY;
const companiesURL = "https://api.airtable.com/v0/appOH5wwqL3JpZtSr/Companies"
const dealpipelineURL = "https://api.airtable.com/v0/appOH5wwqL3JpZtSr/Deal%20Pipeline"
var Airtable = require('airtable');
var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_KEY);
var request = require('request');
const {promisify} = require("es6-promisify");
const { WebClient } = require('@slack/web-api');
const web = new WebClient(token);
const fetch = require("node-fetch");
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports = {

  // for rootys thank you function
  const response = [
        "you're welcome",
        "no problem",
        "not a problem",
        "no problem at all",
        "don’t mention it",
        "it’s no bother",
        "it’s my pleasure",
        "my pleasure",
        "it’s nothing",
        "think nothing of it",
        "no, no. thank you!",
        "sure thing"
      ];

  const thanks = new RegExp("thank(s| you) rooty", "i");

  //replaceAll function for strings
  function replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, 'g'), replace);
  }

  //posts a list of strings to airtable as people objects and adds their record ID's to the array
  function postFounderstoAirtable (founderNames){
    return founderNames.reduce(function(promise, founder){
      return promise.then(function(){
        return postFoundertoAirtable(founder).then(function(result){
          founderRecords.push(result);
        });
      });
    }, Promise.resolve());
  }

  // Creates founder object in airtable
  let postFoundertoAirtable  = (founder) => {

      return new Promise (
        (resolve,reject) => {

          base('People').create(
          {
                "Name": founder,
          }, function(err, record) {
                if (err) {
                  console.error(err);
                  return;
                }
                resolve(record.getId());
              });
        });
  };
}