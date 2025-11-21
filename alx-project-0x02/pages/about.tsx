import Header from '@/components/layout/Header'
import Button from '@/components/common/Button';

const About: React.FC = () =>{
    return(
        <div className="m-10">
            <Header />
            <div className='bg-[#fdf2ef] h-[400px] shadow-lg'>
                <h1 className='text-[#FF5A5F] text-center text-5xl pt-[130px] [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]'>
                    About Page
                </h1>
                <div className='flex gap-4 ml-100'>
                    <Button size='small' shape='rounded-sm'>Small & Rounded-Small</Button>
                    <Button size='medium' shape='rounded-md'>Medium & Rounded-Md</Button>
                    <Button size='large' shape='rounded-full'>Large & Rounded-Full</Button>
                </div>
            </div>
        </div>
    )
}

export default About;