export default function PlayerControl() {
    return (
        <section id='player-control' className='relative py-24 px-4 overflow-hidden'>
            {/* Subtle fog/mist overlay */}
            <div className='pointer-events-none absolute inset-0 z-0'>
                <div className="absolute inset-0 bg-[url('/textures/fog-layer.png')] bg-cover bg-center opacity-30 animate-fog-move" />
            </div>
            <div className='max-w-4xl mx-auto relative z-10'>
                <h2 className='text-4xl md:text-5xl font-medieval text-center text-[#ffe066] mb-16 tracking-widest drop-shadow-glow uppercase'>Kontrol Pemain</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* Movement */}
                    <div className='flex flex-col items-center'>
                        <div className='flex gap-2 mb-2'>
                            <Key3D label='W' />
                        </div>
                        <div className='flex gap-2 mb-2'>
                            <Key3D label='A' />
                            <Key3D label='S' />
                            <Key3D label='D' />
                        </div>
                        <div className='text-white text-lg mt-2 font-light text-center'>
                            Gerakkan karakter: <span className='font-semibold text-[#ffe066]'>W</span> Atas, <span className='font-semibold text-[#ffe066]'>A</span> Kiri, <span className='font-semibold text-[#ffe066]'>S</span> Bawah, <span className='font-semibold text-[#ffe066]'>D</span> Kanan
                        </div>
                    </div>
                    {/* Attack */}
                    <div className='flex flex-col items-center'>
                        <div className='flex gap-2 mb-2'>
                            <Key3D label='Spasi' wide />
                        </div>
                        <div className='text-white text-lg mt-2 font-light text-center'>
                            Serang ke arah terakhir: <span className='font-semibold text-[#ffe066]'>Spasi</span>
                        </div>
                    </div>
                    {/* Panel & Upgrades */}
                    <div className='flex flex-col items-center'>
                        <div className='flex gap-2 mb-2'>
                            <Key3D label='U' />
                        </div>
                        <div className='text-white text-lg mt-2 font-light text-center'>
                            Buka/Tutup Panel Upgrade: <span className='font-semibold text-[#ffe066]'>U</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex gap-2 mb-2'>
                            <Key3D label='E' />
                            <Key3D label='R' />
                            <Key3D label='F' />
                            <Key3D label='T' />
                        </div>
                        <ul className='text-white text-lg mt-2 font-light text-center space-y-1'>
                            <li>
                                <span className='font-semibold text-[#ffe066]'>E</span> – Tambah Max HP
                            </li>
                            <li>
                                <span className='font-semibold text-[#ffe066]'>R</span> – Tingkatkan Serangan
                            </li>
                            <li>
                                <span className='font-semibold text-[#ffe066]'>F</span> – Pulihkan HP Penuh
                            </li>
                            <li>
                                <span className='font-semibold text-[#ffe066]'>T</span> – Tambah Kecepatan
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Sparkle particles */}
            <div className='pointer-events-none absolute inset-0 z-10'>
                <div className='absolute left-1/4 top-1/3 w-2 h-2 bg-[#ffe066] rounded-full opacity-60 animate-sparkle' />
                <div className='absolute right-1/4 bottom-1/4 w-1.5 h-1.5 bg-[#bfa14a] rounded-full opacity-40 animate-sparkle2' />
                <div className='absolute left-1/2 top-2/3 w-1 h-1 bg-[#fffbe6] rounded-full opacity-30 animate-sparkle3' />
            </div>
            <style jsx>{`
                .font-medieval {
                    font-family: 'MedievalSharp', 'Fredoka', 'Nunito', serif;
                }
                .drop-shadow-glow {
                    text-shadow: 0 0 12px #ffe066cc, 0 2px 8px #bfa14a88;
                }
                @keyframes fogMove {
                    0% {
                        background-position-x: 0;
                    }
                    100% {
                        background-position-x: 600px;
                    }
                }
                .animate-fog-move {
                    animation: fogMove 60s linear infinite;
                }
                @keyframes sparkle {
                    0%,
                    100% {
                        opacity: 0.6;
                        transform: translateY(0);
                    }
                    50% {
                        opacity: 1;
                        transform: translateY(-10px);
                    }
                }
                .animate-sparkle {
                    animation: sparkle 4s ease-in-out infinite;
                }
                @keyframes sparkle2 {
                    0%,
                    100% {
                        opacity: 0.4;
                        transform: translateX(0);
                    }
                    50% {
                        opacity: 0.8;
                        transform: translateX(8px);
                    }
                }
                .animate-sparkle2 {
                    animation: sparkle2 6s ease-in-out infinite;
                }
                @keyframes sparkle3 {
                    0%,
                    100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.7;
                        transform: scale(1.6);
                    }
                }
                .animate-sparkle3 {
                    animation: sparkle3 5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}

// 3D Key component with glow and hover effect
function Key3D({ label, wide = false }: { label: string; wide?: boolean }) {
    return (
        <span
            className={`
                relative inline-flex items-center justify-center
                ${wide ? 'w-24' : 'w-12'} h-12
                mx-1
                rounded-lg
                bg-gradient-to-b from-[#23203a] to-[#0d0b1f]
                shadow-[0_4px_24px_#ffe06644,0_1px_0_#bfa14a]
                border-b-4 border-[#bfa14a]
                text-2xl font-bold text-white
                transition-all duration-200
                outline-none
                cursor-pointer
                select-none
                key-3d
            `}
            tabIndex={0}
        >
            <span className='z-10'>{label}</span>
            {/* Glow effect */}
            <span className='absolute inset-0 rounded-lg pointer-events-none key-glow' />
            <style jsx>{`
                .key-3d {
                    box-shadow: 0 2px 8px #bfa14a55, 0 0px 0 #ffe066, 0 8px 24px #000a;
                    border-top: 1.5px solid #ffe06655;
                }
                .key-3d:active,
                .key-3d:focus,
                .key-3d:hover {
                    box-shadow: 0 0 24px #ffe066cc, 0 2px 8px #bfa14a88, 0 8px 24px #000a;
                    background: linear-gradient(180deg, #2d254a 0%, #18122b 100%);
                    color: #ffe066;
                }
                .key-glow {
                    background: radial-gradient(circle at 50% 60%, #ffe06644 0%, #0000 80%);
                    opacity: 0.7;
                    filter: blur(6px);
                    transition: opacity 0.2s;
                }
                .key-3d:active .key-glow,
                .key-3d:focus .key-glow,
                .key-3d:hover .key-glow {
                    opacity: 1;
                    filter: blur(10px);
                }
            `}</style>
        </span>
    );
}
