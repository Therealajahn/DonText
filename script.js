

function typeTextInADiv(){
 
    let textPlate = document.getElementById('text-plate');
   
        document.addEventListener('keydown',(e)=>{
            
            let keyCode = e.key.charCodeAt(0);
            console.log('keyCode', keyCode);

            if(keyCode >= 32 && keyCode <= 127){
                textPlate.innerHTML += e.key;
            }
            
            //press Ctrl to save a file
            if(e.key === "Control"){
                saveFile(textPlate.innerHTML);
            }
            
        });

}
typeTextInADiv();

function saveFile(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
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

function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      displayContents(contents);
    };
    reader.readAsText(file);
  }
  
  function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
  }
  
  document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);

// function specialKeys(key){
//     if(key === 'Enter'){
//         return '/n'
//     }
// }

  function readLocalFile(){
      
  }