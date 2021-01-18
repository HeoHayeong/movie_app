import React from 'react';
// import Malatang from './Malatang';


 function Food({ favorite, imt }){
  //  console.log(favorite);
    return <h2>我喜欢{favorite}{imt}</h2>;
 }

function App() {
  return  (
    <div>
      <h1>안녕</h1>
      <Food favorite="malatang" imt="🥣"/> {/** Food componenet에 정보를 보내는 방법  */} 
      <Food favorite="naicha" imt="🧃"/>
      <Food favorite="coffee" imt="☕"/>
      <Food favorite="beer" imt="🍺" />
    </div>

      
    );
}

export default App;
