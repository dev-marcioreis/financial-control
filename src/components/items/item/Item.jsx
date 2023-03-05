import './item.css'
import { BsTrash } from 'react-icons/bs'
import { BsFillArrowUpCircleFill as Up, BsFillArrowDownCircleFill as Down } from 'react-icons/bs'

const Item = ( { item, onDelete } ) => {
  return (
    <>
        <section className='section item'>
          <div className='container'>
              <div className='item__info'>
                <span>{item.desc}</span>
                <span>{`R$ ${item.amount}`}</span>
                <span>{item.expense ? (<Down color="hsl(349, 98%, 58%)" />) : (<Up color="hsl(192, 98%, 47%)" />)}</span>
                <span className='btn'>{<BsTrash color="hsl(349, 98%, 58%)" onClick={() => onDelete(item.id)}/>}</span>
              </div>
          </div>
        </section>
    </>
  )
}

export default Item