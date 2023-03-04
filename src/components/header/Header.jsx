import './header.css'
import { TbPigMoney as Money } from 'react-icons/tb'

const Header = () => {
  return (
    <>
        <section className="header">
            <div className="container">
              <div className='logo'>
                <span><Money /></span>
                <h2>controle financeiro</h2>
              </div>
            </div>
        </section>
    </>
  )
}

export default Header