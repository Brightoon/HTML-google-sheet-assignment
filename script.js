const form = document.querySelector("form")
console.log(form);

// const submitButton = document.querySelector("submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbz4LuWvz_LgzEkd7nZBvTL2Argwd39z4D4eAbqMNq3uNSeuOaib57WIhn_UaskpBfA3/exec'
form.addEventListener('submit', e => {
// submitButton.disabled = true

e.preventDefault()
let requestBody = new FormData(form)
console.log(requestBody.values);

fetch(scriptURL, { method: 'POST', body: requestBody})
.then(response => {
alert('Success!', response)
// submitButton.disabled = false
})

.catch(error => {
alert('Error!', error.message)
// submitButton.disabled = false

   }
   )
})