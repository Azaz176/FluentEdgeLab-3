export default function WhyChoose() {
  const points = [
    {
      icon: '👤',
      title: '1:1 Coaching',
      description: 'Personalized attention for maximum score improvement'
    },
    {
      icon: '📈',
      title: 'Proven Results',
      description: 'Track record of significant score improvements'
    },
    {
      icon: '🌍',
      title: 'Global Students',
      description: 'Training students from around the world'
    },
    {
      icon: '⏰',
      title: 'Flexible Timings',
      description: 'Schedule classes that fit your timezone'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-blue-900 dark:text-white mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 min-h-[280px] flex flex-col items-center justify-center
                shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] 
                hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] 
                hover:-translate-y-2 
                transition-all duration-300 ease-out"
            >
              <div className="text-7xl mb-6 drop-shadow-lg">{point.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">{point.title}</h3>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
