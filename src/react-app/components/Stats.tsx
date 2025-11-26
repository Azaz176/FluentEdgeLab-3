export default function Stats() {
  const stats = [
    { value: '1200+', label: 'Language Resources' },
    { value: '950+', label: 'Google Reviews' },
    { value: '4000+', label: 'Batches Worldwide' },
    { value: '65000+', label: 'Instagram Followers' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2 tracking-wider">
                {stat.value}
              </div>
              <div className="h-px bg-gray-300 w-16 mx-auto mb-3"></div>
              <div className="text-sm font-medium text-blue-900 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
