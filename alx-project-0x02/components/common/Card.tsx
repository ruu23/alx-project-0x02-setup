import { type CardProps } from '@/interfaces/index'

const Card: React.FC<CardProps> = ({ title, content }) => {
    return(
        <div className='border-2 border-[#FFD700] bg-white w-[20rem] h-[25rem] rounded p-5'>
            <h1 className='text-2xl text-center font-bold mb-5 font-viaoda'>{title}</h1>
            <p className=''>{content}</p>
        </div>
    )
}

export default Card;