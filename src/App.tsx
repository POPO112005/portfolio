import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { ShapeGrid } from './components/ShapeGrid'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <ShapeGrid direction="diagonal" speed={0.4} squareSize={44} hoverTrailAmount={8} />
      </div>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
