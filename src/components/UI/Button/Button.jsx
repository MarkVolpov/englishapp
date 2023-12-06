import './Button.scss'

const Button = (props) => {

    const { type, size, children} = props

    let classSize = ''
    

    switch (size) {
        case 'small':
            classSize = '--small'
            break
        case 'medium':
            classSize = '--medium'
            break
        case 'big':
            classSize = '--big'
            break
        default:
            classSize = '--medium'
     }

    let classType = ''
     
    const onButtonClick = () => {
        console.log('Button clicked')
    }   
        
    switch (type) {
        case 'submit':
            classType = 'submit'
            break
        case 'button':
            classType = 'button'
            
            break
        default:
            classType = 'button'
            onButtonClick
    }
    
    return (
        <button type={classType} className={`btn${classSize}`} onClick={classType === 'button' ? onButtonClick : undefined} >
            { children }
        </button>
    )
}

export default Button