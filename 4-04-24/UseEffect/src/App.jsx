import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchdata()
  }, []);

  async function fetchdata() {
    try {
      let res = await fetch("https://660e745c6ddfa2943b36d809.mockapi.io/batchb/batchb")
      const data = await res.json()
      console.log(data)
      setResult([...data])
      console.log(result)
    } catch (e) {
      console.log(e)
    }

  }

  let shimmer = []

  for (let x = 0; x <= 20; x++) {
    shimmer.push(
      <div className='shimmer'></div>
    );
  }

  return (
    <>
      <p>This is an Example of UseEffect</p>
      <div className="card-wrapper">
        {
          result.length == 0 && shimmer
        }
        {
          result.map((value, index, array) => {
            return <Card name={value["name"]} email={value["email"]} gender={value["gender"]} image={value["avatar"]} />
          })
        }


      </div>


      <button onClick={() => { return console.log(`NewState: ${result}`) }}>CC</button>
    </>
  )
}

export default App
