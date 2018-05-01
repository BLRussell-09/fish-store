// Filter fish that are "on sale"

const filterFish = () =>
{
  $('#available .fish').not('.on-sale').toggle();
};

const buttonText = () =>
{
  $('#show-sale').text((i, text) =>
  {
    let returnText = '';
    if (text === 'Show Sale Fish')
    {
      returnText = 'Show All';
    }
    else
    {
      returnText = 'Show Sale Fish';
    }
    return returnText;
  });
};

// Add fish to "Basket"

const moveToCart = (e) =>
{
  const fishCard = $(e.target).closest('.fish');
  console.log(fishCard);
  $('#snagged').append(fishCard);
};

const bindEvents = () =>
{
  $('button.add').click(moveToCart);
  $('#show-sale').click(() =>
  {
    buttonText();
    filterFish();
  });
};

module.exports = bindEvents;