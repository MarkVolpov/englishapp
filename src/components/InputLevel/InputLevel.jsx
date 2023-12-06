
import Button from '../UI/Button/Button'
import './InputLevel.scss'
import { useForm } from "react-hook-form"


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


   
    return(
        <>
            <form onSubmit={handleSubmit(onLevelSubmit)} className = "formLevels">
                <label htmlFor="LevelA" className = "levelA">
                    <input className='LevelA'
                        {...register("level")}
                        type="radio"
                        name="level"
                        value="A1"
                        id="LevelA2"
                    />
                    Level A1
                    <input
                        {...register("level")}
                        type="radio"
                        name="level"
                        value="A2"
                        id="LevelA2"
                    />
                    Level A2
                    <br/>
                </label>
                <label htmlFor="LevelB" className='levelB'>
                    <input
                        {...register("level")}
                        type="radio"
                        name="level"
                        value="B1"
                        id="LevelB1"
                    />
                    Level B1
                    <input
                        {...register("level")}
                        type="radio"
                        name="level"
                        value="B1"
                        id="LevelB1"
                    />
                    Level B2
                    <br/>
                </label>
                <label htmlFor="LevelC" className = "levelC">
                    <input
                        {...register("level")}
                        type="radio"
                        name="level"
                        value="C1"
                        id="LevelC1"
                    />
                    Level C1
                    
                    <input
                        {...register("level")}
                        type="radio"
                        name="level"
                        value="C2"
                        id="LevelC2"
                    />
                    Level C2
                    <br/>
                    
                </label>
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
