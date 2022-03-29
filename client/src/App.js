import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  let [people, changePeople] = useState([])

  const getBen = async () => {
    let people = await axios.get('/people')
    changePeople(people.data)
  }

  useEffect(() => {
    getBen()
  }, [])

  return (
    <div className="App">
      <h1>Ben's Simple App</h1>
      { people.map((person) => (
        <div key={ person._id } >
          <h2>{ person.name }</h2>
          <h3>{ person.location }</h3>
          <ul>
            { person.pets.map((pet, idx) => (
              <li key={ idx }>{ pet }</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
