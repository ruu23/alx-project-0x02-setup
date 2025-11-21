import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header'
import { CardProps } from '@/interfaces';
import { useState } from 'react';

const Home: React.FC = () =>{
    const [post, setPost] = useState<CardProps[]>([])

    function handleAddPost({ title, content}: CardProps) {
        const newPost: CardProps = {title, content}
        setPost([...post, newPost])
    }


    return(
        <div className="m-10">
            <Header />
            {/* Container for the Cards */}
            <div className='bg-[#fdf2ef] my-5'>
                <h1 className='text-center text-3xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]'>
                Our Cards
                </h1>
                <div className="my-5 p-3 flex gap-10 justify-center">
                    <Card 
                    title="First Dynamic Card" 
                    content="This content is passed via the 'content' prop. The component structure is reusable across the application."
                    />
                    <Card 
                    title="Reusable Component" 
                    content="We are demonstrating reusability by creating a second card with different text, all driven by props."
                    />
                    <Card 
                    title="Next.js & TypeScript" 
                    content="The component is strongly typed using the CardProps interface, ensuring type safety when passing data."
                    />
                    
                </div>
                <div className='my-5 p-3 flex gap-10 justify-center'>
                    {post.map((item, index) => (
                        <Card 
                            key={index}
                            title={item.title} 
                            content={item.content}
                        />
                        
                    ))}
                </div>
            </div>
            
            <div className='mx-5'>
                <PostModal onSubmit={handleAddPost} />
            </div>

        </div>
    )
}

export default Home;