var divlength = document.querySelectorAll('.song').length;
console.log()

for(var i = 0;i<divlength-1;i++)  
{
    var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong); 
     //to play song after single click

    var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong); 
     //to stop song after double click

}  
//Song Playlist is craeted below
//

var song1 = new Audio();
song1.src="music/song1.mp3";

var song2 = new Audio();
song2.src="music/song2.mp3";

var song3 = new Audio();
song3.src="music/song3.mp3";

var song4 = new Audio();
song4.src="music/song4.mp3";

var song5 = new Audio();
song5.src="music/song5.mp3";

var song6 = new Audio();
song6.src="music/song6.mp3";

var song7 = new Audio();
song7.src="music/song7.mp3";

var song8 = new Audio();
song8.src="music/song8.mp3";

var song9 = new Audio();
song9.src="music/song9.mp3";



function playsong()    // Function to play song
{   // console.log(this.innerHTML);

    var songId = this.innerHTML;

    switch (songId) {
        case "a": song1.play();
            break;

        case "b": song2.play();
            break;  

        case "c": song3.play();
            break;  

        case "d": song4.play();
            break;        

        case "e": song5.play();
            break;    
        
        case "f": song6.play();
            break;

        case "g": song7.play();
            break; 

        case "h": song8.play();
            break;   

        case "i": song9.play();
            break;
        default:
        alert("Wrong click")
            break;
    }
}

function pausesong()   // Function to pause the song 
{
    var songId = this.innerHTML;

switch (songId) {

case "a": song1.pause();
    break;

case "b": song2.pause();
    break;  

case "c": song3.pause();
    break;  

case "d": song4.pause();
    break;        

case "e": song5.pause();
    break;    

case "f": song6.pause();
    break;

case "g": song7.pause();
    break; 

case "h": song8.pause();
    break;   

case "i": song9.pause();
    break;

default:
alert("Wrong click")
    break;
}
   

}

