import Cards from '../cards/Cards'
import './main.css'

const Main = () => {
  return (
    <>
        <section className="section main">
            <div className="container flex">
                <Cards />
                <Cards />
                <Cards />
            </div>
        </section>
    </>
  )
}

export default Main