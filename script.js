let textPlate = document.getElementById('text-plate');

function typeTextInADiv(){
 
           document.addEventListener('keydown',(e)=>{
            
            let keyCode = e.key.charCodeAt(0);
            console.log('keyCode', keyCode);

            if(keyCode >= 32 && keyCode <= 127){
                textPlate.innerHTML += e.key;
            }
            
            //press Ctrl to save a file
            if(e.key === 'Control,'){
                saveFile(textPlate.innerHTML);
            }
            
        });

}
typeTextInADiv();

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



// function specialKeys(key){
//     if(key === 'Enter'){
//         return '/n'
//     }
// }"


  