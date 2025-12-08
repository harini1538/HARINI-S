import { useRef } from 'react';
import { Github, Linkedin, Mail, FileText, ArrowUp, Code, Terminal } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const nebulaRef = useRef(null);
  const { isDark, colors } = useTheme();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative py-16 md:py-20 px-6 overflow-hidden transition-colors duration-300" 
      style={{ backgroundColor: colors.background }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
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
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background Effects - Same as Hero */}
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

        {/* Grid lines - horizontal */}
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

        {/* Grid lines - vertical */}
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

        {/* Scanning line */}
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

        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? `linear-gradient(rgba(201, 162, 39, 0.05) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(201, 162, 39, 0.05) 1px, transparent 1px)`
              : `linear-gradient(rgba(10, 26, 74, 0.03) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(10, 26, 74, 0.03) 1px, transparent 1px)`,
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

        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.2)' }} />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.2)' }} />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(232, 220, 196, 0.3)' : 'rgba(192, 197, 206, 0.25)' }} />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(232, 220, 196, 0.3)' : 'rgba(192, 197, 206, 0.25)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-3xl md:text-4xl font-black mb-4 transition-all duration-300 relative group inline-block"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                color: colors.primary,
                textShadow: isDark ? '0 2px 8px rgba(201, 162, 39, 0.3)' : '0 2px 8px rgba(10, 26, 74, 0.12)',
              }}
            >
              H.
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: colors.primary, boxShadow: isDark ? '0 0 8px rgba(201, 162, 39, 0.5)' : '0 0 8px rgba(10, 26, 74, 0.4)' }} />
            </button>
            <p 
              className="text-sm mb-4 transition-colors duration-300"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: isDark ? colors.text : '#4B5563',
                lineHeight: '1.6'
              }}
            >
              Crafting digital experiences with precision and passion. Building the future, one line of code at a time.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {[
                { icon: Github, href: 'https://github.com/harini1538', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/harini-murugan-59490a2a1', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:harinipitchai2005@gmail.com', label: 'Email' },
                { icon: FileText, href: 'https://drive.google.com/file/d/1JitMyPLRyolZyvX5CCnbRVz-EJcMAoYU/view?usp=sharing', label: 'Resume' },
                { icon: Code, href: 'https://leetcode.com/u/HARINIHARII/', label: 'LeetCode' },
                { icon: Terminal, href: 'https://www.hackerrank.com/profile/harinipitchai201', label: 'HackerRank' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="p-2.5 rounded-full border-2 transition-all duration-300 hover:scale-110 group"
                  style={{
                    borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.25)',
                    background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                    boxShadow: isDark ? '0 2px 10px rgba(201, 162, 39, 0.1)' : '0 2px 10px rgba(10, 26, 74, 0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.primary;
                    e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.08)';
                    e.currentTarget.style.boxShadow = isDark ? '0 4px 20px rgba(201, 162, 39, 0.3)' : '0 4px 20px rgba(10, 26, 74, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.25)';
                    e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.boxShadow = isDark ? '0 2px 10px rgba(201, 162, 39, 0.1)' : '0 2px 10px rgba(10, 26, 74, 0.08)';
                  }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" style={{ color: colors.primary }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-lg font-bold mb-4 transition-colors duration-300"
              style={{ 
                fontFamily: 'Orbitron, sans-serif',
                color: colors.primary
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'Skills', 'Projects','About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm transition-all duration-300 relative group"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      color: isDark ? colors.text : '#4B5563'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isDark ? colors.text : '#4B5563';
                    }}
                  >
                    {item}
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ background: colors.primary }} />
                  </button>
                </li>
              ))}
            </ul>
        </div>

          {/* Contact Info */}
          <div>
            <h3 
              className="text-lg font-bold mb-4 transition-colors duration-300"
              style={{ 
                fontFamily: 'Orbitron, sans-serif',
                color: colors.primary
              }}
            >
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
          <a
            href="mailto:harinipitchai2005@gmail.com"
                  className="text-sm transition-all duration-300 flex items-center gap-2 group"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: isDark ? colors.text : '#4B5563'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDark ? colors.text : '#4B5563';
                  }}
                >
                  <Mail className="w-4 h-4" />
                  <span>harinipitchai2005@gmail.com</span>
                </a>
              </li>
              <li>
                <p 
                  className="text-sm transition-colors duration-300 flex items-center gap-2"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: isDark ? colors.text : '#4B5563'
                  }}
          >
                  <span className="w-4 h-4 flex items-center justify-center">📍</span>
                  <span>Chennai, Tamil Nadu, India</span>
                </p>
              </li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 group mb-4"
              style={{
                borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.25)',
                background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                boxShadow: isDark ? '0 2px 10px rgba(201, 162, 39, 0.1)' : '0 2px 10px rgba(10, 26, 74, 0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.primary;
                e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.08)';
                e.currentTarget.style.boxShadow = isDark ? '0 4px 20px rgba(201, 162, 39, 0.3)' : '0 4px 20px rgba(10, 26, 74, 0.2)';
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.25)';
                e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.boxShadow = isDark ? '0 2px 10px rgba(201, 162, 39, 0.1)' : '0 2px 10px rgba(10, 26, 74, 0.08)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
              aria-label="Back to top"
          >
              <ArrowUp className="w-5 h-5" style={{ color: colors.primary }} />
            </button>
            <p 
              className="text-xs transition-colors duration-300 text-right"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: isDark ? colors.secondary : '#6B7280'
              }}
            >
              Scroll to top
            </p>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px mb-8 transition-colors duration-300"
          style={{
            background: isDark
              ? 'linear-gradient(90deg, transparent, rgba(201, 162, 39, 0.3), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(10, 26, 74, 0.2), transparent)',
          }}
        />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p 
              className="text-sm transition-colors duration-300"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: isDark ? colors.text : '#4B5563'
              }}
            >
              © {new Date().getFullYear()} <span style={{ color: colors.primary, fontFamily: 'Orbitron, sans-serif', fontWeight: 'bold' }}>Harini M.</span> All rights reserved.
          </p>
            <p 
              className="text-xs mt-1 transition-colors duration-300"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: isDark ? colors.secondary : '#6B7280'
              }}
            >
              Crafted with passion and precision. Designed in the realm of imagination.
          </p>
          </div>
          <div className="flex items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full transition-colors duration-300"
              style={{
                background: colors.primary,
                boxShadow: isDark ? '0 0 8px rgba(201, 162, 39, 0.5)' : '0 0 8px rgba(10, 26, 74, 0.3)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            <p 
              className="text-xs transition-colors duration-300"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: isDark ? colors.secondary : '#6B7280'
              }}
            >
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
