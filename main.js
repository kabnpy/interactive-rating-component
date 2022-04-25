const state = {
  rating: 1
}

const submit_rating = document.querySelector('.js-submit')
const rating_display = document.querySelector('.rating')
const rating_buttons = [...document.querySelectorAll('input[name="rating"]')]

submit_rating.addEventListener('click', function () {
  rating_display.textContent = state.rating

  const state_container = document.querySelector('[data-state]');
  state_container.setAttribute('data-state', 1)
})

for (const item of rating_buttons) {
  item.addEventListener('change', function(event) {
    state.rating = event.target.value;
  });
}