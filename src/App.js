import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const flowers = [{name: 'Rose', scientificName: 'Rosa'}, {name: 'Lily', scientificName: 'Lilium'}, {name: 'Tulip', scientificName: 'Tulipa'}];
  // // const Hero = [{name: 'razzak', age: '33'}, {name: 'shakib', age: '44'}, {name: 'salman', age: '55'}]
  const [Hero, setHero] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setHero(data) )
  }, [])
  return ( 
    <div className="App">
      {/* {
        flowers.map(fn => <Flower flower = {fn.name} sciName = {fn.scientificName}></Flower>)
      }
      <MovieCounter></MovieCounter>
      {
        Hero.map(nk => <Nayok id={nk.id} nayok = {nk.name} age = {nk.age}></Nayok>)
      }
      
     */}
     <HeaderSt></HeaderSt>
     {
        Hero.map(nk => <BusinessCard address={nk.company.bs} nayok = {nk.name} email = {nk.email}></BusinessCard>)
     }
   
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}
function HeaderSt() {
  const headerStyle ={
    width: '800px',
    borderRadius: '5px',
    backgroundColor: 'purple',
    textAlign: 'center',
    marginLeft: '700px',
    fontSize: '40px'
  }
  return(
    <h1 style ={headerStyle}>Users Information</h1>
  )
  
}
function BusinessCard(props) {
  
  const mainContainer = {
    width: '600px',
    height: '400px',
    backgroundColor: 'tomato',
    borderRadius: '5px',
    boxShadow: '10px 10px 20px',
    margin: '20px',
    
  }
  const childDiv = {
    width: '50%',
    marginLeft: '10px',
    float:'left'
  }
  const childDivTwo = {
    width: '50%',
    float: 'right'
  }
  const container = {
    display: 'flex',
    flexWrap: 'wrap'
  }
  return(
      <div style ={container}>
        <div style ={mainContainer}>
        <div>
        <div style ={childDiv}>
          <h1>name: {props.nayok}</h1>
          <p>front-end Developer</p>
        </div>
        <div style = {childDivTwo}> 
            <ul>
            <li>➡Email:{props.email}</li>
            <li>➡Bs:{props.address}</li>
            </ul>
        </div>
        </div>
      </div>
      </div>
  ) 
}

// function Flower(props) {
//   return(
//     <div>
//       <h1>flower Name:{props.flower}</h1>
//       <h3>Scientific Name:{props.sciName}</h3>
//     </div>
//   )
// }
// function MovieCounter() {
//   let [count, setCount] = useState(0)
//   // const handleClick =() => setCount(count + 1)
//   return(
//     <div>
//       <h1>Added Movie:{count}</h1>
//       <button onClick={() => setCount(count + 1)}>addedBtn</button>
//       <button onClick={() => setCount(count - 1)}>removeBtn</button>
//       <MoviesDisplay movies ={count}></MoviesDisplay>
//       <MoviesDisplay movies ={count + 4}></MoviesDisplay>
//       <MoviesDisplay movies ={count}></MoviesDisplay>
//       <MoviesDisplay movies ={count + 8}></MoviesDisplay>
//       <MoviesDisplay movies ={count}></MoviesDisplay>
//     </div>
//   )
// }
// function MoviesDisplay(props){
//   return <h4>Movies i have seen:{props.movies}</h4>
  
// }
// function Nayok(props){
//   console.log(props)
//   const nayokStyle = {
//     border: '2px solid purple',
//     margin: '20px'
//   }
//   return(
//     <div style = {nayokStyle}>
//       <h1>{props.id}-Ami {props.nayok}</h1>
//       <h3>I've done 55 movies in {props.age}years</h3>
//     </div>
//   )
// }

export default App;
