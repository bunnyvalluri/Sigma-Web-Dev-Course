/**
 * ==========================================================================
 * Sigma Web Development Course - Video 106
 * Topic: React Components, Props & JSX
 * File: App.jsx
 * 
 * Description:
 *   Creating reusable functional components, passing data via props, and JSX templating rules.
 * ==========================================================================
 */
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="card 1" description="card 1 desc" />
        <Card title="card 2" description="card 2 desc" />
        <Card title="card 3" description="card 3 desc" />
        <Card title="card 4" description="card 4 desc" />
      </div>
      <Footer />
    </>
  )
}

export default App
