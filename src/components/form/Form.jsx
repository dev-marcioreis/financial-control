import { useState } from 'react'
import './form.css'

const Form = ( { handleAdd } ) => {

    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [expense, setExpense] = useState(false)

    const generateID = () => Math.round(Math.random() * 1000)

    const handleSave = () => {
        if (!desc || !amount) {
            alert('Informe o nome e o valor.')
            return;
        } else if (amount < 1) {
            alert('O valor deve ser maior que 0.')
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: expense
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

  return (
    <>
        <section className="form">
            <div className="container">
                <div className='form__content'>
                    <div className="desciption">
                        <label>nome</label>
                        <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
                    </div>
                    <div className="value">
                        <label>valor</label>
                        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                    </div>
                    <div className='options'>
                        <input type="radio" name="option" id="iscredit" value="C"  defaultChecked onChange={() => setExpense(!expense)} />
                        <label htmlFor='iscredit'>Crédito</label>

                        <input type="radio" name="option" id="isdebit" value="D" onChange={() => setExpense(!expense)} />
                        <label htmlFor='isdebit'>Débito</label>
                    </div>
                    <button className='btn' onClick={handleSave} >adicionar</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Form