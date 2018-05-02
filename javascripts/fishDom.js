const writeFishes = (fishes) =>
{
  let domString = '';
  fishes.forEach(element => {
    domString += `<div class="${element.onSale ? 'on-sale' : ''} fish card col-md-6 col-md-offset-3">`;
    domString += `<div class="thumbnail">`;
    domString += `<img src="${element.imageSoure}"alt="" width="40%">`;
    domString += `<div class="caption">`;
    domString += `<h3 id="thumbnail-label">${element.name}</h3>`;
    domString += `<p>$`;
    domString += `<span class="price">${element.basePrice}</span>`;
    domString += `</p>`;
    domString += `</div>`;
    domString += `<div class="caption card-footer">`;
    domString += `<button class="add btn btn-danger">Add To Basket</button>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  return domString;
};

module.exports = writeFishes;
