import './cards.css'

const Cards = ( { title, icon, name, total } ) => {
  return (
    <>
        <article className="cards">
            <div className="cards__header">
              <h3>{title}</h3>
              <small>{icon}</small>
            </div>
            <div className='cards__total'>
              <span>{name}</span>
              <span>{total}</span>
            </div>
        </article>
    </>
  )
}

export default Cards