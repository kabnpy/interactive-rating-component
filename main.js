const state = {
  rating: 0
}

const submit_rating = document.querySelector('.js-submit')
const rating_display = document.querySelector('.rating')
const rating_buttons = [...document.querySelectorAll('.rating-button')]

submit_rating.addEventListener('click', function () {
  rating_display.textContent = state.rating

  const state_container = document.querySelector('[data-state]');
  state_container.setAttribute('data-state', 1)
})

for (const item of rating_buttons) {
  item.addEventListener('click', updateRating);
}

function updateRating(event) {
  if (state.rating === (rating_buttons.indexOf(event.target) + 1)) {
    state.rating = 0;
  }
  else {
    state.rating = rating_buttons.indexOf(event.target) + 1
  }
  for (const item of rating_buttons) {
    if (item === event.target) {
      item.classList.toggle('selected')
      continue
    }
    item.classList.remove('selected')
  }
}