import { useEffect, useState } from 'react'
import './App.css'

let gotten = 0;

function App() {

  const [Heroes, setHeroes] = useState([])

  useEffect(() => {
    async function dosaker() {

      if (gotten === 0) {
        await fetch(`https://overfast-api.tekrop.fr/heroes`)
          .then(res => res.json())
          .then(result => {
            console.log(result)
            setHeroes(result)
          })

        let heroList = document.getElementById("heroList")
        Heroes.forEach((hero) => {
          let name = document.createElement("p")
          name.innerText = hero.name;
          heroList.appendChild(name);
        })
        gotten = 1
      }
    }

    dosaker()
  })
  return (
    <>
      <section>
        <div className="Stier tier">
          <p>S</p>
        </div>
        <div className="placeArea">

        </div>
      </section>
      <section>
        <div className="Atier tier">
          <p>A</p>
        </div>
        <div className="placeArea">

        </div>
      </section>
      <section>
        <div className="Btier tier">
          <p>B</p>
        </div>
        <div className="placeArea">

        </div>
      </section>
      <section>
        <div className="Ctier tier">
          <p>C</p>
        </div>
        <div className="placeArea">

        </div>
      </section>
      <section>
        <div className="Dtier tier">
          <p>D</p>
        </div>
        <div className="placeArea">

        </div>
      </section>

      <div id="heroList" className="heroList">

      </div>
    </>
  )
}

export default App
