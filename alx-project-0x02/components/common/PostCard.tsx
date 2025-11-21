import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    async function fetchData() {
        const res = await fetch('api@example.com');
        const data = await res.json();
    }
    return(
        <div>
            
        </div>
    )
}

export default PostCard;