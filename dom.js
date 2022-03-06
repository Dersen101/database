console.log("dom din mor");

let balValue = 0;
console.log(balValue);

// onclick listener

function dom(){

    div = document.body.appendChild(document.createElement("div"));
    div.className = "bal_form";

    let balText =  div.appendChild(document.createElement("h2"));
    balText.classList.add("bal_text");
    balText.innerHTML = "Coin balance:";

    let balance = div.appendChild(document.createElement("input"));
    balance.classList.add("coin_bal");
    balance.readOnly = true;
    balance.value = balValue;

    

    let button = div.appendChild(document.createElement("button"));
    button.classList.add("coin_btn");
    button.innerHTML = "Coin Button";
    button.onclick = function (){
        
        balValue += 1;
        balance.value = balValue;
        storeBalance(balValue);
        console.log(obID);
        updateBalance(obID);
        
      
   

    };

}

dom();

