import { CardProps } from '@/interfaces/index'

const Card: React.FC<CardProps> = ({ title, content }) => {
    return(
        <div className='border border-dashed'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Card;