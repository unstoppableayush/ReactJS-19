import NetflixSeries, {Footer, Header} from "./components/NetflixSeries"
// import "./components/Netflix.css"
import './components/Netflix.module.css'
import { EventHandling } from "./components/EventHandling"
import { EventProps } from "./components/EventProps"
import { EventPropagation } from "./components/EventPropagation"
import { State } from "./components/hooks/State"
import { DerivedState } from "./components/DerivedState"
import { LiftingState } from "./components/LiftStateUp"

function App() {
  return (
    <section className="container">

      {/* <h1 className="common-heading"> List of Best Netflix Series</h1> */}
      {/* <Header/> */}
      {/* <NetflixSeries/> */}
      {/* <EventHandling/> */}
       {/* <EventProps/> */}
       {/* <EventPropagation/> */}
       {/* <State/> */}
       {/* <ParentSibling/> */}
       {/* <DerivedState/> */}
        <LiftingState/>
      {/* <Footer/> */}
    </section>
  )
}

export default App

export function ParentSibling(){
  console.log("ParentSibling Component rendered")
  return <div className="main-div">
          <h2>ParentSibling Component</h2>
         </div>
}

