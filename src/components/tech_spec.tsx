export default function TechSpec() {
    return (
        <section id='tech-spec' className='py-24 px-4 relative'>
            <div className='max-w-6xl mx-auto animate-fade-in-up'>
                <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Technical Spec</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Tipe Grafik 2D (Flat)</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>Game ini menggunakan grafik 2D (Flat), yang berarti seluruh aset visual dalam game—termasuk karakter, musuh, tilemap, dan UI—ditampilkan dalam bentuk gambar datar tanpa kedalaman visual 3D. Setiap objek di-render sebagai sprite 2D menggunakan sistem koordinat X dan Y (tanpa sumbu Z), sehingga cocok untuk game ber-genre top-down atau side-scroller. Alasan penggunaan 2D (Flat): Mempermudah dalam pembuatan sprite dan animasi karakter. Performa ringan, cocok untuk target platform low-end atau web. Efisien untuk sistem pertarungan dan navigasi sederhana berbasis tile.</p>
                    </div>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Sistem View Kamera Top-Down Orthographic</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>Sistem kamera yang digunakan adalah top-down view dengan kamera orthographic, di mana kamera menghadap langsung dari atas ke bawah (90 derajat) dan tidak memiliki perspektif (tidak ada distorsi ukuran karena jarak). Ciri khas dari sistem kamera ini: Orthographic: semua objek terlihat dengan ukuran konstan, tidak dipengaruhi oleh jarak ke kamera. Top-down: sudut pandang dari atas memudahkan pemain melihat area sekitar karakter dengan jelas. Kamera mengikuti pergerakan player (menggunakan Cinemachine atau skrip manual CameraFollow) agar pemain selalu berada di tengah layar. Keuntungan sistem kamera ini: Memberikan visibilitas area sekitar player, mendukung gameplay eksplorasi dan strategi. Mempermudah implementasi navigasi musuh dan AI karena sistem berbasis koordinat 2D.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
