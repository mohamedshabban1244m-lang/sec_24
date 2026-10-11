

function convertValue(){

    var dollar=document.getElementById('dollar').value;
    var result = document.getElementById('result');

    if(dollar==""){
         result.innerHTML =' Enter Data';
    }
    else if(isNaN(dollar)){
        result.innerHTML = ' Enter number not text';
    }
    else if(dollar<0){
        result.innerHTML = ' enter positive number';
    }
    else if(dollar==0){
        result.innerHTML = ' enter rather than zero';
    }
    else{
        result.innerHTML = dollar * 50;
    }

    return false;

}