

let dest  = new Date(prompt("Set Timer (month date year  hrs: minutes: seconds) in this format")).getTime();  // date and tme you want to set

let x = setInterval(function(){    // this function will run program after evry 1000 ms.

let now = new Date().getTime();  //current time

let difference = dest - now ;    // diffrence between current time and time we want to set.

let days = Math.floor(difference / (1000*60*60*24));        // converting milliseconds to days

let hrs = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));    // converting  remaining milliseconds to hrs


let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));     // converting  remaining milliseconds to minutes

let seconds = Math.floor((difference % (1000 * 60)) / 1000);            //  converting remaining  milliseconds to seconds

// console.log(`${days} ${hrs} ${minutes} ${seconds}`);

document.getElementById("demo").innerHTML = days +"d, "+hrs+"hrs: "+minutes+"m: "+seconds+"s";

}, 1000 );  