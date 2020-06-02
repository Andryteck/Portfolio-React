// момент когда функция имеет доступ до переменных из выщестоящего скоупа

function sayHelloTo(name) {
    const message = 'Hello ' + name;
    return function () {
        console.log(message)
    }
}

const helloToElena = sayHelloTo(name)
console.log(helloToElena)
helloToElena()

//setTimeout

const fib = [1, 2, 3, 5, 8, 13]
for (var i = 0; i < fib.length; i++) {
    setTimeout( function () {
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500 )
}
