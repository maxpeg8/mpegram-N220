// Homework javascript
function calcInterest() {
  const principle = parseFloat(document.getElementById("principle").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);
  const interestTotal = (principle * (rate / 100) * time).toFixed(2);
  const totalResult = principle + interestTotal;
  console.log("principle", principle);
  console.log("rate", rate);
  console.log("time", time);
  document.querySelector("#grandTotal").innerHTML =
    "With a beginning principle of $" +
    principle +
    " and with a growth rate of " +
    rate +
    "% for " +
    time +
    " years, your total interest will be $" +
    interestTotal +
    " with a grand total of $" +
    totalResult +
    ".";
}
