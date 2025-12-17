import { useEffect, useRef } from 'react';
import { Github, FileText, Brain, Cloud, Cpu, Atom, Laptop, Moon, Sun,Network, TerminalSquare } from 'lucide-react';

import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const canvasRef = useRef(null);
  const nebulaRef = useRef(null);
  const { isDark, toggleTheme, colors } = useTheme();

  useEffect(() => {
    return () => {};
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden transition-colors duration-300" style={{ backgroundColor: colors.background }}>
      <style>{`
                .disintegrate-text {
          display: inline-block;
          animation: fadeParticles 3s infinite ease-in-out;
        }

        @keyframes fadeParticles {
          0% {
            opacity: 1;
            filter: blur(0px);
            transform: translateX(0);
            clip-path: inset(0 0 0 0);
          }
          40% {
            opacity: 1;
          }
          60% {
            opacity: 0.6;
            filter: blur(3px);
            transform: translateX(12px);
            clip-path: inset(0 40% 0 0);
          }
          100% {
            opacity: 0;
            filter: blur(8px);
            transform: translateX(60px);
            clip-path: inset(0 100% 0 0);
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes line-pulse {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.3; }
        }
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes grid-fade {
          0%, 100% { opacity: 0.025; }
          50% { opacity: 0.06; }
        }
        @keyframes data-stream {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        
      `}</style>

      <div
        ref={nebulaRef}
        className="absolute inset-0 z-0 overflow-hidden transition-colors duration-300"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 50%, rgba(0,0,0,1) 100%)'
            : 'linear-gradient(135deg, rgba(250,251,252,1) 0%, rgba(248,249,251,0.98) 50%, rgba(250,251,252,1) 100%)',
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: isDark ? 'rgba(201, 162, 39, 0.08)' : 'rgba(10, 26, 74, 0.06)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: isDark ? 'rgba(232, 220, 196, 0.1)' : 'rgba(192, 197, 206, 0.12)',
            animation: 'pulse 10s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />

        {/* Shimmer lines */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`shimmer-${i}`}
            className="absolute top-0 w-px"
            style={{
              left: `${(i * 7 + 5) % 100}%`,
              height: '200px',
              background: isDark
                ? `linear-gradient(to bottom, transparent, rgba(201, 162, 39, ${0.15 + i * 0.01}), transparent)`
                : 'linear-gradient(to bottom, transparent, rgba(10, 26, 74, 0.15), transparent)',
              animation: `shimmer ${8 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Professional grid lines - horizontal */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`line-h-${i}`}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${(i * 12 + 10) % 90}%`,
              background: isDark
                ? `linear-gradient(90deg, transparent, ${i % 2 === 0 ? 'rgba(201, 162, 39, 0.12)' : 'rgba(232, 220, 196, 0.15)'}, transparent)`
                : `linear-gradient(90deg, transparent, ${i % 2 === 0 ? 'rgba(10, 26, 74, 0.1)' : 'rgba(192, 197, 206, 0.15)'}, transparent)`,
              animation: `line-pulse ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        {/* Professional grid lines - vertical */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`line-v-${i}`}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${(i * 12 + 10) % 90}%`,
              background: isDark
                ? `linear-gradient(180deg, transparent, ${i % 2 === 0 ? 'rgba(201, 162, 39, 0.12)' : 'rgba(232, 220, 196, 0.15)'}, transparent)`
                : `linear-gradient(180deg, transparent, ${i % 2 === 0 ? 'rgba(10, 26, 74, 0.1)' : 'rgba(192, 197, 206, 0.15)'}, transparent)`,
              animation: `line-pulse ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Subtle scanning line */}
        <div
          className="absolute left-0 right-0 h-px"
          style={{
            background: isDark
              ? 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.15), transparent)'
              : 'linear-gradient(to right, transparent, rgba(10, 26, 74, 0.12), transparent)',
            animation: 'scan-line 8s linear infinite',
            boxShadow: isDark ? '0 0 6px rgba(201, 162, 39, 0.25)' : '0 0 6px rgba(10, 26, 74, 0.2)',
          }}
        />

        {/* Refined grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? `
                  linear-gradient(rgba(201, 162, 39, 0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201, 162, 39, 0.05) 1px, transparent 1px)
                `
              : `
                  linear-gradient(rgba(10, 26, 74, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(10, 26, 74, 0.03) 1px, transparent 1px)
                `,
            backgroundSize: '50px 50px',
            animation: 'grid-fade 3s ease-in-out infinite',
          }}
        />

        {/* Data streams */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`data-${i}`}
            className="absolute h-0.5"
            style={{
              top: `${(i * 15 + 10) % 80}%`,
              width: '300px',
              background: isDark
                ? `linear-gradient(90deg, transparent, ${i % 2 === 0 ? 'rgba(201, 162, 39, 0.25)' : 'rgba(232, 220, 196, 0.3)'}, transparent)`
                : `linear-gradient(90deg, transparent, ${i % 2 === 0 ? 'rgba(10, 26, 74, 0.2)' : 'rgba(192, 197, 206, 0.25)'}, transparent)`,
              animation: `data-stream ${6 + i * 0.8}s ease-in-out infinite`,
              animationDelay: `${i * 1.2}s`,
              boxShadow: isDark
                ? `0 0 4px ${i % 2 === 0 ? 'rgba(201, 162, 39, 0.2)' : 'rgba(232, 220, 196, 0.25)'}`
                : `0 0 4px ${i % 2 === 0 ? 'rgba(10, 26, 74, 0.15)' : 'rgba(192, 197, 206, 0.2)'}`,
            }}
          />
        ))}

        {/* Floating hexagons */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`hex-${i}`}
            className="absolute"
            style={{
              left: `${(i * 11 + 5) % 95}%`,
              top: `${(i * 13 + 10) % 85}%`,
              width: '40px',
              height: '40px',
              opacity: isDark ? 0.1 : 0.06,
              animation: `float ${5 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="none"
                stroke={isDark ? (i % 2 === 0 ? colors.primary : colors.secondary) : (i % 2 === 0 ? '#0A1A4A' : '#C0C5CE')}
                strokeWidth="2"
              />
            </svg>
          </div>
        ))}

        {/* Corner accent brackets */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.2)' }} />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.2)' }} />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(232, 220, 196, 0.3)' : 'rgba(192, 197, 206, 0.25)' }} />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(232, 220, 196, 0.3)' : 'rgba(192, 197, 206, 0.25)' }} />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 md:px-6 py-3 md:py-4 mb-40 sm:mb-0 ml-10 mt-2 sm:ml-0">
        <div className="max-w-7xl sm:mx-auto">
          <div
            className="glass-effect rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 border-2 backdrop-blur-md transition-all duration-300 max-w-xs sm:max-w-none"
            style={{
              background: isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.25)',
              boxShadow: isDark ? '0 4px 20px rgba(201, 162, 39, 0.15)' : '0 4px 20px rgba(10, 26, 74, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.5)' : 'rgba(10, 26, 74, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.25)';
            }}
          >
            <div className="flex items-center justify-between gap-2 sm:gap-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-lg sm:text-xl md:text-2xl font-black transition-all duration-300 relative group flex-shrink-0"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  color: colors.primary,
                  textShadow: isDark ? '0 2px 8px rgba(201, 162, 39, 0.3)' : '0 2px 8px rgba(10, 26, 74, 0.12)',
                }}
              >
                H.
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: colors.primary, boxShadow: isDark ? '0 0 8px rgba(201, 162, 39, 0.5)' : '0 0 8px rgba(10, 26, 74, 0.4)' }} />
              </button>

              <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
                {['Home', 'Skills', 'Projects','About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="relative text-xs lg:text-sm font-bold transition-all duration-300 tracking-wide group whitespace-nowrap"
                    style={{ fontFamily: 'Orbitron, sans-serif', color: isDark ? colors.text : '#4B5563' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isDark ? colors.text : '#4B5563';
                    }}
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: colors.primary, boxShadow: isDark ? '0 0 8px rgba(201, 162, 39, 0.5)' : '0 0 8px rgba(10, 26, 74, 0.4)' }} />
                  </button>
                ))}
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="px-3 py-2 rounded-full border-2 transition-all duration-300 flex items-center justify-center hover:scale-110 flex-shrink-0"
                style={{
                  borderColor: isDark ? colors.primary : colors.primary,
                  background: isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)',
                  boxShadow: isDark ? '0 2px 12px rgba(201, 162, 39, 0.2)' : '0 2px 12px rgba(10, 26, 74, 0.12)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.2)' : 'rgba(10, 26, 74, 0.1)';
                  e.currentTarget.style.borderColor = colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)';
                  e.currentTarget.style.borderColor = colors.primary;
                }}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <Sun className="w-4 h-4" style={{ color: colors.primary }} />
                ) : (
                  <Moon className="w-4 h-4" style={{ color: colors.primary }} />
                )}
              </button>

              <a
                href="https://drive.google.com/file/d/1JitMyPLRyolZyvX5CCnbRVz-EJcMAoYU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 border-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0"
                style={{
                  fontFamily: 'Saira Semi Condensed, sans-serif',
                  fontWeight: 700,
                  borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                  color: colors.primary,
                  boxShadow: isDark ? '0 2px 12px rgba(201, 162, 39, 0.2)' : '0 2px 12px rgba(10, 26, 74, 0.12)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)';
                  e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.6)' : 'rgba(10, 26, 74, 0.5)';
                  e.currentTarget.style.boxShadow = isDark ? '0 4px 20px rgba(201, 162, 39, 0.3)' : '0 4px 20px rgba(10, 26, 74, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)';
                  e.currentTarget.style.boxShadow = isDark ? '0 2px 12px rgba(201, 162, 39, 0.2)' : '0 2px 12px rgba(10, 26, 74, 0.12)';
                }}
              >
                Resume ↗
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-8 md:pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 xl:gap-32 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-72 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center">

                {/* Center element with HM text */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div
                    className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44"
                    style={{
                      animation: 'float 4s ease-in-out infinite',
                    }}
                  >
                    <div className="absolute inset-0 rounded-full blur-3xl transition-colors duration-300 pointer-events-none" style={{ background: isDark ? 'rgba(201, 162, 39, 0.15)' : 'rgba(10, 26, 74, 0.12)' }} />

                    <div className="relative w-full h-full rounded-full border-2 backdrop-blur-sm flex items-center justify-center overflow-hidden transition-colors duration-300"
                      style={{
                        background: isDark
                          ? 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.85))'
                          : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.85), rgba(248, 249, 251, 0.85))',
                        borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                        boxShadow: isDark
                          ? '0 8px 32px rgba(201, 162, 39, 0.2), inset 0 2px 16px rgba(201, 162, 39, 0.1)'
                          : '0 8px 32px rgba(10, 26, 74, 0.15), inset 0 2px 16px rgba(10, 26, 74, 0.06)',
                      }}
                    >
                      <div className="absolute inset-0 rounded-full pointer-events-none transition-colors duration-300" style={{ background: isDark ? 'linear-gradient(to bottom right, rgba(201, 162, 39, 0.05), transparent)' : 'linear-gradient(to bottom right, rgba(10, 26, 74, 0.03), transparent)' }} />
                      <div className="absolute inset-0 border-2 rounded-full m-3 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(201, 162, 39, 0.2)' : 'rgba(10, 26, 74, 0.12)' }} />

                      <div className="relative z-10 text-center">
                    <TerminalSquare
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 transition-colors duration-300"
                        style={{
                          color: colors.primary,
                          filter: isDark
                            ? 'drop-shadow(0 4px 20px rgba(201, 162, 39, 0.4))'
                            : 'drop-shadow(0 4px 20px rgba(10, 26, 74, 0.2))',
                        }}
                        aria-label="Developer Expertise"
                      />

                      </div>

                      <div className="absolute top-0 left-0 w-full h-0.5 transition-colors duration-300" style={{ background: isDark ? 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.3), transparent)' : 'linear-gradient(to right, transparent, rgba(10, 26, 74, 0.25), transparent)' }} />
                      <div className="absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300" style={{ background: isDark ? 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.3), transparent)' : 'linear-gradient(to right, transparent, rgba(10, 26, 74, 0.25), transparent)' }} />
                    </div>
                  </div>
                </div>

                {/* Revolving elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem]"
                    style={{
                      animation: 'spin 20s linear infinite',
                    }}
                  >
                    {/* Element 1 - Brain (0deg) */}
                    <div className="absolute w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                      <div className="absolute inset-0 rounded-full blur-2xl transition-all duration-300 group-hover:blur-3xl" style={{ background: isDark ? 'rgba(201, 162, 39, 0.25)' : 'rgba(10, 26, 74, 0.2)' }} />
                      <div className="relative w-full h-full p-4 sm:p-4.5 md:p-5 lg:p-6 xl:p-7 rounded-full border-2 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 flex items-center justify-center"
                        style={{
                          borderColor: isDark ? 'rgba(201, 162, 39, 0.5)' : 'rgba(10, 26, 74, 0.4)',
                          background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)',
                          boxShadow: isDark ? '0 4px 20px rgba(201, 162, 39, 0.2)' : '0 4px 20px rgba(10, 26, 74, 0.15)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.7)' : 'rgba(10, 26, 74, 0.6)';
                          e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.5)' : 'rgba(10, 26, 74, 0.4)';
                          e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)';
                        }}
                      >
                        <Brain className="w-8 sm:w-9 md:w-11 lg:w-13 xl:w-15 h-8 sm:h-9 md:h-11 lg:h-13 xl:h-15" style={{ color: colors.primary, filter: isDark ? 'drop-shadow(0 2px 8px rgba(201, 162, 39, 0.4))' : 'drop-shadow(0 2px 8px rgba(10, 26, 74, 0.25))' }} />
                      </div>
                    </div>

                    {/* Element 2 - Atom (60deg) */}
                    <div className="absolute w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 group cursor-pointer"
                      style={{
                        left: '93.3%',
                        top: '25%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="absolute inset-0 rounded-full blur-2xl transition-all duration-300 group-hover:blur-3xl" style={{ background: isDark ? 'rgba(232, 220, 196, 0.3)' : 'rgba(192, 197, 206, 0.25)' }} />
                      <div className="relative w-full h-full p-4 sm:p-4.5 md:p-5 lg:p-6 xl:p-7 rounded-full border-2 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 flex items-center justify-center"
                        style={{
                          borderColor: isDark ? 'rgba(232, 220, 196, 0.6)' : 'rgba(192, 197, 206, 0.5)',
                          background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)',
                          boxShadow: isDark ? '0 4px 20px rgba(232, 220, 196, 0.25)' : '0 4px 20px rgba(192, 197, 206, 0.2)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(232, 220, 196, 0.8)' : 'rgba(192, 197, 206, 0.7)';
                          e.currentTarget.style.background = isDark ? 'rgba(232, 220, 196, 0.15)' : 'rgba(192, 197, 206, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(232, 220, 196, 0.6)' : 'rgba(192, 197, 206, 0.5)';
                          e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)';
                        }}
                      >
                        <Atom className="w-8 sm:w-9 md:w-11 lg:w-13 xl:w-15 h-8 sm:h-9 md:h-11 lg:h-13 xl:h-15" style={{ color: isDark ? colors.secondary : '#1a3a6a', filter: isDark ? 'drop-shadow(0 2px 8px rgba(232, 220, 196, 0.4))' : 'drop-shadow(0 2px 8px rgba(192, 197, 206, 0.3))' }} />
                      </div>
                    </div>

                    {/* Element 3 - Laptop (120deg) */}
                    <div className="absolute w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 group cursor-pointer"
                      style={{
                        left: '93.3%',
                        top: '75%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="absolute inset-0 rounded-full blur-2xl transition-all duration-300 group-hover:blur-3xl" style={{ background: isDark ? 'rgba(201, 162, 39, 0.25)' : 'rgba(10, 26, 74, 0.2)' }} />
                      <div className="relative w-full h-full p-4 sm:p-4.5 md:p-5 lg:p-6 xl:p-7 rounded-full border-2 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 flex items-center justify-center"
                        style={{
                          borderColor: isDark ? 'rgba(201, 162, 39, 0.5)' : 'rgba(10, 26, 74, 0.4)',
                          background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)',
                          boxShadow: isDark ? '0 4px 20px rgba(201, 162, 39, 0.2)' : '0 4px 20px rgba(10, 26, 74, 0.15)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.7)' : 'rgba(10, 26, 74, 0.6)';
                          e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.5)' : 'rgba(10, 26, 74, 0.4)';
                          e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)';
                        }}
                      >
                        <Laptop className="w-8 sm:w-9 md:w-11 lg:w-13 xl:w-15 h-8 sm:h-9 md:h-11 lg:h-13 xl:h-15" style={{ color: colors.primary, filter: isDark ? 'drop-shadow(0 2px 8px rgba(201, 162, 39, 0.4))' : 'drop-shadow(0 2px 8px rgba(10, 26, 74, 0.25))' }} />
                      </div>
                    </div>

                    {/* Element 4 - Cloud (180deg) */}
                    <div className="absolute w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 group cursor-pointer">
                      <div className="absolute inset-0 rounded-full blur-2xl transition-all duration-300 group-hover:blur-3xl" style={{ background: isDark ? 'rgba(232, 220, 196, 0.3)' : 'rgba(192, 197, 206, 0.25)' }} />
                      <div className="relative w-full h-full p-4 sm:p-4.5 md:p-5 lg:p-6 xl:p-7 rounded-full border-2 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 flex items-center justify-center"
                        style={{
                          borderColor: isDark ? 'rgba(232, 220, 196, 0.6)' : 'rgba(192, 197, 206, 0.5)',
                          background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)',
                          boxShadow: isDark ? '0 4px 20px rgba(232, 220, 196, 0.25)' : '0 4px 20px rgba(192, 197, 206, 0.2)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(232, 220, 196, 0.8)' : 'rgba(192, 197, 206, 0.7)';
                          e.currentTarget.style.background = isDark ? 'rgba(232, 220, 196, 0.15)' : 'rgba(192, 197, 206, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(232, 220, 196, 0.6)' : 'rgba(192, 197, 206, 0.5)';
                          e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)';
                        }}
                      >
                        <Cloud className="w-8 sm:w-9 md:w-11 lg:w-13 xl:w-15 h-8 sm:h-9 md:h-11 lg:h-13 xl:h-15" style={{ color: isDark ? colors.secondary : '#1a3a6a', filter: isDark ? 'drop-shadow(0 2px 8px rgba(232, 220, 196, 0.4))' : 'drop-shadow(0 2px 8px rgba(192, 197, 206, 0.3))' }} />
                      </div>
                    </div>

                    {/* Element 5 - Cpu (240deg) */}
                    <div className="absolute w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 group cursor-pointer"
                      style={{
                        left: '6.7%',
                        top: '75%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="absolute inset-0 rounded-full blur-2xl transition-all duration-300 group-hover:blur-3xl" style={{ background: isDark ? 'rgba(201, 162, 39, 0.25)' : 'rgba(10, 26, 74, 0.2)' }} />
                      <div className="relative w-full h-full p-4 sm:p-4.5 md:p-5 lg:p-6 xl:p-7 rounded-full border-2 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 flex items-center justify-center"
                        style={{
                          borderColor: isDark ? 'rgba(201, 162, 39, 0.5)' : 'rgba(10, 26, 74, 0.4)',
                          background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)',
                          boxShadow: isDark ? '0 4px 20px rgba(201, 162, 39, 0.2)' : '0 4px 20px rgba(10, 26, 74, 0.15)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.7)' : 'rgba(10, 26, 74, 0.6)';
                          e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.5)' : 'rgba(10, 26, 74, 0.4)';
                          e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)';
                        }}
                      >
                        <Cpu className="w-8 sm:w-9 md:w-11 lg:w-13 xl:w-15 h-8 sm:h-9 md:h-11 lg:h-13 xl:h-15" style={{ color: colors.primary, filter: isDark ? 'drop-shadow(0 2px 8px rgba(201, 162, 39, 0.4))' : 'drop-shadow(0 2px 8px rgba(10, 26, 74, 0.25))' }} />
                      </div>
                    </div>

                    {/* Element 6 - Second Cpu variant (300deg) */}
                   <div className="absolute w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 group cursor-pointer"
                      style={{
                        left: '6.7%',
                        top: '25%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-full blur-2xl transition-all duration-300 group-hover:blur-3xl"
                        style={{
                          background: isDark ? 'rgba(232, 220, 196, 0.3)' : 'rgba(192, 197, 206, 0.25)'
                        }}
                      />
                      <div
                        className="relative w-full h-full p-4 sm:p-4.5 md:p-5 lg:p-6 xl:p-7 rounded-full border-2 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 flex items-center justify-center"
                        style={{
                          borderColor: isDark ? 'rgba(232, 220, 196, 0.6)' : 'rgba(192, 197, 206, 0.5)',
                          background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)',
                          boxShadow: isDark
                            ? '0 4px 20px rgba(232, 220, 196, 0.25)'
                            : '0 4px 20px rgba(192, 197, 206, 0.2)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(232, 220, 196, 0.8)' : 'rgba(192, 197, 206, 0.7)';
                          e.currentTarget.style.background = isDark ? 'rgba(232, 220, 196, 0.15)' : 'rgba(192, 197, 206, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = isDark ? 'rgba(232, 220, 196, 0.6)' : 'rgba(192, 197, 206, 0.5)';
                          e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)';
                        }}
                      >
                        <Network
                          className="w-8 sm:w-9 md:w-11 lg:w-13 xl:w-15 h-8 sm:h-9 md:h-11 lg:h-13 xl:h-15"
                          style={{
                            color: isDark ? colors.secondary : '#1a3a6a',
                            filter: isDark
                              ? 'drop-shadow(0 2px 8px rgba(232, 220, 196, 0.4))'
                              : 'drop-shadow(0 2px 8px rgba(192, 197, 206, 0.3))'
                          }}
                          aria-label="Cloud Network Connectivity"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div
              className="lg:col-span-3 space-y-4 md:space-y-6 text-center lg:text-left"
              style={{
                animation: 'fade-in-up 1s ease-out',
              }}
            >
              <h2
                className="text-base md:text-lg font-bold uppercase tracking-widest mb-2 transition-colors duration-300"
                style={{
                  fontFamily: 'Saira Semi Condensed, sans-serif',
                  color: isDark ? colors.secondary : '#1a3a6a',
                  textShadow: isDark ? '0 2px 8px rgba(232, 220, 196, 0.2)' : '0 2px 8px rgba(26, 58, 106, 0.12)',
                  opacity: 0.95,
                  animation: 'fade-in-up 1s ease-out 0.2s backwards',
                }}
              >
               
              </h2>

            <h1
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none mb-3 md:mb-4 transition-colors duration-300"
  style={{
    fontFamily: 'Orbitron, sans-serif',
    fontWeight: 900,
    backgroundImage: isDark
      ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)`
      : 'linear-gradient(135deg, #0A1A4A 0%, #1a3a6a 50%, #0A1A4A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: isDark
      ? '0 4px 20px rgba(201, 162, 39, 0.3)'
      : '0 4px 20px rgba(10, 26, 74, 0.15)',
    filter: isDark
      ? 'drop-shadow(0 2px 12px rgba(201, 162, 39, 0.3))'
      : 'drop-shadow(0 2px 12px rgba(10, 26, 74, 0.2))',
    animation: 'fade-in-up 1s ease-out 0.4s backwards',
  }}
>
  HARINI.M
</h1>

              <h2
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 leading-tight transition-colors duration-300"
                style={{
                  fontFamily: 'Saira Semi Condensed, sans-serif',
                  fontWeight: 700,
                  color: isDark ? colors.text : '#1F2937',
                  textShadow: isDark ? '0 2px 10px rgba(199, 199, 199, 0.15)' : '0 2px 10px rgba(31, 41, 55, 0.08)',
                  animation: 'fade-in-up 1s ease-out 0.6s backwards',
                }}
              >
                Engineer by Skill. Innovator by Heart.
              </h2>

              <p
                className="text-sm md:text-base leading-relaxed mb-3 md:mb-5 transition-colors duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: isDark ? colors.text : '#4B5563',
                  lineHeight: '1.8',
                  textShadow: isDark ? '0 1px 2px rgba(0, 0, 0, 0.2)' : '0 1px 2px rgba(0, 0, 0, 0.05)',
                  animation: 'fade-in-up 1s ease-out 0.8s backwards',
                }}
              >
                
              </p>

              <div
                className="space-y-1.5 mb-5 md:mb-6 text-xs md:text-sm transition-colors duration-300"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  color: isDark ? colors.secondary : '#1a3a6a',
                  letterSpacing: '0.3px',
                  animation: 'fade-in-up 1s ease-out 1s backwards',
                }}
              >
              <p className="flex items-center gap-3 justify-center lg:justify-start">
                <span style={{ color: colors.primary }}>•</span>
                <span className="disintegrate-text">Full Stack Web Developer</span>
              </p>


              </div>

              <div
                className="flex flex-col sm:flex-row flex-wrap gap-2.5 md:gap-3 mb-5 md:mb-6 justify-center lg:justify-start"
                style={{
                  animation: 'fade-in-up 1s ease-out 1.2s backwards',
                }}
              >
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-5 md:px-7 py-2.5 md:py-3.5 text-white rounded-lg font-bold text-xs md:text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    fontFamily: 'Saira Semi Condensed, sans-serif',
                    fontWeight: 700,
                    background: isDark
                      ? `linear-gradient(to right, ${colors.primary}, rgba(201, 162, 39, 0.8))`
                      : 'linear-gradient(to right, #0A1A4A, #1a3a6a)',
                    boxShadow: isDark ? '0 4px 20px rgba(201, 162, 39, 0.3)' : '0 4px 20px rgba(10, 26, 74, 0.25)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = isDark ? '0 6px 30px rgba(201, 162, 39, 0.4)' : '0 6px 30px rgba(10, 26, 74, 0.35)';
                    e.currentTarget.style.background = isDark
                      ? `linear-gradient(to right, rgba(201, 162, 39, 0.9), ${colors.primary})`
                      : 'linear-gradient(to right, #0d2158, #1f4577)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = isDark ? '0 4px 20px rgba(201, 162, 39, 0.3)' : '0 4px 20px rgba(10, 26, 74, 0.25)';
                    e.currentTarget.style.background = isDark
                      ? `linear-gradient(to right, ${colors.primary}, rgba(201, 162, 39, 0.8))`
                      : 'linear-gradient(to right, #0A1A4A, #1a3a6a)';
                  }}
                >
                  View My Projects
                </button>

                <a
                  href="https://github.com/harini1538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 md:px-7 py-2.5 md:py-3.5 rounded-lg font-bold text-xs md:text-sm border-2 transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105"
                  style={{
                    fontFamily: 'Saira Semi Condensed, sans-serif',
                    fontWeight: 700,
                    color: colors.primary,
                    background: isDark ? 'rgba(0, 0, 0, 0.6)' : 'white',
                    borderColor: isDark ? `rgba(201, 162, 39, 0.4)` : 'rgba(10, 26, 74, 0.3)',
                    boxShadow: isDark ? '0 4px 16px rgba(201, 162, 39, 0.2)' : '0 4px 16px rgba(10, 26, 74, 0.12)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = isDark ? '0 6px 24px rgba(201, 162, 39, 0.3)' : '0 6px 24px rgba(10, 26, 74, 0.2)';
                    e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)';
                    e.currentTarget.style.borderColor = isDark ? `rgba(201, 162, 39, 0.6)` : 'rgba(10, 26, 74, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = isDark ? '0 4px 16px rgba(201, 162, 39, 0.2)' : '0 4px 16px rgba(10, 26, 74, 0.12)';
                    e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.6)' : 'white';
                    e.currentTarget.style.borderColor = isDark ? `rgba(201, 162, 39, 0.4)` : 'rgba(10, 26, 74, 0.3)';
                  }}
                >
                  <Github className="w-3.5 md:w-4 h-3.5 md:h-4" style={{ color: colors.primary }} /> GitHub
                </a>

                <a
                  href="https://drive.google.com/file/d/1FpUPGIUf18SCeUzeYyTmuteLuhupqRga/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 md:px-7 py-2.5 md:py-3.5 rounded-lg font-bold text-xs md:text-sm border-2 transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105"
                  style={{
                    fontFamily: 'Saira Semi Condensed, sans-serif',
                    fontWeight: 700,
                    color: colors.primary,
                    background: isDark ? 'rgba(0, 0, 0, 0.6)' : 'white',
                    borderColor: isDark ? `rgba(201, 162, 39, 0.4)` : 'rgba(10, 26, 74, 0.3)',
                    boxShadow: isDark ? '0 4px 16px rgba(201, 162, 39, 0.2)' : '0 4px 16px rgba(10, 26, 74, 0.12)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = isDark ? '0 6px 24px rgba(201, 162, 39, 0.3)' : '0 6px 24px rgba(10, 26, 74, 0.2)';
                    e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)';
                    e.currentTarget.style.borderColor = isDark ? `rgba(201, 162, 39, 0.6)` : 'rgba(10, 26, 74, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = isDark ? '0 4px 16px rgba(201, 162, 39, 0.2)' : '0 4px 16px rgba(10, 26, 74, 0.12)';
                    e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.6)' : 'white';
                    e.currentTarget.style.borderColor = isDark ? `rgba(201, 162, 39, 0.4)` : 'rgba(10, 26, 74, 0.3)';
                  }}
                >
                  <FileText className="w-3.5 md:w-4 h-3.5 md:h-4" style={{ color: colors.primary }} /> Resume ↗
                </a>
              </div>

              <p
                className="text-sm md:text-base transition-colors duration-300"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: colors.primary,
                  textShadow: isDark ? '0 2px 8px rgba(201, 162, 39, 0.3)' : '0 2px 8px rgba(10, 26, 74, 0.12)',
                  opacity: 0.95,
                  animation: 'fade-in-up 1s ease-out 1.4s backwards',
                }}
              >
                "The future belongs to those who code with conscience."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
