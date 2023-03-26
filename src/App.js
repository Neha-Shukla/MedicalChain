import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter } from 'react-router-dom'
import Routing from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <div >
        <Header />
        <Routing />
        <Footer />
      </div>
    </BrowserRouter>
  )
}