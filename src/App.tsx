import { CustomerLogos } from "./component/customer-logos"
import { Header } from "./component/header"
import { Hero } from "./component/hero"

function App() {

  return (
    <div className="w-[100vw] h-[100vh]">
        <Header></Header>
        <Hero></Hero>
        <CustomerLogos></CustomerLogos>
    </div>
  )
}

export default App
