const card = document.querySelector('.card'),
rateings = document.querySelectorAll('.rating_box div'),
submit = document.querySelector('#submit'),
feedback = document.querySelector('.wrapper');

let isRated = false;
let rateValue = null;
rateings.forEach((rate) => {
  rate.addEventListener('click',() => {
    if(!isRated){
      rate.classList.add('selected');
      rateValue = rate.textContent;
      isRated = true;
      if(isRated && rateValue){
  submit.addEventListener('click',() => {
    card.classList.add('end');
    card.classList.remove('start');
    feedback.innerHTML = `You selected ${rateValue} out of 5`;
  })
}
    }
  })
})






