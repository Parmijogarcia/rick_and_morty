
// export default function Card({name, species, gender, image, onClose}) {
//   return (
//     <div>
//       <button onClick={onClose}>X</button>
//       <h2>Name: {name}</h2>
//       <h2>Species: {species} </h2>
//       <h2>Gender: {gender}</h2>
//       <img src={image} alt="" />
//     </div>
//   );
// }
export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="" /> 
      </div>
   );
}
