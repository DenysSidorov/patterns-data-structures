var maxProfit = function(prices) {
    // Initialize minPrice to the highest possible number
    let minPrice = Infinity;
    // Initialize maxProfit to 0 (if we can't make a profit, we return 0)
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // If we find a price lower than our current minPrice, update minPrice.
        // We wouldn't sell today anyway, because buying today is better!
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
            // If we don't update minPrice, calculate the potential profit if we sold today.
        // Update maxProfit if this profit is higher than our previous record.
        else {
            const currentProfit = prices[i] - minPrice;
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }

    return maxProfit;
};

// Time Complexity: O(N)
// Space Complexity: O(1)