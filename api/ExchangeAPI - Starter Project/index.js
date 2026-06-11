const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");
const timestampDiv = document.getElementById("timestamp");

async function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const from = fromSelect.value;
  let to = toSelect.value;

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Shkruaj një shumë të vlefshme!";
    timestampDiv.textContent = "";
    return;
  }

  try {
    const response = await fetch(
      `https://proxy.corsfix.com/?https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
    );
    const data = await response.json();

    const rate = data.rates;

    resultDiv.textContent = `${amount} ${from} = ${rate[to]} ${to}`;

    timestampDiv.textContent = data.date;
  } catch (error) {
    resultDiv.textContent = "Gabim gjatë marrjes së kursit!";
    timestampDiv.textContent = "";
  }
}

convertBtn.addEventListener("click", convertCurrency);
