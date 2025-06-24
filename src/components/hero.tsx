import Link from "next/link";

export default function Hero() {
    
    return (
        <section id='hero' className='relative h-screen flex items-center justify-center text-center pt-28 md:pt-0 '>
            <div className='relative z-10 flex flex-col items-center justify-center w-full animate-fade-in-up'>
                <h1 className='font-extrabold text-5xl md:text-7xl lg:text-8xl mb-4 tracking-tight text-transparent bg-[#09394A] bg-clip-text drop-shadow-[0_4px_32px_rgba(9,57,74,0.18)] font-fredoka uppercase'>Survival Vengeance</h1>
                <p className='text-2xl md:text-3xl mb-8 text-[#09394A] font-semibold drop-shadow-md animate-fade-in font-nunito'>Survive the wild. Uncover the secrets. Avenge the fallen.</p>
                <Link href='/game/index.html' className='inline-block px-10 py-4 rounded-full bg-gradient-to-br from-[#e3f6fd] via-[#b7e4c7] to-[#f6fbe9] shadow-xl hover:scale-105 hover:shadow-[#09394A]/40 transition-all border-2 border-[#09394A]/20 font-bold text-xl text-[#09394A] tracking-wider glow-crypto relative'>
                    Play Now
                </Link>
            </div>
            {/* Optional glowing grid/space effect */}
            <div className="absolute inset-0 z-0 bg-[url('/grid-glow.png')] bg-cover bg-center opacity-20 pointer-events-none" />
        </section>
    );
}