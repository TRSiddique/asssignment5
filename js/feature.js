
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


const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById(id);
const closeModalBtn = document.getElementById("closeModal");

// Open the modal when the button is clicked
openModalBtn.onclick = function() {
    modal.classList.remove("hidden");
};

// Close the modal when the "close confirmation" button is clicked
closeModalBtn.onclick = function() {
    modal.classList.add("hidden");
};

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add("hidden");
    }
};


}