// Initial Balance
let walletBalance = 1000;

async function updateWallet() {
    const BalanceCheck = document.getElementById("wallet-balance");
    if (BalanceCheck) {
        BalanceCheck.textContent = walletBalance.toFixed(2);
    }
}

updateWallet();