import Image from 'next/image';

export default function Hero() {
    return (
        <section id='team' className='py-24 px-4  relative'>
            <div className='max-w-6xl mx-auto animate-fade-in-up'>
                <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Our Team</h2>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* Example team member cards */}
                        {[
                            {
                                name: 'Alwan DannyLatif',
                                id: '3.34.23.2.03',
                                role: 'Asset collector & Game designer',
                                img: '/team/alwan.png',
                            },
                            {
                                name: 'Raditya Rafif P.S',
                                id: '3.34.23.2.18',
                                role: 'Programmer',
                                img: '/team/radit.png',
                            },
                            {
                                name: 'Vinsensius Kurnia P',
                                id: '3.34.23.2.24',
                                role: 'Programmer',
                                img: '/team/vinsen.png',
                            },
                            {
                                name: 'Yohanes Kevin G P',
                                id: '3.34.23.2.26',
                                role: 'Asset collector & Game designer',
                                img: '/team/kevin.png',
                            },
                        ].map((m, i) => (
                            <div key={i} className='bg-gradient-to-br from-[#d8f3dc]/80 to-[#b7e4c7]/90 p-6 rounded-2xl shadow-xl border border-green-200 relative overflow-hidden team-card backdrop-blur-md'>
                                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#09394A] bg-[url('/leaf-texture.jpg')] bg-cover">
                                    <Image src={m.img} alt={m.name} width={112} height={112} className='object-cover w-full h-full' />
                                </div>
                                <h3 className='text-xl font-bold text-center text-[#09394A] mb-1 font-fredoka'>{m.name}</h3>
                                <p className='text-center text-[#09394A] text-sm mb-1'>NIM: {m.id}</p>
                                <p className='text-center text-[#09394A] text-base font-semibold'>{m.role}</p>
                                <div className='absolute -bottom-4 -right-4 opacity-20 text-7xl text-green-300/30 pointer-events-none'>
                                    <span>🌲</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
