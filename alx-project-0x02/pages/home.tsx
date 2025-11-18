import Card from '@/components/common/Card'
import Header from '@/components/layout/Header'
const Home: React.FC = () =>{
    return(
        <div>
            <Header />
            <h1>Home Page</h1>
            {/* Container for the Cards */}
            <div className="flex flex-wrap justify-center">
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
        </div>
    )
}

export default Home;