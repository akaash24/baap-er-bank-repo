// add event handler with the withdrow btn
// /* get the withdrow amount from the withdrow input field
//  also make sure to convert the input into a number by using parseFloat
// get previous withdrow total
// calculate total withdrow
// set total withdrow amount
// get the previous total
// calculet new balance total
// set balance total

// clear input field

// step 01

document.getElementById("btn-withdrow").addEventListener("click", function () {
  // step 02
  const withdrowField = document.getElementById("withdrow-field");
  const newWithdrowAmountString = withdrowField.value;
  const newWithdrowAmount = parseFloat(newWithdrowAmountString);

  // step 07
  withdrowField.value = "";

  if (isNaN(newWithdrowAmount)) {
    alert("please provide a valid nunmber");
    return;
  }

  // step 03
  const withdrowTotalElement = document.getElementById("withdrow-total");
  const previousWithdrowTotalString = withdrowTotalElement.innerText;
  const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);
  // step 05
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrowAmount > previousBalanceTotal) {
    alert(" Gorib, no  money no love");
    return;
  }

  // step 04 :
  const currentWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
  withdrowTotalElement.innerText = currentWithdrowTotal;

  // step 06
  const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
  balanceTotalElement.innerText = newBalanceTotal;

  // step 07
  withdrowField.value = "";
});
