import './cards.css'

const Cards = ( { title, icon, total, amount } ) => {
  return (
    <>
        <div className="cards flex">
          <div className="card-header flex">
            <h3>{title}</h3>
            <small>{icon}</small>
          </div>
          <div className='total flex'>
            <span>{total}</span>
            <span>{amount}</span>
          </div>
        </div>
    </>
  )
}

export default Cards