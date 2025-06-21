import Image from 'next/image';
import { Nunito, Fredoka } from 'next/font/google';
import Link from 'next/link';
import { FaLeaf, FaPaw, FaGamepad, FaUsers, FaTree, FaScroll, FaMagic, FaMap, FaEye, FaFeatherAlt } from 'react-icons/fa';
import { GiWoodenSign, GiForest, GiHerbsBundle, GiBearFace, GiStoneAxe, GiTreeDoor, GiRiver, GiCaveEntrance, GiSpiralBottle, GiAncientSword, GiWolfHowl } from 'react-icons/gi';
import { useEffect, useRef } from 'react';

const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
    display: 'swap',
    weight: ['400', '700', '900'],
});
const fredoka = Fredoka({
    subsets: ['latin'],
    variable: '--font-fredoka',
    display: 'swap',
    weight: ['700'],
});

const PARALLAX_BG = [
    '/parallax/sky-fog.png', // Distant background
    '/parallax/forest-trees.png', // Midground
    '/parallax/ground-foreground.png', // Foreground
];

export default function Home() {
    // Parallax refs
    const bgRef = useRef<HTMLDivElement>(null);
    const midRef = useRef<HTMLDivElement>(null);
    const fgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (bgRef.current) bgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
            if (midRef.current) midRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
            if (fgRef.current) fgRef.current.style.transform = `translateY(${scrollY * 0.7}px)`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`bg-[#B1ECEA] min-h-screen text-[#09394A] font-sans overflow-x-hidden ${nunito.className} ${fredoka.className}`}>
            {/* Parallax Layers */}
            <div aria-hidden className='fixed inset-0 z-0 pointer-events-none select-none'>
                {/* Distant background */}
                <div ref={bgRef} className="absolute inset-0 w-full h-full bg-[url('/parallax/sky-fog.png')] bg-cover bg-center bg-fixed opacity-70 mix-blend-lighten will-change-transform transition-transform duration-200" />
                {/* Midground trees */}
                <div ref={midRef} className="absolute inset-0 w-full h-full bg-[url('/parallax/forest-trees.png')] bg-cover bg-center bg-fixed opacity-80 will-change-transform transition-transform duration-200" />
                {/* Foreground foliage */}
                <div ref={fgRef} className="absolute inset-0 w-full h-full bg-[url('/parallax/ground-foreground.png')] bg-cover bg-bottom bg-fixed opacity-90 will-change-transform transition-transform duration-200" />
            </div>

            {/* Sticky Navbar */}
            <nav className='fixed mx-auto top-0 left-0 right-0 w-fit z-30 bg-white backdrop-blur-md py-4 px-6 flex items-center justify-between border-b border-[#09394A]/10 shadow-lg rounded-b-3xl'>
                <div className='flex gap-4 text-base'>
                    {[
                        { href: '#hero', label: 'Home' },
                        { href: '#team', label: 'Team' },
                        { href: '#specs', label: 'Specs' },
                        { href: '#features', label: 'Features' },
                        { href: '#story', label: 'Story' },
                        { href: '#levels', label: 'Levels' },
                        { href: '#ai', label: 'AI' },
                        { href: '#art', label: 'Art/UI' },
                    ].map((item, i) => (
                        <a key={i} href={item.href} className='rounded-full px-4 py-2 bg-white/70 text-[#09394A] font-bold shadow-md border border-[#09394A]/20 hover:bg-[#e3f6fd] hover:text-[#09394A] transition-all focus:outline-[#09394A]/80 focus:ring-2 focus:ring-[#09394A]/30'>
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Hero Section */}
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

            {/* Team Members */}
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
                                    img: '/team/vinsen.png',
                                },
                                {
                                    name: 'Raditya Rafif P.S',
                                    id: '3.34.23.2.18',
                                    role: 'Programmer',
                                    img: '/team/vinsen.png',
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
                                    img: '/team/vinsen.png',
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

            {/* Judul dan Makna */}
            <section id='judul-dan-makna' className='py-24 px-4 flex items-center justify-center relative'>
                <div className='max-w-3xl w-full mx-auto bg-gradient-to-br from-[#f6fbe9]/80 to-[#e3f6fd]/90 rounded-2xl shadow-2xl border-2 border-green-200 p-10 relative prose prose-invert text-lg text-center font-nunito text-[#09394A] animate-fade-in-up backdrop-blur-xl'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-[#09394A] font-fredoka uppercase'>Judul & Makna</h2>
                    <p>Judul "Survival Vengeance" dipilih karena menggambarkan inti dari permainan, yaitu perjuangan karakter utama, Axel Pace, untuk bertahan hidup (Survival) sambil menuntut balas (Vengeance) atas eksperimen misterius yang mengubah manusia menjadi monster. Kata "Survival" mencerminkan mode utama permainan di mana pemain harus terus hidup melawan gelombang musuh. Sementara itu, "Vengeance" menunjukkan motivasi emosional dari karakter utama yang berusaha mengungkap dan membalas penderitaan yang ia alami akibat eksperimen tersebut. Judul ini menggambarkan nuansa aksi dan ketegangan yang mendalam dalam perjalanan sang karakter di dunia yang kacau.</p>
                </div>
            </section>

            {/* Game Specification */}
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

            {/* Game Synopsis */}
            <section id='synopsis' className='py-24 px-4 flex items-center justify-center bg-[#09394A] relative'>
                <div className='max-w-3xl w-full mx-auto bg-gradient-to-br from-[#f6fbe9]/80 to-[#e3f6fd]/90 rounded-2xl shadow-2xl border-2 border-green-200 p-10 relative prose prose-invert text-lg text-center font-nunito text-[#09394A] animate-fade-in-up backdrop-blur-xl'>
                    <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-5xl text-yellow-400 drop-shadow-lg'>📜</span>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-[#09394A] font-fredoka uppercase'>Sinopsis</h2>
                    <p>SURVIVAL VENGEANCE – Dikhianati dan dijadikan eksperimen. Kamu adalah Axel Pace, salah satu subjek percobaan yang berhasil melarikan diri dari sebuah menara penelitian yang kejam. Di dalam menara inilah keluargamu dijadikan kelinci percobaan oleh sang arsiteknya—sosok yang ironisnya pernah kau anggap sebagai 'keluarga', kini menjadi target utamamu. Kini, didorong oleh dendam yang membara dan harapan untuk menemukan sisa keluargamu yang mungkin masih hidup, kamu harus menyusup kembali dan menaklukkan setiap lantai tower yang penuh bahaya. Hadapi para penjaga bengis dan hasil eksperimen gagal lainnya. Ungkap kebenaran mengerikan di balik takdir keluargamu dan ambisi gila sang pencipta tower. Pembalasan dendam menantimu di puncak, begitu juga jawaban yang selama ini kau cari.</p>
                </div>
            </section>

            {/* Gameplay Features */}
            <section id='features' className='py-24 px-4 bg-[#f6fbe9] relative'>
                <div className='max-w-6xl mx-auto animate-fade-in-up'>
                    <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Gameplay Features</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Bertahan Hidup dari Serangan Gelombang Musuh</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>Pemain harus menghadapi gelombang demi gelombang musuh yang semakin kuat dan banyak. Tantangan yang terus meningkat memberikan sensasi tegang dan memacu adrenalin.</p>
                        </div>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Mengumpulkan Power-Up</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>etiap musuh yang dikalahkan berpotensi menjatuhkan power-up. Pemain harus memilih dan memanfaatkan item dengan bijak untuk bertahan lebih lama.</p>
                        </div>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Upgrade Karakter Secara Progresif</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>Pemain bisa meningkatkan statistik karakter seperti damage, kecepatan, pertahanan, dan jangkauan serangan melalui EXP yang didapat. Progres karakter yang terasa membuat pemain merasa semakin kuat.</p>
                        </div>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Membuat Strategi Build yang Efektif</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>Pemain diajak berpikir cepat dan merancang strategi build dari senjata dan skill yang tersedia secara acak. Setiap keputusan memengaruhi peluang bertahan hidup.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section id='story' className='py-24 px-4 flex items-center justify-center bg-[#09394A] relative'>
                <div className='max-w-3xl w-full mx-auto bg-gradient-to-br from-[#f6fbe9]/80 to-[#e3f6fd]/90 rounded-2xl shadow-2xl border-2 border-green-200 p-10 relative prose prose-invert text-lg text-green-900 font-nunito animate-fade-in-up backdrop-blur-xl'>
                    <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-5xl text-green-400 drop-shadow-lg'>🌲</span>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-[#09394A] font-fredoka uppercase'>Cerita</h2>
                    <p>Premis Cerita: Kebangkitan Sang Ksatria Seorang ksatria terperangkap di dasar kastil yang telah jatuh ke tangan kegelapan, tanpa kekuatan dan ingatan. Dipimpin oleh Raja Ksatria yang korup dan para penyihirnya, kejahatan kini merajalela. Perjalanan untuk merebut kembali takhta dimulai dari titik terendah. Kekuatan sejati tersembunyi di dalam peti-peti pusaka, dan setiap musuh yang dikalahkan adalah langkah untuk menjadi lebih kuat.</p>
                    <p className='pt-6'>Level 1: Penjara Api (The Fire Prison) Cerita: Perjalanan dimulai di sel penjara yang dingin dan gelap. Lorong-lorong sempit dipenuhi oleh Cacing Api yang ganas, makhluk pertama yang harus dihadapi. Tujuan awal adalah bertahan hidup dan mencari jalan keluar dari labirin bawah tanah ini. Mekanik Inti: Pemain harus menemukan peti pertama untuk membuka skill dasar serangan. Mengalahkan setiap Cacing Api akan meningkatkan stat secara perlahan, mengubah sang ksatria dari seorang tahanan lemah menjadi pejuang yang mampu melawan. Boss: Di ujung jalan keluar, seorang Penyihir pertama menghalangi jalan. Ia adalah sipir penjara ini, menggunakan sihir api sederhana sebagai ujian pertama bagi sang ksatria.</p>
                    <p className='pt-6'>Level 2: Selokan Terkutuk (The Cursed Sewers) Cerita: Setelah lolos dari penjara, sang ksatria jatuh ke sistem selokan kuno di bawah kastil. Ini adalah labirin lembap yang menjadi sarang bagi berbagai makhluk kegelapan: Kerangka yang bangkit kembali, Jamur beracun, gerombolan Goblin yang licik, dan Mata Terbang yang mengintai dari kegelapan. Mekanik Inti: Lingkungan yang lebih kompleks menuntut kekuatan baru. Peti-peti di level ini berisi skill area (AoE) dan kemampuan bertahan untuk menghadapi kerumunan musuh. Peningkatan stat kini terasa lebih signifikan untuk melawan musuh yang beragam. Boss: Jauh di dalam selokan, Penyihir Kegelapan yang lebih kuat menjaga akses ke permukaan. Ia menggunakan sihir bayangan dan mampu memanggil para mayat hidup, menjadi ujian taktik dan ketahanan bagi pemain.</p>
                    <p className='pt-6'>Level 3: Benteng Raja Ksatria (The Knight King's Fortress) Cerita: Berhasil mencapai permukaan, sang ksatria kini berada di halaman dan benteng utama yang semi-terbuka. Di bawah langit kelabu, pasukan elit Raja Ksatria menanti. Ini adalah pertempuran terakhir untuk merebut kembali kastil. Mekanik Inti: Pemain harus memanfaatkan semua skill dan stat yang telah dikumpulkan. Peti terakhir di level ini akan memberikan skill ultimate yang dahsyat, kunci untuk menghadapi ancaman puncak. Final Boss: Gerbang takhta dijaga oleh dua musuh terkuat: Penyihir Api: Tangan kanan sang raja, dengan sihir api yang jauh lebih mematikan. Raja Ksatria: Sang sumber kutukan, petarung fisik superior dengan persenjataan legendaris. Pemain harus mengalahkan keduanya untuk menamatkan permainan dan mengembalikan cahaya ke kerajaan.</p>
                </div>
            </section>

            {/* Level Design */}
            <section id='levels' className='py-24 px-4 bg-[#f6fbe9] relative'>
                <div className='max-w-6xl mx-auto animate-fade-in-up'>
                    <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>
                        <span className='text-green-400'>🗺️</span> Level Design
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {/* Level 1 */}
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-6 rounded-2xl shadow-xl flex flex-col items-center border border-green-200 backdrop-blur-md'>
                            <div className="aspect-video w-full bg-[url('/level1.jpg')] bg-cover bg-center rounded-lg mb-4 border-2 border-green-200/40" />
                            <h3 className='text-xl font-semibold mb-2 flex items-center gap-2 text-[#09394A] font-fredoka'>
                                <span className='text-green-400'>🌳</span> The Whispering Glade
                            </h3>
                            <p className='text-[#09394A] text-center'>Navigate dense undergrowth and avoid lurking predators as you search for clues to your tribe's fate.</p>
                        </div>
                        {/* Level 2 */}
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-6 rounded-2xl shadow-xl flex flex-col items-center border border-green-200 backdrop-blur-md'>
                            <div className="aspect-video w-full bg-[url('/level2.jpg')] bg-cover bg-center rounded-lg mb-4 border-2 border-green-200/40" />
                            <h3 className='text-xl font-semibold mb-2 flex items-center gap-2 text-[#09394A] font-fredoka'>
                                <span className='text-blue-400'>🌊</span> River of Echoes
                            </h3>
                            <p className='text-[#09394A] text-center'>Cross treacherous waters and solve ancient puzzles while evading the spirits that haunt the riverbanks.</p>
                        </div>
                        {/* Level 3 */}
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-6 rounded-2xl shadow-xl flex flex-col items-center border border-green-200 backdrop-blur-md'>
                            <div className="aspect-video w-full bg-[url('/level3.jpg')] bg-cover bg-center rounded-lg mb-4 border-2 border-green-200/40" />
                            <h3 className='text-xl font-semibold mb-2 flex items-center gap-2 text-[#09394A] font-fredoka'>
                                <span className='text-yellow-400'>🕳️</span> The Heart of Shadows
                            </h3>
                            <p className='text-[#09394A] text-center'>Descend into a labyrinthine cave, face the forest's ancient guardian, and uncover the truth behind the curse.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI System */}
            <section id='ai' className='py-24 px-4 flex items-center justify-center bg-[#09394A] relative'>
                <div className='max-w-3xl w-full mx-auto bg-gradient-to-br from-[#f6fbe9]/80 to-[#e3f6fd]/90 rounded-2xl shadow-2xl border-2 border-green-200 p-10 relative prose prose-invert text-lg text-green-900 font-nunito animate-fade-in-up backdrop-blur-xl'>
                    <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-5xl text-green-400 drop-shadow-lg'>🐾</span>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-[#09394A] font-fredoka uppercase'>AI System</h2>
                    <p>Enemies in the Forest of Vengeance are more than mere obstacles—they are cunning, adaptive, and alive. Wild animals stalk their prey, spirits set traps, and guardians learn from your actions. The AI responds to sound, scent, and movement, coordinating ambushes and retreating when outmatched. Each encounter is unique, ensuring no two journeys are ever the same.</p>
                </div>
            </section>

            {/* Art and UI Showcase */}
            <section id='art' className='py-24 px-4 bg-[#f6fbe9] relative'>
                <div className='max-w-6xl mx-auto animate-fade-in-up'>
                    <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>
                        <span className='text-green-400'>🎨</span> Art & UI Showcase
                    </h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                        {/* UI/Art placeholders */}
                        {[
                            { img: '/ui/button-forest.png', alt: 'Forest Button' },
                            { img: '/ui/hud-forest.png', alt: 'Forest HUD' },
                            { img: '/ui/bg-forest.png', alt: 'Forest BG' },
                            { img: '/ui/sprite-forest.png', alt: 'Forest Sprite' },
                        ].map((item, i) => (
                            <div key={i} className='aspect-square bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 rounded-lg flex items-center justify-center border-2 border-green-200/40 overflow-hidden shadow-lg backdrop-blur-md'>
                                <Image src={item.img} alt={item.alt} width={200} height={200} className='object-contain w-full h-full' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='py-8 px-4 bg-gradient-to-b from-[#e3f6fd]/90 to-[#f6fbe9]/95 text-center border-t border-[#09394A]/20'>
                <p className='text-[#09394A]'>© 2024 Forest of Vengeance. All rights reserved.</p>
            </footer>

            {/* Custom styles for animation and glassmorphism */}
            <style jsx global>{`
                html {
                    scroll-behavior: smooth;
                }
                .glow-crypto {
                    box-shadow: 0 0 32px 8px #09394a22, 0 0 0 2px #09394a22;
                }
                .team-card:hover {
                    box-shadow: 0 0 32px 8px #09394a22, 0 0 0 2px #09394a22;
                    transform: scale(1.03);
                    transition: all 0.2s;
                }
                .animate-fade-in-up {
                    opacity: 0;
                    transform: translateY(40px);
                    animation: fadeInUp 1s forwards;
                }
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: none;
                    }
                }
                .backdrop-blur-md {
                    backdrop-filter: blur(16px);
                }
                .backdrop-blur-xl {
                    backdrop-filter: blur(32px);
                }
                .font-fredoka {
                    font-family: 'Fredoka', 'Nunito', sans-serif;
                }
                .font-nunito {
                    font-family: 'Nunito', sans-serif;
                }
                /* Pill nav underline effect */
                nav a {
                    position: relative;
                }
                nav a:after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 50%;
                    bottom: 6px;
                    width: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #09394a 0%, #ffe066 100%);
                    border-radius: 2px;
                    transition: width 0.2s, left 0.2s;
                }
                nav a:hover:after,
                nav a:focus:after {
                    width: 60%;
                    left: 20%;
                }
            `}</style>
        </div>
    );
}
