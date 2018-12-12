document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)
  //Hello Meghan

  const form = document.querySelector('.ui.icon.input')
  form.addEventListener('text', function (event) {
    event.preventDefault()
  console.log(event.target)
  const input = document.querySelector('#filter-input').value
  console.log(input)
})
})
