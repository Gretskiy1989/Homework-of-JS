let person = {
    name: 'Иван'
}

function info(phone, email) {
    alert(`Имя: ${this.name}, Тел.:${phone}, Email: ${email}`)
}

//info.bind(person, '+375445363888', 'Gretskiy1989@mail.ru')()

function bind(fn, context) {
    return fn.bind(context)
}

bind(info, person)('+375445363888', 'Gretskiy1989@mail.ru')