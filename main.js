const btn = document.getElementById('form__btn')
const input = document.getElementById('input')
const field = document.getElementById('field')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    input.value = ''
    field.setAttribute('data-state', 'neutral')
})

input.addEventListener('focusout', (e) => {
    const email = input.value
    const checkedEmail = validateEmail(email)

    if (checkedEmail) {
        field.setAttribute('data-state', 'neutral')
    } else {
        field.setAttribute('data-state', 'error')
    }
})

function validateEmail(email) {
    const emailPattern = /\w+@[a-z]+\.[a-z]/gi

    return emailPattern.test(email)
}