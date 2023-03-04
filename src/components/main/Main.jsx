import Cards from '../cards/Cards'
import './main.css'
import { AiOutlineArrowUp as Up, AiOutlineArrowDown as Down } from 'react-icons/ai'
import { TbPigMoney as Money } from 'react-icons/tb'

const Main = () => {
  return (
    <>
        <section className="section main">
            <div className="container">
              <div className='credit'>
                <Cards title='crédito' icon={<Up />} total='total' amount='100,00' />
              </div>
              <div className='debit'>
                <Cards title='débito' icon={<Down />} total='total' amount='100,00' />
              </div>
              <div className='total'>
                <Cards title='total' icon={<Money />} total='total' amount='100,00' />
              </div>
            </div>
        </section>
    </>
  )
}

export default Main