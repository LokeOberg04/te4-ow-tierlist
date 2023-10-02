import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [Heroes, setHeroes] = useState([])


  useEffect(() => {

    function allowDrop(event) {
      event.preventDefault();
    }

    function drag(event) {
      event.dataTransfer.setData("text", event.target.id);
    }

    function drop(event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("text");
      event.target.appendChild(document.getElementById(data));
    }
    async function heroSetup() {
      await fetch(`https://overfast-api.tekrop.fr/heroes`)
        .then(res => res.json())
        .then(result => {
          console.log(result)
          setHeroes(result)
          let heroList = document.getElementById("heroList")
          result.forEach((hero) => {
            // let name = document.createElement("p")
            let img = document.createElement("img")
            let heroDiv = document.createElement("div")
            // name.innerText = hero.name;
            img.src = hero.portrait
            img.style.width = "5rem"
            heroDiv.classList.add("heroDiv")
            heroDiv.draggable = true
            heroDiv.onDragStart = function () { drag() }
            // heroDiv.append(name)
            heroDiv.append(img)
            heroList.append(heroDiv);
          })
        })


    }

    document.getElementsByClassName("placeArea").onDrop = function () { drop() }
    document.getElementsByClassName("placeArea").onDragOver = function () { allowDrop() }
    document.getElementById("startButton").onclick = function () { heroSetup() }
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
