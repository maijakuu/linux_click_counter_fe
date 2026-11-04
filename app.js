const counterValue = document.querySelector(".counter__value");
const counterStatus = document.querySelector("#counter-status");
const loadsApiUrl = "http://127.0.0.1:5000/api/loads";

fetch(loadsApiUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ loads: 1 }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Load counter request failed: ${response.status}`);
    }
    return response.json();
  })
  .then(({ total_loads: totalLoads }) => {
    counterValue.textContent = totalLoads;
    counterStatus.textContent = "";
  })
  .catch((error) => {
    console.error(error);
    counterStatus.textContent = "Latausmäärän tallentaminen epäonnistui.";
  });
