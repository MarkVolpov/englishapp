import { useForm } from "react-hook-form"

import Button from '../UI/Button/Button'
import InputRadio from '../UI/InputRadio/InputRadio'
import { levels } from './constants'
import './InputLevel.scss'


const InputLevel = () => {

    const {
        register,
        // control,
        handleSubmit
    } = useForm()

    const onLevelSubmit = (dataForm) => {

        if(dataForm.level === null){
            alert('Choose your english level')
        }else{
         console.log(dataForm)
        }
    }

    const onChange = (event) => {
        console.log(eventTarget.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit(onLevelSubmit)} className = "formLevels">

                <div className="formLevels__list">
                    {
                        levels.map((item)=> {
                            return (
                                <InputRadio
                                    label={item.label}
                                    value={item.value}
                                    name='level'
                                    permission={item.permission}
                                    onChange={onChange}
                                    {...register("level")}
                                />
                            )
                        })
                    }
                </div>


                <Button type='submit' size='big'>
                    Enter
                </Button>
                <Button type='button' size='medium' >
                    Button
                </Button>
                <Button type='button' disabled size='small'>
                    Dis
                </Button>
            </form>
        </>
    )

}



export default InputLevel
