import { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, Briefcase, Code2, Sparkles, X, ChevronLeft, ChevronRight, Lightbulb, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import nutrigo from '../images/nutrigo.png';
import schlo from '../images/schola.png';
import hand from '../images/hand.png';
import jash from '../images/jash.png';
import health from '../images/health.png';
import face from '../images/face.png';
import eco from '../images/eco.png';
import agri from '../images/agri.png';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const nebulaRef = useRef(null);
  const carouselRef = useRef(null);
  const { isDark, colors } = useTheme();

  // Clear any text selection on mount and theme changes
  useEffect(() => {
    const clearSelection = () => {
      if (window.getSelection) {
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
        }
      }
    };
    
    clearSelection();
  }, [isDark]);

  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const projects = [
    {
      title: 'NUTRIGO',
      type: 'project',
      description: 'Nutrigo – An AI-powered nutrition and wellness platform that delivers customized meal plans based on dietary needs, allergy profiles, and health goals. It offers real-time nutrition tracking, smart grocery suggestions, and family-focused guidance to support healthier eating habits for all age groups.',
      quote: 'Delivering wellness through empathy and AI',
      technologies: ['Flask', 'Firebase', 'Groq', 'Python', 'React','TailwindCss' ,'CORS','JavaScript'],
      github: 'https://github.com/harini1538/NUTRIGO',
      demo: 'https://youtu.be/vQux-Kx-pAE',
      image: nutrigo,
      featured: true,
      idea: 'Nutrigo was developed to help families overcome nutrition confusion and allergy-related challenges by providing an AI-powered platform that delivers personalized meal plans, real-time health tracking, and smart dietary guidance.',
      keyFeatures: [
        'AI-Based Food Recognition: Instantly logs calories and nutrients by scanning meals.',

        'Real-Time Dietary Feedback: Suggests healthier choices based on sodium, sugar, and nutrient levels.',

        'Personalized Meal Plans: Tailored diet plans based on health goals, age, and lifestyle.',

        'Family & Group Support: Create shared diet plans for families with diverse nutritional needs.',

        'Allergy & Intolerance Safety: Highlights risky ingredients and recommends safe alternatives.',

        'AI Recommendations: Suggests meals and snacks based on mood, cravings, and activity levels.',

        'Voice & Chatbot Assistance: Integrates with virtual assistants for guidance and reminders.',

        'Interactive Recipe Builder: Customize recipes with live nutritional analysis and AI optimization.',
              ]
    },
    {
      title: 'SCHOLASPACE',
      type: 'project',
      description: 'SCHOLASPACE is an AI-assisted education platform designed to support rural and remote learning. It offers voice-enabled study assistance, virtual classrooms, and accessible learning content. With offline support, it ensures continuous education even in low-connectivity areas.',
      quote: 'Bridging silence with intelligence',
      technologies: ['Flask', 'GROQ ', 'Speech Recognition', 'HTML','GTTS' ,'Python', 'JavaScript'],
      github: 'https://github.com/harini1538/scholaspace',
      demo: 'https://youtu.be/O0P3XO3eRlI',
      image: schlo,
      featured: true,
      idea: 'SCHOLASPACE addresses the educational gap in rural areas by providing an AI-powered learning platform. The project focuses on making quality education accessible through voice-enabled interfaces and intelligent virtual tutoring, breaking down barriers of language and accessibility.',
      keyFeatures: [
        'Three Dedicated Portals – Notes, Student, and Teacher for streamlined academic management.',
        'Notes Portal – Upload, organize, and access subject-specific study materials easily.',
        'Student Portal – Voice-bot doubt assistant, assignment submission, and virtual classroom access.',
        'Teacher Portal – Attendance management, assignment approval, feedback system, and class monitoring.',
        'Offline Learning Support – Ensures uninterrupted access in low-connectivity environments.',
        'AI-Assisted Learning – Intelligent doubt analysis and personalized study guidance.'
      ]
    },
    {
      title: 'JASH',
      type: 'project',
      description: 'JASH was developed to support college students facing stress, anxiety, and academic pressure that traditional mental health services often fail to address in a timely and personalized manner. Using AI for mood tracking, sentiment analysis, and a real-time chatbot, it provides instant emotional guidance and tailored coping strategies.',
      quote: 'Where calm meets cognition',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GROQ API', 'Flask','Matplotlib','Tensorflow','Opencv'],
      github: 'https://github.com/harini1538/mental_health-',
      demo: 'https://youtu.be/98hrYhmoNBo',
      image: health,
      featured: false,
      idea: 'JASH is designed to help individuals manage stress and improve mental wellness through AI-powered emotion detection. The application uses advanced algorithms to analyze user input and provide personalized guidance for mental health management.',
      keyFeatures: [
        'AI Chatbot Support: Provides real-time conversation, guidance, and stress-relief suggestions.',
        'Stress Analyzer: Detects stress levels using emotional patterns and academic workload indicators.',
        'Emotion Detection: Uses sentiment analysis and mood tracking to monitor mental well-being continuously.',
        'Personalized Dashboard: Displays emotional trends, stress insights, and tailored recommendations for self-care.',
        'Feedback System: Collects user feedback to improve support quality and enhance overall user experience.'
      ]
    },
    {
      title: 'GRADEVISION',
      type: 'project',
      description: 'Manual evaluation of handwritten answer scripts is slow, inconsistent, and affected by examiner subjectivity, especially during large-scale assessments. To overcome these issues and ensure fairness, this system automates the recognition and evaluation of handwritten responses. The idea is to use AI to extract text, understand meaning, and provide accurate, transparent scoring with feedback to support better academic decision-making.',
      quote: 'When education meets intelligence, evaluation becomes fair, fast, and future-ready.',
      technologies: ['Python', 'HTML', 'Flask', 'BERT', 'XAI','Gemini'],
      github: 'https://github.com/harini1538/HAND',
      demo: 'https://youtu.be/wu_NIc6tBMU',
      image: hand,
      featured: false,
      idea: 'The system offers role-based dashboards for HODs, teachers, and students to streamline handwritten script evaluation. AI ensures accurate scoring with detailed feedback, while analytics provide clear performance insights. Students can raise queries, teachers can validate results, and automated report generation enables quick and transparent academic documentation.',
      keyFeatures: [
        'Centralized Evaluation Control – HOD can manage assessments, users, and approve final marks with institutional-wide monitoring.',
        'AI-Driven Script Evaluation – Automated handwriting recognition, semantic scoring, and feedback generation.',
        'Performance Analytics Dashboards – Visual insights for HOD, teachers, and students on marks, trends, and progress.',
        'Transparent Student Access – Students can view detailed marks, feedback, and improvement suggestions.',
        'Interactive Query System – Students can raise doubts about scores, ensuring fair and bias-free evaluation.',
        'Teacher Verification & Query Response – Teachers can validate AI scores and respond to student queries to maintain grading accuracy.',
        'Automated Report Generation – Instant downloadable reports for students and faculty with score summary, strengths, and suggestions.'
      ]
    },
    {
      title: 'AGRIVISION',
      type: 'project',
      description: 'The Market-Aware Yield and Price Forecasting System predicts crop yield and future market prices by analyzing agricultural and market data. It then estimates revenue outcomes and suggests whether farmers should sell immediately or store produce for better profits. This helps farmers make smarter, data-driven decisions to maximize income and reduce financial risks.',
      quote: 'Empowering farmers with the future of the market.',
      technologies: ['React', 'NodeJs', 'TailwindCss', 'Matplotlib','Flask'],
      github: 'https://github.com/harini1538/agrivision',
      demo: 'https://youtu.be/aytCBlgy2D4',
      image: agri,
      featured: false,
      idea: 'Agrivision is developed to help farmers avoid losses caused by unpredictable market prices and uninformed selling decisions. It integrates AI-based yield prediction, price forecasting, and storage analysis into a single smart decision system. The core idea is to guide farmers on the most profitable time to sell or store their produce, ensuring maximum income with minimized risk.',
      keyFeatures: [
        'Centralized Revenue Management – Farmers can manage yield predictions, market insights, and profit decisions in a single platform.',
        'AI-Driven Yield & Price Forecasting – Predicts crop production and future market prices using machine learning and time-series analytics.',
        'Profit Analytics Dashboard – Visual insights on predicted income, price trends, and profitability comparisons (sell now vs. store).',
        'Smart Sell/Hold Decision System – Recommends the best selling time based on revenue scenarios, market conditions, and storage cost.',
        'Storage & Buyer Recommendations – Suggests suitable storage plans and connects farmers with top buyers for better profit margins.',
        'Risk & Uncertainty Analysis – Provides confidence ranges, volatility alerts, and risk-aware recommendations for safer decisions.',
        
      ]
    },
    {
      title: 'PLAYVERSE',
      type: 'PROJECT',
      
      description: 'Playverse is a fun and engaging online gaming platform where players can enjoy a variety of exciting mini-games all in one place. It offers smooth gameplay, simple controls, and a clean interface so that anyone can start playing instantly',
      quote: 'Every game is a new chance to win.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Flask','Flask Blueprint'],
      github: 'https://github.com/harini1538/playverse',
      demo: 'https://youtu.be/5KyQDRHys9I',
      image:jash,
      featured: false,
      idea: 'A web-based gaming platform where users can play simple mini-games, track their scores, and compete with others—focusing on smooth UI, fast gameplay, and fun challenges.',
      keyFeatures: [
        'Unified Gaming Hub – Access all mini-games from one easy and interactive platform.',
        'User Profiles & Progress Tracking – Saves scores, achievements, and gameplay history for every player.',
        'Responsive & Animated UI – Smooth transitions, attractive visuals, and compatibility across all devices.',
        'Real-Time Game Analytics – Tracks player stats like win rate, speed, and improvement metrics.',
        'Leaderboard & Competitive Scoring – Displays top players and rankings to encourage competition.'
      ]
    },
    {
      title: 'ATTENDX',
      type: 'project',
      description: 'A smart system that automatically recognizes faces using a webcam and computer vision techniques. It records attendance instantly by matching detected faces with a pre-trained model. This eliminates manual entry, improves accuracy, and provides a seamless attendance experience.',
      quote: 'Building the future, one line at a time',
      technologies: ['Pandas', 'Tensorflow', 'Flask', 'Opencv'],
      github: 'https://github.com/harini1538/FACIAL_DETECTION',
      demo: 'https://youtu.be/qbFbPcaZC1Q',
      image: face,
      featured: false,
      idea: 'AttendX was developed to replace time-consuming manual attendance methods that often lead to errors, proxy marking, and inefficiency. By using automated face recognition, it ensures secure and accurate attendance tracking in real time. The actual idea is to capture and identify faces through a trained model, instantly marking attendance and storing records digitally for easy monitoring and management.',
      keyFeatures: [
        'Automated Face Recognition: Marks attendance instantly by identifying faces using AI.',
        'Real-Time Attendance Logging: Stores attendance records the moment a user is detected.',
        'Easy User Enrollment: Allows adding new users by capturing face images through webcam.',
        'Daily Attendance Reports: Automatically generates and updates attendance files every day.',
        'Simple Web Dashboard: Displays attendance details and total registered users in a clean UI.'
      ]
    },
    {
      title: 'ECODESIGN CLUB',
      type: 'project',
      duration: 'Feb 2024',
      description: 'Ecodesign Club is a student-driven initiative dedicated to promoting sustainable innovation, environmental awareness, and eco-friendly design solutions through workshops, buildathons, and community-driven events',
      quote: 'Building a greener world, one design at a time',
      technologies: ['Dart','Firebase','Flutter'],
      github: 'https://github.com/harini1538',
      demo: 'https://eco-designclub.web.app/',
      image: eco,
      featured: false,
      idea: 'Ecodesign Club was developed to inspire students to adopt sustainable practices and address real-world environmental challenges through innovative thinking. The actual idea behind the club is to create a platform where students can explore eco-friendly design concepts, participate in hands-on workshops and buildathons, and bring forward creative solutions that contribute to a greener and more responsible future.',
      keyFeatures: [
        'Sustainable Innovation Projects – Encouraging eco-friendly design solutions for real-world problems.',
        'Showcase & Competitions – Presenting innovative eco-projects in fairs, contests, and exhibitions.',
        'Collaborative Community – A platform for students to connect, create, and contribute together.',
        'Skill Development – Enhancing creativity, teamwork, leadership, and environmental responsibility.',
        'Exclusive Eco Events – Awareness programs, expert talks, and environmental drives.`'
      
      ]
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setFeedbackData({ name: '', email: '', message: '' });
    setSubmitStatus('idle');
  };

  const handleFeedbackChange = (e) => {
    setFeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target;
      const formData = new FormData(form);
      
      formData.append("access_key", "655972c6-8cba-4eaa-9c79-d9314fb3da87");
      formData.append("subject", `Feedback for ${selectedProject?.title}`);
      formData.append("to_email", "harinipitchai2005@gmail.com");
      
      const originalMessage = formData.get("message");
      formData.set("message", `Project: ${selectedProject?.title}\n\n${originalMessage}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFeedbackData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        console.error('Web3Forms error:', data);
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextProject();
    if (isRightSwipe) prevProject();
  };

  return (
    <section 
      id="projects"
      className="relative min-h-screen py-20 px-6 transition-colors duration-300 overflow-hidden" 
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
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .modal-curved {
          border-radius: 40px 40px 0 0;
        }
        @media (min-width: 768px) {
          .modal-curved {
            border-radius: 50px;
          }
        }
      `}</style>

      {/* Background Effects */}
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
        {/* Header */}
        <div className="text-center mb-12">
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
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
  }}
