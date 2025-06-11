const chart = document.getElementById("stock-chart");

const canvasContext = chart.getContext("2d");

// Represents the stock's price
const bars = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Each bar is 25 px wide
const barWidth = 25;

// Each column is 150 px tall
const chartHeight = 200;

// Update the chart every 750ms
const updateInterval = 750;

setInterval(updateChart, updateInterval);

async function updateChart() {
  // Update model
  const latestPrice = await getLatestStockPrice();
  bars.pop();
  bars.unshift(latestPrice);

  //draw to chart
  let xOffset = 0;
  bars.forEach((bar, index) => {
    // Visual Stock changes via colour
    const previous = bars[index + 1] || bar;
    let colour  = "gray";
    if (bar > previous) colour = "green";
    else if (bar < previous) colour = "red";
    canvasContext.fillStyle = colour;
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
