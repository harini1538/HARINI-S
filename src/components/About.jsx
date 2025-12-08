import { useTheme } from '../contexts/ThemeContext';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import im from '../images/im3.jpg';

export default function About() {
  const { isDark, colors } = useTheme();

  const skills = [
    { name: 'Leadership', percentage: 95 },
    { name: 'Poster Designing', percentage: 90 },
    { name: 'Event Management', percentage: 85 },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Chennai , Tamilnadu , India' },
    { icon: Phone, text: '6379315995' },
    { icon: Mail, text: 'harinipitchai2005@gmail.Com' },  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col overflow-hidden py-16 md:py-24 transition-colors duration-300"
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
      `}</style>

      {/* Background effects from Hero section */}
      <div className="absolute inset-0 z-0 overflow-hidden transition-colors duration-300">
        <div 
          className="absolute inset-0 transition-colors duration-300" 
          style={{ 
            background: isDark
              ? 'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 50%, rgba(0,0,0,1) 100%)'
              : 'linear-gradient(135deg, rgba(250,251,252,1) 0%, rgba(248,249,251,0.98) 50%, rgba(250,251,252,1) 100%)'
          }} 
        />

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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        {/* Header with circular separator */}
        <div className="text-center mb-12 md:mb-16">
        <h2
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 transition-colors duration-300"
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
  }}
>
  ABOUT ME
</h2>

          {/* Circular separator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div 
              className="w-2 h-2 rounded-full transition-colors duration-300" 
              style={{ 
                background: isDark ? colors.primary : colors.primary 
              }} 
            />
          </div>
        </div>

        {/* Three Column Layout with Center Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Section - Personal Information */}
          <div className="space-y-4 md:space-y-6 lg:order-1">
            <h3 
              className="text-2xl md:text-3xl lg:text-4xl font-bold transition-colors duration-300"
                                style={{ 
                                  fontFamily: 'Orbitron, sans-serif', 
                color: isDark ? colors.primary : colors.primary,
                textShadow: isDark ? '0 2px 8px rgba(201, 162, 39, 0.3)' : '0 2px 8px rgba(10, 26, 74, 0.15)',
                                }}
                              >
              Harini Murugan
                              </h3>
                                <p 
              className="text-sm md:text-base lg:text-lg leading-relaxed transition-colors duration-300"
                                style={{ 
                                  fontFamily: 'Inter, sans-serif', 
                color: isDark ? colors.text : '#4B5563',
                lineHeight: '1.8',
                                }}
                              >
              I develop intelligent digital solutions that blend AI innovation with full-stack expertise. Driven by real-world problem-solving, I constantly explore and adapt to emerging technologies. My work focuses on delivering seamless and meaningful user experiences. At my core, I transform technology into experiences that people can genuinely feel and trust.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 md:space-y-4 mt-6 md:mt-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-3 transition-colors duration-300"
                  >
                    <IconComponent 
                      size={20}
                      className="mt-1 flex-shrink-0"
                          style={{ 
                        color: isDark ? colors.primary : colors.primary,
                          }}
                    />
                    <span 
                      className="text-sm md:text-base lg:text-lg transition-colors duration-300"
                            style={{ 
                        fontFamily: 'Inter, sans-serif',
                        color: isDark ? colors.text : '#4B5563',
                      }}
                    >
                      {contact.text}
                    </span>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Center Section - Circular Image */}
          <div className="flex justify-center items-center lg:order-2 my-6 md:my-8 lg:my-0">
            <div className="relative">
              {/* Outer glow effect */}
                  <div 
                className="absolute inset-0 rounded-full blur-2xl transition-all duration-300"
                    style={{ 
                      background: isDark
                    ? `radial-gradient(circle, ${colors.primary}40, transparent 70%)`
                    : `radial-gradient(circle, ${colors.primary}30, transparent 70%)`,
                  transform: 'scale(1.2)',
                    }} 
                  />
              {/* Circular image container */}
                  <div 
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 transition-all duration-300"
                    style={{ 
                  borderColor: isDark ? colors.primary : colors.primary,
                  boxShadow: isDark
                    ? `0 0 30px rgba(201, 162, 39, 0.4), inset 0 0 20px rgba(201, 162, 39, 0.1)`
                    : `0 0 30px rgba(10, 26, 74, 0.3), inset 0 0 20px rgba(10, 26, 74, 0.1)`,
                    }}
                  >
                {/* Placeholder image - replace with actual image */}
                      <div 
                  className="w-full h-full flex items-center justify-center transition-colors duration-300"
                        style={{ 
                          background: isDark
                      ? 'linear-gradient(135deg, rgba(201, 162, 39, 0.2), rgba(232, 220, 196, 0.1))'
                      : 'linear-gradient(135deg, rgba(10, 26, 74, 0.15), rgba(192, 197, 206, 0.1))',
                  }}
                >
                  {/* You can replace this with an actual img tag */}
                  <div className="text-center">
                    <div 
                      className="text-6xl md:text-7xl mb-2 transition-colors duration-300"
                          style={{ 
                            fontFamily: 'Orbitron, sans-serif', 
                        color: isDark ? colors.primary : colors.primary,
                        opacity: 0.3,
                            }}
                          >
                      
                    </div>
                        <p 
                      className="text-sm transition-colors duration-300"
                          style={{ 
                            fontFamily: 'Inter, sans-serif', 
                        color: isDark ? colors.text : '#4B5563',
                        opacity: 0.5,
                          }}
                        >
                      
                        </p>
                  </div>
             
                  <img 
                    src={im}
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                 
                  </div>
                </div>
              </div>
            </div>

          {/* Right Section - Professional Skills */}
          <div className="space-y-4 md:space-y-6 lg:order-3">
            <h3 
              className="text-xl md:text-2xl lg:text-3xl font-bold transition-colors duration-300"
                    style={{ 
                      fontFamily: 'Orbitron, sans-serif', 
                color: isDark ? colors.primary : colors.primary,
                textShadow: isDark ? '0 2px 8px rgba(201, 162, 39, 0.3)' : '0 2px 8px rgba(10, 26, 74, 0.15)',
                    }}
                  >
              My Professional Skills
                  </h3>
            <p 
              className="text-sm md:text-base lg:text-lg leading-relaxed transition-colors duration-300"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: isDark ? colors.text : '#4B5563',
                lineHeight: '1.8',
              }}
            >
             To drive impactful digital transformation, I bring expertise in AI-powered development, full-stack engineering, and user-focused innovation — helping turn ideas into intelligent and scalable solutions.
            </p>
            
            {/* Skills with Progress Bars */}
            <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-sm md:text-base lg:text-lg font-medium transition-colors duration-300"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: isDark ? colors.text : '#4B5563',
                      }}
                    >
                      {skill.name}
                    </span>
                    <span 
                      className="text-sm md:text-base lg:text-lg font-semibold transition-colors duration-300"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: isDark ? colors.primary : colors.primary,
                      }}
                    >
                      {skill.percentage}%
                    </span>
                </div>
                  {/* Progress Bar */}
                      <div 
                    className="w-full h-3 rounded-full overflow-hidden transition-colors duration-300"
                        style={{ 
                      background: isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.1)',
                        }}
                      >
                        <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                        width: `${skill.percentage}%`,
                            background: isDark
                          ? `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`
                          : `linear-gradient(90deg, ${colors.primary}, #1a3a6a)`,
                        boxShadow: isDark
                          ? `0 0 10px rgba(201, 162, 39, 0.4)`
                          : `0 0 10px rgba(10, 26, 74, 0.3)`,
                          }}
                    />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
        </div>
      </div>
    </section>
  );
}
