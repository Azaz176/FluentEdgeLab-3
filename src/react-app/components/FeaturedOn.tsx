export default function FeaturedOn() {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-blue-900 mb-12 tracking-wider">
          AS FEATURED ON
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
          {[
            'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200',
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200',
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200',
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200',
          ].map((src, index) => (
            <div key={index} className="w-32 h-32 flex items-center justify-center">
              <img 
                src={src} 
                alt={`Featured ${index + 1}`} 
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
