


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

function initialize(){

let vote1 = Number.parseInt(window.localStorage.getItem("likecount"));

  u('#btnLike1').on('click', function(e){
  window.localStorage.setItem('likecount', vote ++)
});

  u('#btnLike2').on('click', function(e){
  window.localStorage.setItem('likecount', '2')
});
}





  

