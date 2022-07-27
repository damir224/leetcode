const _getSplitWaysCount = (startCoinIndex, sum, coins, amount) => {
  if (sum > amount) {
    return 0;
  }
  if (sum === amount) {
    return 1;
  }
  let count = 0;
  for (let i = startCoinIndex; i < coins.length; i++) {
    count += _getSplitWaysCount(i, sum + coins[i], coins, amount);
  }

  return count;
};

const getSplitWaysCount = (amount, coins) => _getSplitWaysCount(0, 0, coins, amount);

const coins = [5, 10, 25];

console.log('getSplitWaysCount(30, coins)', getSplitWaysCount(30, coins));
