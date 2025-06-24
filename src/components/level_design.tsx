export default function LevelDesign() {
    return (
        <section id='levels' className='relative py-24 px-4  overflow-hidden'>
            {/* Subtle fantasy background and magical particles */}
            <div className='pointer-events-none absolute inset-0 z-0'>
                <div className="absolute inset-0 bg-[url('/textures/fog-layer.png')] bg-cover bg-center opacity-20 animate-fog-move" />
                <div className='absolute left-1/4 top-1/3 w-2 h-2 bg-[#ffe066] rounded-full opacity-60 animate-sparkle' />
                <div className='absolute right-1/4 bottom-1/4 w-1.5 h-1.5 bg-[#bfa14a] rounded-full opacity-40 animate-sparkle2' />
                <div className='absolute left-1/2 top-2/3 w-1 h-1 bg-[#fffbe6] rounded-full opacity-30 animate-sparkle3' />
            </div>
            <div className='max-w-5xl mx-auto relative z-10'>
                <h2 className='text-5xl md:text-6xl font-medieval mb-20 text-center text-[#ffe066] flex items-center justify-center gap-3 uppercase drop-shadow-glow tracking-widest'>
                Level Design
                </h2>
                {/* Journey Map Path */}
                <div className='relative flex flex-col items-center'>
                    {/* Path line */}
                    <div className='absolute left-1/2 -translate-x-1/2 top-16 bottom-0 w-2 z-0'>
                        <svg width='4' height='100%' viewBox='0 0 4 1000' className='h-full w-full'>
                            <defs>
                                <linearGradient id='pathGlow' x1='0' y1='0' x2='0' y2='1'>
                                    <stop offset='0%' stopColor='#ffe066' stopOpacity='0.7' />
                                    <stop offset='100%' stopColor='#bfa14a' stopOpacity='0.2' />
                                </linearGradient>
                            </defs>
                            <rect x='0' y='0' width='4' height='1000' fill='url(#pathGlow)'>
                                <animate attributeName='height' from='0' to='1000' dur='2s' fill='freeze' />
                            </rect>
                        </svg>
                    </div>
                    {/* Level 1 */}
                    <LevelSection icon={<span className='text-red-500 text-4xl drop-shadow-glow'>🔥</span>} title='LEVEL 1: Penjara Api' subtitle='The Fire Prison' delay={0.1}>
                        {/* ...existing code... */}
                        <p className='mb-4'>Game ini terdiri dari 3 level utama yang masing-masing menawarkan nuansa visual, tantangan mekanik, dan cerita yang terus berkembang. Setiap level dirancang untuk meningkatkan kompleksitas gameplay dan memberikan pengalaman yang lebih dalam seiring progresi pemain.</p>
                        <hr className='my-4 border-t-2 border-[#ffe06655] glowing-divider' />
                        {/* ...existing code... */}
                        <ul className='list-disc ml-6'>
                            <li>
                                <b>Desain Arena:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>Lingkungan bawah tanah dengan lorong sempit dan bercahaya merah redup.</li>
                                    <li>Layout seperti labirin sederhana dengan cabang-cabang buntu dan satu jalan utama menuju boss.</li>
                                    <li>Beberapa peti tersebar di sudut untuk mendorong eksplorasi awal.</li>
                                </ul>
                            </li>
                            <li>
                                <b>Misi:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>Bertahan hidup dari serangan musuh awal.</li>
                                    <li>Mencari peti pertama untuk mendapatkan skill serangan.</li>
                                    <li>Mengalahkan mini-boss dan membuka gerbang ke level 2.</li>
                                </ul>
                            </li>
                            <li>
                                <b>Musuh:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>Cacing Api: Musuh dasar, jumlah 5–7, dengan gerakan lambat namun menyerang agresif.</li>
                                    <li>Penyihir Api I (Mini Boss): Sihir api area, HP rendah, skill terbatas.</li>
                                </ul>
                            </li>
                            <li>
                                <b>Item:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>1 Peti pembuka skill serangan</li>
                                    <li>2–3 item upgrade: HP Boost, EXP awal</li>
                                    <li>1 Gerbang keluar setelah boss dikalahkan</li>
                                </ul>
                            </li>
                        </ul>
                    </LevelSection>
                    {/* Magical footprints between levels */}
                    <div className='my-2 flex flex-col items-center z-10'>
                        <Footprints />
                    </div>
                    {/* Level 2 */}
                    <LevelSection icon={<span className='text-green-700 text-4xl drop-shadow-glow'>💀</span>} title='LEVEL 2: Selokan Terkutuk' subtitle='The Cursed Sewers' delay={0.3}>
                        {/* ...existing code... */}
                        <ul className='list-disc ml-6'>
                            <li>
                                <b>Desain Arena:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>Labirin selokan bercabang dengan tingkat platforming sederhana (turun-naik jalan).</li>
                                    <li>Lingkungan lembap, berlumut, dengan area tersembunyi.</li>
                                </ul>
                            </li>
                            <li>
                                <b>Misi:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>Eksplorasi dan bertahan dari kelompok musuh.</li>
                                    <li>Mengumpulkan 2 peti skill tambahan (AoE dan defense).</li>
                                    <li>Mengalahkan boss untuk naik ke permukaan.</li>
                                </ul>
                            </li>
                            <li>
                                <b>Musuh:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>Kerangka Hidup: Musuh melee, jumlah 3–5</li>
                                    <li>Jamur Beracun: Musuh stasioner, menyerang dengan kabut racun, jumlah 2–3</li>
                                    <li>Goblin: Musuh cepat dan menghindar, jumlah 3–4</li>
                                    <li>Mata Terbang: Mengikuti dari jarak jauh, menyerang dengan sinar</li>
                                </ul>
                            </li>
                            <li>
                                <b>Boss:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>Penyihir Kegelapan: Menggunakan sihir bayangan, memanggil musuh baru, bertarung dengan fase ganda (HP menurun → serangan lebih agresif)</li>
                                </ul>
                            </li>
                            <li>
                                <b>Item:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>2 Peti upgrade skill AoE & pertahanan</li>
                                    <li>1–2 item Heal</li>
                                    <li>1 Skill Point</li>
                                    <li>Gerbang ke level 3</li>
                                </ul>
                            </li>
                        </ul>
                    </LevelSection>
                    {/* Magical footprints between levels */}
                    <div className='my-2 flex flex-col items-center z-10'>
                        <Footprints />
                    </div>
                    {/* Level 3 */}
                    <LevelSection icon={<span className='text-yellow-600 text-4xl drop-shadow-glow'>🏰</span>} title='LEVEL 3: Benteng Raja Ksatria' subtitle="The Knight King's Fortress" delay={0.5}>
                        {/* ...existing code... */}
                        <ul className='list-disc ml-6'>
                            <li>
                                <b>Desain Arena:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>Arena terbuka semi-linear dengan banyak musuh elit.</li>
                                    <li>Terdapat halaman benteng dan lorong menuju ruang takhta.</li>
                                    <li>Desain simetris dengan dua jalur utama menuju boss area.</li>
                                </ul>
                            </li>
                            <li>
                                <b>Misi:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>Menaklukkan pasukan elit penjaga kastil.</li>
                                    <li>Mengambil peti terakhir untuk mendapatkan skill ultimate.</li>
                                    <li>Mengalahkan dua boss akhir dan mengakhiri kutukan.</li>
                                </ul>
                            </li>
                            <li>
                                <b>Musuh:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>Prajurit Elit Ksatria: Musuh melee kuat, bergerombol (jumlah 5–7)</li>
                                    <li>Penyihir Api II (Mini Boss): Versi lebih kuat dari level 1, sihir area besar</li>
                                    <li>Raja Ksatria (Final Boss): Serangan melee brutal, kombinasi cepat dan mematikan</li>
                                </ul>
                            </li>
                            <li>
                                <b>Item:</b>
                                <ul className='list-[circle] ml-6'>
                                    <li>1 Peti Skill Ultimate</li>
                                    <li>2 Heal besar</li>
                                    <li>1 EXP Gem</li>
                                    <li>1 Gerbang keluar (cutscene kemenangan)</li>
                                </ul>
                            </li>
                        </ul>
                    </LevelSection>
                </div>
            </div>
            <style jsx>{`
                .font-medieval {
                    font-family: 'MedievalSharp', 'Fredoka', 'Nunito', serif;
                }
                .drop-shadow-glow {
                    text-shadow: 0 0 12px #ffe066cc, 0 2px 8px #bfa14a88;
                }
                .glowing-divider {
                    box-shadow: 0 0 8px #ffe06688;
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
                .animate-glow {
                    animation: glowPulse 2.5s infinite alternate;
                }
                @keyframes glowPulse {
                    0% {
                        filter: drop-shadow(0 0 0 #ffe066);
                    }
                    100% {
                        filter: drop-shadow(0 0 16px #ffe066cc);
                    }
                }
            `}</style>
        </section>
    );
}

