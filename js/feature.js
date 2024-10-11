
function getInputValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputNum= parseFloat(inputValue)
    return inputNum;

}

function getTextFieldValueById(id){

    const textValue=document.getElementById(id).innerText;
    const textNum=parseFloat(textValue)
    return textNum;
}


function showSectionById(id){
    //hide all the section
        document.getElementById('Donate-page').classList.add('hidden');
        document.getElementById('transaction-section').classList.add('hidden');
       
    //show the section
    document.getElementById(id).classList.remove('hidden');
    
    
    
    }

// common function for modal
function showModal(id){


document.getElementById(id).addEventListener('click',function(event){
    event.preventDefault();
    
    document.getElementById("myModal").classList.remove('hidden');


})
document.getElementById("closeModal").addEventListener('click',function(event){
    event.preventDefault();
    
    document.getElementById("myModal").classList.add('hidden');


})

};


