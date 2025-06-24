export default function Gameplay() {
    return (
        <section id='game-play' className='py-24 px-4 relative'>
            <div className='max-w-6xl mx-auto animate-fade-in-up'>
                <h2 className='text-5xl font-extrabold mb-12 text-center text-[#09394A] flex items-center justify-center gap-2 font-fredoka uppercase drop-shadow-lg'>Gameplay</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Fitur-Fitur yang Ada di Dalam Game</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>
                            Sistem Pertarungan (Combat System): Pemain dapat menyerang musuh dengan tombol tertentu (misalnya tombol Space). Serangan akan memicu efek visual dan menghitung jarak serangan terhadap musuh di sekitar. Sistem Kesehatan dan Damage: Pemain dan musuh memiliki sistem nyawa (health). Ketika terkena serangan, nyawa akan berkurang. Jika nyawa habis, maka akan mati atau game over. AI Musuh: Musuh secara otomatis mengejar pemain menggunakan sistem pathfinding sederhana dan akan menyerang jika cukup dekat. Musuh juga dapat menghindari tembok agar tidak tersangkut. Sistem EXP dan Leveling: Pemain mendapatkan EXP setiap kali menyelesaikan misi atau mengalahkan musuh. EXP dapat digunakan untuk meningkatkan kekuatan serangan. Sistem Inventori Sederhana: Pemain dapat mengumpulkan item selama permainan. Setiap item yang didapat akan tersimpan dalam daftar item. Sistem Spawner Musuh: Di area tertentu, musuh akan terus muncul secara berkala dari spawner yang aktif jika
                            pemain melewati area pemicu (trigger). Sistem Pergantian Scene / Level: Ketika pemain mencapai titik tertentu (objek trigger), maka permainan berpindah ke level berikutnya, namun data pemain tetap disimpan (health, EXP, item, dll).
                        </p>
                    </div>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Gameplay Secara Umum</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>Game ini adalah game aksi petualangan 2D dengan sudut pandang top-down. Pemain mengendalikan karakter utama yang menjelajahi dunia, mengalahkan musuh, dan menyelesaikan misi dalam tiap level. Pemain memulai permainan di level pertama dan harus menavigasi peta, menghindari rintangan, bertarung melawan musuh, serta mengumpulkan item dan EXP. Setiap level memiliki tantangan dan musuh yang berbeda, serta titik akhir berupa portal atau trigger yang akan membawa pemain ke level berikutnya. Gameplay menekankan pada: Eksplorasi area Pertarungan cepat (fast-paced combat) Pemanfaatan EXP dan item untuk bertahan hidup Menghindari jebakan dan rintangan</p>
                    </div>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Yang Dapat Dilakukan Pemain</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>Bergerak ke segala arah menggunakan kontrol keyboard (WASD atau Arrow Keys). Menyerang musuh dengan tombol serang (misalnya Spacebar). Menghindari rintangan seperti tembok atau objek tilemap. Mengambil item yang ditemukan sepanjang perjalanan. Meningkatkan kekuatan dengan EXP yang diperoleh. Bertahan hidup dengan menjaga nyawa tetap penuh. Berpindah level dengan menemukan dan menyentuh titik tujuan.</p>
                    </div>
                    <div className='p-8 rounded-2xl shadow-xl border border-yellow-200 backdrop-blur-md'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center gap-2 text-[#09394A] font-fredoka'>Misi Pemain</h3>
                        <p className='space-y-2 text-[#09394A] font-light'>Misi utama pemain adalah: Menjelajahi seluruh area dalam setiap level. Mengalahkan musuh-musuh yang muncul dari spawner atau secara acak. Mengumpulkan item penting untuk membantu perjalanan. Mencapai portal/titik tujuan untuk melanjutkan ke level berikutnya. Bertahan hidup dan menyelesaikan seluruh level hingga menghadapi dan mengalahkan bos terakhir. Misi tambahan (opsional) dapat mencakup: Mengumpulkan semua item tersembunyi. Mengalahkan semua musuh dalam satu level. Mencapai akhir level tanpa terkena damage.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