// LevelSection component for each level
function LevelSection({ icon, title, subtitle, children, delay = 0 }: { icon: React.ReactNode; title: string; subtitle: string; children: React.ReactNode; delay?: number }) {
    return (
        <div
            className='relative w-full max-w-2xl mx-auto mb-16 px-6 py-10 bg-gradient-to-br from-[#23203a]/80 to-[#18122b]/90 rounded-3xl shadow-[0_8px_40px_#000a] border-2 border-[#bfa14a55] backdrop-blur-xl animate-fade-in-up'
            style={{
                animationDelay: `${delay}s`,
            }}
        >
            <div className='flex items-center gap-4 mb-2'>
                <div>{icon}</div>
                <div>
                    <h3 className='font-medieval text-2xl md:text-3xl text-[#ffe066] drop-shadow-glow tracking-wider mb-0'>{title}</h3>
                    <div className='text-[#bfa14a] font-nunito text-base md:text-lg italic'>{subtitle}</div>
                </div>
            </div>
            <div className='mt-4 text-white font-nunito text-lg leading-relaxed'>{children}</div>
            {/* Decorative glowing divider */}
            <div className='absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-1 bg-gradient-to-r from-[#ffe06600] via-[#ffe06688] to-[#ffe06600] rounded-full blur-[2px] mt-6' />
        </div>
    );
}

// Footprints component for magical path between levels
function Footprints() {
    return (
        <svg width='32' height='48' viewBox='0 0 32 48' fill='none' className='opacity-70 animate-footstep-fade'>
            <ellipse cx='10' cy='10' rx='4' ry='7' fill='#ffe066' fillOpacity='0.18' />
            <ellipse cx='22' cy='24' rx='4' ry='7' fill='#ffe066' fillOpacity='0.13' />
            <ellipse cx='12' cy='38' rx='4' ry='7' fill='#ffe066' fillOpacity='0.09' />
            <style jsx>{`
                .animate-footstep-fade {
                    animation: footstepFade 2.5s cubic-bezier(0.4, 2, 0.6, 1) both;
                }
                @keyframes footstepFade {
                    0% {
                        opacity: 0;
                        transform: translateY(16px);
                    }
                    60% {
                        opacity: 0.7;
                    }
                    100% {
                        opacity: 0.7;
                        transform: none;
                    }
                }
            `}</style>
        </svg>
    );
}
