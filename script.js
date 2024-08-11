const btcToUsdRate = 30000; // Example rate, you can update this with real-time data if needed

function convertToUSD() {
    const btc = document.getElementById("btc").value;
    const usd = btc * btcToUsdRate;
    document.getElementById("usd").value = usd.toFixed(2);
}

function convertToBTC() {
    const usd = document.getElementById("usd").value;
    const btc = usd / btcToUsdRate;
    document.getElementById("btc").value = btc.toFixed(8);
}
