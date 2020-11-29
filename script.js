function controlVideo(){
    const video = document.querySelector('video');
    let videoPlaying = false;
    let videoMuted = false;
    loadVideo(video);
    function togglePlayButton(){
       let playButton = document.getElementById('play-button')
       .addEventListener('click',(e)=>{
        if(!videoPlaying){
            video.play();
            videoPlaying = true;
            e.target.innerHTML = 'Pause Video';
            }else{
                video.pause();
                videoPlaying = false;
                e.target.innerHTML = 'Play Video';
            }
            console.log('playBUtton:',playButton);
       });
    }
    togglePlayButton();

   function muteButton(){
        const muteButton = document.getElementById('mute-button')
        .addEventListener('click',(e)=>{
            
            if(!videoMuted){
            video.muted = true;
            videoMuted = true;
            e.target.innerHTML = 'Unmute Video';
            }else{
                video.muted = false;
                videoMuted = false;
                e.target.innerHTML = 'Mute Video';
            }

        });
    }
    muteButton();

    function loadVideo(){
        
        function embedNewVideo(){
            const videoEmbed = document.getElementById('video-embed')
            .addEventListener('change',(e)=>{
            const editor = document.getElementById('editor');
            const changeVideo = document.getElementById('change-video');
            
            changeVideo.addEventListener('click',(e)=>{
                
                editor.removeChild(video);
                // video = videoEmbed.value;
               
                const newVideo = new DOMParser().parseFromString(videoEmbed.value,'text/xml');
                editor.innerHTML += videoEmbed.value;
                console.log('videoEmbed.value', videoEmbed.value)
                console.log('editor.innerHTML', editor.innerHTML)
                
            })
           
        })
        }
        embedNewVideo(); 
    
    }
    
    
  
}
controlVideo();





//File Operations


function documentOperations(){
const textPlate = document.getElementById('text-plate');
////READ
    function userReadLocalFile(){
        const fileGetter = document.getElementById('file-reader') 
        .addEventListener('change',readText,false);
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
    userReadLocalFile();

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
        let file = new Blob([data], {type: type});
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
}














