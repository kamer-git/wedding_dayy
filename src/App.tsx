import { useState, useEffect } from 'react';

function Countdown() {
  const targetDate = new Date('2026-10-21T16:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="animate-on-scroll" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 4260)', width: 'calc(var(--u) * 301)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'calc(var(--u) * 5)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 'calc(var(--u) * 15)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="t t-35 c-white">{formatNumber(timeLeft.days)}</span>
          <span className="t t-10 c-white" style={{ marginTop: 'calc(var(--u) * 5)' }}>күн</span>
        </div>
        <span className="t t-35 c-white" style={{ paddingBottom: 'calc(var(--u) * 15)' }}>:</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="t t-35 c-white">{formatNumber(timeLeft.hours)}</span>
          <span className="t t-10 c-white" style={{ marginTop: 'calc(var(--u) * 5)' }}>саат</span>
        </div>
        <span className="t t-35 c-white" style={{ paddingBottom: 'calc(var(--u) * 15)' }}>:</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="t t-35 c-white">{formatNumber(timeLeft.minutes)}</span>
          <span className="t t-10 c-white" style={{ marginTop: 'calc(var(--u) * 5)' }}>мүнөт</span>
        </div>
        <span className="t t-35 c-white" style={{ paddingBottom: 'calc(var(--u) * 15)' }}>:</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="t t-35 c-white">{formatNumber(timeLeft.seconds)}</span>
          <span className="t t-10 c-white" style={{ marginTop: 'calc(var(--u) * 5)' }}>секунд</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const toggleSound = () => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (audio && audio.hasAttribute('src')) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(e => console.warn("Play failed", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnvelopeClick = () => {
    setIsOpen(true);
    // Auto-play music if not already playing
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (audio && !isPlaying && audio.hasAttribute('src')) {
      audio.play().catch(() => console.log("Auto-play blocked"));
      setIsPlaying(true);
    }
  };

  return (
    <main className="frame">
      <div className="canvas">
        {/* Background glow layers */}
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 3318.3)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 568.6)' }} aria-hidden="true">
          <img src="/img/glow-b.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        {/* Countdown background */}
        <span className="footer-photo" style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 4168.4)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 192)' }} aria-hidden="true">
          <img src="/img/countdown-background.jpg" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, objectFit: 'cover' }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 4168.4)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 192)' }} className="shape-black footer-shade"></span>
        
        {/* RSVP background shape */}
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 3675.4)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 493)' }} className="shape-olive"></span>
        
        {/* More glow layers */}
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 1330.1)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 568.6)' }} aria-hidden="true">
          <img src="/img/glow-b.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 2930.3)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 568.6)' }} aria-hidden="true">
          <img src="/img/glow-b.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 2478.3)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 568.6)' }} aria-hidden="true">
          <img src="/img/glow-b.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 1984.2)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 568.9)' }} aria-hidden="true">
          <img src="/img/glow-a.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 0)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 569)' }} aria-hidden="true">
          <img src="/img/glow-a.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        {/* Birds */}
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 45)', top: 'calc(var(--u) * 1344.1)', width: 'calc(var(--u) * 40)', height: 'calc(var(--u) * 33.9)' }} aria-hidden="true">
          <img src="/img/bird-close.webp" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 38)', top: 'calc(var(--u) * 474)', width: 'calc(var(--u) * 57)', height: 'calc(var(--u) * 48.3)' }} aria-hidden="true">
          <img src="/img/bird-close.webp" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        {/* Hands image */}
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 164)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 181.7)' }} aria-hidden="true">
          <img src="/img/hands.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        {/* Flying birds */}
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 248.7)', top: 'calc(var(--u) * 1315.1)', width: 'calc(var(--u) * 70.3)', height: 'calc(var(--u) * 47.9)' }} aria-hidden="true">
          <img src="/img/bird-fly-a.webp" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 219.2)', top: 'calc(var(--u) * 287.9)', width: 'calc(var(--u) * 82.6)', height: 'calc(var(--u) * 56.3)' }} aria-hidden="true">
          <img src="/img/bird-fly-a.webp" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        {/* Audio */}
        <audio id="bg-music" src="/audio.mp3" loop preload="metadata" onError={(e) => {
          console.warn("Audio file not found or unsupported. Please upload 'audio.mp3' to the 'public' folder.");
          const target = e.target as HTMLAudioElement;
          target.removeAttribute('src'); // Prevents repeated errors
        }}></audio>
        <button type="button" className="sound-btn" onClick={toggleSound} style={{ position: 'absolute', left: 'calc(var(--u) * 35)', top: 'calc(var(--u) * 29)', width: 'calc(var(--u) * 41)', zIndex: 9 }} aria-label="музыканы күйгүзүү / өчүрүү">
          <svg viewBox="0 0 79 64" fill="none" aria-hidden="true">
            <path d="M4 22.5h13.5L34 6.5a2 2 0 0 1 3.4 1.4v47.7a2 2 0 0 1-3.4 1.4L17.5 41H4a3 3 0 0 1-3-3V25.5a3 3 0 0 1 3-3Z" fill="#636b48"></path>
            <g stroke="#636b48" strokeWidth="5.4" strokeLinecap="round" fill="none">
              <path className="sound-wave" d="M48 22.5a17 17 0 0 1 0 19" style={{ opacity: isPlaying ? 1 : 0.2 }}></path>
              <path className="sound-wave" d="M58.5 14.5a29.5 29.5 0 0 1 0 35" style={{ opacity: isPlaying ? 1 : 0.2 }}></path>
              <path className="sound-wave" d="M69 6.5a42 42 0 0 1 0 51" style={{ opacity: isPlaying ? 1 : 0.2 }}></path>
            </g>
          </svg>
        </button>
        <p className="t animate-on-scroll t-13 c-ink t-nowrap" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 68)', width: 'calc(var(--u) * 89)', zIndex: 9 }}>музыканы<br />күйгүзүү / өчүрүү</p>
        
        {/* Scroll indicator */}
        <span className="scroll-track" style={{ position: 'absolute', left: 'calc(var(--u) * 268)', top: 'calc(var(--u) * 27)', width: 'calc(var(--u) * 4)', height: 'calc(var(--u) * 30.1)', zIndex: 9 }} aria-hidden="true"></span>
        <span className="scroll-thumb" style={{ position: 'absolute', left: 'calc(var(--u) * 268)', top: 'calc(var(--u) * 27)', width: 'calc(var(--u) * 4)', height: 'calc(var(--u) * 9.7)', zIndex: 9 }} aria-hidden="true"></span>
        <p className="t animate-on-scroll t-13 c-ink t-nowrap" style={{ position: 'absolute', left: 'calc(var(--u) * 203)', top: 'calc(var(--u) * 64)', width: 'calc(var(--u) * 133)', zIndex: 9 }}>жогору<br />жылдырыңыз</p>
        
        {/* Calendar */}
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 28)', top: 'calc(var(--u) * 1627.2)', width: 'calc(var(--u) * 265)', height: 'calc(var(--u) * 181.7)' }}>
          <div className="cal">
            <div className="cal-head"><span>ОКТЯБРЬ</span><span>2026</span></div>
            <div className="cal-rule"></div>
            <div className="cal-grid">
              <span className="cal-wd">дүй</span><span className="cal-wd">шей</span><span className="cal-wd">шар</span><span className="cal-wd">бей</span><span className="cal-wd">жум</span><span className="cal-wd">иш</span><span className="cal-wd">жек</span>
              <span className="cal-day"></span><span className="cal-day"></span><span className="cal-day"></span><span className="cal-day">1</span><span className="cal-day">2</span><span className="cal-day">3</span><span className="cal-day">4</span>
              <span className="cal-day">5</span><span className="cal-day">6</span><span className="cal-day">7</span><span className="cal-day">8</span><span className="cal-day">9</span><span className="cal-day">10</span><span className="cal-day">11</span>
              <span className="cal-day">12</span><span className="cal-day">13</span><span className="cal-day">14</span><span className="cal-day">15</span><span className="cal-day">16</span><span className="cal-day">17</span><span className="cal-day">18</span>
              <span className="cal-day">19</span><span className="cal-day">20</span><span className="cal-day"><span className="cal-day-mark" aria-hidden="true"></span>21</span><span className="cal-day">22</span><span className="cal-day">23</span><span className="cal-day">24</span>
              <span className="cal-day">25</span><span className="cal-day">26</span><span className="cal-day">27</span><span className="cal-day">28</span><span className="cal-day">29</span><span className="cal-day">30</span><span className="cal-day">31</span>
            </div>
          </div>
        </span>
        
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 1813.2)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 319.8)' }} aria-hidden="true">
          <img src="/img/chandelier.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 8)', top: 'calc(var(--u) * 1330.1)', width: 'calc(var(--u) * 305)', height: 'calc(var(--u) * 203.3)' }} aria-hidden="true">
          <img src="/img/banquet.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        {/* Names SVG */}
        <svg className="hero-initials" style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 363)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 95.4)' }} viewBox="0 0 1539.65 504.57" aria-hidden="true">
          <defs>
            <clipPath id="hero-initials-cut">
              <rect x="-500" y="-500" width="2540" height="646.25"></rect>
              <rect x="-500" y="373.88" width="2540" height="1000"></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#hero-initials-cut)">
            <text x="350" y="492.75" fontSize="695" textAnchor="middle" fill="#636b48" fontFamily="'Playfair Display', serif">Б</text>
            <text x="1190" y="492.75" fontSize="695" textAnchor="middle" fill="#636b48" fontFamily="'Playfair Display', serif">А</text>
          </g>
          <text x="770" y="380" fontSize="180" textAnchor="middle" fill="#f0ecd6" fontFamily="'Playfair Display', serif" fontStyle="italic">&amp;</text>
        </svg>
        <span className="hero-script-name" style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 397)', width: 'calc(var(--u) * 140)', height: 'calc(var(--u) * 35)', display: 'flex', justifyContent: 'center' }}>Байэл</span>
        <span className="hero-script-name" style={{ position: 'absolute', left: 'calc(var(--u) * 170)', top: 'calc(var(--u) * 397)', width: 'calc(var(--u) * 150)', height: 'calc(var(--u) * 35)', display: 'flex', justifyContent: 'center' }}>Алуа</span>
        
        {/* Florals */}
        <span style={{ position: 'absolute', left: 'calc(var(--u) * -31)', top: 'calc(var(--u) * 3047.3)', width: 'calc(var(--u) * 147)', height: 'calc(var(--u) * 92.9)' }} aria-hidden="true">
          <img src="/img/floral-left.svg" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * -28)', top: 'calc(var(--u) * 1282.1)', width: 'calc(var(--u) * 147)', height: 'calc(var(--u) * 92.9)' }} aria-hidden="true">
          <img src="/img/floral-left.svg" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * -28)', top: 'calc(var(--u) * 537.1)', width: 'calc(var(--u) * 147)', height: 'calc(var(--u) * 92.9)' }} aria-hidden="true">
          <img src="/img/floral-left.svg" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 216)', top: 'calc(var(--u) * 3344.3)', width: 'calc(var(--u) * 152)', height: 'calc(var(--u) * 96.1)' }} aria-hidden="true">
          <img src="/img/floral-right.svg" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 201)', top: 'calc(var(--u) * 1472.1)', width: 'calc(var(--u) * 152)', height: 'calc(var(--u) * 96.1)' }} aria-hidden="true">
          <img src="/img/floral-right.svg" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 201)', top: 'calc(var(--u) * 527.1)', width: 'calc(var(--u) * 152)', height: 'calc(var(--u) * 96.1)' }} aria-hidden="true">
          <img src="/img/floral-right.svg" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        <span className="shape-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 623.1)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 671.1)', borderRadius: 'calc(var(--u) * 200)' }}></span>
        
        <p className="t animate-on-scroll t-17 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 117)', top: 'calc(var(--u) * 962.1)', width: 'calc(var(--u) * 87)' }}>менен</p>
        
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 63.2)', top: 'calc(var(--u) * 2041.4)', width: 'calc(var(--u) * 76.9)', height: 'calc(var(--u) * 52.3)' }} aria-hidden="true">
          <img src="/img/bird-fly-b.webp" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        {/* Timeline Details */}
        <p className="t animate-on-scroll t-15 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 2694.3)', width: 'calc(var(--u) * 110)', textAlign: 'right', textShadow: '0 0 6px #f7f0e4, 0 0 10px #f7f0e4' }}>21:00<br /><span>Той тортун<br /></span><span>кесүү</span></p>
        <p className="t animate-on-scroll t-15 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 2430.3)', width: 'calc(var(--u) * 110)', textAlign: 'right', textShadow: '0 0 6px #f7f0e4, 0 0 10px #f7f0e4' }}>17:00<br /><span>Тойдун<br /></span><span>башталышы</span></p>
        <p className="t animate-on-scroll t-15 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 200)', top: 'calc(var(--u) * 2789.3)', width: 'calc(var(--u) * 110)', textAlign: 'left', textShadow: '0 0 6px #f7f0e4, 0 0 10px #f7f0e4' }}>22:00<br /><span>Тойдун<br /></span><span>аякташы</span></p>
        <p className="t animate-on-scroll t-15 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 200)', top: 'calc(var(--u) * 2553.3)', width: 'calc(var(--u) * 110)', textAlign: 'left', textShadow: '0 0 6px #f7f0e4, 0 0 10px #f7f0e4' }}>19:30<br /><span>Жаш жубайлардын<br /></span><span>алгачкы бийи</span></p>
        <p className="t animate-on-scroll t-15 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 200)', top: 'calc(var(--u) * 2282.2)', width: 'calc(var(--u) * 110)', textAlign: 'left', textShadow: '0 0 6px #f7f0e4, 0 0 10px #f7f0e4' }}>16:00<br /><span>Конокторду<br /></span><span>тосуп алуу</span></p>
        
        <h2 className="t animate-on-scroll t-20 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 2160.2)', width: 'calc(var(--u) * 301)' }}>Тойдун жүрүшү:</h2>
        
        <p className="t animate-on-scroll t-16 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 15)', top: 'calc(var(--u) * 3790.4)', width: 'calc(var(--u) * 290)' }}><span>Тойго катышарыңызды<br /></span><span>билдирип коюңуз:</span></p>
        <p className="t animate-on-scroll t-17 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 15)', top: 'calc(var(--u) * 3467.4)', width: 'calc(var(--u) * 290)' }}><span>Сиздерди чыдамсыздык менен күтөбүз!<br /></span><span><br /></span><span>Урмат менен, той ээлери:</span></p>
        
        <Countdown />
        <h2 className="t animate-on-scroll t-20 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 14)', top: 'calc(var(--u) * 4188.4)', width: 'calc(var(--u) * 301)' }}>Тойго чейин:</h2>
        
        <h2 className="t animate-on-scroll t-35 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 3130)', width: 'calc(var(--u) * 301)' }}>Арна</h2>
        <p className="t animate-on-scroll t-17 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 3190)', width: 'calc(var(--u) * 301)' }}>ресторан<br />Курманжан Датка көчөсү, 152<br />Бишкек шаары</p>
        <a href="https://2gis.kg/bishkek/geo/70000001112761356" className="animate-on-scroll" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', left: 'calc(var(--u) * 40)', top: 'calc(var(--u) * 3280)', width: 'calc(var(--u) * 241)', height: 'calc(var(--u) * 45)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#636b48', color: '#ffffff', textDecoration: 'none', fontSize: 'calc(var(--u) * 14)', fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '300' }}>Картадан көрүү</a>
        <p className="t animate-on-scroll t-17 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 1108.1)', width: 'calc(var(--u) * 301)' }}><span>бактысына күбө болуп,<br /></span><span>тоюбузга каалоо айтып,<br /></span><span>кадырлуу коногубуз болуп кетүүгө<br /></span><span>чакырабыз!</span></p>
        <p className="t animate-on-scroll t-17 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 750.1)', width: 'calc(var(--u) * 301)' }}><span>Урматтуу биздин сыйлуу<br /></span><span>коногубуз!<br /></span><span><br /></span><span>Сиздерди балдарыбыз</span></p>
        
        <h2 className="script-box animate-on-scroll" style={{ position: 'absolute', left: 'calc(var(--u) * 28)', top: 'calc(var(--u) * 3700.4)', width: 'calc(var(--u) * 233)', height: 'calc(var(--u) * 79.5)' }}><span className="script c-cream" style={{ fontSize: 'calc(var(--u) * 46)' }}>Сурамжылоо</span></h2>
        
        <div style={{ position: 'absolute', left: 'calc(var(--u) * 15)', top: 'calc(var(--u) * 3858.4)', width: 'calc(var(--u) * 290)', height: 'calc(var(--u) * 257.1)' }}>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input className="form-input" type="text" autoComplete="name" placeholder="Аты-жөнүңүз" aria-label="Аты-жөнүңүз" required name="name" style={{ fontFamily: 'Montserrat, sans-serif' }} />
            <p className="form-question" id="rsvp-question">Жубайыңыз менен келсеңиз, экөөңүздүн тең аты-жөнүңүздү жазыңыз</p>
            <fieldset className="form-options" aria-labelledby="rsvp-question">
              <label className="form-option">
                <input type="radio" required name="answer" value="Албетте, келем" />
                <span className="form-dot"></span><span>Албетте, келем</span>
              </label>
              <label className="form-option">
                <input type="radio" required name="answer" value="Жубайым менен келем" />
                <span className="form-dot"></span><span>Жубайым менен келем</span>
              </label>
              <label className="form-option">
                <input type="radio" required name="answer" value="Келе албайм" />
                <span className="form-dot"></span><span>Келе албайм</span>
              </label>
            </fieldset>
            <button className="form-submit" type="submit" style={{ fontFamily: 'Montserrat, sans-serif' }}>Жоопту жөнөтүү</button>
          </form>
        </div>
        
        <p className="script-box animate-on-scroll" style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 3563.4)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 77.4)', display: 'flex', justifyContent: 'center' }}><span className="script c-olive" style={{ fontSize: 'calc(var(--u) * 42)' }}>Болот — Чынар</span></p>
        <p className="script-box animate-on-scroll" style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 1005.1)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 88.9)', display: 'flex', justifyContent: 'center' }}><span className="script c-cream" style={{ fontSize: 'calc(var(--u) * 52)' }}>Алуанын</span></p>
        
        <span className="beat-soft" style={{ position: 'absolute', left: 'calc(var(--u) * 262)', top: 'calc(var(--u) * 1760.2)', width: 'calc(var(--u) * 38)', height: 'calc(var(--u) * 38.2)' }} aria-hidden="true">
          <img src="/img/heart.svg" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        <p className="script-box animate-on-scroll" style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 883.1)', width: 'calc(var(--u) * 320)', height: 'calc(var(--u) * 92.3)', display: 'flex', justifyContent: 'center' }}><span className="script c-cream" style={{ fontSize: 'calc(var(--u) * 52)' }}>Байэл</span></p>
        
        {/* Timeline images */}
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 208)', top: 'calc(var(--u) * 2663.3)', width: 'calc(var(--u) * 94)', height: 'calc(var(--u) * 101.6)' }} aria-hidden="true">
          <img src="/img/prog-cake.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 175)', top: 'calc(var(--u) * 2421.3)', width: 'calc(var(--u) * 130)', height: 'calc(var(--u) * 88.2)' }} aria-hidden="true">
          <img src="/img/prog-plate.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 8)', top: 'calc(var(--u) * 2783.3)', width: 'calc(var(--u) * 131)', height: 'calc(var(--u) * 87.4)' }} aria-hidden="true">
          <img src="/img/prog-car.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 32)', top: 'calc(var(--u) * 2507.3)', width: 'calc(var(--u) * 87)', height: 'calc(var(--u) * 160.1)' }} aria-hidden="true">
          <img src="/img/prog-couple.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 2253.2)', width: 'calc(var(--u) * 163)', height: 'calc(var(--u) * 158.9)' }} aria-hidden="true">
          <img src="/img/prog-table.png" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 81)', top: 'calc(var(--u) * 2332.2)', width: 'calc(var(--u) * 156)', height: 'calc(var(--u) * 726.9)' }} aria-hidden="true">
          {/* We might not have timeline.svg, fallback is fine or user uploads it */}
          <img src="/img/timeline.svg" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        {/* Envelope */}
        <button type="button" className="envelope" data-open={isOpen} onClick={handleEnvelopeClick} aria-label="Ачуу үчүн басыңыз" tabIndex={0}>
          <span className="envelope-stage">
            <span style={{ position: 'absolute', left: 'calc(var(--u) * -37)', top: 'calc(var(--u) * 168)', width: 'calc(var(--u) * 395)', height: 'calc(var(--u) * 409.1)' }}>
              <img alt="" style={{ width: '100%', height: '100%' }} src="/img/envelope-body.svg" />
            </span>
            <span style={{ position: 'absolute', left: 'calc(var(--u) * -37)', top: 'calc(var(--u) * -8)', width: 'calc(var(--u) * 395)', height: 'calc(var(--u) * 420)' }}>
              <img alt="" style={{ width: '100%', height: '100%' }} src="/img/envelope-front-round-seal-150.png" />
            </span>
            <span className="envelope-hint">Ачуу үчүн басыңыз</span>
          </span>
        </button>
        
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 224)', top: 'calc(var(--u) * 3012.3)', width: 'calc(var(--u) * 35)', height: 'calc(var(--u) * 47.2)' }} aria-hidden="true">
          <img src="/img/pin.svg" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
      </div>
      <p className="sr-only">Байэл менен Алуа — 21.10.2026, Арна, Курманжан Датка көчөсү, 152, Бишкек</p>
    </main>
  );
}
