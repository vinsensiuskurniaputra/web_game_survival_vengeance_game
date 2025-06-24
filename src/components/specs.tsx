export default function Specs() {
    return (
        <section id='specs' className='py-24 px-4 relative'>
            <div className='max-w-4xl mx-auto animate-fade-in-up'>
                <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Game Specifications</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
                    <div className='flex flex-col items-center bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 rounded-xl p-6 shadow-lg border border-green-200 backdrop-blur-md'>
                        <span className='text-3xl mb-2'>🌿</span>
                        <h3 className='font-semibold mb-1 text-[#09394A]'>Genre</h3>
                        <p className='text-[#09394A]'>Action, Roguelike, Indie, Top-Down Shooter</p>
                    </div>
                    <div className='flex flex-col items-center bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 rounded-xl p-6 shadow-lg border border-green-200 backdrop-blur-md'>
                        <span className='text-3xl mb-2'>🖥️</span>
                        <h3 className='font-semibold mb-1 text-[#09394A]'>Platform</h3>
                        <p className='text-[#09394A]'>PC / Web Browser</p>
                    </div>
                    <div className='flex flex-col items-center bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 rounded-xl p-6 shadow-lg border border-green-200 backdrop-blur-md'>
                        <span className='text-3xl mb-2'>👤</span>
                        <h3 className='font-semibold mb-1 text-[#09394A]'>Players</h3>
                        <p className='text-[#09394A]'>Single Player</p>
                    </div>
                    <div className='flex flex-col items-center bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 rounded-xl p-6 shadow-lg border border-green-200 backdrop-blur-md'>
                        <span className='text-3xl mb-2'>🔞</span>
                        <h3 className='font-semibold mb-1 text-[#09394A]'>Age Rating</h3>
                        <p className='text-[#09394A]'>16+ (Remaja)</p>
                    </div>
                    <div className='flex flex-col items-center bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 rounded-xl p-6 shadow-lg border border-green-200 backdrop-blur-md'>
                        <span className='text-3xl mb-2'>⌨️🖱️</span>
                        <h3 className='font-semibold mb-1 text-[#09394A]'>Controls</h3>
                        <p className='text-[#09394A]'>WASD, E, Space</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
