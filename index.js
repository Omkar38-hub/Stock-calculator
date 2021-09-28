const intialPrice = document.querySelector("#intial-price");
const quantityStock = document.querySelector("#qantity-stock");
const currentPrice = document.querySelector("#current-price");
const tellBtn = document.querySelector("#tell-me-btn");
const outputTxt = document.querySelector("#output");


function calculateProfitLoss(ip, qs, cp) { // intialPrice, quantity of stocks, current Price
  if (ip && qs && cp) {
    if (ip > cp) {
      var loss = (ip - cp) * qs;
      var lossPercent = (loss / (ip*qs)) * 100;
      outputTxt.innerText = "Hey, the loss is ₹" + loss + " and the loss percent is " + lossPercent.toFixed(2) + "%";
      outputTxt.style.color = 'red';
    } else if (cp > ip) {
      var profit = (cp - ip) * qs;
      var profitPercent = (profit / (ip*qs)) * 100;
      outputTxt.innerText = "Hey, the profit is ₹" + profit + " and the profit percent is " + profitPercent.toFixed(2) + "%";
      outputTxt.style.color = 'yellow';
    } else {
      outputTxt.innerText = "No pain no gain and no gain no pain!";
    }
  } else {
    outputTxt.innerText = "All fields are required!!";
  }
}
tellBtn.addEventListener("click", function() {
  calculateProfitLoss(Number(intialPrice.value), Number(quantityStock.value), Number(currentPrice.value));
});
