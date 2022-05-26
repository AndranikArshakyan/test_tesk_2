let balanceButton = document.querySelector('.button--balance');
let supportButton = document.querySelector('.button--support');
let hiddenBalanceCards = document.querySelectorAll('.balance .cards__item--hidden');
let hiddenSupportCards = document.querySelectorAll('.support .cards__item--hidden');

let showHiddenCards = (button, cardsList) => {
  button.addEventListener('click', () => {
    cardsList.forEach((card) => {
      card.classList.remove('cards__item--hidden');
    })
  })
}

showHiddenCards(balanceButton, hiddenBalanceCards);
showHiddenCards(supportButton, hiddenSupportCards);

let balanceCards = document.querySelectorAll('.balance .card');
balanceCards.forEach((card) => {
  let currentAmount = card.querySelector('.card__current-amount');
  let generalAmount = card.querySelector('.card__general-amount');

/*т.к. в некоторых карточках нет общей суммы, то проверку сделал, чтобы исключить их */
  if (generalAmount !== null) {
    //удалил пробелы, преобразовал строку в число
    let currentAmountInt = parseInt(currentAmount.textContent.replace(/\s/g,''), 10);
    //удалил пробелы, удалил слэш, преобразовал строку в число
    let generalAmountInt = parseInt(generalAmount.textContent.replace(/\s/g,'').slice(1), 10);

    if (currentAmountInt / generalAmountInt < 0.45) {
      currentAmount.classList.add('card__current-amount--small-amount');
    }
  }
})

let supportCards = document.querySelectorAll('.support .card');

/*прохожу по карточкам баланса, если текущая сумма < 45%,
то соотвествующей ей карточке в карточках поддержки меняю цвет прогресс бара и индикатора*/
for (let i = 0; i < balanceCards.length; i++) {
  let balanceCard = balanceCards[i];
  let supportCard = supportCards[i];
  let currentAmount = balanceCard.querySelector('.card__current-amount');
  let progressBar = supportCard.querySelector('.card__progress');

  if (currentAmount.classList.contains('card__current-amount--small-amount')) {
    supportCard.classList.add('card--small-amount');
    progressBar.classList.add('card__progress--small-amount');
  }
}


