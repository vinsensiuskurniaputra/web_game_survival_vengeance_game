export default function AiSystem() {
    return (
        <section id='ai' className='py-24 px-4 flex items-center justify-center relative overflow-hidden'>
            {/* Animated circuit pattern background */}
            <div className='pointer-events-none absolute inset-0 z-0'>
                <div className="absolute inset-0 bg-[url('/textures/circuit-dark.png')] bg-cover bg-center opacity-15" />
                {/* Pulsing tech runes */}
                <div className='absolute left-12 top-1/4 animate-techrune'>
                    <svg width='48' height='48' viewBox='0 0 48 48'>
                        <circle cx='24' cy='24' r='18' fill='none' stroke='#ffe066' strokeWidth='2' opacity='0.5' />
                        <circle cx='24' cy='24' r='10' fill='none' stroke='#bfa14a' strokeWidth='1.5' opacity='0.3' />
                    </svg>
                </div>
                <div className='absolute right-12 bottom-1/4 animate-techrune2'>
                    <svg width='36' height='36' viewBox='0 0 36 36'>
                        <rect x='6' y='6' width='24' height='24' rx='6' fill='none' stroke='#ffe066' strokeWidth='1.5' opacity='0.4' />
                    </svg>
                </div>
            </div>
            <div className='max-w-3xl w-full mx-auto rounded-3xl shadow-2xl border-2 border-[#ffe06688] p-10 relative font-nunito animate-fade-in-up backdrop-blur-xl bg-[#18122bcc] z-10'>
                {/* Rotating AI icon */}
                <span className='absolute -top-12 left-1/2 -translate-x-1/2 text-6xl text-[#ffe066] drop-shadow-glow animate-rotate-ai'>🤖</span>
                <h2 className='text-4xl md:text-5xl font-medieval mb-2 text-center text-[#ffe066] uppercase tracking-widest drop-shadow-glow'>AI System</h2>
                {/* Flow lines */}
                <div className='flex flex-col gap-10 mt-10'>
                    {/* Detection */}
                    <div className='relative pl-8 fade-in-flow' style={{ animationDelay: '0.1s' }}>
                        <div className='absolute -left-6 top-2 w-6 h-6 bg-[#ffe066] rounded-full shadow-[0_0_16px_#ffe06699] border-2 border-[#bfa14a] flex items-center justify-center'>
                            <span className='text-[#18122b] font-bold'>1</span>
                        </div>
                        <h3 className='text-2xl font-medieval text-[#ffe066] mb-1 tracking-wide'>Deteksi Pemain</h3>
                        <div className='text-white text-base md:text-lg mb-2'>
                            AI menggunakan fungsi <span className='font-mono bg-[#23203a] px-2 py-0.5 rounded text-[#ffe066]'>Vector2.Distance()</span> untuk mendeteksi apakah pemain berada dalam radius tertentu.
                        </div>
                        <ul className='list-disc ml-6 text-[#e0e0e0]'>
                            <li>
                                Jika <span className='font-mono bg-[#23203a] px-1 rounded'>distance &lt; detectionRange</span>, musuh mulai mengejar.
                            </li>
                        </ul>
                    </div>
                    {/* Animated line */}
                    <div className='flex justify-center -mt-4 -mb-4'>
                        <svg width='8' height='48' viewBox='0 0 8 48' className='animate-trace-line'>
                            <line x1='4' y1='0' x2='4' y2='48' stroke='#ffe066' strokeWidth='2' strokeDasharray='8 8' />
                        </svg>
                    </div>
                    {/* Movement */}
                    <div className='relative pl-8 fade-in-flow' style={{ animationDelay: '0.3s' }}>
                        <div className='absolute -left-6 top-2 w-6 h-6 bg-[#ffe066] rounded-full shadow-[0_0_16px_#ffe06699] border-2 border-[#bfa14a] flex items-center justify-center'>
                            <span className='text-[#18122b] font-bold'>2</span>
                        </div>
                        <h3 className='text-2xl font-medieval text-[#ffe066] mb-1 tracking-wide'>Pergerakan</h3>
                        <div className='text-white text-base md:text-lg mb-2'>Musuh bergerak ke arah pemain menggunakan perhitungan vektor arah.</div>
                        <ul className='list-disc ml-6 text-[#e0e0e0]'>
                            <li>
                                AI menghindari rintangan dengan <span className='font-mono bg-[#23203a] px-2 py-0.5 rounded text-[#ffe066]'>Physics2D.Raycast()</span> ke segala arah.
                            </li>
                            <li>Jika mendeteksi tembok, AI memilih jalur horizontal/vertikal yang lebih terbuka.</li>
                        </ul>
                    </div>
                    {/* Animated line */}
                    <div className='flex justify-center -mt-4 -mb-4'>
                        <svg width='8' height='48' viewBox='0 0 8 48' className='animate-trace-line'>
                            <line x1='4' y1='0' x2='4' y2='48' stroke='#ffe066' strokeWidth='2' strokeDasharray='8 8' />
                        </svg>
                    </div>
                    {/* Attack */}
                    <div className='relative pl-8 fade-in-flow' style={{ animationDelay: '0.5s' }}>
                        <div className='absolute -left-6 top-2 w-6 h-6 bg-[#ffe066] rounded-full shadow-[0_0_16px_#ffe06699] border-2 border-[#bfa14a] flex items-center justify-center'>
                            <span className='text-[#18122b] font-bold'>3</span>
                        </div>
                        <h3 className='text-2xl font-medieval text-[#ffe066] mb-1 tracking-wide'>Serangan</h3>
                        <div className='text-white text-base md:text-lg mb-2'>
                            Jika musuh berada dalam <span className='font-mono bg-[#23203a] px-2 py-0.5 rounded text-[#ffe066]'>stopping distance</span> dari pemain, AI berhenti dan memicu animasi serta logika serangan.
                        </div>
                        <ul className='list-disc ml-6 text-[#e0e0e0]'>
                            <li>Serangan diatur dengan animasi dan efek visual.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .font-medieval {
                    font-family: 'MedievalSharp', 'Fredoka', 'Nunito', serif;
                }
                .drop-shadow-glow {
                    text-shadow: 0 0 12px #ffe066cc, 0 2px 8px #bfa14a88;
                }
                .fade-in-flow {
                    opacity: 0;
                    transform: translateY(32px);
                    animation: fadeInUpFlow 0.9s forwards;
                }
                .fade-in-flow:nth-of-type(1) {
                    animation-delay: 0.1s;
                }
                .fade-in-flow:nth-of-type(2) {
                    animation-delay: 0.3s;
                }
                .fade-in-flow:nth-of-type(3) {
                    animation-delay: 0.5s;
                }
                @keyframes fadeInUpFlow {
                    to {
                        opacity: 1;
                        transform: none;
                    }
                }
                .animate-rotate-ai {
                    animation: rotateAI 8s linear infinite;
                }
                @keyframes rotateAI {
                    100% {
                        transform: rotate(360deg);
                    }
                }
                .animate-techrune {
                    animation: techRunePulse 3.5s ease-in-out infinite alternate;
                }
                .animate-techrune2 {
                    animation: techRunePulse2 4.5s ease-in-out infinite alternate;
                }
                @keyframes techRunePulse {
                    0% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    100% {
                        opacity: 0.7;
                        transform: scale(1.15);
                    }
                }
                @keyframes techRunePulse2 {
                    0% {
                        opacity: 0.2;
                        transform: scale(1);
                    }
                    100% {
                        opacity: 0.5;
                        transform: scale(1.1);
                    }
                }
                .animate-trace-line {
                    animation: traceLine 1.2s cubic-bezier(0.4, 2, 0.6, 1) both;
                }
                @keyframes traceLine {
                    0% {
                        stroke-dashoffset: 48;
                        opacity: 0;
                    }
                    60% {
                        opacity: 1;
                    }
                    100% {
                        stroke-dashoffset: 0;
                        opacity: 1;
                    }
                }
            `}</style>
        </section>
    );
}
