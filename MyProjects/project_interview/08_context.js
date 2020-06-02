// определяем как функция была вызвана

const person = {
    surname: "Старк",
    knows: function (what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
}
const Jonh = {surname: 'Сноу'}

person.knows("Все", 'Бран')
person.knows.call(Jonh,'ничего не',"Джон")
person.knows.apply(Jonh,['ничего не',"Джон"])
const bound = person.knows.bind(Jonh,'ничего не',"Джон")()

//=======
function Person (name, age) {
    this.name = name;
    this.age = age;

    console.log(this)
}
const elena = new Person ('Elena', 20)

//======
function logThis() {
    console.log(this)
}
const obj = {num: 42}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

//===
явный и неявный способ
