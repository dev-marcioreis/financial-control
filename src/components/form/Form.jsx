import './form.css'

const Form = () => {
  return (
    <>
        <section className="form">
            <div className="container">
                <div className='form__content'>
                    <div className="desciption">
                        <span>nome</span>
                        <input type="text" />
                    </div>
                    <div className="value">
                        <span>valor</span>
                        <input type="text" />
                    </div>
                    <div className='options'>
                        <input type="radio" name="option" id="iscredit" value="C" />
                        <label htmlFor='iscredit'>Crédito</label>

                        <input type="radio" name="option" id="isdebit" value="D" />
                        <label htmlFor='isdebit'>Débito</label>
                    </div>
                    <button className='btn'>adicionar</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Form