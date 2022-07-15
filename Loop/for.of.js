/**
  for..of syntax
  
  for ( let variable-name of iterable) {
    code
  }

   looping; iterator

 */
   let aNumber = 10000
   let a_number = '123456789'
   
   for (let eachNumber of a_number) {
       console.log('number' , eachNumber )
   }
   // find the diff b/w single and double quote 
   let myStudents = [ 'Ezeh' , 'Kizito' , ' Mgeso' , 'Livinus', 'Ama ...']
   
   for (let eachName of myStudents) {
   
   console.log([eachName])
   let upperCase = `__${eachName.toUpperCase()}__`
   
   console.log('The upper case of', eachName, ' is ', upperCase )
   }
   
   console.log(myStudents)
   // 2. using for..of loop make an array of all the upper case names

   //let myStudents = [ 'Ezeh' , 'Kizito' , ' Mgeso' , 'Livinus', 'Ama ...']
   let nameList =[];
   for (let eachName of myStudents) {
   
   nameList.push(eachName.toUpperCase())
   let upperCase = `${eachName.toUpperCase()}`
   
   console.log('The upper case of', eachName, ' is ', upperCase )
   }
   console.log(nameList) 
   