import Cards from '../cards/Cards'
import './main.css'
import { AiOutlineArrowUp as Up, AiOutlineArrowDown as Down } from 'react-icons/ai'
import { TbPigMoney as Money } from 'react-icons/tb'

const Main = () => {
  return (
    <>
        <section className="section main">
            <div className="container flex">
                <Cards title='crédito' icon={<Up />} total='total' amount='100,00' />
                <Cards title='débito' icon={<Down />} total='total' amount='100,00' />
                <Cards title='total' icon={<Money />} total='total' amount='100,00' />
            </div>
        </section>
    </>
  )
}

export default Main