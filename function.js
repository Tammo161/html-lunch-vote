function loadMeals() {
  console.log("in loadMeals");

  const json = [
    {
      counterId: "counter3",
      counterName: "Ausgabe 3",
      essen: "Westfälische Beutelwurst",
    },
    {
      counterId: "counter1",
      counterName: "Ausgabe 1",
      essen: "Seelachs",
    },
    {
      counterId: "counter4",
      counterName: "Burger",
      essen: "Black Burger mit Pulled Salmon",
    },
    {
      counterId: "counter2",
      counterName: "Ausgabe 2",
      essen: "Hackschnitzel",
    },
  ];

  for (let i = 0; i <= json.length - 1; i++) {
    const counter = json[i];
    const counterId = counter.counterId;

    u("#" + counterId + "-name").replace(counter.counterName);
    u("#" + counterId + "-food").replace(counter.essen);
  }
}

function initializeButton(divId, storageKey, buttonId) {
  u(divId).text(localStorage.getItem(storageKey));

  u(buttonId).on("click", function (e) {
    let count = localStorage.getItem(storageKey);
    count++;

    window.localStorage.setItem(storageKey, count);

    u(divId).text(count);
  });
}

function initialize() {
  for (let j = 0; j < 5; j++) {
    initializeButton("#likeCount" + j, "likeCount" + j, "#btnLike" + j);
    initializeButton("#disLikeCount" + j, "disLikeCount" + j, "#btnDisLike" + j);
    
  }
}
