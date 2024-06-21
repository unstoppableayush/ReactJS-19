import NetflixSeries, {Footer, Header} from "./components/NetflixSeries"
// import "./components/Netflix.css"
import './components/Netflix.module.css'

function App() {
  return (
    <section className="container">

      <h1 className="common-heading"> List of Best Netflix Series</h1>
      {/* <Header/> */}
      <NetflixSeries/>
      {/* <Footer/> */}
    </section>
  )
}

export default App


