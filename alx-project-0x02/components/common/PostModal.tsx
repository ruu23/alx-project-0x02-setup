import { type PostModalProps } from '@/interfaces/index'
import { useState } from 'react'

const PostModal: React.FC<PostModalProps> = ({ onSubmit, onClose }) =>{
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    function addCard(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        onSubmit({title, content})
        onClose()
    };
    return(
        <div>
            <form 
            className='border-2 border-[#FFD700] w-[20rem] h-[25rem] rounded p-5'
            onSubmit={addCard}>

            {/* title */}
            <div>
                <label className='text-2xl font-bold font-viaoda'>
                Title
                </label> <br />
                <input type="text" className='border' onChange={(event)=> setTitle(event.target.value)} /> <br />
            </div>

            {/* content */}
            <div className='py-[15px]'>
                <label className='font-bold font-viaoda'>
                content
                </label> <br />
                <input type="text" className='border' onChange={(event)=> setContent(event.target.value)}/> <br />
            </div>

            {/* Add button */}
            <div>
                <button 
                className='border rounded w-[5rem] h-[2rem] bg-[#FFD700] text-xl font-bold font-viaoda'
                type="submit">
                    Add
                </button>
            </div>
        </form>
        </div>
    )
}

export default PostModal;