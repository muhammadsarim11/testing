let amount = document.getElementById("amount");
let rupees = document.getElementById("rupees");
// let btn = document.getElementById("btn")

function Convert(event) {
  event.preventDefault();
  if (amount.value == "") {
    alert("Enter Amount");
    return;
  }
  let pkr = 279.7;
  let usd = parseFloat(amount.value);
  let result = usd * pkr;
  rupees.innerText = result;
}
