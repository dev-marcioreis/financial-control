import './form.css'

const Form = () => {
  return (
    <>
        <section className="form">
            <div className="container">
                <div className='content flex'>
                    <div className="desciption flex">
                        <span>nome</span>
                        <input type="text" />
                    </div>
                    <div className="value flex">
                        <span>valor</span>
                        <input type="text" />
                    </div>
                    <div className="options flex">
                        <span>crédito</span>
                        <span>débito</span>
                    </div>
                    <button className='btn'>adicionar</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Form