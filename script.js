// User Controls

////Video Control
let textPlate = document.getElementById('text-plate');

function playButton(){
    let video = document.querySelector('video');
    // video.muted = true;

    let playButton = document.getElementById('play-button')
    let videoPlaying = false;
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

    });
}
playButton();
toggleValueAndUI({element:"yes"});
function toggleValueAndUI(arg){
    console.log('arg',arg);
    // arg.element.addEventListener('click',(e)=>{
        
    //     if(!videoPlaying){
    //     video.play();
    //     videoPlaying = true;
    //     playButton.innerHTML = 'Pause Video';
    //     }else{
    //         video.pause();
    //         videoPlaying = false;
    //         playButton.innerHTML = 'Play Video';
    //     }

    // });
}



//File Operations

////Read Operations
function readLocalFile(){
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
readLocalFile();

////Save Operations
function userInputSaveFile(){
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
    
});

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















