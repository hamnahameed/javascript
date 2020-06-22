// document.write( "<br>"+ "Task # 01 and 06 (Full Name)"+"<br>" )
// var firstName=prompt("Enter the first name")
// var lastName=prompt("Enter the last name")
// alert(firstName+lastName)
// document.write(firstName+lastName)
// var con=firstName.concat(lastName)
// alert(con)


// document.write( "<br>" +"Task # 2 (Favourite Mobile)"+"<br>")
// var mobile=prompt("Enter your favourite mobile phone model")
// var str = mobile.length;
// console.log(str)
// document.write("My favourite phone is " +" " + mobile + "<br>" + "length of string" + " " + str)


// document.write( "<br>" +"Task # 3 (Search Index)"+"<br>")
// var str= "pakistani";
// var ind= str.indexOf("n");
// document.write("string" + "= " + str + "<br>" + "index of n" + "="+ ind)



// document.write( "<br>" +"Task # 4 (search by index)"+"<br>")
// var word="Hello world";
// var ind= word.lastIndexOf("l");
// document.write("String" + "= " + word + "<br>" + "Index of l" + "="+ ind);


// document.write( "<br>" +"Task # 5 (Search 3rd Index)"+"<br>")
// var str= "Pakistani";
// var ind= str.charAt(3);
//  document.write("string" + "= " + str + "<br>" + "character at index 3" + "="+ ind)

// document.write( "<br>" +"Task # 7 (String Replcement)"+"<br>")
// var city="Hyderabad";
// var newCity=city.replace("Hyder" , "Islam");
// document.write("city" +":" + city+ "<br>" + "After replacement" + ":" + newCity);



//  document.write( "<br>" +"Task # 8 (Replce Word)"+"<br>")
// var message= (" Ali and Sami are best friends . They play cricket and football together.");
//   for (var i = 0; i < message.length; i++) { 
//        if (message.slice(i, i + 3) === "and") { 
//          message = message.slice(0, i) + "&" + message.slice(i + 3);  
//   } 
// }
//  var newMessage=message.replace(/and/g ,"&" );
// document.write(newMessage);


// document.write( "<br>" +"Task # 9 (String to number)"+"<br>")
// var num="472";
// var convert=parseInt(num);
// document.write("value" + ":" + num +"<br>" + "Type" + ":" +"string" + "<br>" + "value" + ":" + convert +"<br>" + "Type" + ":" +"number" )


// document.write( "<br>" +"Task # 10 Uppercase)"+"<br>")
// var dryFruit=prompt("Enter the dry fruit");
// var cap=dryFruit.toUpperCase()
// document.write("user input"+":"+dryFruit +"<br>" + "to uppercase"+":" + cap)


// document.write( "<br>"+"Task # 11 (String Titlecase)"+"<br>")
// var text=prompt("Enter something");
// var firstChar=text.slice(0,1)
// var otherChar=text.slice(1)
// firstChar=firstChar.toUpperCase()
// otherChar=otherChar.toLowerCase()
// document.write("user input"+":"+text +"<br>" + "Title case"+":" + firstChar+otherChar)


//  document.write( "<br>"+"Task # 12 (Remove Decimal)"+"<br>")
//  var num=35.36;
//  var convert=num.toString();
//  var floor=Math.floor(convert)
//  document.write("value" + ":" + num +"<br>" + "Result" + ":" + convert)





// document.write( "<br>"+"Task # 14 (Search item in string)"+"<br>")
// var a=prompt("Enter the item")
// var b=["applepie" ,"cookie","cake", "chips","patties"]
// uppercase=a.touppercase
// for(var i=0;  i<b.length; i++){
//     if(a[i]==b){
//         alert(a[b] +" is available")
//     }
//     else(alert(" is not available"))
    
// }





// document.write( "<br>"+"Task # 16 (String split)"+"<br>")
// var uni="University of Karachi";
// var spl=uni.split('');
// for(var i=0; i<=spl.length; i++){
//     document.write(spl[i] +"<br>");
// }






// document.write( "<br>"+"Task # 17 (Print last character)"+"<br>")
// var country="pakistan"
// var character= country.charAt(7)
// document.write("user input"+ "=" + country +"<br>" + "last character" + "=" +character)




// document.write("<br>"+ "Task # 18 (Count word in string)"+"<br>")
// var text=" the quick brown fox jumps over the lazy dog";
// var count=text.split("the").length-1
// document.write("There are " + count +" " + "occurence of word 'the'")

   
     
  



// document.write("<br>"+"MATHS METHOD" +"<br>" +  "Task # 01 (Integer operation)" +"<br>");
// var integer=3.45142;
// document.write("number" + " =" +integer +"<br>");
// var round= Math.round(integer);
// document.write("round of number" + "=" + round +"<br>")
// var floor=Math.floor(integer)
// document.write("floor  vaue" + "=" + floor +"<br>")
// var ceil=Math.ceil(integer)
// document.write("ceil  value" + "=" + ceil +"<br>")



