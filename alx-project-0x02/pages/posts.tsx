import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    async function fetchData() {
        const res = await fetch("https://api.example.com")
        const data = await res.json()
    }
    return(
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default PostCard;