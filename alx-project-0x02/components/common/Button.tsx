import { type ButtonProps } from "@/interfaces";

const sizeClass = {
    small: 'text-sm', 
    medium: 'text-md', 
    large: 'text-lg'
}

const shapeClass = {
    'rounded-sm': 'rounded-sm', 
    'rounded-md': 'rounded-md', 
    'rounded-full': 'rounded-full'
}

const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
    return(
        <button 
            className={`bg-[#FF5A5F] p-2 mt-30 ${sizeClass[size]} ${shapeClass[shape]}`}>
            {children}
        </button>
    )
}

export default Button;