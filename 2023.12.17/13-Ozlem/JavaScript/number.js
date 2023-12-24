var num=4
var num2=4.444

console.log(typeof num);
console.log(typeof num2);


var x=3
var y=4

console.log(x+y);

var w=0.2
var c=0.1
console.log(w+c);

console.log((w*10 + c*10) /10);

//veri tabanin a string olarak kaydedip sonra number olarak almaliyiz
var myNumber=1234567;
var myString=myNumber.toString()

console.log(typeof myString);



// + operatoru ozel bir operator.hem birlestirme hem islem yapma operatorudur. number da olsa eger string icinde ise kesinlikle birlestirir.(diger operatorlerde ise string icinde olsa bile number olarak algilar ve islem yapar).number lari da toplar.
var result= 5 + myString   
console.log(result);


var x="5";
var y="10";
console.log(x+y);  // yan yana yazar.510


var x="5";
var y=10;
console.log(x+y);  // 510



//diger matematiksel operatorler


var x="5";
var y="10";
console.log(x-y);  // -5

console.log(x*y);  // 50


var x="5";
var y=10;
console.log(x*y);  // 50

console.clear()


var sayi1=10.2313

console.log(sayi1.toFixed(0));
console.log(sayi1.toFixed(1));
console.log(sayi1.toFixed(2));


//Boolean(kosul ifadeleri durumunda da false true dondurur)
// > ifadesi mesela

console.log(5>10);   //false
console.log(10>5);  //true
console.log("c">"t");   //false
  
console.clear()
//Undefined

var xx =true;

console.log(xx);  // true

var yy;
console.log(yy); //undefined


//Null  --- direkt null diye atar.  typeof u da object. sayfa yuklenirken once beklesin dersek

var bos=null;
console.log(bos);
console.log(typeof bos);


//NaN
var sayi4=5
var sayi5="ABC"


console.log(sayi4*sayi5);  //NaN