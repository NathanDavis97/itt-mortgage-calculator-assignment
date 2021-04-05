

function calculate() {
  // @ts-ignore
  let amount = document.getElementById("money").value;
  // @ts-ignore
  let interest = document.getElementById("interest").value;
  // @ts-ignore
  let term = document.getElementById("term").value;
  if (!amount || !interest || !term) {
    window.alert("Total, Interest, and Term must not be empty")
    document.getElementById("total").innerText = "0"
    document.getElementById("monthly").innerText = "0"
    return { balance: 0, pmt: 0 };
  }

  // Total loan cost in a fixed mortage is:
  // r * p * n / (1 - (1 + r)^-n)

  // where r = interest rate / 12
  // n = number of payments or term * 12
  // p = principal

  const r = (interest * 0.01) / 12;
  const n = term * 12;
  const p = amount;

  const balance = ((r * p * n) / (1 - Math.pow(1 + r, -n))).toFixed(2);
  // @ts-ignore
  const pmt = (balance / n).toFixed(2);

  // Uncomment for debug output
  console.log({ amount, interest, term });
  console.log({ balance, pmt });

  document.getElementById("total").innerText = balance
  document.getElementById("monthly").innerText= pmt
}