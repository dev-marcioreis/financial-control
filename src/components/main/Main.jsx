import Cards from '../cards/Cards'
import './main.css'
import { AiOutlineArrowUp as Up, AiOutlineArrowDown as Down } from 'react-icons/ai'
import { TbPigMoney as Money } from 'react-icons/tb'

const Main = ( { income, expense, total } ) => {
  return (
    <>
        <section className="section main">
            <div className="container">
              <div className='credit'>
                <Cards title='crédito' icon={<Up />} name='total' total={income} />
              </div>
              <div className='debit'>
                <Cards title='débito' icon={<Down />} name='total' total={expense} />
              </div>
              <div className='total'>
                <Cards title='total' icon={<Money />} name='total' total={total} />
              </div>
            </div>
        </section>
    </>
  )
}

export default Main