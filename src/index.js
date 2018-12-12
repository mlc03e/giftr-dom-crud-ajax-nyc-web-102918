document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)
  //Hello Meghan
  const giftList = document.querySelector('.gift-list')
  const form = document.querySelector('#new-gift-form')
    form.addEventListener('submit', function () {
      event.preventDefault()

      const newGift = event.target.querySelector('#gift-name-input').value
      const newImg = event.target.querySelector('#gift-image-input').value
      const newLiTag = document.createElement('li')
      newLiTag.textContent = newGift
      newLiTag.urlContent = newImg
      giftList.appendChild(newLiTag)
    })
//   const form = document.querySelector('.ui.icon.input')
//   form.addEventListener('keypress', function (event) {
//     var key = event.which || event.keyCode;
//     if (key === 13) {} // 13 is enter apparently // code for enter
//   console.log(event.target)
//   const input = document.querySelector('#filter-input').value
//   console.log(input)
// })
})
