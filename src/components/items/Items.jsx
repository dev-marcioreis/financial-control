import Item from './item/Item'
import './items.css'

const Items = ( { items, setItems } ) => {

  const onDelete = ID => {

    const newArray = items.filter(transaction => transaction.id !== ID);
    setItems(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray))

  };

  return (
    <>
        <section className='section items'>
              <div className='items__info'>
                <span>descrição</span>
                <span>valor</span>
                <span>tipo</span>
                <span>deletar?</span>
              </div>
                {
                  items?.map((item, index) => (<Item key={index} item={item} onDelete={onDelete} />))
                }
        </section>
    </>
  )
}

export default Items