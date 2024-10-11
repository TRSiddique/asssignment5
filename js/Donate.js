document.getElementById('btn-donate-noa').addEventListener('click',function(event){
    event.preventDefault();


    const donate = getInputValueById('Donate-noa')
    if(isNaN(donate)||donate<=0){
        alert('Please Give a Positive Number');
        return;
    }
    showModal('btn-donate-noa');
    




    const balance=getTextFieldValueById('fund-balance')
    const mainBalanc=getTextFieldValueById('main-balance')
    
    
    
    const newFund = donate+balance;
    const mainbalance= mainBalanc-donate;

    document.getElementById('fund-balance').innerText=newFund;
    document.getElementById('main-balance').innerText=mainbalance;
    

    
//add to transection


const div= document.createElement('div');
div.classList.add('bg-white');
div.innerHTML =`
<div class="border border-black">

<h4 class="text-xl font-bold text-black">${donate} Taka is Donate for Flood at Noakhali, Bangladesh</h4>
 
`




document.getElementById('Transection-container').appendChild(div);


})


document.getElementById('btn-donate-feni').addEventListener('click',function(event){
    event.preventDefault();


    const donate = getInputValueById('Donate-feni')

    const balance=getTextFieldValueById('fund-balance-feni')
    const mainBalanc=getTextFieldValueById('main-balance')

    if(isNaN(donate)){
        alert('Please Give a Number');
        return;
    }
    if(donate<=0)
        {
            alert('Please Give Positive Number');
            return;
        }


    const newFund = donate+balance;
    const mainbalance= mainBalanc-donate;


    document.getElementById('fund-balance-feni').innerText=newFund;
    document.getElementById('main-balance').innerText=mainbalance;
})

document.getElementById('btn-donate-quota').addEventListener('click',function(event){
    event.preventDefault();


    const donate = getInputValueById('Donate-quota')

    const balance=getTextFieldValueById('fund-balance-quota')
    const mainBalanc=getTextFieldValueById('main-balance')
    
    if(isNaN(donate)){
        alert('Please Give a Number');
        return;
    }
    if(donate<=0)
        {
            alert('Please Give Positive Number');
            return;
        }

    const newFund = donate+balance;
    const mainbalance= mainBalanc-donate;


    document.getElementById('fund-balance-quota').innerText=newFund ;
    document.getElementById('main-balance').innerText=mainbalance;
})


