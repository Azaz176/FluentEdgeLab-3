import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'IELTS', 'TOEFL', 'GRE', 'PTE', 'CELPIP', 'Tips', 'Strategies'];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const posts = [
    {
      id: 1,
      title: 'How to Prepare for IELTS in 30 Days',
      category: 'IELTS',
      excerpt: 'A comprehensive guide to fast-track your IELTS preparation and achieve your target score.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Top Mistakes Students Make in TOEFL Listening',
      category: 'TOEFL',
      excerpt: 'Learn from common errors and improve your TOEFL Listening score.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
      date: '2024-01-10'
    },
    {
      id: 3,
      title: 'GRE Verbal: Vocabulary Building Strategies',
      category: 'GRE',
      excerpt: 'Effective methods to expand your vocabulary for GRE success.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
      date: '2024-01-05'
    },
    {
      id: 4,
      title: 'PTE Speaking: Tips for High Scores',
      category: 'PTE',
      excerpt: 'Master PTE Speaking with these proven strategies and techniques.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
      date: '2024-01-01'
    },
    {
      id: 5,
      title: 'Time Management Tips for Test Day',
      category: 'Tips',
      excerpt: 'Essential time management strategies to maximize your performance.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      date: '2023-12-28'
    },
    {
      id: 6,
      title: 'Writing High-Scoring Essays: A Step-by-Step Guide',
      category: 'Strategies',
      excerpt: 'Learn the structure and techniques for writing impressive essays.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600',
      date: '2023-12-25'
    },
    {
      id: 7,
      title: 'IELTS Writing Task 2: Mastering Opinion Essays',
      category: 'IELTS',
      excerpt: 'Step-by-step guide to structuring and writing compelling opinion essays for IELTS.',
      image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600',
      date: '2024-01-20'
    },
    {
      id: 8,
      title: 'IELTS Speaking Part 2: How to Ace the Cue Card',
      category: 'IELTS',
      excerpt: 'Proven techniques to deliver fluent and coherent responses in IELTS Speaking Part 2.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600',
      date: '2024-01-18'
    },
    {
      id: 9,
      title: 'TOEFL Reading: Strategies for Academic Passages',
      category: 'TOEFL',
      excerpt: 'Master the art of reading complex academic texts quickly and accurately.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600',
      date: '2024-01-12'
    },
    {
      id: 10,
      title: 'TOEFL Speaking: Independent Task Templates',
      category: 'TOEFL',
      excerpt: 'Ready-to-use templates and frameworks for TOEFL Speaking independent tasks.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600',
      date: '2024-01-08'
    },
    {
      id: 11,
      title: 'GRE Quantitative: Tackling Data Interpretation',
      category: 'GRE',
      excerpt: 'Strategies to quickly analyze charts, graphs, and tables in GRE Quant section.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      date: '2024-01-03'
    },
    {
      id: 12,
      title: 'GRE AWA: Scoring 5+ on Analytical Writing',
      category: 'GRE',
      excerpt: 'Templates and techniques to write high-scoring Issue and Argument essays.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600',
      date: '2023-12-30'
    },
    {
      id: 13,
      title: 'PTE Read Aloud: Perfect Your Pronunciation',
      category: 'PTE',
      excerpt: 'Tips to improve fluency, pronunciation, and oral fluency scores in PTE.',
      image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600',
      date: '2023-12-27'
    },
    {
      id: 14,
      title: 'PTE Writing: Summarize Written Text Made Easy',
      category: 'PTE',
      excerpt: 'A foolproof method to write perfect one-sentence summaries every time.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
      date: '2023-12-22'
    },
    {
      id: 15,
      title: 'CELPIP Listening: Handling Everyday Conversations',
      category: 'CELPIP',
      excerpt: 'Understand Canadian English accents and everyday dialogue patterns.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600',
      date: '2024-01-14'
    },
    {
      id: 16,
      title: 'CELPIP Writing: Email and Survey Response Guide',
      category: 'CELPIP',
      excerpt: 'How to write effective emails and surveys that score high in CELPIP.',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600',
      date: '2024-01-06'
    },
    {
      id: 17,
      title: 'CELPIP Speaking: Describing Scenes Like a Pro',
      category: 'CELPIP',
      excerpt: 'Learn to describe images and scenes with rich vocabulary and structure.',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600',
      date: '2023-12-20'
    },
    {
      id: 18,
      title: 'How to Stay Motivated During Test Prep',
      category: 'Tips',
      excerpt: 'Practical tips to maintain focus and motivation throughout your preparation journey.',
      image: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=600',
      date: '2023-12-18'
    },
    {
      id: 19,
      title: 'Creating an Effective Study Schedule',
      category: 'Tips',
      excerpt: 'Design a personalized study plan that maximizes retention and minimizes burnout.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600',
      date: '2023-12-15'
    },
    {
      id: 20,
      title: 'Test Anxiety: Techniques to Stay Calm',
      category: 'Strategies',
      excerpt: 'Proven relaxation and mindfulness techniques to overcome test-day nerves.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600',
      date: '2023-12-12'
    },
    {
      id: 21,
      title: 'Reading Comprehension: Speed vs Accuracy',
      category: 'Strategies',
      excerpt: 'Find the right balance between reading speed and understanding for any test.',
      image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=600',
      date: '2023-12-10'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-blue-900 dark:text-white mb-4">Blogs</h1>
        <p className="text-xl text-center text-blue-900 dark:text-slate-300 mb-12">
          Tips, strategies, and insights for test preparation
        </p>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 mx-auto block px-6 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-blue-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-400"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-900 dark:bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-slate-800 text-blue-900 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-300 text-sm font-semibold rounded mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">{post.title}</h3>
                <p className="text-blue-900 dark:text-slate-300 mb-4">{post.excerpt}</p>
                <p className="text-sm text-blue-900 dark:text-slate-400">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-blue-900 dark:text-slate-300">No articles found. Try a different search term or category.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
