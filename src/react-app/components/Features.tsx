export default function Features() {
  const features = [
    {
      title: 'UNLOCK UNLIMITED LEARNING ON FLUENTEDGELAB APP',
      description: 'FluentEdgeLab brings you lifetime access to a vast collection of multimedia learning materials, including books, grammar exercises, vocabulary lessons, music, and movies.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    },
    {
      title: 'GLOBALLY RECOGNISED CERTIFICATION',
      description: 'We offer top-of-the-line language learning services, giving you the opportunity to become proficient in your chosen language with internationally recognised certification from the embassy.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    },
    {
      title: 'CAREER OPPORTUNITIES',
      description: 'At FluentEdgeLab, we offer endless opportunities to help you develop your career. Work in multinational companies, work abroad, and expand your business internationally.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 tracking-wide">
                  {feature.title}
                </h2>
                <p className="text-lg text-blue-900 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
