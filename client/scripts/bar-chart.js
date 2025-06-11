const chart = document.getElementById("stock-chart");

const canvasContext = chart.getContext("2d");

// Represents the stock's price
const bars = [0, 0, 0, 0, 0];

// each bar is 25 px wide
const barWidth = 25;

// Update the chart every 1000ms
const updateInterval = 1000;

setInterval(updateChart, updateInterval);

async function updateChart() {
  // Update model
  const latestPrice = await getLatestStockPrice();
  bars.pop();
  bars.unshift(latestPrice);

  //draw to chart
  let xOffset = 0;
  bars.forEach((bar) => {
    canvasContext.clearRect(xOffset, 0, barWidth, 150);
    canvasContext.fillRect(xOffset, 150 - bar, barWidth, bar);
    xOffset = xOffset + barWidth;
  });
}

/**
 * Get the randomly generated stock price from the backend
 */
async function getLatestStockPrice() {
  const response = await fetch("/api/demo/stocks/demo/latest");
  const body = await response.json();
  return body.price;
}
