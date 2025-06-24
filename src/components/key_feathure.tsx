export default function KeyFeatures() {
    return (
        <section id='key-features' className='relative py-24 px-4 overflow-hidden'>
            {/* Magical background particles */}
            <div className='pointer-events-none absolute inset-0 z-0'>
                <div className="absolute inset-0 bg-[url('/textures/fog-layer.png')] bg-cover bg-center opacity-20 animate-fog-move" />
                <div className='absolute left-1/4 top-1/3 w-2 h-2 bg-[#ffe066] rounded-full opacity-60 animate-sparkle' />
                <div className='absolute right-1/4 bottom-1/4 w-1.5 h-1.5 bg-[#bfa14a] rounded-full opacity-40 animate-sparkle2' />
                <div className='absolute left-1/2 top-2/3 w-1 h-1 bg-[#fffbe6] rounded-full opacity-30 animate-sparkle3' />
            </div>
            <div className='max-w-5xl mx-auto relative z-10'>
                <h2 className='text-5xl md:text-6xl font-medieval mb-16 text-center text-[#ffe066] flex items-center justify-center gap-2 uppercase drop-shadow-glow tracking-widest'>
                    <span className='inline-block animate-glow'>✨</span> Key Features
                </h2>
                <p className='text-[#e0e0e0] text-lg font-nunito text-center mb-12 max-w-2xl mx-auto'>Game ini memiliki sejumlah elemen gameplay penting yang menjadi inti pengalaman bermain. Setiap fitur dirancang untuk memberikan tantangan, strategi, dan kepuasan progres kepada pemain.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {/* Feature 1 */}
                    <FeatureCard icon='❤️' title='1. Nyawa (Health System)' delay={0.1}>
                        <ul className='list-disc'>
                            <li>Pemain memiliki Max Health dan Current Health.</li>
                            <li>Ditampilkan melalui Health Bar.</li>
                            <li>Jika Health mencapai 0, maka pemain kalah (Game Over).</li>
                            <li>Nyawa bisa ditingkatkan melalui upgrade item atau EXP.</li>
                            <li>Pemain dapat menyembuhkan diri menggunakan item tertentu atau melalui Upgrade Heal Full.</li>
                        </ul>
                    </FeatureCard>
                    {/* Feature 2 */}
                    <FeatureCard icon='⏳' title='2. Waktu (Time System)' delay={0.2}>
                        <ul className='list-disc'>
                            <li>Tidak menggunakan sistem waktu terbatas.</li>
                            <li>Pemain dapat menyelesaikan setiap level dengan kecepatan masing-masing.</li>
                            <li>Namun, desain level yang semakin kompleks mendorong pemain untuk bermain dengan efisien dan strategis.</li>
                        </ul>
                    </FeatureCard>
                    {/* Feature 3 */}
                    <FeatureCard icon='⚔️' title='3. Serangan dan Skill' delay={0.3}>
                        <ul className='list-disc'>
                            <li>Pemain memiliki serangan jarak dekat (melee) sebagai skill dasar.</li>
                            <li>
                                Setiap peti di level akan memberikan upgrade baru, seperti:
                                <ul>
                                    <li>Serangan Area (AoE)</li>
                                    <li>Skill Ultimate</li>
                                    <li>Boost stat sementara</li>
                                </ul>
                            </li>
                            <li>Pemain dapat melakukan serangan spesial dengan efek visual (melalui tombol spasi).</li>
                        </ul>
                    </FeatureCard>
                    {/* Feature 4 */}
                    <FeatureCard icon='💎' title='4. EXP & Sistem Pengembangan Karakter' delay={0.4}>
                        <ul className='list-disc'>
                            <li>
                                Pemain mengumpulkan EXP dari:
                                <ul>
                                    <li>Mengalahkan musuh</li>
                                    <li>Mengambil peti tertentu</li>
                                </ul>
                            </li>
                            <li>
                                EXP dapat digunakan untuk:
                                <ul>
                                    <li>Upgrade Max HP</li>
                                    <li>Upgrade Attack Power</li>
                                    <li>Upgrade Speed</li>
                                    <li>Heal instan (mengisi nyawa penuh)</li>
                                </ul>
                            </li>
                        </ul>
                    </FeatureCard>
                    {/* Feature 5 */}
                    <FeatureCard icon='👑' title='5. Boss dan Mini Boss' delay={0.5}>
                        <ul className='list-disc'>
                            <li>Setiap level memiliki boss dengan HP tinggi, pola serangan unik, dan membutuhkan strategi khusus.</li>
                            <li>Kemenangan atas boss menjadi syarat wajib untuk naik ke level berikutnya.</li>
                        </ul>
                    </FeatureCard>
                    {/* Feature 6 */}
                    <FeatureCard icon='🤖' title='6. Sistem AI Musuh' delay={0.6}>
                        <ul className='list-disc'>
                            <li>
                                Musuh memiliki kecerdasan sederhana:
                                <ul>
                                    <li>Mengejar pemain</li>
                                    <li>Menyerang saat dekat</li>
                                </ul>
                            </li>
                            <li>Memberikan pengalaman dinamis dan menantang.</li>
                        </ul>
                    </FeatureCard>
                    {/* Feature 7 */}
                    <FeatureCard icon='🏆' title='7. Kemenangan & Kekalahan' delay={0.7}>
                        <ul className='list-disc'>
                            <li>Pemain menang jika berhasil mengalahkan seluruh boss dan menyelesaikan semua level.</li>
                            <li>
                                Pemain kalah jika:
                                <ul>
                                    <li>Nyawa habis</li>
                                    <li>Terjebak dan tidak bisa melanjutkan (jika kehabisan upgrade penting)</li>
                                </ul>
                            </li>
                        </ul>
                    </FeatureCard>
                </div>
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

// FeatureCard component for animated, glowing feature panels
function FeatureCard({ icon, title, children, delay = 0 }: { icon: string; title: string; children: React.ReactNode; delay?: number }) {
    return (
        <div
            className='relative bg-gradient-to-br from-[#23203a]/80 to-[#18122b]/90 rounded-3xl shadow-[0_8px_40px_#000a] border-2 border-[#bfa14a55] backdrop-blur-xl px-7 py-8 mb-4 animate-feature-card group'
            style={{
                animationDelay: `${delay}s`,
            }}
            tabIndex={0}
        >
            <div className='flex items-center gap-4 mb-2'>
                <span className='text-3xl md:text-4xl drop-shadow-glow group-hover:scale-110 group-hover:drop-shadow-glow2 transition-transform duration-200'>{icon}</span>
                <h3 className='font-medieval text-xl md:text-2xl text-[#ffe066] drop-shadow-glow tracking-wider mb-0'>{title}</h3>
            </div>
            <div className='text-[#e0e0e0] font-nunito text-base md:text-lg leading-relaxed'>{children}</div>
            {/* Decorative divider */}
            <div className='my-4 flex justify-center'>
                <svg width='80' height='8' viewBox='0 0 80 8' fill='none'>
                    <rect x='0' y='3' width='80' height='2' rx='1' fill='#ffe066' fillOpacity='0.18' />
                    <ellipse cx='40' cy='4' rx='4' ry='4' fill='#ffe066' fillOpacity='0.35' />
                </svg>
            </div>
            <style jsx>{`
                .animate-feature-card {
                    opacity: 0;
                    transform: translateY(40px) scale(0.98);
                    animation: fadeInUpFeature 0.9s cubic-bezier(0.4, 2, 0.6, 1) forwards;
                }
                @keyframes fadeInUpFeature {
                    to {
                        opacity: 1;
                        transform: none;
                        box-shadow: 0 8px 40px #000a, 0 0 24px #ffe06644;
                    }
                }
                .group:focus-within,
                .group:hover {
                    box-shadow: 0 12px 48px #000c, 0 0 32px #ffe06677;
                    border-color: #ffe066cc;
                }
                .drop-shadow-glow2 {
                    text-shadow: 0 0 24px #ffe066cc, 0 2px 8px #bfa14a88;
                }
            `}</style>
        </div>
    );
}
