var SoundMixer = {

   running: false,
    extension: '.wav', //'.mp3',
    sound: 'On', // On / Off
    muteButton: document.getElementById('muteButton'),
    ddPlus: Dolby.checkDDPlus(),

    init: function(){

      if( SoundMixer.ddPlus === true ){
   
        SoundMixer.extension = '_Dolby.mp4'
        document.getElementById('dolbyLogo').style.display = "inline";
      }

     SoundMixer.muteButton.addEventListener('click', SoundMixer.mute, false)
     SoundMixer.muteButton.innerText = SoundMixer.sound; 

     SoundMixer.startSound = new Audio()
     SoundMixer.startSound.src = 'sounds/viscous' + SoundMixer.extension
     SoundMixer.startSound.playbackRate = 1

     SoundMixer.mergeSound = new Audio()
     SoundMixer.mergeSound.src = 'sounds/bloop' + SoundMixer.extension
     SoundMixer.mergeSound.playbackRate = 1

    },

    play: function( sound ) {   
      if (SoundMixer.sound == 'On') {
          sound.play()
      }   
    },
    reset: function( sound ){
      sound.currentTime = 0
      SoundMixer.play(sound)
    },
    mute: function(){
      if( SoundMixer.sound == 'On' ){
        SoundMixer.sound = 'Off'
      } else {
        SoundMixer.sound = 'On'
      }
      muteButton.innerText = SoundMixer.sound;
    }


 }

SoundMixer.init();
