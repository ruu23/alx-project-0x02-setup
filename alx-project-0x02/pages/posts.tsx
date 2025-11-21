import { PostProps } from "@/interfaces";
import Header from '@/components/layout/Header'
import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";

const Post: React.FC<PostProps> = () => {
    const [posts, setPosts]= useState<PostProps[]>([])
    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data: {
            userId: number;
            id: number;
            title: string;
            body: string;
            }[] = await res.json();

            const formatted: PostProps[] = data.map((post) => ({
            id: post.id,
            title: post.title,
            content: post.body,
            userId: post.userId,
            }));

            setPosts(formatted);
        }

        fetchPosts();
        }, []);

    return(
        <div className="m-10 ">
            <Header />
            <div className="p-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <PostCard 
                    key={post.id} title={post.title} content={post.content} userId={post.userId} id={post.id}/>
                ))}
            </div>
        </div>
    );
}

export default Post;