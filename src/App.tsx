import { useState, useEffect } from 'react';

function Countdown() {
  const targetDate = new Date('2026-10-25T00:00:00').getTime();
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
    <p className="t t-35 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 13)', top: 'calc(var(--u) * 4269.5)', width: 'calc(var(--u) * 301)' }}>
      <span>{formatNumber(timeLeft.days)} : {formatNumber(timeLeft.hours)} : {formatNumber(timeLeft.minutes)} : {formatNumber(timeLeft.seconds)}</span>
    </p>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnvelopeClick = () => {
    setIsOpen(true);
    // Auto-play music if not already playing
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (audio && !isPlaying) {
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
        <audio id="bg-music" src="https://assets.mixkit.co/active_storage/sfx/211/211-preview.mp3" loop preload="metadata"></audio>
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
        <p className="t t-13 c-ink t-nowrap" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 68)', width: 'calc(var(--u) * 89)', zIndex: 9 }}>музыканы<br />күйгүзүү / өчүрүү</p>
        
        {/* Scroll indicator */}
        <span className="scroll-track" style={{ position: 'absolute', left: 'calc(var(--u) * 268)', top: 'calc(var(--u) * 27)', width: 'calc(var(--u) * 4)', height: 'calc(var(--u) * 30.1)', zIndex: 9 }} aria-hidden="true"></span>
        <span className="scroll-thumb" style={{ position: 'absolute', left: 'calc(var(--u) * 268)', top: 'calc(var(--u) * 27)', width: 'calc(var(--u) * 4)', height: 'calc(var(--u) * 9.7)', zIndex: 9 }} aria-hidden="true"></span>
        <p className="t t-13 c-ink t-nowrap" style={{ position: 'absolute', left: 'calc(var(--u) * 203)', top: 'calc(var(--u) * 64)', width: 'calc(var(--u) * 133)', zIndex: 9 }}>жогору<br />жылдырыңыз</p>
        
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
              <span className="cal-day">19</span><span className="cal-day">20</span><span className="cal-day">21</span><span className="cal-day">22</span><span className="cal-day">23</span><span className="cal-day">24</span>
              <span className="cal-day"><span className="cal-day-mark" aria-hidden="true"></span>25</span><span className="cal-day">26</span><span className="cal-day">27</span><span className="cal-day">28</span><span className="cal-day">29</span><span className="cal-day">30</span><span className="cal-day">31</span>
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
        <svg className="hero-initials" style={{ position: 'absolute', left: 'calc(var(--u) * 19)', top: 'calc(var(--u) * 363)', width: 'calc(var(--u) * 291)', height: 'calc(var(--u) * 95.4)' }} viewBox="0 0 1539.65 504.57" aria-hidden="true">
          <defs>
            <clipPath id="hero-initials-cut">
              <rect x="-500" y="-500" width="2540" height="646.25"></rect>
              <rect x="-500" y="373.88" width="2540" height="1000"></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#hero-initials-cut)">
            <text y="492.75" fontSize="695" transform="translate(294.44000121116636 0) scale(1.27 1)" fill="#636b48" fontFamily="'Playfair Display', serif">Н</text>
            <text y="492.75" fontSize="695" transform="translate(1248.718186483383 0) scale(1.27 1)" fill="#636b48" fontFamily="'Playfair Display', serif">К</text>
          </g>
          <path className="hero-initials-amp" d="M826.78 265.17c-18.39,39.66 -44.52,70.43 -78.41,92.3 5.59,12.25 13.41,18.37 23.47,18.37 10.28,0 20.37,-5.39 30.29,-16.19 1.45,-2.04 2.64,-2.77 3.57,-2.19 0.46,0.29 0.71,0.73 0.74,1.31 0.06,1.17 -1.16,3.35 -3.66,6.56 -11.49,14.58 -23.69,22.31 -36.61,23.19 -15.15,0.87 -26.71,-6.27 -34.69,-21.44 -19.78,10.21 -40.73,15.31 -62.85,15.31 -13.63,0 -25.11,-3.5 -34.43,-10.5 -10.95,-8.17 -16.64,-20.27 -17.07,-36.31 -0.59,-18.96 8.51,-38.5 27.29,-58.62 -3.86,-9.33 -6.12,-19.83 -6.75,-31.5 -0.83,-15.16 1.25,-30.18 6.25,-45.06 8.84,-26.25 24.72,-48.56 47.62,-66.93 23.77,-18.96 48.5,-28.43 74.2,-28.43 24.14,0 43.11,7.73 56.92,23.18 12.83,14 19.91,32.96 21.22,56.87 1.42,25.96 -4.27,52.64 -17.07,80.06zm-29.09 -127.3c-6.48,0 -13.24,5.1 -20.28,15.31 -13.04,18.96 -23.52,39.67 -31.46,62.12 20.91,-14 36.27,-27.41 46.06,-40.25 8.99,-11.37 13.26,-21.14 12.81,-29.31 -0.29,-5.25 -2.67,-7.87 -7.13,-7.87zm21.29 125.55c13.85,-28.58 20.1,-55.27 18.74,-80.06 -1.17,-21.29 -7.89,-38.06 -20.19,-50.31 -13.01,-13.12 -30.69,-19.69 -53.04,-19.69 -25.25,0 -48.04,8.31 -68.36,24.93 -20.32,16.62 -35.17,39.23 -44.55,67.81 -4.4,13.41 -6.22,27.12 -5.46,41.12 0.46,8.46 1.9,16.33 4.31,23.62 5.95,-5.54 13.13,-11.08 21.54,-16.63 3.24,-2.04 22.99,-12.68 59.26,-31.93 11.7,-31.21 25.34,-55.41 40.94,-72.62 10.54,-11.67 19.6,-17.5 27.2,-17.5 6.03,0 9.27,3.94 9.7,11.81 0.59,10.79 -3.48,22.17 -12.21,34.12 -11.01,15.17 -28.72,30.48 -53.13,45.93 -3.98,13.12 -6.42,31.64 -7.35,55.56 -0.43,8.46 -0.42,16.77 0.02,24.93 1.02,18.67 3.88,34.12 8.58,46.37 30.66,-19.54 55.32,-48.7 73.98,-87.49zm-89.29 -32.81c-12.15,6.71 -29.87,17.64 -53.18,32.81 -7.72,5.83 -14.63,12.4 -20.71,19.69 6.91,11.96 15.74,18.08 26.48,18.37 4.25,0 7.8,-0.44 10.65,-1.31 1.31,-0.58 2.1,-0.44 2.37,0.44 0.26,0.58 -0.8,1.75 -3.16,3.5 -4.82,1.75 -8.68,2.62 -11.59,2.62 -11.41,-0.29 -21.23,-6.12 -29.45,-17.5 -10.96,16.04 -16.04,31.5 -15.22,46.37 0.66,11.96 4.51,21.22 11.58,27.78 7.06,6.56 16.18,9.84 27.36,9.84 17.88,0 35.74,-4.23 53.61,-12.68 -4.92,-12.25 -7.85,-27.12 -8.81,-44.62 -0.53,-9.62 -0.39,-19.39 0.4,-29.31 1.68,-22.45 4.9,-41.12 9.67,-55.99z"></path>
        </svg>
        <span className="hero-script-name" style={{ position: 'absolute', left: 'calc(var(--u) * 8)', top: 'calc(var(--u) * 397)', width: 'calc(var(--u) * 137)', height: 'calc(var(--u) * 35)' }}>Нурсултан</span>
        <span className="hero-script-name" style={{ position: 'absolute', left: 'calc(var(--u) * 172)', top: 'calc(var(--u) * 397)', width: 'calc(var(--u) * 140)', height: 'calc(var(--u) * 35)' }}>Каныкей</span>
        
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
        
        <p className="t t-17 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 117)', top: 'calc(var(--u) * 962.1)', width: 'calc(var(--u) * 87)' }}>менен</p>
        
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 63.2)', top: 'calc(var(--u) * 2041.4)', width: 'calc(var(--u) * 76.9)', height: 'calc(var(--u) * 52.3)' }} aria-hidden="true">
          <img src="/img/bird-fly-b.webp" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        {/* Timeline Details */}
        <p className="t t-15 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 2694.3)', width: 'calc(var(--u) * 157)' }}>22:00<br /><span>Той тортун<br /></span><span>кесүү</span></p>
        <p className="t t-15 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * -7)', top: 'calc(var(--u) * 2430.3)', width: 'calc(var(--u) * 157)' }}>19:00<br /><span>Тойдун<br /></span><span>башталышы</span></p>
        <p className="t t-15 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 195)', top: 'calc(var(--u) * 2789.3)', width: 'calc(var(--u) * 125)' }}>00:00<br /><span>Тойдун<br /></span><span>аякташы</span></p>
        <p className="t t-15 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 163)', top: 'calc(var(--u) * 2553.3)', width: 'calc(var(--u) * 157)' }}>21:30<br /><span>Жаш жубайлардын<br /></span><span>алгачкы бийи</span></p>
        <p className="t t-15 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 173)', top: 'calc(var(--u) * 2282.2)', width: 'calc(var(--u) * 157)' }}>18:00<br /><span>Конокторду<br /></span><span>тосуп алуу</span></p>
        
        <h2 className="t t-20 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 2160.2)', width: 'calc(var(--u) * 301)' }}>Тойдун жүрүшү:</h2>
        
        <p className="t t-16 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 3790.4)', width: 'calc(var(--u) * 301)' }}><span>Тойго катышарыңызды<br /></span><span>билдирип коюңуз:</span></p>
        <p className="t t-17 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 3467.4)', width: 'calc(var(--u) * 301)' }}><span>Сиздерди чыдамсыздык менен күтөбүз!<br /></span><span><br /></span><span>Урмат менен, той ээлери:</span></p>
        
        <Countdown />
        
        <h2 className="t t-20 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 14)', top: 'calc(var(--u) * 4188.4)', width: 'calc(var(--u) * 301)' }}>Тойго чейин:</h2>
        <p className="t t-10 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 221)', top: 'calc(var(--u) * 4315.5)', width: 'calc(var(--u) * 77)' }}>секунд</p>
        <p className="t t-10 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 153)', top: 'calc(var(--u) * 4315.5)', width: 'calc(var(--u) * 77)' }}>мүнөт</p>
        <p className="t t-10 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 91)', top: 'calc(var(--u) * 4315.5)', width: 'calc(var(--u) * 77)' }}>саат</p>
        <p className="t t-10 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 28)', top: 'calc(var(--u) * 4315.5)', width: 'calc(var(--u) * 77)' }}>күн</p>
        
        <p className="t t-17 c-olive" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 3205.3)', width: 'calc(var(--u) * 301)' }}>этнокомплекс<br />Анкара көчөсү, 2<br />Бишкек шаары</p>
        <p className="t t-17 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 1108.1)', width: 'calc(var(--u) * 301)' }}><span>бактысына күбө болуп,<br /></span><span>тоюбузга каалоо айтып,<br /></span><span>кадырлуу коногубуз болуп кетүүгө<br /></span><span>чакырабыз!</span></p>
        <p className="t t-17 c-white" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 750.1)', width: 'calc(var(--u) * 301)' }}><span>Урматтуу биздин сыйлуу<br /></span><span>коногубуз!<br /></span><span><br /></span><span>Сиздерди балдарыбыз</span></p>
        
        <h2 className="script-box" style={{ position: 'absolute', left: 'calc(var(--u) * 28)', top: 'calc(var(--u) * 3700.4)', width: 'calc(var(--u) * 233)', height: 'calc(var(--u) * 79.5)' }}><span className="script c-cream" style={{ fontSize: 'calc(var(--u) * 46)' }}>Сурамжылоо</span></h2>
        
        <div style={{ position: 'absolute', left: 'calc(var(--u) * 6)', top: 'calc(var(--u) * 3858.4)', width: 'calc(var(--u) * 308)', height: 'calc(var(--u) * 257.1)' }}>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input className="form-input" type="text" autoComplete="name" placeholder="Аты-жөнүңүз" aria-label="Аты-жөнүңүз" required name="name" />
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
            <button className="form-submit" type="submit">Жоопту жөнөтүү</button>
          </form>
        </div>
        
        <p className="script-box" style={{ position: 'absolute', left: 'calc(var(--u) * 0)', top: 'calc(var(--u) * 3563.4)', width: 'calc(var(--u) * 310)', height: 'calc(var(--u) * 77.4)' }}><span className="script c-olive" style={{ fontSize: 'calc(var(--u) * 42)' }}>Бакыт — Гүлмира</span></p>
        <p className="script-box" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 1005.1)', width: 'calc(var(--u) * 300)', height: 'calc(var(--u) * 88.9)' }}><span className="script c-cream" style={{ fontSize: 'calc(var(--u) * 52)' }}>Каныкейдин</span></p>
        
        <span className="beat-soft" style={{ position: 'absolute', left: 'calc(var(--u) * 262)', top: 'calc(var(--u) * 1760.2)', width: 'calc(var(--u) * 38)', height: 'calc(var(--u) * 38.2)' }} aria-hidden="true">
          <img src="/img/heart.svg" alt="" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }} />
        </span>
        
        <p className="script-box" style={{ position: 'absolute', left: 'calc(var(--u) * 10)', top: 'calc(var(--u) * 883.1)', width: 'calc(var(--u) * 300)', height: 'calc(var(--u) * 92.3)' }}><span className="script c-cream" style={{ fontSize: 'calc(var(--u) * 52)' }}>Нурсултан</span></p>
        
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
        
        <span style={{ position: 'absolute', left: 'calc(var(--u) * 43)', top: 'calc(var(--u) * 3305.3)', width: 'calc(var(--u) * 235)', height: 'calc(var(--u) * 31)' }} className="beat-strong">
          <a className="map-btn" href="https://www.openstreetmap.org/?mlat=42.855253&mlon=74.636869#map=18/42.855253/74.636869" target="_blank" rel="noopener noreferrer">Картадан көрүү</a>
        </span>
        
        <h2 className="center-box" style={{ position: 'absolute', left: 'calc(var(--u) * 40)', top: 'calc(var(--u) * 3171.3)', width: 'calc(var(--u) * 241)', height: 'calc(var(--u) * 26.8)' }}>
          <span className="venue-name">ДАСМИЯ</span>
        </h2>
      </div>
      <p className="sr-only">Нурсултан менен Каныкей — 25.10.2026, ДАСМИЯ, Анкара көчөсү, 2, Бишкек шаары</p>
    </main>
  );
}
