 
    const img = document.querySelector('img');
    const music = document.getElementById("audio");
    const play = document.getElementById('play');
    const artist = document.getElementById('artist');
    const title = document.getElementById('title');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let progress = document.getElementById('progress');
    const tot_duration = document.getElementById("duration");
    let current_time = document.getElementById("current_time");
    const progress_div = document.getElementById("progress_div");
        

    const songs = [
        {
            name : "WDT",
            title : "We Don't Talk Any More",
            artist : "Charlie Puth",
        },

        {
            name : "Baarish",
            title : "Baarish",
            artist : "shreya Ghoshal",     
        },

        {
            name : "Crazy",
            title : 'Crazy Crazy',
            artist : "Arijit singh",
        },

        {
            name : "Despacito",
            title : "Despacito",
            artist : "Justin Bieber",
        },

        {
            name :"Dhadak",
            title : "Dhadak",
            artist: "shreya Ghoshal & Ajay-Atul",
       }
    ];
    
   

    let isPlaying = false;    //boolean value to know song is playing or not

    //for play function
    const playMusic = () => {
        isPlaying = true;   //after clicking on play button , isplaying value will become TRUE
        music.play();    //play function of html
        play.classList.replace('fa-play','fa-pause'); //replacing icon
        img.classList.add('anime');                   // add animation 
    };

     //for pause function
     const pauseMusic = () => {
        isPlaying = false;  //after clicking on pause button , isplaying value will become TRUE
        music.pause();      
        play.classList.replace('fa-pause','fa-play');  // agian replace icons
        img.classList.remove('anime');         // remove animation          
    };

    play.addEventListener('click',() => {
        if(isPlaying)  //If value of isPlaying is TRUE then call pauseMusic function.
        {   
            pauseMusic();
        }
        else          // else call playMusic function
        {   playMusic();}

         // isPlaying  ? pauseMusic() : playMusic();
         // we can use ternary operator instead of if else.
    });

   
    //changing  the Music data

    ChangeSong = (songs) =>
    {
        title.textContent = songs.title;
        artist.textContent = songs.artist;
        music.src = `music/${songs.name}.mp3`;
        img.src = `images/${songs.name}.jpg`;
    };

    songsIndex = 0;


    const nextSong = () =>
    {
        songsIndex = (songsIndex + 1) % songs.length;  // eg. 2 = 3 % 5 ==> after last song first song will again play.
        ChangeSong(songs[songsIndex]); 
        playMusic();  // so next song will be play automatically
    }
  
    const prevSong = () =>
    {
        songsIndex = (songsIndex - 1 + songs.length) % songs.length;
        ChangeSong(songs[songsIndex]);
        playMusic();
    }
    
    //Progress bar javascript work

    music.addEventListener('timeupdate',(event) =>{
        const {currentTime , duration} = event.srcElement; //using object destructing
        //console.log(currentTime);
        //console.log(duration);

        let progress_time = (currentTime/duration) * 100;
        progress.style.width = `${progress_time}%`;   // width of .progress changing dynamically
        
        //Music duration update

        let min_duration = Math.floor(duration / 60);
        let sec_duration = Math.floor(duration % 60);

        
        total_duration = `${min_duration}:${sec_duration}`;
        if(duration)
        {
        tot_duration.textContent = `${total_duration}`;
        }

        //Music current_duration update

        let min_current = Math.floor(currentTime / 60);
        let sec_current = Math.floor(currentTime % 60);

        
        if (sec_current < 10) 
        {
            sec_current = `0${sec_current}`;
        }
        
        total_current = `${min_current}:${sec_current}`;
      
        current_time.textContent = `${total_current}`;
        
    });

    progress_div.addEventListener('click',(event) =>{
        console.log(event);

    });
    // to play next song when when current song ends

    music.addEventListener('ended',nextSong);  


    next.addEventListener('click',nextSong);
    prev.addEventListener('click',prevSong);

   

     