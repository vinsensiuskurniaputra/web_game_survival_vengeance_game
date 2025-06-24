import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
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
    )
}