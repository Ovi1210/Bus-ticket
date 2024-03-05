
function seatLeft() {
  const seatLeft = document.getElementById("seat-left");
  const seatLeftText = seatLeft.innerText;
  const seatInt = parseInt(seatLeftText);
  const nowSeat = seatInt - 1;
  seatLeft.innerText = nowSeat + " " + "Seats left";
}


function selectedSeat() {
  const seatLeft = document.getElementById("seat-select");
  const seatLeftText = seatLeft.innerText;
  const seatInt = parseInt(seatLeftText);
  const nowSeat = seatInt + 1;
  seatLeft.innerText = nowSeat;
}


function addDetail(seatNum){
    const addSeat = document.getElementById(seatNum);
    addSeat.classList.remove('hidden');
}


let defaultPrice = 0;

function totalPrice(){
    const price = document.getElementById('total-price');
    console.log(price.innerText);
    if(defaultPrice <= 0){
        const newPrice = defaultPrice + 550;
        defaultPrice = newPrice;
    }
    else{
        const newTotal = defaultPrice;
        const totalInt = defaultPrice + 550;
        defaultPrice = totalInt;
    }
    price.innerText = defaultPrice;
}



// Copupon Code------------->>>>>>>>!!!!!!!
document.getElementById('copupon').addEventListener('keyup', function(event){
    const textInput = event.target.value;
    if (textInput === 'NEW15'){
        document.getElementById('apply-btn').removeAttribute('disabled');
        document.getElementById('apply-btn').classList.add('bg-[#1DD100]');
    }
    else if (textInput === 'Couple 20'){
        document.getElementById('apply-btn').removeAttribute('disabled');
        document.getElementById('apply-btn').classList.add('bg-[#1DD100]');
    }
    else {
        document.getElementById('apply-btn').setAttribute('disabled', true);
    }
})

// Apply Button Hidden
function btnHidden(){
    const inner = document.getElementById('copupon');
    if(inner.value === 'NEW15'){
        const grandId = document.getElementById('grand-price');
        const grandPrice = defaultPrice * 0.15;
        const finalGrandPrice = defaultPrice - grandPrice;
        grandId.innerText = finalGrandPrice;
        
        // Discount Price
        const dis = document.getElementById('discount');
        dis.classList.remove('hidden');
        const discountP = document.getElementById('discount-price');
        discountP.innerText = grandPrice;
    
    }
    else if(inner.value === 'Couple 20'){
        const grandId = document.getElementById('grand-price');
        const grandPrice = defaultPrice * 0.20;
        const finalGrandPrice = defaultPrice - grandPrice;
        grandId.innerText = finalGrandPrice;
        
        // Discount Price
        const dis = document.getElementById('discount');
        dis.classList.remove('hidden');
        const discountP = document.getElementById('discount-price');
        discountP.innerText = grandPrice;
    }
    

    const btnIs = document.getElementById('copupon-hide');
    btnIs.classList.add('hidden');
}


// For Next Button<-------------------
document.getElementById('phone-input').addEventListener('keyup', function(event){
    const textInput = event.target.value;
    const seatSelectOption = document.getElementById('seat-select');
    if (textInput.length === 11 && seatSelectOption.innerText > 0){
        document.getElementById('next-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('next-btn').setAttribute('disabled', true);
    }
    })



// Last For Next Button<0-0-----

function endButton(){
    const head = document.querySelector('header');
    head.classList.add('hidden');
    const main = document.querySelector('main');
    main.classList.add('hidden');
    const foot = document.querySelector('footer');
    foot.classList.add('hidden');
    const end = document.getElementById('end-section');
    end.classList.remove('hidden');
}

// Main Work
let seatSelect = 0;

// Function to handle click event on divs
function alertOption(event) {
  // not more then 4
  if (seatSelect >= 4) {
    alert("You can't select more then 4 seats");
    return;
  }
  seatSelect++;

  // remove after 1 time select
  event.target.removeEventListener("click", alertOption);

  // js Styles
  event.target.style.backgroundColor = "#1DD100";
  event.target.style.color = "white";
  const addSeatDetail = event.target.innerText;


  // seat value Changes
  seatLeft();
  selectedSeat();
  addDetail(addSeatDetail);
  totalPrice();


  ///
}

// add click event listeners to all seats with the class "selectable"
const tickets = document.querySelectorAll(".selectable");
tickets.forEach((ticket) => {
  ticket.addEventListener("click", alertOption);
});
