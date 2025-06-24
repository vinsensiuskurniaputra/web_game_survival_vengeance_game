import Image from 'next/image';

export default function ArtUi() {
    return (
        <section id='art' className='py-24 px-4 relative'>
            <div className='max-w-6xl mx-auto animate-fade-in-up'>
                <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Art & UI Showcase</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {/* UI/Art placeholders */}
                    {[
                        { img: '/ui/1.png', alt: 'Forest Button' },
                        { img: '/ui/2.png', alt: 'Forest HUD' },
                        { img: '/ui/3.png', alt: 'Forest BG' },
                        { img: '/ui/4.png', alt: 'Forest Sprite' },
                        { img: '/ui/5.png', alt: 'Forest Sprite' },
                        { img: '/ui/6.png', alt: 'Forest Sprite' },
                        { img: '/ui/7.png', alt: 'Forest Sprite' },
                        { img: '/ui/8.png', alt: 'Forest Sprite' },
                        { img: '/ui/9.png', alt: 'Forest Sprite' },
                        { img: '/ui/10.png', alt: 'Forest Sprite' },
                        { img: '/ui/11.png', alt: 'Forest Sprite' },
                        { img: '/ui/12.png', alt: 'Forest Sprite' },
                        { img: '/ui/13.png', alt: 'Forest Sprite' },
                        { img: '/ui/14.png', alt: 'Forest Sprite' },
                        { img: '/ui/endgame.png', alt: 'Forest Sprite' },
                        { img: '/ui/upgradepanel.png', alt: 'Forest Sprite' },
                    ].map((item, i) => (
                        <div key={i} className='aspect-square bg-gradient-to-br from-yellow-100/80 to-yellow-900/90 rounded-lg flex items-center justify-center border-2 border-yellow-200/40 overflow-hidden shadow-lg backdrop-blur-md'>
                            <Image src={item.img} alt={item.alt} width={200} height={200} className='object-cover w-full h-full' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
