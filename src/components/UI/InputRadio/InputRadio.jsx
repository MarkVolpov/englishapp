import { useId } from "react"
import './InputRadio.scss'

const InputRadio = (props) => {

    const {
        name,
        value,
        label,
        ...arg

    } = props

    const id = useId()

    return (
        <label className='inputRadio' htmlFor={id}>
            {label}
            <input
                id={id}
                type='radio'
                name={name}
                value={value}
                {...arg}
            />
        </label>

    )
}

export default InputRadio