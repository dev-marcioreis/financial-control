import './header.css'
import { TbPigMoney as Money } from 'react-icons/tb'

const Header = () => {
  return (
    <>
        <section className="header flex">
            <div className="container">
              <h2><span><Money /></span> controle financeiro</h2>
            </div>
        </section>
    </>
  )
}

export default Header