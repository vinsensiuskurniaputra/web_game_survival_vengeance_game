export default function GameElement() {
    return (
        <section id='features' className='py-24 px-4 relative'>
            <div className='max-w-6xl mx-auto animate-fade-in-up'>
                <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Game Elements</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Bertahan Hidup dari Serangan Gelombang Musuh</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>Pemain harus menghadapi gelombang demi gelombang musuh yang semakin kuat dan banyak. Tantangan yang terus meningkat memberikan sensasi tegang dan memacu adrenalin.</p>
                    </div>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Mengumpulkan Power-Up</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>etiap musuh yang dikalahkan berpotensi menjatuhkan power-up. Pemain harus memilih dan memanfaatkan item dengan bijak untuk bertahan lebih lama.</p>
                    </div>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Upgrade Karakter Secara Progresif</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>Pemain bisa meningkatkan statistik karakter seperti damage, kecepatan, pertahanan, dan jangkauan serangan melalui EXP yang didapat. Progres karakter yang terasa membuat pemain merasa semakin kuat.</p>
                    </div>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Membuat Strategi Build yang Efektif</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>Pemain diajak berpikir cepat dan merancang strategi build dari senjata dan skill yang tersedia secara acak. Setiap keputusan memengaruhi peluang bertahan hidup.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
