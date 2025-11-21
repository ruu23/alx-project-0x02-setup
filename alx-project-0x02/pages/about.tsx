import Header from '@/components/layout/Header'
const About: React.FC = () =>{
    return(
        <div className="m-10">
            <Header />
            <div className='bg-[#fdf2ef] h-[300px] shadow-lg'>
                <h1 className='text-[#FF5A5F] text-center text-5xl pt-[130px] [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]'>
                    About Page
                </h1>
            </div>
            
        </div>
    )
}

export default About;