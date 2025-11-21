import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="m-10">
      <Header />
      <main className="bg-[#fdf2ef] h-[300px] shadow-lg">
        <h1 className="text-[#FF5A5F] text-center text-5xl pt-[130px] [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]"> 
          Welcome to Airbnb-clone Project 
        </h1>
      </main>
    </div>
  );
}
