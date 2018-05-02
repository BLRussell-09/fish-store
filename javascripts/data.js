const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const events = require('./events');
const applySale = require('./discount');

const iLoad = (data) =>
{
  console.log(data);
  $('#available').append(writeFishes(data.fishes));
  events();
  applySale();
};

const iFail = () =>
{
  console.log('Error!!');
};

const init = () =>
{
  loadFishes(iLoad, iFail);
};

module.exports = init;
