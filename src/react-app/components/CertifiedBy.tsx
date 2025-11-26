export default function CertifiedBy() {
  const certifications = [
    {
      name: 'F.I.D.E.S.C.U.',
      logo: '/CertifiedBy/btn1.png',
      alt: 'FIDESCU Certification'
    },
    {
      name: 'Enforex',
      logo: '/CertifiedBy/btn2.png',
      alt: 'Enforex Certification'
    },
    {
      name: 'ISO',
      logo: '/CertifiedBy/btn3.png',
      alt: 'ISO International Organization for Standardization'
    },
    {
      name: 'ISO',
      logo: '/CertifiedBy/btn4.png',
      alt: 'ISO International Organization for Standardization'
    },
    {
      name: 'ISO',
      logo: '/CertifiedBy/btn5.png',
      alt: 'ISO International Organization for Standardization'
    },
    {
      name: 'ISO',
      logo: '/CertifiedBy/btn6.png',
      alt: 'ISO International Organization for Standardization'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-full mx-auto px-6">
        <style>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
            will-change: transform;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll" style={{ width: 'max-content' }}>
            {certifications.map((cert, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center flex-shrink-0 px-12 md:px-16"
              >
                <img
                  src={cert.logo}
                  alt={cert.alt}
                  className="h-28 md:h-36 w-auto object-contain dark:brightness-90 dark:contrast-125"
                />
              </div>
            ))}
            
            {certifications.map((cert, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center flex-shrink-0 px-12 md:px-16"
              >
                <img
                  src={cert.logo}
                  alt={cert.alt}
                  className="h-28 md:h-36 w-auto object-contain dark:brightness-90 dark:contrast-125"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