// document.write( "<br>"+  "Task # 02 (Negative Integer)" +"<br>");
// var integer=-2.673;
// document.write("number" + " =" +integer +"<br>");
// var round= Math.round(integer);
// document.write("round of number" + "=" + round +"<br>")
// var floor=Math.floor(integer)
// document.write("floor  vaue" + "=" + floor +"<br>")
// var ceil=Math.ceil(integer)
// document.write("ceil  value" + "=" + ceil +"<br>")


// document.write( "<br>"+  "Task # 03 (Absolute Number)" +"<br>");
// var integer=-7;
// document.write("number" + " =" +integer +"<br>");
// var absolute=Math.abs(integer)
// document.write("absolute value" + " =" +absolute +"<br>");


// document.write("<br>"+   "Task # 04 (Dice Game)" +"<br>");
// var dice;
// var random=Math.random()*10
// var int =parseInt(random);
// if(int<7 && int>0){
//     dice=int;
// document.write("random value" + " =" +dice +"<br>");
// }


// document.write( "<br>"+  "Task # 05 (Toss Game)" +"<br>");
// var toss=Math.random() *2;
// var floor=Math.floor(toss);
// if(floor===1){
//     document.write(floor+"<br>" + "random coin value = Heads")
// }
// else{
//     document.write(floor+"<br>" + "random coin value = Tails")
// }




// document.write( "<br>"+  "Task # 06 (Random Numbers)" +"<br>");
// for(var i =0; i<1; i++){
// var number=Math.random() * 100;
// var int =parseInt(number);
// document.write("random number" +"=" + int)
// }


// document.write( "<br>"+  "Task # 07 ( Parse Weight)" +"<br>");
// var weight=prompt("Enter the weight in kgs")
// var int=parseFloat(weight)
// document.write("The weight of user is =" + int+"Kilograms")


// document.write(  "Task # 08" +"<br>");
// var num=prompt("Enter the number between 1-10")
// var int=7
// var secNum=Math.random() * 10+1;
//  var int =parseInt(secNum);
//  document.write(int)

// if(num===int){
//     alert("Congratulations!")

// }else{
//     alert("You lose")
// }




// document.write("<br>"+"DATE METHOD" +"<br>" +  "Task # 01 (Date Now)" +"<br>");
// var date=new Date();
// document.write(date)


// document.write( "<br>"+ "Task # 02 (Current Month)" +"<br>");
// var date=new Date();
// var str=date.toString()
// var month=str.slice(3,8)
// alert("current month" +":" + month)


// document.write( "<br>"+ "Task # 03 (Day Name)" +"<br>");
// var date=new Date();
// var str=date.toString()
// var day=str.slice(0,3)
// alert("Today is" +" " + day)


// document.write( "<br>"+ "Task # 04 (Fun Day)" +"<br>");
// var days=["mon","tue","wed","thur","fri","sat","sun"]
// var date=new Date()
// var theDay=date.getDay();
// var today=days.slice
// if(theDay===0 ||  theDay===6){
//     alert("Today is fun day")

// }else
// alert("Today is working day")









// document.write( "<br>"+ "Task # 05 (Days Check)" +"<br>");
// var date=new Date();
// document.write(date +"<br>")
// if(date.getDate<16){
//     document.write("First fifteen days of the month")
// }else{
//     document.write("Last fifteen days of the month")
// }





// document.write( "<br>"+ "Task # 07 (Noon Check)" +"<br>");
// var date=new Date()
// var time= date .getHours()
// if(time<12 || time>23){
//     document.write("It's A.M")
// }else{
//     document.write("Its P.M")
// }



// document.write("<br>"+  "Task # 13 (Birth Year)" +"<br>");
// var myDob=new Date("21 june 2000")
// var time=myDob.getTime()
// var today=new Date()
// var todayTime=today.getTime()
// var diff=todayTime-time
// var diffage=diff/(1000*60*60*24*30*12)
// var accurate=Math.floor(diffage)
// document.write("Your age is =" + accurate)
// var str=myDob.toString()
// var year= str.slice(10,15)
// document.write("<br>" +"your birth year is :" + year) 



// document.write( "<br>"+ "Task # 14 (K-Electric Bill)" +"<br>");
// var name="ABC customer"
// var date=new Date();
//  var str=date.toString()
// var month=str.slice(3,8)
// var units=410
// var charges=16
// var late=350
// var netAmount=units*charges;
// var grossAmount=netAmount+late;
// document.write("customer name=" + name + "<br>" +
//  "Month =" + month + "<br>" + "Number of units =" + units + "<br>" +
//   "Charges per unit ="  + charges+"<br>" +"Net Amount Payable (within Due Date)=" 
//   + netAmount +"<br>" +"late payment surcharge = " + late +"<br>" +
//    "Gross Amount Payable (after Due Date) =" + grossAmount)





