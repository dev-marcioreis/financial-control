import './cards.css'

const Cards = ( { title, icon, total, amount } ) => {
  return (
    <>
        <article className="cards">
            <div className="cards__header">
              <h3>{title}</h3>
              <small>{icon}</small>
            </div>
            <div className='cards__total'>
              <span>{total}</span>
              <span>{amount}</span>
            </div>
        </article>
    </>
  )
}

export default Cards