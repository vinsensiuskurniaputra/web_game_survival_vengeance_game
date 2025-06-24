import Image from 'next/image';
import { Nunito, Fredoka } from 'next/font/google';
import Link from 'next/link';
import { FaLeaf, FaPaw, FaGamepad, FaUsers, FaTree, FaScroll, FaMagic, FaMap, FaEye, FaFeatherAlt } from 'react-icons/fa';
import { GiWoodenSign, GiForest, GiHerbsBundle, GiBearFace, GiStoneAxe, GiTreeDoor, GiRiver, GiCaveEntrance, GiSpiralBottle, GiAncientSword, GiWolfHowl } from 'react-icons/gi';
import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Team from '@/components/team';
import Specs from '@/components/specs';
import Sinopsis from '@/components/sinopsis';
import Judul from '@/components/judul';
import GameElement from '@/components/game_element';
import TechSpec from '@/components/tech_spec';
import Cerita from '@/components/cerita';
import Gameplay from '@/components/gameplay';
import WinLoseCondition from '@/components/win_lose_condition';
import PlayerControl from '@/components/player_controller';
import KeyFeatures from '@/components/key_feathure';
import LevelDesign from '@/components/level_design';
import AiSystem from '@/components/ai_system';
import ArtUi from '@/components/art_ui';
// Add fantasy/gothic font from Google Fonts
import { MedievalSharp } from 'next/font/google';

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
const medieval = MedievalSharp({
    subsets: ['latin'],
    variable: '--font-medieval',
    display: 'swap',
    weight: ['400'],
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

    // Split menu items into two rows

    return (
        <div className={`bg-gradient-to-b from-[#B1ECEA]  via-[#0a0a0a] to-black min-h-screen text-[#09394A] font-sans overflow-x-hidden ${nunito.className} ${fredoka.className} ${medieval.className}`}>
            {/* Parallax Layers */}
            <div aria-hidden className='fixed inset-0 z-0 pointer-events-none select-none'>
                {/* Distant background */}
                <div ref={bgRef} style={{ transform: 'translateY(0px)' }} className="absolute inset-0 w-full h-full bg-[url('/parallax/sky-fog.png')] bg-cover bg-center bg-fixed opacity-70 mix-blend-lighten will-change-transform transition-transform duration-200" />
                {/* Midground trees */}
                <div ref={midRef} style={{ transform: 'translateY(0px)' }} className="absolute inset-0 w-full h-full bg-[url('/parallax/forest-trees.png')] bg-cover bg-center bg-fixed opacity-80 will-change-transform transition-transform duration-200" />
                {/* Foreground foliage */}
                <div ref={fgRef} style={{ transform: 'translateY(0px)' }} className="absolute inset-0 w-full h-full bg-[url('/parallax/ground-foreground.png')] bg-cover bg-bottom bg-fixed opacity-90 will-change-transform transition-transform duration-200" />
            </div>

            {/* Sticky Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* Team Members */}
            <Team />

            {/* Judul dan Makna */}
            <Judul />

            {/* Game Specification */}
            <Specs />

            {/* Game Synopsis */}
            <Sinopsis />

            {/* --- DARK FANTASY KINGDOM THEME START --- */}
            <div className='w-full h-20 z-10'>
                <svg viewBox='0 0 100 10' preserveAspectRatio='none' className='w-full h-full text-black'>
                    <path d='M0,10 L0,5 L5,5 L5,0 L15,0 L15,5 L20,5 L20,0 L30,0 L30,5 L35,5 L35,0 L45,0 L45,5 L50,5 L50,0 L60,0 L60,5 L65,5 L65,0 L75,0 L75,5 L80,5 L80,0 L90,0 L90,5 L95,5 L95,0 L100,0 L100,10 Z' fill='currentColor' />
                </svg>
            </div>
            <section id='dark-fantasy-section' className='relative z-10 py-20 px-0 md:px-8 bg-gradient-to-b from-black via-[#18141c] to-[#0a0a0a] border border-t border-black overflow-hidden'>
                {/* Torch flicker lights */}
                <div className='absolute left-8 top-100 z-20 w-24 h-64 torch-flicker' />
                <div className='absolute right-8 top-100 z-20 w-24 h-64 torch-flicker' />

                <div className='relative z-30 max-w-5xl mx-auto px-4 md:px-12 py-12 rounded-3xl border border-[#3a223a]/60 bg-[#18141c]/80 shadow-[0_8px_64px_#000c] backdrop-blur-xl'>
                    {/* GAME ELEMENTS */}
                    <div className='mb-16'>
                        <GameElement />
                    </div>

                    {/* TECHNICAL SPEC */}
                    <div className='mb-16'>
                        <TechSpec />
                    </div>

                    {/* Story */}
                    <div className='mb-16'>
                        <Cerita />
                    </div>

                    {/* GamePlay */}
                    <div className='mb-16'>
                        <Gameplay />
                    </div>

                    {/* Win Lose Condition */}
                    <div className='mb-16'>
                        <WinLoseCondition />
                    </div>

                    {/* Player Control */}
                    <div className='mb-16'>
                        <PlayerControl />
                    </div>

                    {/* Key Features */}
                    <div className='mb-16'>
                        <KeyFeatures />
                    </div>

                    {/* Level Design */}
                    <div className='mb-16'>
                        <LevelDesign />
                    </div>

                    {/* AI System */}
                    <div className='mb-16'>
                        <AiSystem />
                    </div>

                    {/* Art and UI Showcase */}
                    <div>
                        <ArtUi />
                    </div>
                </div>
            </section>
            {/* --- DARK FANTASY KINGDOM THEME END --- */}

            {/* Footer */}
            <footer className='py-8 px-4 bg-gradient-to-b from-[#2a1a2a]/90 to-[#18141c]/95 text-center border-t border-[#bfa14a]/30 font-medieval text-[#bfa14a] tracking-widest'>
                <p>© 2024 Forest of Vengeance. All rights reserved.</p>
            </footer>

            {/* Custom styles for animation and glassmorphism */}
            <style jsx global>{`
                html {
                    scroll-behavior: smooth;
                }
                .font-medieval {
                    font-family: 'MedievalSharp', 'Fredoka', 'Nunito', serif;
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
                /* --- DARK FANTASY THEME STYLES --- */
                #dark-fantasy-section {
                    position: relative;
                    background: linear-gradient(180deg, #000000 0%, #18141c 60%, #0a0a0a 100%);
                }
                /* Torch flicker effect */
                .torch-flicker {
                    pointer-events: none;
                    background: radial-gradient(ellipse at 50% 10%, #ffecb3 0%, #bfa14a 40%, #0000 80%);
                    opacity: 0.25;
                    filter: blur(8px);
                    animation: torchFlicker 2.5s infinite alternate;
                }
                @keyframes torchFlicker {
                    0% {
                        opacity: 0.18;
                        filter: blur(10px);
                    }
                    20% {
                        opacity: 0.28;
                        filter: blur(7px);
                    }
                    40% {
                        opacity: 0.22;
                        filter: blur(12px);
                    }
                    60% {
                        opacity: 0.32;
                        filter: blur(8px);
                    }
                    80% {
                        opacity: 0.2;
                        filter: blur(11px);
                    }
                    100% {
                        opacity: 0.25;
                        filter: blur(8px);
                    }
                }
                /* Fog drift animation */
                .animate-fog {
                    animation: fogDrift 60s linear infinite;
                }
                @keyframes fogDrift {
                    0% {
                        background-position-x: 0;
                    }
                    100% {
                        background-position-x: 1200px;
                    }
                }
                /* Gothic arch effect for section headers */
                .gothic-arch {
                    border-top-left-radius: 80% 100px;
                    border-top-right-radius: 80% 100px;
                }
                /* Section content */
                #dark-fantasy-section h2,
                #dark-fantasy-section h3 {
                    font-family: 'MedievalSharp', serif;
                    color: #bfa14a;
                    letter-spacing: 0.08em;
                    text-shadow: 0 2px 12px #000a, 0 0 2px #bfa14a88;
                }
                #dark-fantasy-section p,
                #dark-fantasy-section li,
                #dark-fantasy-section span {
                    color: #e0d6f6;
                    font-family: 'Nunito', serif;
                }
                #dark-fantasy-section {
                    box-shadow: 0 0 80px #000a;
                }
                /* Section borders and backgrounds */
                #dark-fantasy-section .rounded-3xl {
                    border: 2px solid #3a223a;
                    background: linear-gradient(135deg, #18141c 80%, #2a1a2a 100%);
                    box-shadow: 0 8px 64px #000c, 0 0 0 4px #bfa14a22 inset;
                }
                /* Subtle gold accent lines */
                #dark-fantasy-section hr {
                    border: none;
                    border-top: 2px solid #bfa14a88;
                    margin: 2rem 0;
                }
            `}</style>
        </div>
    );
}