// document.write("<br>"+"FUNCTIONS" +"<br>" +  "Task # 01 (Current Date and Time)" +"<br>");
// function date(time){
//     document.write(time)
// }
// date(new Date)


// document.write( "<br>"+"Task # 02 (Greet)" +"<br>");
// function greeting(greet){
//     alert(greet)
// }
// greeting("Welcome!");


// document.write("<br>"+ "Task # 03 (Add Two Numbers)" +"<br>");
// function sum(num1,num2){
// document.write((+num1)+(+num2))
// return a;
// }
// var a;
// var num1=prompt("Enter the first number")
// var num2=prompt("Enter the second number")
// sum(num1,num2)



// document.write( "<br>"+"Task # 4 (Caculator)" +"<br>");

// function calculator (num1,operator,num2){
// if(operator==="+"){
//     alert((+num1)+ (+num2))
// }else if(operator==="-"){
//     alert(num1-num2)
// }else if(operator==="*"){
//     alert(num1*num2)
// }else if(operator==="/"){
// alert(num1*num2)
// }else if(operator==="%"){
//     alert(num1/num2*100)
// }
// return a;
// }
// var a;

// calculator(5,"*",4)
// calculator(8,"+",2)
// calculator(7,"-",3)
// calculator(3,"/",9)
// calculator(6,"%",2)


// document.write( "<br>"+"Task # 05 (Squares The Number)" +"<br>");
// function square(a){
// alert(a*a)
// }
// square(3)


// document.write("<br>"+ "Task # 06 (Find Factorial)" +"<br>");
// function factorial(n){
//     var int = 1;
//     if (n == 0 || n == 1){
//       return int;
//     }else{
//       for(var i = n; i >= 1; i--){
//         int = int * i;
//       }
//       return int;
//     }  
//   }
//   var n = prompt("Enter the number");
//   int = factorial(n)
//   document.write("The factorial of " + n + " is " + int);
 


// document.write( "<br>"+"Task # 07 (Counting)" +"<br>");
// function counting(i){
//     for(var i=firstNum ; i<=lastNum ;i++){
//     document.write(i + "<br>")
    
//     }

// }
// var firstNum=prompt("Enter The first number")
// var lastNum=prompt("Enter the last number")
// counting()


// document.write( "<br>"+"Task # 08(Caculate Hypotenus)" +"<br>");
// function hypotenus(h){
//    var h=base*base + perp*perp
//    document.write("hypotenus =" +h)
// }
// var base=prompt("Enter the base");
// var perp=prompt("Enter the perpendicular")
// hypotenus()





// document.write("<br>"+ "Task # 09(Area of Triangle)" +"<br>");
// function area(w,h){
//     var A=w*h
//     document.write("Area =" + A)
// }
// area(3,4)

// document.write("<br>"+ "Task # 10 (Palindrome)" +"<br>");
// function palindrome(){
// var word= ("madam");
// var check;
// for(var i=word.length-1; i>=0; i--){
//      document.write(word[i])
//      console.log(word[i])
    
// }
// }
// palindrome()


// document.write("<br>"+ "Task # 11 (String in title case)" +"<br>");
// var firstChar;
// var otherChar;
// function uplow(firstChar,otherChar){
// var sentence=("the quick brown fox") 
// var firstChar=sentence.slice(0 ,1)
// var otherChar=sentence.slice(1)
//  firstChar=firstChar.toUpperCase()
// otherChar=otherChar.toLowerCase()
// document.write(firstChar+otherChar)
// return uplow;
// }

// uplow(firstChar,otherChar)





// document.write( "<br>"+"Task # 12 (Longest Word)" +"<br>");
// function longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(longest_word('Web Development Tutorial'));



// document.write( "<br>"+"Task # 13 (occurence of word)" +"<br>");
// function occcurence(str,letter){
  
//  return str.split("o").length-1
// }
// var str="JSResourceS.com"
// var count=occcurence(str, "o")
// document.write("There are" +count +" " +"occurence of letter 'o'")





// document.write("<br>"+ "Task # 14 (The Geometrizer)" +"<br>");
// function calcCircumference(radius){
//     circum=2*3.14*radius
// }
// function calcArea(radius){
//     area=3.14*radius*radius
// }
// calcCircumference(4)
// document.write("The circumference of circle is :" + circum +"<br>")
// calcArea(5)
// document.write("The Area of circle is :" + area)




