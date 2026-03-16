


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

u('#likeCount1').text(localStorage.getItem('likecount1'))

u('#btnLike1').on('click', function(e){
  
  let count = localStorage.getItem('likecount1');
  count++;

  window.localStorage.setItem('likecount1' , count);
 
  u('#likeCount1').text(count);

  
});

}




  

