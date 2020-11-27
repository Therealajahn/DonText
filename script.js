// User Controls

////Video Control
let textPlate = document.getElementById('text-plate');

function controlVideo(){
    let video = document.querySelector('video');
    let videoPlaying = false;
    let videoMuted = false;
    
    function togglePlayButton(){
       let playButton = document.getElementById('play-button');
      
       playButton.addEventListener('click',(e)=>{
        if(!videoPlaying){
            video.play();
            videoPlaying = true;
            playButton.innerHTML = 'Pause Video';
            }else{
                video.pause();
                videoPlaying = false;
                playButton.innerHTML = 'Play Video';
            }
            console.log('playBUtton:',playButton);
       });
       changeVideoURL(playButton);
    }
    togglePlayButton();

    function changeVideoURL(playButton){
        let changeVideo = document.getElementById('change-video');
        let videoUrl = document.getElementById('video-url');
        console.log('playBUtton:',playButton);
        changeVideo.addEventListener('click',(e)=>{
            console.log('videoUrl', document.getElementById('video-url').value);
            video.src = videoUrl.value;
            video.play();
            videoPlaying = true;
            playButton.innerHTML = 'Pause Video'; 
        })
        
    }

    function muteButton(){
        let muteButton = document.getElementById('mute-button')
        muteButton.addEventListener('click',(e)=>{
            
            if(!videoMuted){
            video.muted = true;
            videoMuted = true;
            muteButton.innerHTML = 'Unmute Video';
            }else{
                video.muted = false;
                videoMuted = false;
                muteButton.innerHTML = 'Mute Video';
            }

        });
    }
    muteButton();

   
    
    
  
}
controlVideo();



//File Operations

////READ
function userReadLocalFile(){
    let fileGetter = document.addEventListener('change',readText,false);
    function readText(e){
        let file = e.target.files[0];
        console.log('file', file);
        let reader = new FileReader();
        reader.onload = (e)=>{
             textPlate.innerHTML = e.target.result;
              console.log('e.target.result', e.target.result);
        }
        reader.readAsText(file); 
    }
}
// userReadLocalFile();

////WRITE 
function userInputSaveFile(){
    function keyInputSaveFile(){
    //NOTE: this can be abstracted to streamline future
    //shortcuts
    let keyHeld = {'Control':false, 's':false};
    document.addEventListener('keydown',(e)=>{
        console.log('e.key', e.key)
        if(e.key in keyHeld){
            keyHeld[e.key] = true;
            //press Control + S to save
            if(keyHeld['Control'] && key['s']){ 
               saveFile(textPlate.innerHTML);
            }
        }
        })
    }

    function buttonSaveFile(){
        let saveButton = document.getElementById('save-button');
        saveButton.addEventListener('click',(e)=>{
            saveFile(textPlate.innerHTML);
        })
    }    
    buttonSaveFile()
}
userInputSaveFile();

function saveFile(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) 
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { 
        var a = document.createElement('a'),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}















