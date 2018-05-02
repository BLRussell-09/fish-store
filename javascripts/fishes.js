const loadFishes = (iload, iFail) =>
{
  $.get('./db/fishes.json').done(iload).fail(iFail);
};

module.exports = loadFishes;