>
  MY PROJECTS
</h2>

          <p 
            className="text-xl md:text-2xl mb-2 transition-colors duration-300"
            style={{ 
              fontFamily: 'Saira Semi Condensed, sans-serif',
              color: isDark ? colors.text : '#4B5563'
            }}
          >
            Swipe to explore projects
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border-2 transition-all duration-300 hover:scale-110"
            style={{
              borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
              background: isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
              boxShadow: isDark ? '0 4px 20px rgba(201, 162, 39, 0.2)' : '0 4px 20px rgba(10, 26, 74, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.primary;
              e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)';
              e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)';
            }}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: colors.primary }} />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border-2 transition-all duration-300 hover:scale-110"
            style={{
              borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
              background: isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
              boxShadow: isDark ? '0 4px 20px rgba(201, 162, 39, 0.2)' : '0 4px 20px rgba(10, 26, 74, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.primary;
              e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)';
              e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)';
            }}
          >
            <ChevronRight className="w-6 h-6" style={{ color: colors.primary }} />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-3xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-full"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden transition-all duration-500"
                    style={{
                      boxShadow: hoveredProject === index
                        ? (isDark 
                            ? '0 20px 60px rgba(201, 162, 39, 0.2)' 
                            : '0 20px 60px rgba(10, 26, 74, 0.15)')
                        : (isDark 
                            ? '0 10px 40px rgba(201, 162, 39, 0.1)' 
                            : '0 10px 40px rgba(10, 26, 74, 0.08)'),
                    }}
                  >
                    {/* Left Panel - Image and Icons */}
                    <div className="flex flex-col">
                      <div
                        className="
                          relative
                          w-full
                          h-64
                          md:h-80
                          rounded-tl-3xl
                          overflow-hidden
                          bg-black/10
                          group
                        "
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-110
                          "
                        />

                        {/* Overlay */}
                        <div
                          className="absolute inset-0 transition-opacity duration-500"
                          style={{
                            background: isDark
                              ? "rgba(0, 0, 0, 0.3)"
                              : "rgba(255, 255, 255, 0.1)",
                            opacity: hoveredProject === index ? 0.4 : 0.5,
                          }}
                        />
                      </div>

                      {/* Icon Links Section */}
                      <div 
                        className="flex justify-center gap-6 py-8 px-6"
                        style={{
                          background: isDark 
                            ? 'rgba(0, 0, 0, 0.85)' 
                            : 'rgba(255, 255, 255, 0.95)',
                          borderTop: isDark 
                            ? `1px solid rgba(201, 162, 39, 0.2)` 
                            : `1px solid rgba(10, 26, 74, 0.15)`,
                        }}
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 transition-all duration-300 group/icon"
                        >
                          <div 
                            className="p-4 rounded-full border-2 transition-all duration-300"
                            style={{
                              borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                              background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = colors.primary;
                              e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.1)';
                              e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)';
                              e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)';
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                          >
                            <Github className="w-6 h-6" style={{ color: colors.primary }} />
                          </div>
                          <span 
                            className="text-sm font-medium transition-colors duration-300"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              color: isDark ? colors.text : '#4B5563'
                            }}
                          >
                            GitHub
                          </span>
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 transition-all duration-300 group/icon"
                        >
                          <div 
                            className="p-4 rounded-full border-2 transition-all duration-300"
                            style={{
                              borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                              background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = colors.primary;
                              e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.1)';
                              e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)';
                              e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)';
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                          >
                            <ExternalLink className="w-6 h-6" style={{ color: colors.primary }} />
                          </div>
                          <span 
                            className="text-sm font-medium transition-colors duration-300"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              color: isDark ? colors.text : '#4B5563'
                            }}
                          >
                            Demo
                          </span>
                        </a>

                        <button
                          onClick={() => openModal(project)}
                          className="flex flex-col items-center gap-2 transition-all duration-300 group/icon"
                        >
                          <div 
                            className="p-4 rounded-full border-2 transition-all duration-300"
                            style={{
                              borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                              background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = colors.primary;
                              e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.1)';
                              e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)';
                              e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)';
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                          >
                            <Star className="w-6 h-6" style={{ color: colors.primary }} />
                          </div>
                          <span 
                            className="text-sm font-medium transition-colors duration-300"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              color: isDark ? colors.text : '#4B5563'
                            }}
                          >
                            Features
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Right Panel - Content Dashboard */}
                    <div 
                      className="p-8 md:p-10 flex flex-col justify-between"
                      style={{
                        background: isDark 
                          ? (hoveredProject === index ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.85)')
                          : (hoveredProject === index ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)'),
                        borderLeft: isDark 
                          ? `1px solid rgba(201, 162, 39, 0.2)` 
                          : `1px solid rgba(10, 26, 74, 0.15)`,
                      }}
                    >
                      <div>
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-2">
                            {project.type === 'internship' ? (
                              <Briefcase className="w-5 h-5" style={{ color: colors.primary }} />
                            ) : project.featured ? (
                              <Sparkles className="w-5 h-5" style={{ color: colors.primary }} />
                            ) : (
                              <Code2 className="w-5 h-5" style={{ color: colors.primary }} />
                            )}
                            <h4 
                              className="text-2xl md:text-3xl font-bold transition-colors duration-300"
                              style={{
                                fontFamily: 'Orbitron, sans-serif',
                                color: colors.primary
                              }}
                            >
                              {project.title}
                            </h4>
                          </div>
                          <span
                            className="px-3 py-1 rounded-full text-xs font-semibold uppercase transition-colors duration-300"
                            style={{
                              background: isDark ? 'rgba(201, 162, 39, 0.2)' : 'rgba(10, 26, 74, 0.1)',
                              border: `1px solid ${colors.primary}`,
                              color: colors.primary,
                              fontFamily: 'Saira Semi Condensed, sans-serif',
                            }}
                          >
                            {project.type}
                          </span>
                        </div>

                        {/* Description */}
                        <p 
                          className="text-base mb-6 transition-colors duration-300 leading-relaxed"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            color: isDark ? colors.text : '#4B5563',
                            lineHeight: '1.7'
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Duration (if internship) */}
                        {project.duration && (
                          <p 
                            className="text-sm mb-6 transition-colors duration-300"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              color: isDark ? colors.secondary : '#6B7280'
                            }}
                          >
                            {project.duration}
                          </p>
                        )}

                        {/* Tech Stack Badges */}
                        <div className="mb-8">
                          <div className="flex items-center gap-2 mb-4">
                            <Code2 className="w-4 h-4" style={{ color: colors.primary }} />
                            <span 
                              className="text-sm font-semibold transition-colors duration-300"
                              style={{
                                fontFamily: 'Saira Semi Condensed, sans-serif',
                                color: colors.primary
                              }}
                            >
                              Tech Stack
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                                style={{
                                  fontFamily: 'Inter, sans-serif',
                                  background: isDark 
                                    ? (hoveredProject === index ? 'rgba(201, 162, 39, 0.15)' : 'rgba(201, 162, 39, 0.1)')
                                    : (hoveredProject === index ? 'rgba(10, 26, 74, 0.12)' : 'rgba(10, 26, 74, 0.08)'),
                                  border: `1.5px solid ${isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.2)'}`,
                                  color: colors.primary,
                                  transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: currentIndex === index ? '32px' : '8px',
                  background: currentIndex === index ? colors.primary : (isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.3)'),
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Curved Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
          }}
          onClick={closeModal}
        >
          <div
            className="modal-curved w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 md:p-12 transition-all duration-300"
            style={{
              background: isDark ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.98)',
              border: `2px solid ${isDark ? 'rgba(201, 162, 39, 0.3)' : 'rgba(10, 26, 74, 0.25)'}`,
              boxShadow: isDark ? '0 20px 60px rgba(201, 162, 39, 0.3)' : '0 20px 60px rgba(10, 26, 74, 0.2)',
              animation: 'modalSlideIn 0.3s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-full border-2 transition-all duration-300 hover:scale-110"
              style={{
                borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.primary;
                e.currentTarget.style.background = isDark ? 'rgba(201, 162, 39, 0.1)' : 'rgba(10, 26, 74, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)';
                e.currentTarget.style.background = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
              }}
            >
              <X className="w-5 h-5" style={{ color: colors.primary }} />
            </button>

            {/* Modal Content */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h3 
                  className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    color: colors.primary
                  }}
                >
                  {selectedProject.title}
                </h3>
                <div className="h-1 w-20 rounded-full" style={{ background: colors.primary }} />
              </div>

              {/* IDEA Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6" style={{ color: colors.primary }} />
                  <h4 
                    className="text-2xl font-bold transition-colors duration-300"
                    style={{
                      fontFamily: 'Orbitron, sans-serif',
                      color: colors.primary
                    }}
                  >
                    IDEA
                  </h4>
                </div>
                <p 
                  className="text-base leading-relaxed transition-colors duration-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: isDark ? colors.text : '#4B5563',
                    lineHeight: '1.8'
                  }}
                >
                  {selectedProject.idea}
                </p>
              </div>

              {/* KEY FEATURES Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6" style={{ color: colors.primary }} />
                  <h4 
                    className="text-2xl font-bold transition-colors duration-300"
                    style={{
                      fontFamily: 'Orbitron, sans-serif',
                      color: colors.primary
                    }}
                  >
                    KEY FEATURES
                  </h4>
                </div>
                <ul className="space-y-3">
                  {selectedProject.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: colors.primary }}
                      />
                      <p 
                        className="text-base leading-relaxed transition-colors duration-300"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          color: isDark ? colors.text : '#4B5563',
                          lineHeight: '1.7'
                        }}
                      >
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FEEDBACK Section */}
              <div className="pt-6 border-t" style={{ borderColor: isDark ? 'rgba(201, 162, 39, 0.2)' : 'rgba(10, 26, 74, 0.15)' }}>
                <h4 
                  className="text-2xl font-bold mb-6 transition-colors duration-300"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    color: colors.primary
                  }}
                >
                  Share Your Feedback
                </h4>
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={feedbackData.name}
                      onChange={handleFeedbackChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                        borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                        color: isDark ? colors.text : colors.primary,
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.primary}
                      onBlur={(e) => e.target.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)'}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={feedbackData.email}
                      onChange={handleFeedbackChange}
                      required
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                        borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                        color: isDark ? colors.text : colors.primary,
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.primary}
                      onBlur={(e) => e.target.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)'}
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={feedbackData.message}
                      onChange={handleFeedbackChange}
                      required
                      rows={4}
                      placeholder="Your feedback about this project..."
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none focus:outline-none"
                      style={{
                        background: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                        borderColor: isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)',
                        color: isDark ? colors.text : colors.primary,
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.primary}
                      onBlur={(e) => e.target.style.borderColor = isDark ? 'rgba(201, 162, 39, 0.4)' : 'rgba(10, 26, 74, 0.3)'}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300"
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
                        e.currentTarget.style.boxShadow = isDark ? '0 6px 30px rgba(201, 162, 39, 0.4)' : '0 6px 30px rgba(10, 26, 74, 0.35)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = isDark ? '0 4px 20px rgba(201, 162, 39, 0.3)' : '0 4px 20px rgba(10, 26, 74, 0.25)';
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      'Feedback Sent! ✓'
                    ) : submitStatus === 'error' ? (
                      'Failed. Try Again'
                    ) : (
                      'Send Feedback'
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
                      Thank you for your feedback!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}