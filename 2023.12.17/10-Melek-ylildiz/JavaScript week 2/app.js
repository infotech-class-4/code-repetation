console.log('Hello World');
//function
// f(x)=2x+1
// f(3)=?
function myFunc(x) {
   return 2 * x + 1
}
var result = myFunc(3)
console.log(result)

//*isim birleştirme
function myFunc1(name, surname){
   return name + ' ' + surname
}
var result1 = myFunc1('Ali', 'Veli');
console.log(result1)



//object
 var myObject ={
    firstName: 'Melek',
    lastName: 'Yildiz',
    age: '20',
 }

 console.log(myObject);
 console.log(myObject.age);



//array
var fruits =['apple', 'banana', 'strawberry']

console.log(fruits)

//toString
console.log(fruits.toLocaleString());

//join
console.log(fruits.join(' '))

//push
var resultPush = fruits.push('Kiwi')

console.log(fruits)
console.log(resultPush)

//shift()
var fruits =['apple', 'banana', 'strawberry']
var resultShift = fruits.shift()
console.log(resultShift)

//unShift()
var fruits =['apple', 'banana', 'strawberry']

var resultUnshift = fruits.unshift('lemon')
var resultUnshift1 = fruits.unshift('pineapple', 'melon')

console.log(resultUnshift1)
console.log(fruits)

console.clear()

//splice() 1. sayı-başlanacak sayı, 2. sayı-silinecek öge sayısı
var fruits =['apple', 'banana', 'strawberry']

fruits.splice(2,0,'pineapple','kiwi')

console.log(fruits)

fruits.splice(1,2,'melon','avocado')

console.log(fruits)

//slice
var fruits =['apple', 'banana', 'strawberry']

var resultSlice = fruits.slice(1)

console.log(resultSlice)
console.log(fruits)

console.clear()


//loop(döngüler) tekrar eden işleri yazdırmak için kullanılır
//1. for(baslangıc; kosul; degisim)
for(var i=0; i<5; i++){
   console.log(i)
}
console.clear()

for(var i=0; i<100; i++){
   console.log(i)
}
console.clear()

for(var i=100; i>=0; i--){
   console.log(i)
}
console.clear()

//2. while(kosul){
//}
var i=0;
while(i<5){
   console.log(i);
   i++;
}
var myNumber = [2, 3, 4, 5, 6, 7]

var i=0;
while(i<myNumber.legth){
   console.log(myNumber[i])
}
console.log('Devam ediyor')
console.clear()

//3. do-while döngüsü
//do{

// } while(kosul)

var i=0;
do{
   console.log(i);
   i++
} while(i<5)
console.log('--------------')



//conditions(koşul)
//1. if{
//}
var x=5
if(x>0){
   console.log(x, 'pozitif bir sayıdır')
}
console.log('devam ediyor')

var isPass = true
if(isPass === true){
   console.log('tebrikler gectiniz')
}

//2. if else
var number = 5
if(number >0){
   console.log(number,'pozitif sayıdır');
}
else{
   console.log(number, 'negatif sayıdır');
}
console.clear()

var students = [
   {(name:'Ali', not: 50)},
   {(name:'Veli', not: 90)},
   {(name:'Ahmet', not: 100)},
   {(name:'Mehmet', not: 40)},
];

for(var i = 0; i < students.length; i++) {
   if(students[i].not >= 80) {
      console.log(students[i].name, 'geçtiniz');
   }else{
      console.log(students[i].name, 'kaldınız');
   }
}