import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, FileText, Send, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  
  const { isDark, colors } = useTheme();
  const nebulaRef = useRef(null);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // 🗺️ Initialize Leaflet Map
  useEffect(() => {
    if (!mapRef.current) return;

    // Destroy map if re-render from theme change
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Tile theme
    const tileUrl = isDark
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

    // Create map
    const map = L.map(mapRef.current, {
      center: [13.0827, 80.2707],
      zoom: 11,
      zoomControl: true,
      scrollWheelZoom: true,
      attributionControl: false,
    });

    // Add tile
    L.tileLayer(tileUrl, {
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map);

    // Marker Icon
    const markerHtml = `
      <div style="position:relative;">
        <div style="
          width:20px;
          height:20px;
          background:${colors.primary};
          border-radius:50%;
          border:3px solid white;
          box-shadow:0 4px 12px rgba(0,0,0,0.3);
          animation:pulse-marker 2s infinite;
        "></div>
        <div style="
          position:absolute;
          top:0;
          left:0;
          width:20px;
          height:20px;
          background:${colors.primary};
          border-radius:50%;
          opacity:0.3;
          animation:ripple-marker 2s infinite;
        "></div>
      </div>
    `;

    const icon = L.divIcon({
      className: "",
      html: markerHtml,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });

    const marker = L.marker([13.0827, 80.2707], {
      icon,
    }).addTo(map);

    marker.bindPopup(`
      <div style="
        font-family:'Orbitron',sans-serif;
        color:${isDark ? "#C9A227" : "#0A1A4A"};
        font-weight:bold;
        text-align:center;
        padding:4px;
      ">
        Chennai, Tamil Nadu<br/>
        <span style="
          font-size:11px;
          font-family:'Inter',sans-serif;
          opacity:0.8;
        ">India</span>
      </div>
    `);

    mapInstanceRef.current = map;

  }, [isDark, colors.primary]);

  // 🌟 Marker Animations CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes pulse-marker {
        0%,100% {transform:scale(1);opacity:1;}
        50% {transform:scale(1.1);opacity:0.9;}
      }
      @keyframes ripple-marker {
        0% {transform:scale(1);opacity:0.3;}
        100% {transform:scale(2.5);opacity:0;}
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Form Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target;
      const sendData = new FormData(form);
      sendData.append("access_key", "655972c6-8cba-4eaa-9c79-d9314fb3da87");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: sendData,
      });

      const data = await res.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else setSubmitStatus("error");

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }

    setIsSubmitting(false);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <style>{`
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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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

        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.2)' }} />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.2)' }} />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(232, 220, 196, 0.3)' : 'rgba(192, 197, 206, 0.25)' }} />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(232, 220, 196, 0.3)' : 'rgba(192, 197, 206, 0.25)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
         <h2 
  className="text-5xl md:text-6xl font-black mb-4 transition-colors duration-300"
  style={{
    fontFamily: 'Orbitron, sans-serif',
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
  LET'S CONNECT
</h2>

          <p 
            className="text-xl md:text-2xl mb-2 transition-colors duration-300"
            style={{ 
              fontFamily: 'Saira Semi Condensed, sans-serif',
              color: isDark ? colors.text : '#4B5563'
            }}
          >
          Ready to create something timeless together?
        </p>
          <p 
            className="text-base transition-colors duration-300"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: isDark ? colors.secondary : '#6B7280',
              opacity: 0.8
            }}
          >
          Your message might just spark the next revolution.
        </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Form */}
          <div
            className="rounded-3xl p-8 md:p-10 border-2 backdrop-blur-md transition-all duration-300"
            style={{
              background: isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.25)',
              boxShadow: isDark ? '0 8px 32px rgba(201, 162, 39, 0.15)' : '0 8px 32px rgba(10, 26, 74, 0.1)',
            }}
          >
            <h3 
              className="text-2xl font-bold mb-6 transition-colors duration-300"
              style={{ 
                fontFamily: 'Orbitron, sans-serif',
                color: colors.primary
              }}
            >
              Send a Message
            </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-semibold mb-2 transition-colors duration-300"
                  style={{ 
                    fontFamily: 'Saira Semi Condensed, sans-serif',
                    color: colors.primary
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none"
                  style={{
                    background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                    borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                    color: isDark ? colors.text : colors.primary,
                    fontFamily: 'Inter, sans-serif',
                  }}
                  placeholder="Your name"
                  onFocus={(e) => e.target.style.borderColor = colors.primary}
                  onBlur={(e) => e.target.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)'}
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold mb-2 transition-colors duration-300"
                  style={{ 
                    fontFamily: 'Saira Semi Condensed, sans-serif',
                    color: colors.primary
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none"
                  style={{
                    background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                    borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                    color: isDark ? colors.text : colors.primary,
                    fontFamily: 'Inter, sans-serif',
                  }}
                  placeholder="your@email.com"
                  onFocus={(e) => e.target.style.borderColor = colors.primary}
                  onBlur={(e) => e.target.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)'}
                />
            </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold mb-2 transition-colors duration-300"
                  style={{ 
                    fontFamily: 'Saira Semi Condensed, sans-serif',
                    color: colors.primary
                  }}
                >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                  className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 resize-none focus:outline-none"
                  style={{
                    background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                    borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                    color: isDark ? colors.text : colors.primary,
                    fontFamily: 'Inter, sans-serif',
                  }}
                placeholder="Share your thoughts, ideas, or collaboration proposals..."
                  onFocus={(e) => e.target.style.borderColor = colors.primary}
                  onBlur={(e) => e.target.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)'}
              />
            </div>

              {/* Hidden field for redirect (optional) */}
              <input type="hidden" name="redirect" value="false" />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  fontFamily: 'Saira Semi Condensed, sans-serif',
                  background: isDark
                    ? `linear-gradient(to right, ${colors.primary}, rgba(201, 162, 39, 0.8))`
                    : 'linear-gradient(to right, #0A1A4A, #1a3a6a)',
                  color: 'white',
                  boxShadow: isDark ? '0 4px 20px rgba(201, 162, 39, 0.3)' : '0 4px 20px rgba(10, 26, 74, 0.25)',
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = isDark ? '0 6px 30px rgba(201, 162, 39, 0.4)' : '0 6px 30px rgba(10, 26, 74, 0.35)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = isDark ? '0 4px 20px rgba(201, 162, 39, 0.3)' : '0 4px 20px rgba(10, 26, 74, 0.25)';
                }}
              >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                  'Message Sent! ✓'
                ) : submitStatus === 'error' ? (
                  'Failed. Try Again'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                    Send Message
                    </>
                  )}
              </button>

              {submitStatus === 'success' && (
                <p 
                  className="text-center font-medium transition-colors duration-300"
                  style={{ 
                    color: colors.primary,
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Thank you! I'll get back to you soon.
                </p>
              )}

              {submitStatus === 'error' && (
                <p 
                  className="text-center font-medium transition-colors duration-300"
                  style={{ 
                    color: '#ef4444',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Something went wrong. Please try again or email directly.
                </p>
              )}
            </form>
          </div>

          {/* Right Side - Map and Contact Info */}
         <div className="space-y-6">
  {/* Custom Map */}
  <div
    className="rounded-3xl p-8 border-2 backdrop-blur-md transition-all duration-300 h-80"
    style={{
      background: isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
      borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.25)',
      boxShadow: isDark ? '0 8px 32px rgba(201, 162, 39, 0.15)' : '0 8px 32px rgba(10, 26, 74, 0.1)',
    }}
  >
    <div
      ref={mapRef}
      className="w-full h-full rounded-2xl"
      style={{
        overflow: "hidden",
      }}
    />
  </div>


            {/* Contact Details */}
            <div
              className="rounded-3xl p-8 border-2 backdrop-blur-md transition-all duration-300"
              style={{
                background: isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                borderColor: isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.25)',
                boxShadow: isDark ? '0 8px 32px rgba(201, 162, 39, 0.15)' : '0 8px 32px rgba(10, 26, 74, 0.1)',
              }}
            >
              <h3 
                className="text-xl font-bold mb-6 transition-colors duration-300"
                style={{ 
                  fontFamily: 'Orbitron, sans-serif',
                  color: colors.primary
                }}
              >
                Connect With Me
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-full transition-colors duration-300"
                    style={{
                      background: isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.08)',
                    }}
                  >
                    <Mail className="w-5 h-5" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <p 
                      className="text-sm font-semibold transition-colors duration-300"
                      style={{ 
                        fontFamily: 'Saira Semi Condensed, sans-serif',
                        color: colors.primary
                      }}
                    >
                      Email
                    </p>
                    <p 
                      className="text-sm transition-colors duration-300"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        color: isDark ? colors.text : '#4B5563'
                      }}
                    >
                      harinipitchai2005@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-full transition-colors duration-300"
                    style={{
                      background: isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.08)',
                    }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <p 
                      className="text-sm font-semibold transition-colors duration-300"
                      style={{ 
                        fontFamily: 'Saira Semi Condensed, sans-serif',
                        color: colors.primary
                      }}
                    >
                      Location
                    </p>
                    <p 
                      className="text-sm transition-colors duration-300"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        color: isDark ? colors.text : '#4B5563'
                      }}
                    >
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(201, 162, 39, 0.2)' : 'rgba(10, 26, 74, 0.15)' }}>
                <p 
                  className="text-sm mb-4 transition-colors duration-300"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: isDark ? colors.secondary : '#6B7280'
                  }}
                >
                  Follow me on social media
                </p>
                <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/harini1538"
                target="_blank"
                rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                      background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                      fontFamily: 'Saira Semi Condensed, sans-serif',
                      color: colors.primary,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.primary;
                      e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)';
                      e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
                    }}
              >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-semibold">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/harini-murugan-59490a2a1"
                target="_blank"
                rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: isDark ? 'rgba(232, 220, 196, 0.4)' : 'rgba(192, 197, 206, 0.4)',
                      background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                      fontFamily: 'Saira Semi Condensed, sans-serif',
                      color: isDark ? colors.secondary : '#1a3a6a',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = isDark ? colors.secondary : '#1a3a6a';
                      e.currentTarget.style.background = isDark ? 'rgba(232, 220, 196, 0.15)' : 'rgba(192, 197, 206, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isDark ? 'rgba(232, 220, 196, 0.4)' : 'rgba(192, 197, 206, 0.4)';
                      e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
                    }}
              >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm font-semibold">LinkedIn</span>
              </a>

              <a
                href="mailto:harinipitchai2005@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                      background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                      fontFamily: 'Saira Semi Condensed, sans-serif',
                      color: colors.primary,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.primary;
                      e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)';
                      e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
                    }}
              >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-semibold">Email</span>
              </a>

              <a
                href="https://drive.google.com/file/d/1FpUPGIUf18SCeUzeYyTmuteLuhupqRga/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: isDark ? 'rgba(232, 220, 196, 0.4)' : 'rgba(192, 197, 206, 0.4)',
                      background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                      fontFamily: 'Saira Semi Condensed, sans-serif',
                      color: isDark ? colors.secondary : '#1a3a6a',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = isDark ? colors.secondary : '#1a3a6a';
                      e.currentTarget.style.background = isDark ? 'rgba(232, 220, 196, 0.15)' : 'rgba(192, 197, 206, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isDark ? 'rgba(232, 220, 196, 0.4)' : 'rgba(192, 197, 206, 0.4)';
                      e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
                    }}
              >
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-semibold">Resume</span>
              </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
