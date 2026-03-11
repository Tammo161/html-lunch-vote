function loadMeals() {
  console.log("in loadMeals");
  
 const json =[
  {
    "ausgabe": "Ausgabe 3",
    "essen": "Westfälische Beutelwurst"
  },
  {
    "ausgabe": "Ausgabe 1",
    "essen": "Seelachs"
  },
  {
    "ausgabe": "Burger",
    "essen": "Black Burger mit Pulled Salmon"
  },
   {
    "ausgabe": "Ausgabe 2",
    "essen": "Hackschnitzel"
  },
];

  for(let i = 0; i <= json.length; i++){
     if(json[i].ausgabe === "Ausgabe 1"){
       u('#ausgabe1').replace(json[i].ausgabe);
       u('#essen1').replace(json[i].essen);
     }
     if(json[i].ausgabe === "Ausgabe 2"){
       u('#ausgabe2').replace(json[i].ausgabe);
       u('#essen2').replace(json[i].essen);
     }
      if(json[i].ausgabe === "Ausgabe 3"){
       u('#ausgabe3').replace(json[i].ausgabe);
       u('#essen3').replace(json[i].essen);
     }
      if(json[i].ausgabe === "Burger"){
       u('#burgerDerWoche').replace(json[i].ausgabe);
       u('#burger').replace(json[i].essen);
     }
  }
  
}

