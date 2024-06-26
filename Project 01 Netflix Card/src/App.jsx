import NetflixSeries, {Footer, Header} from "./components/NetflixSeries"
// import "./components/Netflix.css"
import './components/Netflix.module.css'
import { EventHandling } from "./components/EventHandling"

function App() {
  return (
    <section className="container">

      {/* <h1 className="common-heading"> List of Best Netflix Series</h1> */}
      {/* <Header/> */}
      {/* <NetflixSeries/> */}
      <EventHandling/>
      {/* <Footer/> */}
    </section>
  )
}

export default App


