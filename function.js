async function getData() {
  const url = "mensaEssen.json";

  const response = await fetch(url);
  const result = await response.json();
  return result;
}

async function loadMeals(wochentag) {
  const essensplan = await getData();
  let tagesmenu = null;
  for (let i = 0; i <= essensplan.length - 1; i++) {
    if (essensplan[i].wochentag == wochentag) {
      tagesmenu = essensplan[i].auswahl;
    }
  }

  for (let i = 0; i <= tagesmenu.length - 1; i++) {
    const counter = tagesmenu[i];
    const counterId = counter.counterId;

    u("#" + counterId + "-name").text(counter.counterName);
    u("#" + counterId + "-food").text(counter.essen);
  }
}

function initializeLikeButton(divId, storageKey, buttonId) {
  u(divId).text(localStorage.getItem(storageKey));

  u(buttonId).on("click", function (e) {
    let count = localStorage.getItem(storageKey);
    count++;

    window.localStorage.setItem(storageKey, count);

    u(divId).text(count);
  });
}

function initializeLike() {
  for (let j = 0; j < 5; j++) {
    initializeLikeButton("#likeCount" + j, "likeCount" + j, "#btnLike" + j);
    initializeLikeButton(
      "#disLikeCount" + j,
      "disLikeCount" + j,
      "#btnDisLike" + j,
    );
  }
}

async function initializeWeekButton() {
  let i = 0;
  updateDisplay(i);

  u("#btn--week--left").on("click", function (e) {
   
    if(i > 0){
      i--;
      updateDisplay(i);
    }
  });

  u("#btn--week--right").on("click", function (e) {
    
    if(i < 4){
      i++;
      updateDisplay(i);
    }
  });

}

async function updateDisplay(index) {
  const essensplan = await getData();
  u("#week--display").text(essensplan[index].wochentag);
  loadMeals(essensplan[index].wochentag);
}
