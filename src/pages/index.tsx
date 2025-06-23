import Image from 'next/image';
import { Nunito, Fredoka } from 'next/font/google';
import Link from 'next/link';
import { FaLeaf, FaPaw, FaGamepad, FaUsers, FaTree, FaScroll, FaMagic, FaMap, FaEye, FaFeatherAlt } from 'react-icons/fa';
import { GiWoodenSign, GiForest, GiHerbsBundle, GiBearFace, GiStoneAxe, GiTreeDoor, GiRiver, GiCaveEntrance, GiSpiralBottle, GiAncientSword, GiWolfHowl } from 'react-icons/gi';
import { useEffect, useRef, useState } from 'react';

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
    const [menuOpen, setMenuOpen] = useState(false);

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

    // Split menu items into two rows
    const menuItems = [
        { href: '#hero', label: 'Home' },
        { href: '#team', label: 'Team' },
        { href: '#title', label: 'Judul' },
        { href: '#specs', label: 'Specs' },
        { href: '#sinopsis', label: 'Sinopsis' },
        { href: '#features', label: 'Game Elements' },
        { href: '#tech-spec', label: 'Tech Specs' },
        { href: '#story', label: 'Cerita' },
        { href: '#game-play', label: 'Gameplay' },
        { href: '#win-lose-condition', label: 'Win Lose Condition' },
        { href: '#player-control', label: 'Player Control' },
        { href: '#key-features', label: 'Key Feature' },
        { href: '#levels', label: 'Levels Design' },
        { href: '#ai', label: 'AI' },
        { href: '#art', label: 'Art/UI' },
    ];
    const firstRowCount = 10;
    const firstRow = menuItems.slice(0, firstRowCount);
    const restRows = menuItems.slice(firstRowCount, menuItems.length);

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
            <nav className='fixed mx-auto top-0 left-0 right-0 w-full max-w-[1000px] z-30 bg-white backdrop-blur-md py-4 px-6 flex items-center justify-between border-b border-[#09394A]/10 shadow-lg rounded-b-3xl group' onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)} onFocus={() => setMenuOpen(true)} onBlur={() => setMenuOpen(false)} tabIndex={0}>
                {/* Hamburger for mobile */}
                <button className='md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full border border-[#09394A]/20 bg-white/80 shadow-md mr-2' aria-label='Open menu' onClick={() => setMenuOpen((v) => !v)}>
                    <span className='block w-6 h-0.5 bg-[#09394A] mb-1 rounded'></span>
                    <span className='block w-6 h-0.5 bg-[#09394A] mb-1 rounded'></span>
                    <span className='block w-6 h-0.5 bg-[#09394A] rounded'></span>
                </button>
                {/* Menu items */}
                <div
                    className={`
                        flex flex-wrap gap-4 text-base justify-center
                        transition-all
                        ${menuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-[56px] opacity-100'}
                        md:max-h-none md:opacity-100
                        overflow-hidden md:flex
                        absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent rounded-b-3xl md:rounded-none shadow-lg md:shadow-none border-t md:border-0 border-[#09394A]/10 md:border-none
                        z-40
                        group-hover:max-h-[1000px] group-hover:opacity-100
                        group-focus-within:max-h-[1000px] group-focus-within:opacity-100
                        navbar-menu
                    `}
                    style={{ transition: 'max-height 0.3s, opacity 0.2s' }}
                >
                    {/* First row: always visible */}
                    {firstRow.map((item, i) => (
                        <a key={i} href={item.href} className='rounded-full px-4 py-2 bg-white/70 text-[#09394A] font-bold shadow-md border border-[#09394A]/20 hover:bg-[#e3f6fd] hover:text-[#09394A] transition-all focus:outline-[#09394A]/80 focus:ring-2 focus:ring-[#09394A]/30' tabIndex={0} onClick={() => setMenuOpen(false)}>
                            {item.label}
                        </a>
                    ))}
                    {/* Rest rows: hidden unless hovered/focused */}
                    <div className={`flex flex-wrap gap-4 w-full md:w-auto  ${menuOpen ? 'navbar-row2-open' : ''}`}>
                        {restRows.map((item, i) => (
                            <a key={i + firstRowCount} href={item.href} className='rounded-full px-4 py-2 bg-white/70 text-[#09394A] font-bold shadow-md border border-[#09394A]/20 hover:bg-[#e3f6fd] hover:text-[#09394A] transition-all focus:outline-[#09394A]/80 focus:ring-2 focus:ring-[#09394A]/30' tabIndex={0} onClick={() => setMenuOpen(false)}>
                                {item.label}
                            </a>
                        ))}
                    </div>
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

            {/* Judul dan Makna */}
            <section id='title' className='py-24 px-4 flex items-center justify-center relative'>
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
            <section id='sinopsis' className='py-24 px-4 flex items-center justify-center bg-[#09394A] relative'>
                <div className='max-w-3xl w-full mx-auto bg-gradient-to-br from-[#f6fbe9]/80 to-[#e3f6fd]/90 rounded-2xl shadow-2xl border-2 border-green-200 p-10 relative prose prose-invert text-lg text-center font-nunito text-[#09394A] animate-fade-in-up backdrop-blur-xl'>
                    <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-5xl text-yellow-400 drop-shadow-lg'>📜</span>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-[#09394A] font-fredoka uppercase'>Sinopsis</h2>
                    <p>SURVIVAL VENGEANCE – Dikhianati dan dijadikan eksperimen. Kamu adalah Axel Pace, salah satu subjek percobaan yang berhasil melarikan diri dari sebuah menara penelitian yang kejam. Di dalam menara inilah keluargamu dijadikan kelinci percobaan oleh sang arsiteknya—sosok yang ironisnya pernah kau anggap sebagai 'keluarga', kini menjadi target utamamu. Kini, didorong oleh dendam yang membara dan harapan untuk menemukan sisa keluargamu yang mungkin masih hidup, kamu harus menyusup kembali dan menaklukkan setiap lantai tower yang penuh bahaya. Hadapi para penjaga bengis dan hasil eksperimen gagal lainnya. Ungkap kebenaran mengerikan di balik takdir keluargamu dan ambisi gila sang pencipta tower. Pembalasan dendam menantimu di puncak, begitu juga jawaban yang selama ini kau cari.</p>
                </div>
            </section>

            {/* GAME ELEMENTS */}
            <section id='features' className='py-24 px-4 bg-[#f6fbe9] relative'>
                <div className='max-w-6xl mx-auto animate-fade-in-up'>
                    <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Game Elements</h2>
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

            {/* TECHNICAL SPEC */}
            <section id='tech-spec' className='py-24 px-4 bg-[#f6fbe9] relative'>
                <div className='max-w-6xl mx-auto animate-fade-in-up'>
                    <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Technical Spec</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Tipe Grafik 2D (Flat)</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>Game ini menggunakan grafik 2D (Flat), yang berarti seluruh aset visual dalam game—termasuk karakter, musuh, tilemap, dan UI—ditampilkan dalam bentuk gambar datar tanpa kedalaman visual 3D. Setiap objek di-render sebagai sprite 2D menggunakan sistem koordinat X dan Y (tanpa sumbu Z), sehingga cocok untuk game ber-genre top-down atau side-scroller. Alasan penggunaan 2D (Flat): Mempermudah dalam pembuatan sprite dan animasi karakter. Performa ringan, cocok untuk target platform low-end atau web. Efisien untuk sistem pertarungan dan navigasi sederhana berbasis tile.</p>
                        </div>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Sistem View Kamera Top-Down Orthographic</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>Sistem kamera yang digunakan adalah top-down view dengan kamera orthographic, di mana kamera menghadap langsung dari atas ke bawah (90 derajat) dan tidak memiliki perspektif (tidak ada distorsi ukuran karena jarak). Ciri khas dari sistem kamera ini: Orthographic: semua objek terlihat dengan ukuran konstan, tidak dipengaruhi oleh jarak ke kamera. Top-down: sudut pandang dari atas memudahkan pemain melihat area sekitar karakter dengan jelas. Kamera mengikuti pergerakan player (menggunakan Cinemachine atau skrip manual CameraFollow) agar pemain selalu berada di tengah layar. Keuntungan sistem kamera ini: Memberikan visibilitas area sekitar player, mendukung gameplay eksplorasi dan strategi. Mempermudah implementasi navigasi musuh dan AI karena sistem berbasis koordinat 2D.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section id='story' className='py-24 px-4 flex items-center justify-center bg-[#09394A] relative'>
                <div className='max-w-3xl w-full mx-auto bg-gradient-to-br from-[#f6fbe9]/80 to-[#e3f6fd]/90 rounded-2xl shadow-2xl border-2 border-green-200 p-10 relative prose prose-invert text-lg text-green-900 font-nunito animate-fade-in-up backdrop-blur-xl'>
                    <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-5xl text-green-400 drop-shadow-lg'>🌲</span>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-[#09394A] font-fredoka uppercase'>Cerita</h2>
                    <p>Dulu, kerajaan berada dalam masa kejayaannya. Di balik kedamaian itu, sebuah ambisi perlahan tumbuh di kalangan lingkaran dalam kerajaan. Arcturus, seorang ilmuwan dan peneliti sihir, dulunya hanyalah seorang yatim piatu yang diangkat oleh keluarga kerajaan. Ia tumbuh bersama anak-anak bangsawan, termasuk Axel Pace, sang protagonis, yang menganggap Arcturus seperti saudara sendiri.</p>
                    <p className='pt-6'>Namun, ambisi akan keabadian dan penciptaan prajurit sempurna membuat Arcturus mengkhianati kerajaan. Ia mendirikan menara eksperimen yang menjadi pusat rahasia pengembangan teknologi sihir dan biologi. Banyak rakyat diculik dan dijadikan objek uji coba, termasuk keluarga Axel sendiri. Axel pun ditangkap dan dijadikan salah satu subjek eksperimen.</p>
                    <p className='pt-6'>Namun, berbeda dari yang lain, tubuh Axel berhasil beradaptasi. Dalam kekacauan salah satu eksperimen, Axel berhasil melarikan diri dari bagian terdalam menara. Lemah, kehilangan kekuatannya, dan ingatannya tak utuh, ia memulai perjalanan naik menara demi dua hal: membalas dendam dan mencari keluarganya yang mungkin masih hidup.</p>
                    <p className='pt-6'>Sepanjang perjalanan, Axel bertarung melawan makhluk-makhluk hasil eksperimen gagal, penyihir penjaga lantai, dan para ksatria yang telah kehilangan akal sehatnya. Di balik setiap kemenangan, Axel mengumpulkan kembali fragmen kekuatannya melalui peti-peti pusaka, peninggalan dari sistem kerajaan lama. Ia tumbuh kembali menjadi ksatria sejati—lebih kuat, lebih tajam, namun juga semakin terseret dalam luka emosional dari masa lalunya.</p>
                    <p className='pt-6'>Di tengah perjalanan, Axel menemukan kenyataan pahit: Arcturus bukan dalang utama dari kekacauan ini, melainkan seorang jenius yang telah dimanfaatkan oleh kekuatan lain. Ia menciptakan prajurit sempurna bukan untuk dirinya sendiri, tetapi atas tekanan dari seseorang yang lebih dekat dengan darah kerajaan.</p>
                    <p className='pt-6'>Dan akhirnya, ketika Axel mencapai puncak menara, ia menemukan kebenaran yang memilukan.</p>
                    <p className='pt-6'>Di balik takhta, berdiri Ksatria Agung yang menjadi musuh terakhir—Rivalt, mantan pengawal kerajaan dan mentor Axel sendiri. Ia adalah pengkhianat sesungguhnya, sosok yang mengorbankan kerajaan demi membentuk kekuatan baru di bawah kendalinya. Rivalt memanfaatkan Arcturus dan seluruh eksperimen untuk menciptakan pasukan abadi yang akan menggantikan struktur kerajaan lama yang menurutnya lemah.</p>
                    <p className='pt-6'>Rivalt percaya bahwa pengorbanan rakyat, bahkan keluarga Axel, adalah “harga yang pantas untuk dunia yang lebih kuat”. Ia menganggap Axel sebagai “hasil terbaik” dari eksperimen, dan menawarkan kesempatan untuk bergabung serta menjadi tangan kanannya dalam membangun rezim baru.</p>
                    <p className='pt-6'>Namun Axel menolak.</p>
                    <p className='pt-6'>Pertarungan pun tak terhindarkan—duel antara murid dan mentor, antara harapan dan kekuasaan. Rivalt sebagai Ksatria Agung menggunakan kekuatan penuh dari semua hasil eksperimen: kekuatan fisik luar biasa, sihir terlarang, dan teknik bertarung kuno.</p>
                    <p className='pt-6'>Axel, dengan semua skill dan kekuatan yang diperoleh dari perjalanannya, menghadapi ujian terakhir. Dalam pertarungan penuh emosi dan kekuatan, masa lalu dan masa depan dipertaruhkan.</p>
                </div>
            </section>

            {/* GamePlay */}
            <section id='game-play' className='py-24 px-4 bg-[#f6fbe9] relative'>
                <div className='max-w-6xl mx-auto animate-fade-in-up'>
                    <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Gameplay</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Fitur-Fitur yang Ada di Dalam Game</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>
                                Sistem Pertarungan (Combat System): Pemain dapat menyerang musuh dengan tombol tertentu (misalnya tombol Space). Serangan akan memicu efek visual dan menghitung jarak serangan terhadap musuh di sekitar. Sistem Kesehatan dan Damage: Pemain dan musuh memiliki sistem nyawa (health). Ketika terkena serangan, nyawa akan berkurang. Jika nyawa habis, maka akan mati atau game over. AI Musuh: Musuh secara otomatis mengejar pemain menggunakan sistem pathfinding sederhana dan akan menyerang jika cukup dekat. Musuh juga dapat menghindari tembok agar tidak tersangkut. Sistem EXP dan Leveling: Pemain mendapatkan EXP setiap kali menyelesaikan misi atau mengalahkan musuh. EXP dapat digunakan untuk meningkatkan kekuatan serangan. Sistem Inventori Sederhana: Pemain dapat mengumpulkan item selama permainan. Setiap item yang didapat akan tersimpan dalam daftar item. Sistem Spawner Musuh: Di area tertentu, musuh akan terus muncul secara berkala dari spawner yang aktif jika
                                pemain melewati area pemicu (trigger). Sistem Pergantian Scene / Level: Ketika pemain mencapai titik tertentu (objek trigger), maka permainan berpindah ke level berikutnya, namun data pemain tetap disimpan (health, EXP, item, dll).
                            </p>
                        </div>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Gameplay Secara Umum</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>Game ini adalah game aksi petualangan 2D dengan sudut pandang top-down. Pemain mengendalikan karakter utama yang menjelajahi dunia, mengalahkan musuh, dan menyelesaikan misi dalam tiap level. Pemain memulai permainan di level pertama dan harus menavigasi peta, menghindari rintangan, bertarung melawan musuh, serta mengumpulkan item dan EXP. Setiap level memiliki tantangan dan musuh yang berbeda, serta titik akhir berupa portal atau trigger yang akan membawa pemain ke level berikutnya. Gameplay menekankan pada: Eksplorasi area Pertarungan cepat (fast-paced combat) Pemanfaatan EXP dan item untuk bertahan hidup Menghindari jebakan dan rintangan</p>
                        </div>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Yang Dapat Dilakukan Pemain</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>Bergerak ke segala arah menggunakan kontrol keyboard (WASD atau Arrow Keys). Menyerang musuh dengan tombol serang (misalnya Spacebar). Menghindari rintangan seperti tembok atau objek tilemap. Mengambil item yang ditemukan sepanjang perjalanan. Meningkatkan kekuatan dengan EXP yang diperoleh. Bertahan hidup dengan menjaga nyawa tetap penuh. Berpindah level dengan menemukan dan menyentuh titik tujuan.</p>
                        </div>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Misi Pemain</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>Misi utama pemain adalah: Menjelajahi seluruh area dalam setiap level. Mengalahkan musuh-musuh yang muncul dari spawner atau secara acak. Mengumpulkan item penting untuk membantu perjalanan. Mencapai portal/titik tujuan untuk melanjutkan ke level berikutnya. Bertahan hidup dan menyelesaikan seluruh level hingga menghadapi dan mengalahkan bos terakhir. Misi tambahan (opsional) dapat mencakup: Mengumpulkan semua item tersembunyi. Mengalahkan semua musuh dalam satu level. Mencapai akhir level tanpa terkena damage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Win Lose Condition */}
            <section id='win-lose-condition' className='py-24 px-4 bg-[#f6fbe9] relative'>
                <div className='max-w-6xl mx-auto animate-fade-in-up'>
                    <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Win & Lose Condition</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Win Condition (Kondisi Menang)</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>Pemain akan menang apabila berhasil menyelesaikan seluruh level yang tersedia dalam permainan hingga level terakhir, di mana pemain harus: Mengalahkan semua musuh termasuk bos terakhir (jika ada). Menyelesaikan misi utama di setiap level. Menyentuh atau memasuki portal kemenangan (trigger area) setelah menyelesaikan misi. Setelah menang, pemain akan melihat tampilan “Victory” atau cutscene singkat sebagai penutup cerita.</p>
                        </div>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Lose Condition (Kondisi Kalah)</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>Pemain akan kalah jika salah satu dari kondisi berikut terjadi: Nyawa (Health) pemain mencapai 0 akibat serangan musuh. Pemain terjebak dalam pertempuran tanpa bisa bergerak atau bertahan (misalnya saat diserbu banyak musuh sekaligus dan tidak bisa kabur). Jika pemain kalah, akan muncul tampilan “Game Over” dan permainan dapat: Dimulai ulang dari kembali ke level awal.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Player Control */}
            <section id='player-control' className='py-24 px-4 bg-[#f6fbe9] relative'>
                <div className='max-w-6xl mx-auto animate-fade-in-up'>
                    <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Player Control</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Kontrol Gerakan</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>W – Bergerak ke atas (Up) A – Bergerak ke kiri (Left) S – Bergerak ke bawah (Down) D – Bergerak ke kanan (Right)</p>
                        </div>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Kontrol Serangann</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>Spasi (Spacebar) – Melakukan serangan ke arah terakhir yang dituju (menggunakan animasi serangan dan efek hit)</p>
                        </div>
                        <div className='bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 p-8 rounded-2xl shadow-xl border border-green-200 backdrop-blur-md'>
                            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Kontrol Upgrade dan Panel</h3>
                            <p className='space-y-2 text-[#09394A] font-light'>U – Membuka atau menutup Upgrade Panel E – Meningkatkan Max HP (Health) R – Meningkatkan Attack Power F – Mengisi ulang HP secara penuh (Full Heal) T – Meningkatkan Movement Speed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Feathures */}
            <section id='key-features' className='py-24 px-4 bg-[#f6fbe9] relative'>
                <div className='max-w-4xl mx-auto animate-fade-in-up'>
                    <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>KEY FEATURES</h2>
                    <div className='prose prose-invert text-[#09394A] mx-auto text-lg bg-white/60 rounded-2xl shadow-xl p-8 font-nunito'>
                        <p>Game ini memiliki sejumlah elemen gameplay penting yang menjadi inti pengalaman bermain. Setiap fitur dirancang untuk memberikan tantangan, strategi, dan kepuasan progres kepada pemain.</p>
                        <ul>
                            <li>
                                <b>1. Nyawa (Health System)</b>
                                <ul>
                                    <li>Pemain memiliki Max Health dan Current Health.</li>
                                    <li>Ditampilkan melalui Health Bar.</li>
                                    <li>Jika Health mencapai 0, maka pemain kalah (Game Over).</li>
                                    <li>Nyawa bisa ditingkatkan melalui upgrade item atau EXP.</li>
                                    <li>Pemain dapat menyembuhkan diri menggunakan item tertentu atau melalui Upgrade Heal Full.</li>
                                </ul>
                            </li>
                            <li>
                                <b>2. Waktu (Time System)</b>
                                <ul>
                                    <li>Tidak menggunakan sistem waktu terbatas.</li>
                                    <li>Pemain dapat menyelesaikan setiap level dengan kecepatan masing-masing.</li>
                                    <li>Namun, desain level yang semakin kompleks mendorong pemain untuk bermain dengan efisien dan strategis.</li>
                                </ul>
                            </li>
                            <li>
                                <b>3. Serangan dan Skill</b>
                                <ul>
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
                            </li>
                            <li>
                                <b>4. EXP & Sistem Pengembangan Karakter</b>
                                <ul>
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
                            </li>
                            <li>
                                <b>5. Boss dan Mini Boss</b>
                                <ul>
                                    <li>Setiap level memiliki boss dengan HP tinggi, pola serangan unik, dan membutuhkan strategi khusus.</li>
                                    <li>Kemenangan atas boss menjadi syarat wajib untuk naik ke level berikutnya.</li>
                                </ul>
                            </li>
                            <li>
                                <b>6. Sistem AI Musuh</b>
                                <ul>
                                    <li>
                                        Musuh memiliki kecerdasan sederhana:
                                        <ul>
                                            <li>Mengejar pemain</li>
                                            <li>Menyerang saat dekat</li>
                                        </ul>
                                    </li>
                                    <li>Memberikan pengalaman dinamis dan menantang.</li>
                                </ul>
                            </li>
                            <li>
                                <b>7. Kemenangan & Kekalahan</b>
                                <ul>
                                    <li>Pemain menang jika berhasil mengalahkan seluruh boss dan menyelesaikan semua level.</li>
                                    <li>
                                        Pemain kalah jika:
                                        <ul>
                                            <li>Nyawa habis</li>
                                            <li>Terjebak dan tidak bisa melanjutkan (jika kehabisan upgrade penting)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Level Design */}
            <section id='levels' className='py-24 px-4 bg-[#f6fbe9] relative'>
                <div className='max-w-4xl mx-auto animate-fade-in-up'>
                    <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>
                        <span className='text-green-400'>🎮</span> LEVEL DESIGN
                    </h2>
                    <div className='prose prose-invert text-[#09394A] mx-auto text-lg bg-white/60 rounded-2xl shadow-xl p-8 font-nunito'>
                        <p>Game ini terdiri dari 3 level utama yang masing-masing menawarkan nuansa visual, tantangan mekanik, dan cerita yang terus berkembang. Setiap level dirancang untuk meningkatkan kompleksitas gameplay dan memberikan pengalaman yang lebih dalam seiring progresi pemain.</p>
                        <hr />
                        <h3 className='mt-6 mb-2 text-2xl font-bold flex items-center gap-2'>
                            <span className='text-red-500'>🔥</span> LEVEL 1: Penjara Api (The Fire Prison)
                        </h3>
                        <ul>
                            <li>
                                <b>🗺️ Desain Arena:</b>
                                <ul>
                                    <li>Lingkungan bawah tanah dengan lorong sempit dan bercahaya merah redup.</li>
                                    <li>Layout seperti labirin sederhana dengan cabang-cabang buntu dan satu jalan utama menuju boss.</li>
                                    <li>Beberapa peti tersebar di sudut untuk mendorong eksplorasi awal.</li>
                                </ul>
                            </li>
                            <li>
                                <b>🎯 Misi:</b>
                                <ul>
                                    <li>Bertahan hidup dari serangan musuh awal.</li>
                                    <li>Mencari peti pertama untuk mendapatkan skill serangan.</li>
                                    <li>Mengalahkan mini-boss dan membuka gerbang ke level 2.</li>
                                </ul>
                            </li>
                            <li>
                                <b>👾 Musuh:</b>
                                <ul>
                                    <li>Cacing Api: Musuh dasar, jumlah 5–7, dengan gerakan lambat namun menyerang agresif.</li>
                                    <li>Penyihir Api I (Mini Boss): Sihir api area, HP rendah, skill terbatas.</li>
                                </ul>
                            </li>
                            <li>
                                <b>🧰 Item:</b>
                                <ul>
                                    <li>1 Peti pembuka skill serangan</li>
                                    <li>2–3 item upgrade: HP Boost, EXP awal</li>
                                    <li>1 Gerbang keluar setelah boss dikalahkan</li>
                                </ul>
                            </li>
                        </ul>
                        <hr />
                        <h3 className='mt-6 mb-2 text-2xl font-bold flex items-center gap-2'>
                            <span className='text-green-700'>💀</span> LEVEL 2: Selokan Terkutuk (The Cursed Sewers)
                        </h3>
                        <ul>
                            <li>
                                <b>🗺️ Desain Arena:</b>
                                <ul>
                                    <li>Labirin selokan bercabang dengan tingkat platforming sederhana (turun-naik jalan).</li>
                                    <li>Lingkungan lembap, berlumut, dengan area tersembunyi.</li>
                                </ul>
                            </li>
                            <li>
                                <b>🎯 Misi:</b>
                                <ul>
                                    <li>Eksplorasi dan bertahan dari kelompok musuh.</li>
                                    <li>Mengumpulkan 2 peti skill tambahan (AoE dan defense).</li>
                                    <li>Mengalahkan boss untuk naik ke permukaan.</li>
                                </ul>
                            </li>
                            <li>
                                <b>👾 Musuh:</b>
                                <ul>
                                    <li>Kerangka Hidup: Musuh melee, jumlah 3–5</li>
                                    <li>Jamur Beracun: Musuh stasioner, menyerang dengan kabut racun, jumlah 2–3</li>
                                    <li>Goblin: Musuh cepat dan menghindar, jumlah 3–4</li>
                                    <li>Mata Terbang: Mengikuti dari jarak jauh, menyerang dengan sinar</li>
                                </ul>
                            </li>
                            <li>
                                <b>🧙‍♂️ Boss:</b>
                                <ul>
                                    <li>Penyihir Kegelapan: Menggunakan sihir bayangan, memanggil musuh baru, bertarung dengan fase ganda (HP menurun → serangan lebih agresif)</li>
                                </ul>
                            </li>
                            <li>
                                <b>🧰 Item:</b>
                                <ul>
                                    <li>2 Peti upgrade skill AoE & pertahanan</li>
                                    <li>1–2 item Heal</li>
                                    <li>1 Skill Point</li>
                                    <li>Gerbang ke level 3</li>
                                </ul>
                            </li>
                        </ul>
                        <hr />
                        <h3 className='mt-6 mb-2 text-2xl font-bold flex items-center gap-2'>
                            <span className='text-yellow-600'>🏰</span> LEVEL 3: Benteng Raja Ksatria (The Knight King's Fortress)
                        </h3>
                        <ul>
                            <li>
                                <b>🗺️ Desain Arena:</b>
                                <ul>
                                    <li>Arena terbuka semi-linear dengan banyak musuh elit.</li>
                                    <li>Terdapat halaman benteng dan lorong menuju ruang takhta.</li>
                                    <li>Desain simetris dengan dua jalur utama menuju boss area.</li>
                                </ul>
                            </li>
                            <li>
                                <b>🎯 Misi:</b>
                                <ul>
                                    <li>Menaklukkan pasukan elit penjaga kastil.</li>
                                    <li>Mengambil peti terakhir untuk mendapatkan skill ultimate.</li>
                                    <li>Mengalahkan dua boss akhir dan mengakhiri kutukan.</li>
                                </ul>
                            </li>
                            <li>
                                <b>👾 Musuh:</b>
                                <ul>
                                    <li>Prajurit Elit Ksatria: Musuh melee kuat, bergerombol (jumlah 5–7)</li>
                                    <li>Penyihir Api II (Mini Boss): Versi lebih kuat dari level 1, sihir area besar</li>
                                    <li>Raja Ksatria (Final Boss): Serangan melee brutal, kombinasi cepat dan mematikan</li>
                                </ul>
                            </li>
                            <li>
                                <b>🧰 Item:</b>
                                <ul>
                                    <li>1 Peti Skill Ultimate</li>
                                    <li>2 Heal besar</li>
                                    <li>1 EXP Gem</li>
                                    <li>1 Gerbang keluar (cutscene kemenangan)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* AI System */}
            <section id='ai' className='py-24 px-4 flex items-center justify-center bg-[#09394A] relative'>
                <div className='max-w-3xl w-full mx-auto bg-gradient-to-br from-[#f6fbe9]/80 to-[#e3f6fd]/90 rounded-2xl shadow-2xl border-2 border-green-200 p-10 relative prose prose-invert text-lg text-green-900 font-nunito animate-fade-in-up backdrop-blur-xl'>
                    <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-5xl text-green-400 drop-shadow-lg'>🤖</span>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-[#09394A] font-fredoka uppercase'>AI System</h2>
                    <ul className='text-left'>
                        <li>
                            <b>🔹 Perilaku Utama:</b>
                            <ul>
                                <li>
                                    <b>Pendeteksian Pemain:</b>
                                    <ul>
                                        <li>
                                            Menggunakan <code>Vector2.Distance()</code> untuk mengetahui apakah pemain berada dalam jarak deteksi.
                                        </li>
                                        <li>Jika dalam jarak, musuh akan mulai mengejar.</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Pergerakan:</b>
                                    <ul>
                                        <li>Musuh bergerak ke arah pemain menggunakan perhitungan vektor arah.</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Serangan:</b>
                                    <ul>
                                        <li>
                                            Bila jarak ke pemain berada dalam <i>stopping distance</i>, maka musuh berhenti dan memicu animasi serta logika serangan.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className='mt-4'>
                            <b>🔹 Penghindaran Rintangan:</b>
                            <ul>
                                <li>
                                    AI memanfaatkan <code>Physics2D.Raycast()</code> ke segala arah.
                                </li>
                                <li>Jika musuh mendeteksi tembok dekat, ia tidak akan memaksa menabrak, melainkan akan memilih arah yang lebih terbuka (horizontal atau vertikal).</li>
                                <li>Mekanisme ini memberi kesan bahwa musuh "cerdas" dan mampu mengelilingi tembok.</li>
                            </ul>
                        </li>
                    </ul>
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
                            <div key={i} className='aspect-square bg-gradient-to-br from-[#e3f6fd]/80 to-[#b7e4c7]/90 rounded-lg flex items-center justify-center border-2 border-green-200/40 overflow-hidden shadow-lg backdrop-blur-md'>
                                <Image src={item.img} alt={item.alt} width={200} height={200} className='object-cover w-full h-full' />
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
                /* Responsive navbar always visible, menu expands on hover/focus or mobile open */
                @media (max-width: 768px) {
                    nav {
                        width: 100% !important;
                        max-width: 100vw !important;
                        left: 0 !important;
                        right: 0 !important;
                        border-radius: 0 0 2rem 2rem;
                    }
                    nav > div {
                        position: absolute !important;
                        top: 100%;
                        left: 0;
                        width: 100vw;
                        background: white;
                        border-radius: 0 0 2rem 2rem;
                        box-shadow: 0 8px 32px #09394a22;
                        z-index: 40;
                    }
                }
                /* Navbar row2 hidden by default, shown on hover/focus or mobile open */
                .navbar-row2 {
                    display: none;
                    width: 100%;
                }
                nav:hover .navbar-row2,
                nav:focus-within .navbar-row2,
                .navbar-row2.navbar-row2-open {
                    display: flex;
                }
                @media (max-width: 768px) {
                    .navbar-row2 {
                        display: flex;
                    }
                }
                /* Limit menu height when not open (desktop only) */
                @media (min-width: 769px) {
                    .navbar-menu {
                        max-height: 56px;
                    }
                    .group:hover .navbar-menu,
                    .group:focus-within .navbar-menu {
                        max-height: 1000px;
                    }
                }
            `}</style>
        </div>
    );
}
