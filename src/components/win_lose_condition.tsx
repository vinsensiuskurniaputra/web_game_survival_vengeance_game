export default function WinLoseCondition() {
    return (
        <section id='win-lose-condition' className='py-24 px-4 relative'>
            <div className='max-w-6xl mx-auto animate-fade-in-up'>
                <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Win & Lose Condition</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Win Condition (Kondisi Menang)</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>Pemain akan menang apabila berhasil menyelesaikan seluruh level yang tersedia dalam permainan hingga level terakhir, di mana pemain harus: Mengalahkan semua musuh termasuk bos terakhir (jika ada). Menyelesaikan misi utama di setiap level. Menyentuh atau memasuki portal kemenangan (trigger area) setelah menyelesaikan misi. Setelah menang, pemain akan melihat tampilan “Victory” atau cutscene singkat sebagai penutup cerita.</p>
                    </div>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Lose Condition (Kondisi Kalah)</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>Pemain akan kalah jika salah satu dari kondisi berikut terjadi: Nyawa (Health) pemain mencapai 0 akibat serangan musuh. Pemain terjebak dalam pertempuran tanpa bisa bergerak atau bertahan (misalnya saat diserbu banyak musuh sekaligus dan tidak bisa kabur). Jika pemain kalah, akan muncul tampilan “Game Over” dan permainan dapat: Dimulai ulang dari kembali ke level awal.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
