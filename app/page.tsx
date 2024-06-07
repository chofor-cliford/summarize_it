import Demo from "@/components/shared/Demo"
import Hero from "@/components/shared/Hero"

const Home = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default Home