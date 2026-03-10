function loadMeals() {
  console.log("in loadMeals");

  const speisen = ["Seelachs", "Hackschnitzel", "Westfälische Beutelwurst"];
  const mealId = ["#essen1", "#essen2", "#essen3"];

  for (let i = 0; i < speisen.length; i++) {
    for (let j = 0; j < mealId.length; j++) u(mealId[j]).replace(speisen[j]);
  }
}
