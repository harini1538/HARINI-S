import { useState } from "react";
import {
  Code2,
  Globe,
  Server,
  Cloud,
  FileCode,
  Database,
  Zap,
  Shield,
  Brain,
  FileCode2,
  Layers,
  Flame,
  Key,
} from "lucide-react";
import { useTheme } from '../contexts/ThemeContext';

// Skill icon mapping
const skillIcons = {
  "Python": FileCode2,
  "JavaScript": Code2,
  "TypeScript": Code2,
  "HTML": FileCode,
  "CSS": Layers,
  "React": Layers,
  "TailwindCSS": Layers,
  "Node.js": Server,
  "Express": Server,
  "Flask": Flame,
  "SQL": Database,
  "Firebase": Cloud,
  "AI": Brain,
  "REST API": Zap,
  "Auth": Key,
};

export default function Skills() {
  const [hoveredSegment, setHoveredSegment] = useState(null);
  const { isDark, colors } = useTheme();

  const skillGroups = [
    {
      id: "programming-core",
      title: "Programming Core",
      icon: FileCode,
      skills: ["Python", "JavaScript"],
      angle: 0, // Top-right segment
    },
    {
      id: "web-frontend",
      title: "Web Frontend",
      icon: Globe,
      skills: ["HTML", "CSS", "React", "TailwindCSS"],
      angle: 45, // Upper-middle right segment
    },
    {
      id: "backend-cortex",
      title: "Backend Cortex",
      icon: Server,
      skills: ["Node.js", "Express", "Flask"],
      angle: 90, // Lower-middle right segment
    },
    {
      id: "cloud-data",
      title: "Cloud & Data Intelligence",
      icon: Cloud,
      skills: ["SQL", "Firebase", "AI", "REST API", "Auth"],
      angle: 135, // Bottom-right segment
    },
  ];

  const getSegmentPath = (index, totalSegments, radius, centerX, centerY) => {
    const segmentAngle = 180 / totalSegments; // 180 degrees divided by 4 = 45 degrees per segment
    const startAngle = index * segmentAngle;
    const endAngle = (index + 1) * segmentAngle;
    
    // Create curved, organic petal-like segments
    // Right-positioned semicircle: straight edge on right, curved arc on left
    const startRad = ((270 - startAngle) * Math.PI) / 180;
    const endRad = ((270 - endAngle) * Math.PI) / 180;
    const midRad = ((270 - (startAngle + endAngle) / 2) * Math.PI) / 180;
    
    // Outer arc points (on the curved left side)
    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);
    
    // Control points for curved edges (making it more organic/petal-like)
    // Add some bulge to make it petal-shaped
    const bulgeFactor = 1.15; // Makes the outer edge bulge out more
    const outerX = centerX + (radius * bulgeFactor) * Math.cos(midRad);
    const outerY = centerY + (radius * bulgeFactor) * Math.sin(midRad);
    
    // Create curved dividing lines using quadratic bezier
    // Path: Move to center, curve to outer edge, arc along outer curve, curve back to center
    return `M ${centerX} ${centerY} Q ${outerX} ${outerY} ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Q ${outerX} ${outerY} ${centerX} ${centerY} Z`;
  };

  const getIconPosition = (index, totalSegments, radius, centerX, centerY) => {
    const segmentAngle = 180 / totalSegments;
    const midAngle = (index + 0.5) * segmentAngle;
    const angleRad = ((270 - midAngle) * Math.PI) / 180;
    const iconRadius = radius * 0.65; // Position icon at 65% of radius
    
    return {
      x: centerX + iconRadius * Math.cos(angleRad),
      y: centerY + iconRadius * Math.sin(angleRad),
    };
  };

  return (
    <section 
      id="skills"
      className="relative min-h-screen flex flex-col py-16 md:py-24 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.background }}
    >
      <style>{`
        @keyframes fade-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        @keyframes scale-up {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @media (max-width: 1023px) {
          .skills-ecosystem-container {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
            height: 0 !important;
            overflow: hidden !important;
          }
          .skills-ecosystem-container * {
            display: none !important;
            visibility: hidden !important;
          }
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
        @keyframes underline-slide {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes elevation-shadow {
          from { 
            box-shadow: ${isDark ? '0 0 20px rgba(201, 162, 39, 0.2)' : '0 0 20px rgba(10, 26, 74, 0.15)'};
            transform: translateY(0);
          }
          to { 
            box-shadow: ${isDark ? '0 8px 40px rgba(201, 162, 39, 0.4)' : '0 8px 40px rgba(10, 26, 74, 0.3)'};
            transform: translateY(-4px);
          }
        }
      `}</style>

      {/* Background effects - from Hero section */}
      <div className="absolute inset-0 z-0 overflow-hidden transition-colors duration-300"
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

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10 md:mb-0">
          <h2
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 transition-colors duration-300"
  style={{
    fontFamily: 'Orbitron, sans-serif',
    fontWeight: 900,
    backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: isDark
      ? '0 4px 20px rgba(201, 162, 39, 0.3)'
      : '0 4px 20px rgba(10, 26, 74, 0.15)',
  }}
>
  My Skills
</h2>

          <p 
            className="text-base md:text-lg leading-relaxed transition-colors duration-300 max-w-6xl mb-[140px] lg:mb-0 "
            style={{
              fontFamily: 'Inter, sans-serif',
              color: isDark ? colors.text : '#4B5563',
              lineHeight: '1.8',
            }}
          >
           Hi, I'm Harini — a passionate tech enthusiast and problem solver.
          I design and develop smart digital solutions that make ideas come alive.
          I’m driven by creativity, curiosity, and the challenge of continuous learning.
          Always excited to build, innovate, and make a real impact through technology.
          </p>
        </div>

      {/* Main Content - Semicircle Diagram */}
      <div className="flex-1 flex items-center relative z-10 mb-4 md:mb-4" style={{ marginTop: '-100px' }}>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative">
          {/* Mobile View - Innovative Skills Representation */}
          <div className="lg:hidden space-y-4 relative z-20" style={{ position: 'relative', zIndex: 20 }}>
            {skillGroups.map((group, index) => {
              const isHovered = hoveredSegment === group.id;
              const number = String(index + 1).padStart(2, '0');
              
              return (
                <div
                  key={group.id}
                  className="relative rounded-xl border-2 p-4 transition-all duration-500"
                  style={{
                    opacity: hoveredSegment && hoveredSegment !== group.id ? 0.4 : 1,
                    transform: isHovered ? 'translateX(8px) scale(1.02)' : 'translateX(0) scale(1)',
                    background: isDark 
                      ? (isHovered ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)')
                      : (isHovered ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)'),
                    borderColor: isDark
                      ? (isHovered ? colors.primary : 'rgba(201, 162, 39, 0.3)')
                      : (isHovered ? colors.primary : 'rgba(10, 26, 74, 0.2)'),
                    boxShadow: isHovered
                      ? (isDark 
                          ? `0 4px 20px rgba(201, 162, 39, 0.3)` 
                          : `0 4px 20px rgba(10, 26, 74, 0.2)`)
                      : (isDark 
                          ? '0 2px 10px rgba(201, 162, 39, 0.1)' 
                          : '0 2px 10px rgba(10, 26, 74, 0.08)'),
                  }}
                  onMouseEnter={() => setHoveredSegment(group.id)}
                  onMouseLeave={() => setHoveredSegment(null)}
                >
                  {/* Numbered badge and icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold transition-all duration-300 flex-shrink-0"
                      style={{
                        borderColor: isDark ? colors.primary : colors.primary,
                        background: isDark ? 'rgba(201, 162, 39, 0.2)' : 'rgba(10, 26, 74, 0.15)',
                        color: isDark ? colors.primary : colors.primary,
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '14px',
                      }}
                    >
                      {number}
                    </div>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 flex-shrink-0"
                      style={{
                        borderColor: isDark ? colors.primary : colors.primary,
                        background: isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)',
                      }}
                    >
                      <group.icon
                        size={20}
                        style={{
                          color: isDark ? colors.primary : colors.primary,
                        }}
                      />
                    </div>
                    <h3
                      className="text-lg font-bold transition-colors duration-300 flex-1 mt-30"
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        color: isDark ? colors.primary : colors.primary,
                        textShadow: isDark ? '0 2px 8px rgba(201, 162, 39, 0.3)' : '0 2px 8px rgba(10, 26, 74, 0.15)',
                      }}
                    >
                      {group.title}
                    </h3>
                  </div>
                 
                 
                  <div className="grid grid-cols-2 gap-2">
                    {group.skills.map((skill) => {
                      const SkillIcon = skillIcons[skill] || FileCode;
                      const isSkillHovered = isHovered;
                      return (
                        <div
                          key={skill}
                          className="group relative rounded-md border transition-all duration-300 flex items-center gap-2 px-3 py-2 cursor-pointer"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            background: isDark 
                              ? (isSkillHovered ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)')
                              : (isSkillHovered ? 'rgba(10, 26, 74, 0.08)' : 'rgba(10, 26, 74, 0.04)'),
                            borderColor: isDark
                              ? (isSkillHovered ? colors.primary : 'rgba(201, 162, 39, 0.3)')
                              : (isSkillHovered ? colors.primary : 'rgba(10, 26, 74, 0.15)'),
                            transform: isSkillHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
                            boxShadow: isSkillHovered
                              ? (isDark 
                                  ? `0 4px 12px rgba(201, 162, 39, 0.3)` 
                                  : `0 4px 12px rgba(10, 26, 74, 0.2)`)
                              : (isDark 
                                  ? '0 2px 6px rgba(201, 162, 39, 0.1)' 
                                  : '0 2px 6px rgba(10, 26, 74, 0.08)'),
                          }}
                        >
                          <SkillIcon
                            size={16}
                            style={{
                              color: isDark ? colors.primary : colors.primary,
                              transition: 'all 0.3s ease',
                              filter: isSkillHovered
                                ? (isDark ? `drop-shadow(0 0 6px ${colors.primary})` : `drop-shadow(0 0 4px ${colors.primary})`)
                                : 'none',
                            }}
                          />
                          <span
                            className="text-xs font-medium"
                            style={{
                              color: isDark ? '#FFFFFF' : colors.primary,
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-2 gap-4 lg:gap-4 items-center relative z-10">
 {/* Left Side - Text Boxes aligned with numbered points - 2 boxes per row with 5px gap */}
 <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-2">
              {skillGroups.map((group, index) => {
                const isHovered = hoveredSegment === group.id;
                const number = String(index + 1).padStart(2, '0');
                
                return (
                  <div
                    key={group.id}
                    className="transition-all duration-500 rounded-lg border-2 flex flex-col"
                    style={{
                      opacity: hoveredSegment && hoveredSegment !== group.id ? 0.4 : 1,
                      transform: isHovered ? 'translateX(8px) scale(1.02)' : 'translateX(0) scale(1)',
                      width: '100%',
                      minHeight: '240px',
                      padding: '12px',
                      background: isDark 
                        ? (isHovered ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)')
                        : (isHovered ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)'),
                      borderColor: isDark
                        ? (isHovered ? colors.primary : 'rgba(201, 162, 39, 0.3)')
                        : (isHovered ? colors.primary : 'rgba(10, 26, 74, 0.2)'),
                      boxShadow: isHovered
                        ? (isDark 
                            ? `0 4px 20px rgba(201, 162, 39, 0.3)` 
                            : `0 4px 20px rgba(10, 26, 74, 0.2)`)
                        : (isDark 
                            ? '0 2px 10px rgba(201, 162, 39, 0.1)' 
                            : '0 2px 10px rgba(10, 26, 74, 0.08)'),
                    }}
                    onMouseEnter={() => setHoveredSegment(group.id)}
                    onMouseLeave={() => setHoveredSegment(null)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                        style={{
                          borderColor: isDark ? colors.primary : colors.primary,
                          background: isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)',
                        }}
                      >
                        <group.icon
                          size={20}
                          style={{
                            color: isDark ? colors.primary : colors.primary,
                          }}
                        />
                      </div>
                      <h3
                        className="text-lg md:text-xl font-bold transition-colors duration-300"
                        style={{
                          fontFamily: 'Orbitron, sans-serif',
                          color: isDark ? colors.primary : colors.primary,
                          textShadow: isDark ? '0 2px 8px rgba(201, 162, 39, 0.3)' : '0 2px 8px rgba(10, 26, 74, 0.15)',
                        }}
                      >
                        {group.title}
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 md:gap-2 ">
                      {group.skills.map((skill, skillIndex) => {
                        const SkillIcon = skillIcons[skill] || FileCode;
                        const isSkillHovered = isHovered;
                        
                        return (
                          <div
                            key={skill}
                            className="group relative rounded-md border transition-all duration-300 flex flex-col items-center justify-center gap-1 px-2 py-2.5 cursor-pointer"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              background: isDark 
                                ? (isSkillHovered ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)')
                                : (isSkillHovered ? 'rgba(10, 26, 74, 0.08)' : 'rgba(10, 26, 74, 0.04)'),
                              borderColor: isDark
                                ? (isSkillHovered ? colors.primary : 'rgba(201, 162, 39, 0.3)')
                                : (isSkillHovered ? colors.primary : 'rgba(10, 26, 74, 0.15)'),
                              transform: isSkillHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
                              boxShadow: isSkillHovered
                                ? (isDark 
                                    ? `0 4px 12px rgba(201, 162, 39, 0.3)` 
                                    : `0 4px 12px rgba(10, 26, 74, 0.2)`)
                                : (isDark 
                                    ? '0 2px 6px rgba(201, 162, 39, 0.1)' 
                                    : '0 2px 6px rgba(10, 26, 74, 0.08)'),
                            }}
                          >
                            <SkillIcon
                              size={20}
                              style={{
                                color: isDark ? colors.primary : colors.primary,
                                transition: 'all 0.3s ease',
                                filter: isSkillHovered
                                  ? (isDark ? `drop-shadow(0 0 6px ${colors.primary})` : `drop-shadow(0 0 4px ${colors.primary})`)
                                  : 'none',
                              }}
                            />
                            <span
                              className="text-xs font-medium text-center"
                              style={{
                                color: isDark ? '#FFFFFF' : colors.primary,
                                transition: 'all 0.3s ease',
                              }}
                            >
                              {skill}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side - Numbered Points in Semi-circular Arc - Hidden on mobile */}
            <div className="hidden lg:flex order-1 lg:order-2 relative justify-center lg:justify-end" style={{ marginTop: '50px' }}>
              <div 
                className="relative w-full max-w-5xl"
                style={{ minHeight: '800px' }}
              >
                <svg
                  viewBox="0 0 1000 800"
                  className="w-full h-full"
                  style={{ overflow: 'visible' }}
                >
                  {/* Numbered points arranged in semi-circular arc on left side of center circle */}
                  {skillGroups.map((group, index) => {
                    const isHovered = hoveredSegment === group.id;
                    const number = String(index + 1).padStart(2, '0');
                    
                    // Arrange points in a semi-circular arc on the left side of center circle
                    // Angle range: 120° to 240° (top-left to bottom-left, left-facing arc)
                    const startAngle = 120;
                    const endAngle = 240;
                    const angleRange = endAngle - startAngle;
                    const angle = startAngle + (index / (skillGroups.length - 1)) * angleRange;
                    const angleRad = (angle * Math.PI) / 180;
                    
                    // Arc radius and center - moved slightly right to avoid overlap
                    const arcRadius = 300;
                    const centerX = 650; // Moved right from 600 to 650
                    const centerY = 400;
                    
                    // Calculate position on arc (left side of center circle)
                    const pointX = centerX + arcRadius * Math.cos(angleRad);
                    const pointY = centerY + arcRadius * Math.sin(angleRad);
                    
                    // Alternating colors for numbered circles
                    const circleColor = index % 2 === 0 
                      ? (isDark ? 'rgba(201, 162, 39, 0.2)' : 'rgba(10, 26, 74, 0.15)')
                      : (isDark ? 'rgba(232, 220, 196, 0.2)' : 'rgba(192, 197, 206, 0.15)');
                    const circleBorderColor = index % 2 === 0
                      ? (isDark ? colors.primary : colors.primary)
                      : (isDark ? colors.secondary : colors.secondary);
                    
                    return (
                      <g key={group.id}>
                        {/* Connecting line from center to point */}
                        <line
                          x1={centerX}
                          y1={centerY}
                          x2={pointX}
                          y2={pointY}
                          stroke={isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.08)'}
                          strokeWidth="1"
                          strokeDasharray="3,3"
                          className="transition-colors duration-300"
                        />
                        
                        {/* Numbered circle with icon inside */}
                        <g
                          transform={`translate(${pointX}, ${pointY})`}
                          className="transition-all duration-300 cursor-pointer"
                          style={{
                            transform: `translate(${pointX}px, ${pointY}px) ${isHovered ? 'scale(1.15)' : 'scale(1)'}`,
                          }}
                          onMouseEnter={() => setHoveredSegment(group.id)}
                          onMouseLeave={() => setHoveredSegment(null)}
                        >
                          <circle
                            cx="0"
                            cy="0"
                            r="60"
                            fill={isHovered 
                              ? (index % 2 === 0 
                                  ? (isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.2)')
                                  : (isDark ? 'rgba(232, 220, 196, 0.3)' : 'rgba(192, 197, 206, 0.2)'))
                              : circleColor}
                            stroke={isHovered ? circleBorderColor : circleBorderColor}
                            strokeWidth={isHovered ? "3" : "2"}
                            className="transition-all duration-300"
                            style={{
                              filter: isHovered
                                ? (isDark ? `drop-shadow(0 0 12px ${circleBorderColor})` : `drop-shadow(0 0 10px ${circleBorderColor})`)
                                : 'none',
                            }}
                          />
                          {/* Number text at top */}
                          <text
                            x="0"
                            y="-25"
                            textAnchor="middle"
                            className="font-black transition-colors duration-300"
                            style={{
                              fontFamily: 'Orbitron, sans-serif',
                              fontSize: '20px',
                              fill: circleBorderColor,
                              textShadow: isHovered
                                ? (isDark ? `0 2px 8px ${circleBorderColor}` : `0 2px 6px ${circleBorderColor}`)
                                : 'none',
                            }}
                          >
                            {number}
                          </text>
                          {/* Icon centered inside circle */}
                          <foreignObject x="-25" y="-15" width="50" height="50">
                            <div className="flex items-center justify-center w-full h-full">
                              <group.icon
                                size={32}
                                style={{
                                  color: isHovered
                                    ? (isDark ? colors.primary : colors.primary)
                                    : (isDark ? 'rgba(201, 162, 39, 0.7)' : 'rgba(10, 26, 74, 0.6)'),
                                  transition: 'all 0.3s ease',
                                  filter: isHovered
                                    ? (isDark ? `drop-shadow(0 0 8px ${colors.primary})` : `drop-shadow(0 0 6px ${colors.primary})`)
                                    : 'none',
                                }}
                              />
                            </div>
                          </foreignObject>
                        </g>
                      </g>
                    );
                  })}
                  
                  {/* Center circle - SKILLS ECOSYSTEM - increased size, moved right */}
                  <g>
                    <circle
                      cx="650"
                      cy="400"
                      r="220"
                      fill={isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.95)'}
                      stroke={isDark ? colors.primary : colors.primary}
                      strokeWidth="3"
                      className="transition-all duration-500"
                      style={{
                        filter: hoveredSegment
                          ? (isDark ? `drop-shadow(0 0 15px ${colors.primary})` : `drop-shadow(0 0 12px ${colors.primary})`)
                          : 'none',
                        transform: hoveredSegment ? 'translateY(-4px)' : 'translateY(0)',
                        transition: 'all 0.3s ease',
                      }}
                    />
                    <text
                      x="650"
                      y="385"
                      textAnchor="middle"
                      className="font-black transition-colors duration-300"
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '32px',
                        fill: isDark ? colors.primary : colors.primary,
                        textShadow: isDark ? '0 2px 8px rgba(201, 162, 39, 0.3)' : '0 2px 8px rgba(10, 26, 74, 0.15)',
                      }}
                    >
                      MY SKILLS
                    </text>
                    <text
                      x="650"
                      y="425"
                      textAnchor="middle"
                      className="font-black transition-colors duration-300"
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '32px',
                        fill: isDark ? colors.primary : colors.primary,
                        textShadow: isDark ? '0 2px 8px rgba(201, 162, 39, 0.3)' : '0 2px 8px rgba(10, 26, 74, 0.15)',
                      }}
                    >
                      
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
