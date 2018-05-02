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
  $(e.target).text('Remove from Basket').removeClass('add').removeClass('btn-danger').addClass('remove').addClass('btn-info');
};

const removeFromCart = (e) =>
{
  const fishCard = $(e.target).closest('.fish');
  $('#available').append(fishCard);
  $(e.target).text('Add to cart').removeClass('remove btn-info').addClass('add btn-danger');
};

const bindEvents = () =>
{
  $('body').on('click', '.remove', removeFromCart);
  $('body').on('click', '.add', moveToCart);
  $('#show-sale').click(() =>
  {
    buttonText();
    filterFish();
  });

};

module.exports = bindEvents;
