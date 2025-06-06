const symbols = ['🍒', '🍋', '7️⃣', '🔔', '💎'];
const paytable = {
  '🍒🍒🍒': 5,
  '🍋🍋🍋': 10,
  '7️⃣7️⃣7️⃣': 50,
  '🔔🔔🔔': 100,
  '💎💎💎': 200
};

let balance = 1000;

function spinReels() {
  return [
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)]
  ];
}

function checkWin(spin) {
  const result = spin.join('');
  return paytable[result] || 0;
}

function playGame() {
  const bet = parseInt(document.getElementById('bet').value);
  if (bet > balance || bet <= 0) {
    document.getElementById('result').textContent = '❌ Invalid bet!';
    return;
  }

  const spin = spinReels();

  document.getElementById('reel1').textContent = spin[0];
  document.getElementById('reel2').textContent = spin[1];
  document.getElementById('reel3').textContent = spin[2];

  const winMultiplier = checkWin(spin);
  const winAmount = bet * winMultiplier;

  balance -= bet;
  balance += winAmount;

  document.getElementById('balance').textContent = balance;
  if (winMultiplier > 0) {
    document.getElementById('result').textContent = `🎉 You won ${winAmount} MMK!`;
  } else {
    document.getElementById('result').textContent = '😢 Try again!';
  }
}
