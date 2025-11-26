export default function AgeGroups() {
  const groups = [
    {
      title: 'KIDS',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
      description: 'Engaging language programs designed specifically for young learners'
    },
    {
      title: 'ADULTS',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      description: 'Professional courses for career advancement and personal growth'
    },
    {
      title: 'SENIORS',
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600',
      description: 'Flexible programs tailored for mature learners'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800"
            alt="Student learning"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 tracking-wide">
              EVERY AGE-GROUP
            </h2>
            <p className="text-lg text-blue-900 leading-relaxed">
              We have a class for everyone, whether you're a beginner or already know a little, 
              a child or an adult, in a group or one-on-one setting.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {groups.map((group, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-4xl font-bold mb-2 tracking-wider">
                  {group.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
