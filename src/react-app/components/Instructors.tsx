export default function Instructors() {
  const instructors = [
    {
      name: 'Sarah Johnson',
      role: 'French Instructor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      name: 'Michael Chen',
      role: 'German Instructor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      name: 'Maria Garcia',
      role: 'Spanish Instructor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">MEET OUR INSTRUCTORS</h2>
          <p className="text-lg text-blue-900 max-w-2xl mx-auto">
            We are committed to providing the highest levels of excellence in language teaching 
            and are dedicated to helping all students achieve their language learning goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-1">{instructor.name}</h3>
              <p className="text-green-600 font-medium">{instructor.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#meet-them"
            className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
          >
            Meet Them
          </a>
        </div>
      </div>
    </section>
  );
}
