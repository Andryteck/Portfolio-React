function getInput() {
    let btn = document.querySelector('.button'),
        inputTitle = document.querySelector('.input')

    btn.addEventListener('click', function () {

        if (inputTitle.value == 'google') {
            alert('Яндекс круче но это не точно')
        } else {
            alert(inputTitle.value)
        }

        let arr = [
            { name: 'aaa', age: 10 },
            { name: 'bbb', age: 11 },
            { name: 'ccc', age: 12 },
            { name: 'ddd', age: 13 }
        ];
        alert(arr[0].name);


    })
};


getInput()
function superSum(a, b) {
    return a + b;
};
alert(superSum(2, 3))

let myArray = [1, 5, 8, 1, -4];
let min = myArray[0];
let max = min;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > max) {
        max = myArray[i]

        if (myArray[i] < min) {
            min = myArray[i]
            
        }

    };
   
};

console.log(min)
console.log(max)



let a = "aaaaa"; 
let b = "bbbbb";
let c = '';
c = a;
a = b;
b = c;
console.log(a); // то что было изначально в b
console.log(b); // то что было изначально в a
