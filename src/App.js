import Nav from "./components/nav"
import Main from "./components/main"
import Projects from "./components/projects"
import Footer from './components/footer'

let App = () => {
  return (
    <div className="bg-zinc-900 text-white h-full px-12 w-full flex flex-col items-center">
      <Nav/>
      <div className="max-w-screen-xl">
        <Main/>
        <Projects/>
        <Footer/>
      </div>
      </div>
  )
}

export default App;
