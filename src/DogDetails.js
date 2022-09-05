import { useParams } from "react-router-dom";

function DogDetails({dogs}) {
  const params = useParams();
  let age;
  let facts = [];
  for (let dog of dogs) {
    if (dog.src === params.name) {
      age = dog.age;
      facts = dog.facts
    }
  }



  return (
    <div>
      <h1> {params.name}!</h1>
      <p> I am {age} years old</p>
      <ul>
        {facts.map((fact, index) =>
          <li key={index}> {fact}</li>)}
      </ul>
        <img src={`/${params.name}.jpg`}/>


    </div>
  );
}
export default DogDetails;
