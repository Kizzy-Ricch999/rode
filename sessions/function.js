// Functions
// returns a value or returns void
// return value : any data type
// return void => undefined

// Types of functions
// 1. function declaration ( named functuion)

function sayHello() {
    console.log('Hello Ezeh!')
}

// invoke the function
// sayHello()

const name = 'DDDD HHHHH'

function sayDynamicName() {
    console.log(`Hello ${name}!`)
}
sayDynamicName()
// a function needs parameter when necessary
function sayDynamicWithParams(person) {
    console.log(`Hello ${person}`)
}

const person = 'ADA'

// invoke the function

// sayDynamicWithParams(person)
// sayDynamicWithParams('Ezeh ADA dhhdh')
// sayDynamicWithParams('Ezeh GGGG')

// default parameter
function defaultParams(human = 'Namo') {
    console.log(`Hello ${human}`)
}

// defaultParams()
// defaultParams('Kizito')
// defaultParams()
// defaultParams('Mgeso')

// another default
function anotherDefault(human, eyeColor = 'black') {
    console.log(`Hi ${human}, your eye is ${eyeColor}`)
}

//const human = 'Namo'

// const eyeColor = 'RED'

// anotherDefault(human)
// anotherDefault(human , 'RED')
// anotherDefault('Green')

function anotherDefaultT(firstName , middleName = 'HHH', lastName = ' Adaugo') {
    console.log(`Hi my name is ${lastName}, ${middleName} , ${firstName} you are welcome`)
}

// const firstName = 'John'

// const  middleName = 'James'

// anotherDefaultT('John' )
// anotherDefaultT('John' , 'James' )
// anotherDefaultT('John' , 'James', 'Ezeh' )

function giveMeStudentName(studentName) {
    return studentName.toUpperCase()
}

function stduentNumber() {
    console.log(234567)

    return 234567
}

function school() {

    // anotherDefaultT('Livinus')
    let _name = giveMeStudentName('Livinus')
    console.log('You are welcome,', _name, 'we on number', 2 * stduentNumber())
}

school()

// arrow function

const schoolArrowFunc = () => {
    return 3 ** 2
}
const threeSquared = schoolArrowFunc()

// console.log(threeSquared / 2 )

const square = x => x ** 2

// console.log(square(2))

const _squared = (x, y = 2) => x ** y

// console.log(_squared(2))

// function expression
const sqrt = function (number) {
    // IIF
    (() => {
        console.log('IIF')
    })()

    const x = (function () {
        return 2 * 4
    })

    console.log('XXXXX', x())

    
    return Math.sqrt(number)
}



console.log(sqrt(16))

