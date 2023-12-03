const btn = document.getElementById('form__btn')
const input = document.getElementById('input')
const field = document.getElementById('field')

const setFieldStateToDefault = () => field.setAttribute('data-state', 'neutral')
const setFieldStateToError = () => field.setAttribute('data-state', 'error')


btn.addEventListener('click', (e) => {
    e.preventDefault()

    const email = input.value
    const checkedEmail = validateEmail(email)

    if (checkedEmail) {
        window.location.href = './alert.html'
        input.value = ''
        setFieldStateToDefault()
    } else {
        setFieldStateToError()
    }
})

input.addEventListener('focusout', () => {
    const email = input.value
    const checkedEmail = validateEmail(email)

    if (checkedEmail || email == "") {
        setFieldStateToDefault()
    } else {
        setFieldStateToError()
    }
})

function validateEmail(email) {
    const emailPattern = /\w+@[a-z]+\.[a-z]/gi

    return emailPattern.test(email)
}


