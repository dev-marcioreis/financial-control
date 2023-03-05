import Item from './item/Item'
import './items.css'

const Items = ( { items, setItems } ) => {
  return (
    <>
        <section className='section items'>
          <div className='container'>
              <table className='table'>
                  <thead className='table-head'>
                      <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th></th>
                      </tr>
                  </thead>
                  <tbody className='table-body'>
                    {
                      items?.map((item, index) => (<Item key={index} item={item} />))
                    }
                  </tbody>
              </table>
          </div>
        </section>
    </>
  )
}

export default Items