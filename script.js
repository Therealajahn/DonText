function putTextInADiv(){

 let textBucket = document.getElementById('text-bucket');
 
 let textDump = '';
 let textPlate = document.getElementById('text-plate');
    document.addEventListener('click',(e)=>{
        textBucket.focus();

        console.log('bucket focused');
    });
    textBucket.addEventListener('keydown',(e)=>{
        
        console.log()
        textDump = e.target.value;
        console.log('textDump', textDump);
        textPlate.innerHTML = textDump;
    });


}

putTextInADiv();
