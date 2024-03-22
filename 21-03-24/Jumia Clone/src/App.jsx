import { useState } from 'react'
import Product from './components/product';
import Items from './components/frredom'
import './App.css'

function App() {

  const [logged, setlogged] = useState(false)

  const productArray = [
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/1226192/1.jpg?6754",
      name: `Apple MacBook Pro 16‑inch M3 Max Chip 4TB 128GB RAM English - Space Black`,
      price: "10,999,999"
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/0907372/1.jpg?1649",
      name: `Acer PREDATOR HELIOS NEO 16 13TH GEN CORE I7 16GB RAM 512GB SSD NVIDIA RTX 4060 (8GB) 16inches WINS 11`,
      price: "2,100,000"
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/4882052/1.jpg?9824",
      name: `DELL ALIENWARE M16 13TH GEN CORE I9 32GBRAM 2TBSSD 12GB NVIDIA W11`,
      price: "4,000,900"
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/0753052/1.jpg?2569",
      name: `DELL ALIENWARE M18 R1, I9-13thGEN, 1TB/32GB, 4080`,
      price: "4,236,500"
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/342027/1.jpg?0825",
      name: `Apple MacBook Air 13" M1 Chip 8GB 256GB 2020 Model - Gray`,
      price: "1,450,000"
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/3777482/1.jpg?8381",
      name: `Apple MacBook Air 15" Laptop - M2 Chip - 8GB Memory - 256GB SSD (Latest Model) - MIDNIGHT 2023`,
      price: "1,850,000"
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/6228782/1.jpg?9548",
      name: `Apple MacBook Pro 16" Laptop - M3 Pro Chip - 18GB 18-core GPU - 512GB SSD - Space Black`,
      price: "3,850,000"
    },
  ];

  function LogIn() {
    setlogged(!logged)
  }

  return (
    <>
      <div id='header'>

        <h1>Product Page</h1>
        <button style= {logged ? {backgroundColor: "blueviolet"} :{backgroundColor: "black"}} onClick={LogIn}>
          {logged ? "Log Out" : "Log In"}
        </button>
      </div>

      {
        logged ? 
          <div id='cardCont'>
            {
              productArray.map((item) => {
                return (
                  <Product img={item.img} name={item.name} price={item.price} />
                )
              })
            }
          </div> : 
        "Please Log In"
      }
    </>
  )
}

export default App
