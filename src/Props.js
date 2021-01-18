import React from 'react';
// import Malatang from './Malatang';


 function Food({name , imot}){
  //  console.log(favorite);
    return(
      <div>
        <h2>我喜歡{name}{imot}</h2>
      </div>
    )
 }

 const foodLike = [
   {
     id : 1,
     name: "malatang",
     imot : "🥣",
     rating : 5
   },

   {
     id : 2,
     name: "naicha",
     imot : "🧃",
     rating : 4.9
   },

   {
     id : 3,
     name: "coffee",
     imot : "☕",
     rating : 4.8
   },

   {
     id : 4,
     name: "beer",
     imot : "🍺",
     rating : 4.7
   }
  ];

  // function renderFood(food){
  //   console.log(food);
  //   return <Food name={food.name} imot={food.imot}/>
  // }

  
function App() {
  return  (
    <div>
      {foodLike.map(dish => (
        <Food key={dish.id} name={dish.name} imot={dish.imot}/>
        ))}
      {/* {foodLike.map(dish => <Food name={dish.name} imot={dish.imot}/>)}  */}
    </div>

      
    );
}

export default Props;
