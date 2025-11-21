import { PostProps } from "@/interfaces";
import Header from '@/components/layout/Header'

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    async function fetchData() {
        const res = await fetch("https://api.example.com")
        const data = await res.json()
    }
    return(
        <div className="m-10">
            <Header />
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default PostCard;