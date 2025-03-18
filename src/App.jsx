import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return <>
  <div class="fixed -z-10 min-h-screen w-full bg-black [&>div]:absolute [&>div]:left-0 [&>div]:right-0 [&>div]:top-[-10%] [&>div]:h-[1000px] [&>div]:w-[1000px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>


    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  </>
}

export default App
