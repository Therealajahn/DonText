let textPlate = document.getElementById('text-plate');

function playButton(){
    let leaves = document.getElementById('leaves');
    let playButton = document.getElementById('play-button')
    playButton.addEventListener('click',(e)=>{
        leaves.play();
    });
    
}
playButton();

function listenForKeys(){
 
            document.addEventListener('keydown',(e)=>{
            //press Ctrl to save a file
            if(e.key === 'Control'){
                saveFile(textPlate.innerHTML);
            }
            
        });

}
listenForKeys();

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

function saveFile(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
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










