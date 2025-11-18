import { type PostModalProps } from '@/interfaces/index'

const PostModal: React.FC<PostModalProps> = ({ title, content }) =>{
    return(
        <form action="post">
            <label htmlFor="">Title</label>
            <input type="text" />
            <label htmlFor="">content</label>
            <input type="text" />
            <button>add</button>
        </form>
    )
}

export default PostModal;