document.getElementById("btn-deposit").addEventListener("click", function () {
  // step 2 get the deposit input field
  // for input field  use .value to the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step:7 clear the deposite fild
  depositField.value = "";

  if (isNaN(newDepositAmount)) {
    alert("please provide a valid nunmber");
    return;
  }

  // step 3  get the current deposit total
  // for non-input (element other than input , textare) use  .innertext to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  // step 4 add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  // set the deposit total
  depositTotalElement.innerText = currentDepositTotal;
  // step 05: get balance total number
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // step 06: calculate  current Balance total

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set the Balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // step:7 clear the deposite fild
  depositField.value = "";
});
