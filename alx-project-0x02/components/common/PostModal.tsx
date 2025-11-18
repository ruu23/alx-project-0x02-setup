import { type PostModalProps } from '@/interfaces/index'

const PostModal: React.FC<PostModalProps> = ({ title, content }) =>{
    return(
        <form action="post" className='border border-2 grid grid-col-2'>
            <label htmlFor="">Title</label>
            <input type="text" className='border' />
            <label htmlFor="">content</label>
            <input type="text" className='border'/>
            <button>add</button>
        </form>
    )
}

export default PostModal;