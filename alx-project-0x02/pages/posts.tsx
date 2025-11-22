import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="m-10">
      <Header />
      <div className="p-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { 
    props: 
    { 
      posts, 
    }, 
  };
};
