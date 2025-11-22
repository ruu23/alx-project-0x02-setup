import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
    return(
        <div className="m-10 bg-[#fdf2ef]">
            <h2 className="text-2xl font-bold font-viaoda">{title}</h2>
            <p>{body}</p>
            <span>User ID: {userId}</span>
        </div>
    )
}

export default PostCard;