import { useParams, Link } from 'react-router-dom';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

const blogPosts: Record<string, {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
  content: string;
}> = {
  '1': {
    id: 1,
    title: 'How to Prepare for IELTS in 30 Days',
    category: 'IELTS',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200',
    date: '2024-01-15',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Introduction</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Preparing for IELTS in just 30 days might seem challenging, but with the right strategy and dedication, it's absolutely achievable. This guide will walk you through a comprehensive 30-day preparation plan that has helped thousands of students achieve their target scores.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Week 1: Assessment and Foundation</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Start by taking a full-length practice test to identify your strengths and weaknesses. This baseline assessment is crucial for creating a targeted study plan. Focus on understanding the test format and question types for all four modules: Listening, Reading, Writing, and Speaking.</p>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Day 1-2: Take a diagnostic test and analyze results</li>
        <li class="mb-2">Day 3-4: Study the test format and scoring criteria</li>
        <li class="mb-2">Day 5-7: Begin vocabulary building and basic grammar review</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Week 2: Skill Building</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Dedicate each day to a specific module. Practice reading comprehension with academic texts, work on listening skills with various accents, develop writing templates for Task 1 and Task 2, and practice speaking regularly with a partner or recording yourself.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Week 3: Intensive Practice</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Take daily practice tests and review your mistakes thoroughly. Focus on time management and develop strategies for each question type. Pay special attention to your weak areas identified in Week 1.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Week 4: Final Preparation</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Take full-length mock tests under exam conditions. Review all your notes, practice speaking with a partner, and ensure you're familiar with the test day procedures. Get adequate rest the night before.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Key Tips for Success</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Practice every day without fail - consistency is key</li>
        <li class="mb-2">Focus on your weakest areas but don't neglect others</li>
        <li class="mb-2">Use official IELTS practice materials</li>
        <li class="mb-2">Read English newspapers and listen to English podcasts daily</li>
        <li class="mb-2">Join study groups or find a speaking partner</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Conclusion</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">With consistent practice and the right approach, you can significantly improve your IELTS score in 30 days. Remember to stay focused, practice daily, and maintain a positive mindset. Your dedication will pay off on test day!</p>
    `
  },
  '2': {
    id: 2,
    title: 'Top Mistakes Students Make in TOEFL Listening',
    category: 'TOEFL',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200',
    date: '2024-01-10',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Introduction</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">The TOEFL Listening section can be challenging, and many students make common mistakes that cost them valuable points. Understanding these pitfalls can help you avoid them and improve your score significantly.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Mistake #1: Not Taking Notes Effectively</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Many students either take too many notes or none at all. The key is to note main ideas, key terms, and relationships between concepts. Don't try to write everything down - focus on keywords and abbreviations.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Mistake #2: Focusing on Every Word</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Trying to understand every single word leads to anxiety and missed information. Instead, focus on understanding the overall message and main points. Unknown words often become clear from context.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Mistake #3: Ignoring Tone and Attitude</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">TOEFL often asks about speakers' attitudes or feelings. Pay attention to tone of voice, emphasis, and expressions that indicate opinion or emotion.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Mistake #4: Not Previewing Questions</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Use the brief time before each section to read the questions. This helps you know what to listen for and makes note-taking more targeted.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Mistake #5: Dwelling on Missed Information</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">If you miss something, don't panic. Keep listening and move on. Dwelling on missed information causes you to miss even more.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">How to Improve</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Practice with authentic TOEFL listening materials daily</li>
        <li class="mb-2">Listen to academic lectures and podcasts</li>
        <li class="mb-2">Develop your own note-taking system</li>
        <li class="mb-2">Practice under timed conditions</li>
      </ul>
    `
  },
  '3': {
    id: 3,
    title: 'GRE Verbal: Vocabulary Building Strategies',
    category: 'GRE',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
    date: '2024-01-05',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Why Vocabulary Matters for GRE</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">A strong vocabulary is essential for GRE success. The Verbal Reasoning section tests your ability to understand complex texts and use words precisely. Building vocabulary takes time, but with the right strategies, you can accelerate your learning.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Strategy 1: Learn Words in Context</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Don't just memorize definitions. Read words in sentences and passages to understand how they're used. This helps with retention and application during the test.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Strategy 2: Use Spaced Repetition</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Apps like Anki or Quizlet use spaced repetition algorithms to help you review words at optimal intervals. This method significantly improves long-term retention.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Strategy 3: Group Words by Theme</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Learn related words together: synonyms, antonyms, and words with similar roots. This creates mental connections that aid recall.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Strategy 4: Learn Word Roots</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Understanding Latin and Greek roots helps you decode unfamiliar words. For example, knowing "bene" means "good" helps you understand benevolent, beneficial, and benediction.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Essential Word Lists</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Start with high-frequency GRE words (about 500-1000 words)</li>
        <li class="mb-2">Focus on words you encounter in practice tests</li>
        <li class="mb-2">Learn 10-20 new words daily</li>
        <li class="mb-2">Review previously learned words regularly</li>
      </ul>
    `
  },
  '4': {
    id: 4,
    title: 'PTE Speaking: Tips for High Scores',
    category: 'PTE',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200',
    date: '2024-01-01',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Understanding PTE Speaking</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">The PTE Speaking section is computer-scored, which means clarity, fluency, and pronunciation are evaluated by algorithms. Understanding how the scoring works can help you maximize your score.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Read Aloud Tips</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Speak clearly at a natural pace. Don't rush or speak too slowly. Pay attention to punctuation for natural pauses. Practice chunking sentences into meaningful phrases.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Repeat Sentence Strategies</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Focus on the first and last words of the sentence. Don't worry about getting every word perfect - maintain fluency even if you miss a word. Say something rather than staying silent.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Describe Image Techniques</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Use a template: Introduction, key features, trends/comparisons, conclusion. Speak for the full 40 seconds. Use varied vocabulary and connectors.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Re-tell Lecture Tips</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Take notes during the lecture focusing on main points. Use templates to organize your response. Include key terms from the lecture.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">General Speaking Tips</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Speak clearly and at a moderate pace</li>
        <li class="mb-2">Maintain consistent volume throughout</li>
        <li class="mb-2">Practice with a microphone to get comfortable</li>
        <li class="mb-2">Record yourself and identify areas for improvement</li>
      </ul>
    `
  },
  '5': {
    id: 5,
    title: 'Time Management Tips for Test Day',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200',
    date: '2023-12-28',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Why Time Management Matters</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Effective time management can make the difference between a good score and a great one. Many test-takers know the material but run out of time or rush through questions. Here's how to manage your time effectively.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Before the Test</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Know the test format and time limits for each section</li>
        <li class="mb-2">Practice with timed conditions regularly</li>
        <li class="mb-2">Develop a pacing strategy for each section</li>
        <li class="mb-2">Get adequate sleep the night before</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">During the Test</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Start with questions you find easier to build confidence. Don't spend too much time on any single question - mark it and move on. Keep track of time but don't obsess over it.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Section-Specific Strategies</h2>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Reading:</strong> Skim passages first, then answer questions. Don't re-read entire passages for each question.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Writing:</strong> Spend 5 minutes planning before writing. Leave 5 minutes for review at the end.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Listening:</strong> Stay focused throughout - you can't pause or replay audio.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">The 2-Minute Rule</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">If you've spent more than 2 minutes on a question without progress, make your best guess and move on. You can return to it if time permits.</p>
    `
  },
  '6': {
    id: 6,
    title: 'Writing High-Scoring Essays: A Step-by-Step Guide',
    category: 'Strategies',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200',
    date: '2023-12-25',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">The Foundation of Great Essays</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Whether you're taking IELTS, TOEFL, or GRE, the principles of good essay writing remain consistent. A well-structured essay with clear arguments will always score higher than a disorganized one.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Step 1: Analyze the Prompt</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Spend 2-3 minutes understanding exactly what the question asks. Identify keywords and the type of essay required (argumentative, discussion, problem-solution).</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Step 2: Plan Your Response</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Create a brief outline with your main points and examples. Planning prevents writer's block and ensures logical flow.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Step 3: Write a Strong Introduction</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Hook the reader, provide context, and state your thesis clearly. Your introduction sets the tone for the entire essay.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Step 4: Develop Body Paragraphs</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Each paragraph should have: Topic sentence, explanation, example, and link back to thesis. Use transition words to connect ideas.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Step 5: Conclude Effectively</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Summarize main points and restate your thesis in different words. End with a final thought or call to action.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Common Mistakes to Avoid</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Going off-topic</li>
        <li class="mb-2">Using informal language</li>
        <li class="mb-2">Repeating the same vocabulary</li>
        <li class="mb-2">Not providing specific examples</li>
      </ul>
    `
  },
  '7': {
    id: 7,
    title: 'IELTS Writing Task 2: Mastering Opinion Essays',
    category: 'IELTS',
    image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=1200',
    date: '2024-01-20',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Understanding Opinion Essays</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Opinion essays ask you to present and support your viewpoint on a given topic. These are common in IELTS Writing Task 2 and require a clear stance backed by relevant examples.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Essay Structure</h2>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Introduction (40-50 words):</strong> Paraphrase the question and state your opinion clearly.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Body Paragraph 1 (90-100 words):</strong> First reason supporting your opinion with example.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Body Paragraph 2 (90-100 words):</strong> Second reason supporting your opinion with example.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Conclusion (30-40 words):</strong> Summarize your opinion and main points.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Useful Phrases for Opinion Essays</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">"In my opinion..." / "I firmly believe that..."</li>
        <li class="mb-2">"From my perspective..." / "As I see it..."</li>
        <li class="mb-2">"This is because..." / "The reason for this is..."</li>
        <li class="mb-2">"For instance..." / "To illustrate..."</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Sample Topics to Practice</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Practice with topics like: technology's impact on society, education methods, environmental issues, work-life balance, and government policies.</p>
    `
  },
  '8': {
    id: 8,
    title: 'IELTS Speaking Part 2: How to Ace the Cue Card',
    category: 'IELTS',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200',
    date: '2024-01-18',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">What is Speaking Part 2?</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">In IELTS Speaking Part 2, you receive a cue card with a topic and must speak for 1-2 minutes. You get 1 minute to prepare. This tests your ability to speak at length on a given topic.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">The Preparation Minute</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Use your 1-minute wisely: jot down key points for each bullet on the card, think of specific examples or stories, and plan your structure.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Structuring Your Response</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Start with a brief introduction to the topic</li>
        <li class="mb-2">Address each bullet point on the card</li>
        <li class="mb-2">Use specific details and examples</li>
        <li class="mb-2">End with a concluding statement</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Tips for Fluency</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Don't memorize scripts - examiners can tell. Instead, practice speaking on various topics regularly. Use fillers naturally: "well," "you know," "actually." If you lose your train of thought, paraphrase and continue.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Common Topics</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Practice describing: a person you admire, a memorable event, a place you've visited, a book/movie you enjoyed, a skill you want to learn.</p>
    `
  },
  '9': {
    id: 9,
    title: 'TOEFL Reading: Strategies for Academic Passages',
    category: 'TOEFL',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200',
    date: '2024-01-12',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Understanding TOEFL Reading</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">TOEFL Reading passages are academic in nature, covering topics from various fields like science, history, and social sciences. Each passage is 600-700 words with 10 questions.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Active Reading Strategy</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Don't read passively. Engage with the text: identify the main idea of each paragraph, note how ideas connect, and pay attention to transition words that signal relationships.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Question Types</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2"><strong>Vocabulary:</strong> Use context clues to determine meaning</li>
        <li class="mb-2"><strong>Detail:</strong> Scan for specific information</li>
        <li class="mb-2"><strong>Inference:</strong> Draw conclusions from stated information</li>
        <li class="mb-2"><strong>Summary:</strong> Identify main ideas vs. minor details</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Time Management</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">You have about 20 minutes per passage. Spend 3-4 minutes reading, then 1-2 minutes per question. Don't spend too long on difficult questions - mark and return if time permits.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Practice Tips</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Read academic articles from sources like Scientific American, The Economist, and university websites. This builds familiarity with academic vocabulary and writing styles.</p>
    `
  },
  '10': {
    id: 10,
    title: 'TOEFL Speaking: Independent Task Templates',
    category: 'TOEFL',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200',
    date: '2024-01-08',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Independent Speaking Tasks</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">TOEFL Independent Speaking tasks ask for your opinion on familiar topics. You have 15 seconds to prepare and 45 seconds to speak. Having a template helps organize your thoughts quickly.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Basic Template Structure</h2>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Introduction (5-7 seconds):</strong> State your opinion clearly.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Reason 1 (15-17 seconds):</strong> First reason with example.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Reason 2 (15-17 seconds):</strong> Second reason with example.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Conclusion (5-7 seconds):</strong> Restate your opinion briefly.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Useful Phrases</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">"I prefer... because..." / "In my view..."</li>
        <li class="mb-2">"First of all..." / "To begin with..."</li>
        <li class="mb-2">"Another reason is..." / "Additionally..."</li>
        <li class="mb-2">"For these reasons..." / "To sum up..."</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Practice Topics</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Practice with topics like: Do you prefer studying alone or in groups? Should children have cell phones? Is it better to live in a city or countryside?</p>
    `
  },
  '11': {
    id: 11,
    title: 'GRE Quantitative: Tackling Data Interpretation',
    category: 'GRE',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    date: '2024-01-03',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Data Interpretation on the GRE</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Data Interpretation questions present information through graphs, tables, and charts. You must analyze this data to answer questions. These questions test both math skills and data analysis abilities.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Types of Data Displays</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2"><strong>Bar graphs:</strong> Compare quantities across categories</li>
        <li class="mb-2"><strong>Line graphs:</strong> Show trends over time</li>
        <li class="mb-2"><strong>Pie charts:</strong> Show parts of a whole</li>
        <li class="mb-2"><strong>Tables:</strong> Present precise numerical data</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Strategy: Read Carefully First</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Before answering questions, study the data display carefully. Note the title, axis labels, units, and scale. Understanding what the data represents is crucial.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Common Question Types</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Expect questions about: specific values, comparisons between data points, percentages and ratios, trends and patterns, and calculations using multiple data points.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Time-Saving Tips</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Estimate when possible - exact calculations aren't always necessary. Use the answer choices to guide your approach. Eliminate obviously wrong answers first.</p>
    `
  },
  '12': {
    id: 12,
    title: 'GRE AWA: Scoring 5+ on Analytical Writing',
    category: 'GRE',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200',
    date: '2023-12-30',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Understanding AWA</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">The GRE Analytical Writing Assessment has two tasks: Analyze an Issue (30 min) and Analyze an Argument (30 min). Each is scored 0-6. A score of 5+ demonstrates strong critical thinking and writing skills.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Issue Essay Strategy</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Take a clear position and defend it with specific examples. Acknowledge counterarguments but explain why your position is stronger. Aim for 4-5 paragraphs.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Argument Essay Strategy</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Identify logical flaws in the given argument: unsupported assumptions, weak evidence, logical fallacies. Don't give your opinion on the topic - analyze the reasoning.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">What Scores a 5+</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Clear, well-organized structure</li>
        <li class="mb-2">Strong, specific examples</li>
        <li class="mb-2">Sophisticated vocabulary and sentence variety</li>
        <li class="mb-2">Logical flow of ideas</li>
        <li class="mb-2">Few grammatical errors</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Practice Approach</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Practice with official ETS prompts. Time yourself strictly. Review sample essays at different score levels to understand the criteria.</p>
    `
  },
  '13': {
    id: 13,
    title: 'PTE Read Aloud: Perfect Your Pronunciation',
    category: 'PTE',
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=1200',
    date: '2023-12-27',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Why Read Aloud Matters</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Read Aloud is the first speaking task in PTE and contributes to both reading and speaking scores. It's your chance to make a strong first impression with clear, fluent speech.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Pronunciation Tips</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Focus on word stress - English words have stressed syllables</li>
        <li class="mb-2">Pay attention to vowel sounds - they differ between accents</li>
        <li class="mb-2">Practice difficult consonant clusters</li>
        <li class="mb-2">Don't add extra sounds between words</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Fluency Strategies</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Read in meaningful chunks, not word by word. Use punctuation to guide pauses. Maintain a steady pace - not too fast, not too slow. If you stumble, continue smoothly without repeating.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Practice Method</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Record yourself reading various texts. Compare with native speakers. Use text-to-speech tools to hear correct pronunciation. Practice daily with news articles and academic texts.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Common Mistakes</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Avoid: speaking too fast, ignoring punctuation, mispronouncing common words, monotone delivery, and long pauses.</p>
    `
  },
  '14': {
    id: 14,
    title: 'PTE Writing: Summarize Written Text Made Easy',
    category: 'PTE',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200',
    date: '2023-12-22',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">The Task</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">In Summarize Written Text, you read a passage (200-300 words) and write a one-sentence summary (5-75 words) in 10 minutes. This task tests both reading comprehension and writing skills.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Step-by-Step Approach</h2>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Step 1 (2-3 min):</strong> Read the passage and identify the main idea and key supporting points.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Step 2 (1-2 min):</strong> Note the essential information to include.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Step 3 (4-5 min):</strong> Write your summary sentence using connectors.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Step 4 (1-2 min):</strong> Review and edit for grammar and word count.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Useful Connectors</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">"which means that..." / "resulting in..."</li>
        <li class="mb-2">"while also..." / "in addition to..."</li>
        <li class="mb-2">"due to..." / "because of..."</li>
        <li class="mb-2">"although..." / "despite..."</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Key Tips</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Stay within the word limit. Use your own words - avoid copying directly. Include only main ideas, not minor details. Check for grammatical correctness.</p>
    `
  },
  '15': {
    id: 15,
    title: 'CELPIP Listening: Handling Everyday Conversations',
    category: 'CELPIP',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200',
    date: '2024-01-14',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">CELPIP Listening Overview</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">CELPIP Listening tests your ability to understand everyday Canadian English in various contexts: conversations, news items, and discussions. The test is about 47-55 minutes long.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Understanding Canadian English</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Canadian English has unique features: certain vowel sounds, specific vocabulary (e.g., "loonie," "toque"), and expressions. Familiarize yourself with Canadian accents through Canadian media.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Part-Specific Strategies</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2"><strong>Part 1:</strong> Problem solving - identify the main issue and solution</li>
        <li class="mb-2"><strong>Part 2:</strong> Daily life - listen for specific details</li>
        <li class="mb-2"><strong>Part 3:</strong> Information - note-taking is crucial</li>
        <li class="mb-2"><strong>Part 4-6:</strong> Viewpoints - identify speakers' opinions</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Practice Resources</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Listen to CBC Radio, Canadian podcasts, and Canadian TV shows. Practice with official CELPIP materials. Focus on understanding context and implied meaning.</p>
    `
  },
  '16': {
    id: 16,
    title: 'CELPIP Writing: Email and Survey Response Guide',
    category: 'CELPIP',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200',
    date: '2024-01-06',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">CELPIP Writing Tasks</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">CELPIP Writing has two tasks: Task 1 is writing an email (27 minutes), and Task 2 is responding to survey questions (26 minutes). Both require clear, well-organized responses.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Email Writing (Task 1)</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">You'll write an email based on a given scenario. Adjust your tone based on the audience - formal for workplace, informal for friends. Address all points in the prompt.</p>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Start with appropriate greeting</li>
        <li class="mb-2">State your purpose clearly in the first paragraph</li>
        <li class="mb-2">Organize body paragraphs by topic</li>
        <li class="mb-2">End with appropriate closing</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Survey Response (Task 2)</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">You'll respond to a survey with two options. Choose one and explain your choice with clear reasons and examples. Structure: introduction, 2-3 body paragraphs, conclusion.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Scoring Tips</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Use varied vocabulary and sentence structures. Check for spelling and grammar. Stay on topic and address all required points. Aim for 150-200 words per task.</p>
    `
  },
  '17': {
    id: 17,
    title: 'CELPIP Speaking: Describing Scenes Like a Pro',
    category: 'CELPIP',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200',
    date: '2023-12-20',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Scene Description Task</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">In CELPIP Speaking Task 6, you describe a scene shown in pictures. You have 60 seconds to speak. This task tests your ability to describe visual information clearly and completely.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Organizing Your Response</h2>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Opening (10 sec):</strong> General description of the scene.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Details (40 sec):</strong> Describe specific elements systematically.</p>
      <p class="text-gray-700 mb-4 leading-relaxed"><strong>Closing (10 sec):</strong> Overall impression or conclusion.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Useful Vocabulary</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Location: "In the foreground/background," "On the left/right"</li>
        <li class="mb-2">People: "A man/woman appears to be," "They seem to be"</li>
        <li class="mb-2">Actions: "is standing," "are walking," "seems to be waiting"</li>
        <li class="mb-2">Atmosphere: "It looks like," "The scene suggests"</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Practice Tips</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Practice describing photos from magazines or online. Time yourself to ensure you use the full 60 seconds. Focus on being systematic - don't jump randomly between elements.</p>
    `
  },
  '18': {
    id: 18,
    title: 'How to Stay Motivated During Test Prep',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=1200',
    date: '2023-12-18',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">The Motivation Challenge</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Test preparation can be a long journey, and maintaining motivation is crucial for success. Many students start strong but lose momentum over time. Here's how to stay motivated throughout your preparation.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Set Clear Goals</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Define your target score and why you need it. Write down your goals and review them regularly. Break large goals into smaller, achievable milestones.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Create a Study Routine</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Consistency beats intensity. Study at the same time each day to build a habit. Even 30 minutes daily is better than irregular long sessions.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Track Your Progress</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Take regular practice tests to measure improvement</li>
        <li class="mb-2">Keep a study journal</li>
        <li class="mb-2">Celebrate small wins</li>
        <li class="mb-2">Review how far you've come, not just how far you have to go</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Handle Setbacks</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Bad days are normal. Don't let one poor practice test derail you. Learn from mistakes rather than dwelling on them. Take short breaks when needed, but always return.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Find Support</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Join study groups or online communities. Share your goals with friends and family. Consider working with a tutor or mentor for accountability.</p>
    `
  },
  '19': {
    id: 19,
    title: 'Creating an Effective Study Schedule',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200',
    date: '2023-12-15',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Why Schedule Matters</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">A well-designed study schedule helps you cover all material systematically, prevents last-minute cramming, and reduces stress. It turns vague intentions into concrete actions.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Step 1: Assess Your Time</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Calculate how many weeks until your test date. Determine how many hours per day/week you can realistically study. Be honest about your other commitments.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Step 2: Identify Priorities</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Take a diagnostic test to identify weak areas. Allocate more time to challenging sections while maintaining skills in stronger areas.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Step 3: Create the Schedule</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Block specific times for study each day</li>
        <li class="mb-2">Alternate between different skills/sections</li>
        <li class="mb-2">Include regular practice tests</li>
        <li class="mb-2">Schedule breaks and rest days</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Step 4: Stay Flexible</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Review and adjust your schedule weekly based on progress. If something isn't working, change it. The best schedule is one you can actually follow.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Sample Weekly Plan</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Monday: Reading practice | Tuesday: Listening practice | Wednesday: Writing practice | Thursday: Speaking practice | Friday: Mixed practice | Saturday: Full practice test | Sunday: Review and rest</p>
    `
  },
  '20': {
    id: 20,
    title: 'Test Anxiety: Techniques to Stay Calm',
    category: 'Strategies',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200',
    date: '2023-12-12',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Understanding Test Anxiety</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Test anxiety is common and can significantly impact performance. Physical symptoms include rapid heartbeat, sweating, and nausea. Mental symptoms include blanking out and negative thoughts. The good news: it's manageable.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Before the Test</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Prepare thoroughly - confidence comes from preparation</li>
        <li class="mb-2">Simulate test conditions during practice</li>
        <li class="mb-2">Get adequate sleep the night before</li>
        <li class="mb-2">Avoid caffeine if it increases your anxiety</li>
        <li class="mb-2">Arrive early to settle in</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Breathing Techniques</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Practice deep breathing: inhale for 4 counts, hold for 4 counts, exhale for 4 counts. This activates your parasympathetic nervous system and reduces stress hormones.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">During the Test</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">If anxiety strikes: pause, take deep breaths, and refocus. Start with easier questions to build confidence. Remember that some anxiety is normal and can even improve focus.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Positive Self-Talk</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Replace negative thoughts with positive ones. Instead of "I'll fail," think "I've prepared well and I can do this." Visualize success before and during the test.</p>
    `
  },
  '21': {
    id: 21,
    title: 'Reading Comprehension: Speed vs Accuracy',
    category: 'Strategies',
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=1200',
    date: '2023-12-10',
    content: `
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">The Balance Challenge</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Test-takers often struggle to balance reading speed with comprehension accuracy. Reading too fast leads to missed details; reading too slowly means running out of time. Finding the right balance is key.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Improving Reading Speed</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Reduce subvocalization (reading aloud in your head)</li>
        <li class="mb-2">Use your finger or a pointer to guide your eyes</li>
        <li class="mb-2">Expand your peripheral vision to read word groups</li>
        <li class="mb-2">Practice speed reading exercises daily</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Maintaining Accuracy</h2>
      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li class="mb-2">Preview headings and structure before reading</li>
        <li class="mb-2">Identify the main idea of each paragraph</li>
        <li class="mb-2">Note key terms and their definitions</li>
        <li class="mb-2">Pay attention to transition words</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Strategic Reading for Tests</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">You don't need to read every word with equal attention. Skim for main ideas first, then read more carefully when answering specific questions. Let the questions guide your reading.</p>
      
      <h2 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Practice Approach</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Start by focusing on accuracy, then gradually increase speed. Track both your reading time and comprehension scores. Aim for at least 70% accuracy before pushing for more speed.</p>
    `
  }
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  
  const post = id ? blogPosts[id] : null;

  // Get related posts from the same category
  const relatedPosts = post
    ? Object.values(blogPosts)
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2)
    : [];

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-white mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <Link to="/blog" className="text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 inline-block font-semibold">
          ← Back to Blog
        </Link>
        
        <article>
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-300 text-sm font-semibold rounded mb-4">
            {post.category}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-white mb-4">{post.title}</h1>
          <p className="text-gray-500 dark:text-slate-400 mb-8">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          
          <div
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-blue-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-slate-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Share This Article</h3>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Share on Facebook
            </button>
            <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
              Share on Twitter
            </button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition">
              Share on LinkedIn
            </button>
          </div>
        </div>

        {relatedPosts.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Related Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                to={`/blog/${related.id}`}
                className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
              >
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">{related.category}</span>
                <h4 className="text-xl font-bold text-blue-900 dark:text-white mt-2">{related.title}</h4>
              </Link>
            ))}
          </div>
        </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
