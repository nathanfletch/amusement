$(document).ready(function () {

  $('#height-form').submit(function (e) {
    e.preventDefault();
    const feet = parseInt($('#feet-input').val());
    const inches = parseInt($('#inches-input').val());
    // console.log(feet, inches)
    const height = feet * 12 + inches;

    if (height < 63) {
      $('#short').show();
      $('#everybody').show();
    } else if (height > 72) {
      $('#tall').show();
      $('#everybody').show();
    } else {
      $('#medium').show();
      $('#everybody').show();
    }


  });

});