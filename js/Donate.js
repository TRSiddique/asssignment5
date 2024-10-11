document.getElementById('btn-donate-noa').addEventListener('click',function(event){
    event.preventDefault();


    const donate = getInputValueById('Donate-noa')
    const mainBalanc=getTextFieldValueById('main-balance')
    if(isNaN(donate)||donate<=0){
        alert('Please Give a Positive Number');
        return;
    }
    else if(mainBalanc<donate){
        alert('You Have not sufficient Balance ')
        return;
    }       
    else  {

        showModal('btn-donate-noa');
        const balance=getTextFieldValueById('fund-balance')
    // const mainBalanc=getTextFieldValueById('main-balance')
    
    
    
    const newFund = donate+balance;
    const mainbalance= mainBalanc-donate;

    document.getElementById('fund-balance').innerText=newFund;
    document.getElementById('main-balance').innerText=mainbalance;

    }
      
//add to transection
// Create a new div
const div = document.createElement('div');
div.classList.add('bg-white');

// Get the current date and time
const transactionTime = new Date().toString();

// Set the inner HTML with the transaction amount and time
div.innerHTML = `
<div class="border border-black">
  <h4 class="text-xl font-bold text-black">${donate} Taka is Donated for Flood at Noakhali, Bangladesh</h4>
  <p class="text-gray-500">Date: ${transactionTime}</p>
</div>
`;

// Append the div to the transaction container
document.getElementById('Transection-container').appendChild(div);

})

//DOnate for feni
document.getElementById('btn-donate-feni').addEventListener('click',function(event){
    event.preventDefault();


    const donate = getInputValueById('Donate-feni')

    const balance=getTextFieldValueById('fund-balance-feni')
    const mainBalanc=getTextFieldValueById('main-balance')

    if(isNaN(donate)||donate<=0){
        alert('Please Give a Positive Number');
        return;
    }
    else if(mainBalanc<donate){
        alert('You Have not sufficient Balance ')
        return;
    }       
    else {
        showModal('btn-donate-feni');
    const newFund = donate+balance;
    const mainbalance= mainBalanc-donate;


    document.getElementById('fund-balance-feni').innerText=newFund;
    document.getElementById('main-balance').innerText=mainbalance;
    }
    // add transaction section
// Create a new div
const div = document.createElement('div');
div.classList.add('bg-white');

// Get the current date and time
const transactionTime = new Date().toString();

// Set the inner HTML with the transaction amount and time
div.innerHTML = `
<div class="border border-black">
  <h4 class="text-xl font-bold text-black">${donate} Taka is Donated for Flood Relief in Feni, Bangladesh</h4>
  <p class="text-gray-500">Date: ${transactionTime}</p>
</div>
`;

// Append the div to the transaction container
document.getElementById('Transection-container').appendChild(div);



})

//donate for quota

document.getElementById('btn-donate-quota').addEventListener('click',function(event){
    event.preventDefault();


    const donate = getInputValueById('Donate-quota')

    const balance=getTextFieldValueById('fund-balance-quota')
    const mainBalanc=getTextFieldValueById('main-balance')
    
    if(isNaN(donate)||donate<=0){
        alert('Please Give a Positive Number');
        return;
    }
    else if(mainBalanc<donate){
        alert('You Have not sufficient Balance ')
        return;
    }       
    else {
        showModal('btn-donate-quota');
    const newFund = donate+balance;
    const mainbalance= mainBalanc-donate;


    document.getElementById('fund-balance-quota').innerText=newFund ;
    document.getElementById('main-balance').innerText=mainbalance;
    }
        // add transaction section
// Create a new div
const div = document.createElement('div');
div.classList.add('bg-white');

// Get the current date and time
const transactionTime = new Date().toString();

// Set the inner HTML with the transaction amount and time
div.innerHTML = `
<div class="border border-black">
  <h4 class="text-xl font-bold text-black">${donate} Taka is Aid for Injured in the Quota Movement</h4>
  <p class="text-gray-500">Date: ${transactionTime}</p>
</div>
`;

// Append the div to the transaction container
document.getElementById('Transection-container').appendChild(div);

})


