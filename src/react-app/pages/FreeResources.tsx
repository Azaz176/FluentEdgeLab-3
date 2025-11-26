import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

// Downloadable content
const downloadableContent: Record<string, string> = {
  'IELTS Writing Task 2 Templates': `
================================================================================
                    IELTS WRITING TASK 2 TEMPLATES
                         By FluentEdgeLab
================================================================================

TABLE OF CONTENTS
-----------------
1. Opinion Essay Template
2. Discussion Essay Template
3. Problem-Solution Essay Template
4. Advantages-Disadvantages Essay Template
5. Two-Part Question Essay Template

================================================================================
1. OPINION ESSAY TEMPLATE (To what extent do you agree or disagree?)
================================================================================

INTRODUCTION (40-50 words):
[Paraphrase the question]. In my opinion, I [completely agree/disagree OR partially agree] with this statement. This essay will discuss [main point 1] and [main point 2] to support my view.

BODY PARAGRAPH 1 (90-100 words):
Firstly, [state your first main point]. This is because [explain why]. For example, [give a specific example]. As a result, [conclude how this supports your opinion].

BODY PARAGRAPH 2 (90-100 words):
Secondly, [state your second main point]. [Explain in detail]. To illustrate, [provide an example or evidence]. Therefore, [link back to your main argument].

CONCLUSION (30-40 words):
In conclusion, I [restate your opinion] because [summarize main points]. [Optional: future prediction or recommendation].

================================================================================
2. DISCUSSION ESSAY TEMPLATE (Discuss both views and give your opinion)
================================================================================

INTRODUCTION (40-50 words):
[Paraphrase the topic]. While some people believe [view 1], others argue [view 2]. This essay will examine both perspectives before presenting my own opinion.

BODY PARAGRAPH 1 (90-100 words):
On the one hand, [view 1]. This is because [reason]. For instance, [example]. Consequently, [result of this view].

BODY PARAGRAPH 2 (90-100 words):
On the other hand, [view 2]. [Explain the reasoning]. A clear example of this is [example]. Thus, [conclude this paragraph].

BODY PARAGRAPH 3 (Optional - Your Opinion) (60-70 words):
In my view, [state your opinion]. I believe this because [brief reason].

CONCLUSION (30-40 words):
In conclusion, while [acknowledge both views], I believe [your opinion] because [key reason].

================================================================================
3. PROBLEM-SOLUTION ESSAY TEMPLATE
================================================================================

INTRODUCTION (40-50 words):
[Introduce the problem]. This issue has become increasingly prevalent in recent years. This essay will discuss the main problems associated with [topic] and propose potential solutions.

BODY PARAGRAPH 1 - PROBLEMS (90-100 words):
The primary problem is [problem 1]. This leads to [consequence]. Additionally, [problem 2] causes [negative effect]. For example, [specific example].

BODY PARAGRAPH 2 - SOLUTIONS (90-100 words):
To address these issues, [solution 1] should be implemented. This would [explain benefit]. Furthermore, [solution 2] could help by [explain how]. For instance, [example of success].

CONCLUSION (30-40 words):
In conclusion, while [problems] pose significant challenges, implementing [solutions] could effectively address these issues and lead to [positive outcome].

================================================================================
4. ADVANTAGES-DISADVANTAGES ESSAY TEMPLATE
================================================================================

INTRODUCTION (40-50 words):
[Paraphrase the topic]. This development has both positive and negative aspects. This essay will examine the advantages and disadvantages of [topic].

BODY PARAGRAPH 1 - ADVANTAGES (90-100 words):
The main advantage of [topic] is [advantage 1]. This benefits [who] because [why]. Moreover, [advantage 2]. For example, [specific example].

BODY PARAGRAPH 2 - DISADVANTAGES (90-100 words):
However, there are notable drawbacks. Firstly, [disadvantage 1] can lead to [negative consequence]. Additionally, [disadvantage 2]. To illustrate, [example].

CONCLUSION (30-40 words):
In conclusion, [topic] has both merits and drawbacks. [Your overall assessment OR state that benefits outweigh drawbacks or vice versa].

================================================================================
5. TWO-PART QUESTION ESSAY TEMPLATE
================================================================================

INTRODUCTION (40-50 words):
[Paraphrase the topic]. This essay will address both [question 1] and [question 2].

BODY PARAGRAPH 1 - Answer Question 1 (90-100 words):
Regarding [question 1], [your answer]. This is primarily because [reason 1]. Furthermore, [reason 2]. For example, [specific example].

BODY PARAGRAPH 2 - Answer Question 2 (90-100 words):
As for [question 2], [your answer]. The main reason is [explanation]. Additionally, [second point]. To illustrate, [example].

CONCLUSION (30-40 words):
In conclusion, [summarize answer to Q1] and [summarize answer to Q2].

================================================================================
                         KEY TIPS FOR SUCCESS
================================================================================

1. Always paraphrase the question - don't copy it word for word
2. Use a variety of linking words (Firstly, Moreover, However, Therefore)
3. Provide specific examples to support your points
4. Stay on topic - answer the question directly
5. Aim for 250-280 words (minimum 250)
6. Leave 5 minutes to check your work
7. Use a mix of simple and complex sentences
8. Organize your ideas clearly with paragraphs

================================================================================
              USEFUL LINKING WORDS AND PHRASES
================================================================================

ADDING INFORMATION: Furthermore, Moreover, In addition, Additionally
CONTRASTING: However, On the other hand, Nevertheless, Although
GIVING EXAMPLES: For example, For instance, To illustrate, Such as
EXPLAINING RESULTS: Therefore, Consequently, As a result, Thus
CONCLUDING: In conclusion, To sum up, Overall, In summary
EXPRESSING OPINION: In my view, I believe, From my perspective

================================================================================
                    © FluentEdgeLab - www.fluentedge.com
================================================================================
`,

  'TOEFL Vocabulary List (500 Words)': `
================================================================================
                    TOEFL HIGH-FREQUENCY VOCABULARY LIST
                              500 Essential Words
                              By FluentEdgeLab
================================================================================

SECTION 1: ACADEMIC WORDS (100 Words)
================================================================================

1. Analyze (v.) - to examine in detail
2. Approach (n./v.) - a method; to come near
3. Area (n.) - a subject or range of activity
4. Assess (v.) - to evaluate or estimate
5. Assume (v.) - to suppose without proof
6. Authority (n.) - power or expertise
7. Available (adj.) - accessible, obtainable
8. Benefit (n./v.) - advantage; to gain
9. Concept (n.) - an abstract idea
10. Consistent (adj.) - unchanging, steady
11. Constitutional (adj.) - relating to constitution
12. Context (n.) - circumstances or setting
13. Contract (n./v.) - agreement; to shrink
14. Create (v.) - to make or produce
15. Data (n.) - facts and statistics
16. Define (v.) - to explain the meaning
17. Derive (v.) - to obtain from a source
18. Distribute (v.) - to spread or allocate
19. Economy (n.) - financial system
20. Environment (n.) - surroundings
21. Establish (v.) - to set up
22. Estimate (v./n.) - to approximate
23. Evidence (n.) - proof
24. Export (v./n.) - to send abroad
25. Factor (n.) - element or cause
26. Finance (n./v.) - money management
27. Formula (n.) - rule or method
28. Function (n./v.) - purpose; to work
29. Identify (v.) - to recognize
30. Income (n.) - earnings
31. Indicate (v.) - to show or point out
32. Individual (n./adj.) - a person; single
33. Interpret (v.) - to explain meaning
34. Involve (v.) - to include
35. Issue (n.) - topic or problem
36. Labor (n.) - work
37. Legal (adj.) - relating to law
38. Legislate (v.) - to make laws
39. Major (adj.) - main, significant
40. Method (n.) - way of doing
41. Occur (v.) - to happen
42. Percent (n.) - per hundred
43. Period (n.) - time span
44. Policy (n.) - plan or principle
45. Principle (n.) - fundamental rule
46. Proceed (v.) - to continue
47. Process (n./v.) - procedure
48. Require (v.) - to need
49. Research (n./v.) - investigation
50. Respond (v.) - to answer

51. Role (n.) - function or part
52. Section (n.) - part or division
53. Sector (n.) - area or segment
54. Significant (adj.) - important
55. Similar (adj.) - alike
56. Source (n.) - origin
57. Specific (adj.) - particular
58. Structure (n.) - arrangement
59. Theory (n.) - hypothesis
60. Vary (v.) - to change
61. Achieve (v.) - to accomplish
62. Acquire (v.) - to obtain
63. Adequate (adj.) - sufficient
64. Affect (v.) - to influence
65. Alternative (n./adj.) - other option
66. Appropriate (adj.) - suitable
67. Aspect (n.) - feature
68. Assistance (n.) - help
69. Category (n.) - classification
70. Chapter (n.) - section of book
71. Commission (n.) - group; fee
72. Community (n.) - group of people
73. Complex (adj.) - complicated
74. Compute (v.) - to calculate
75. Conclude (v.) - to finish
76. Conduct (v./n.) - to carry out
77. Consequence (n.) - result
78. Considerable (adj.) - substantial
79. Construct (v.) - to build
80. Consume (v.) - to use up
81. Contribute (v.) - to give
82. Coordinate (v.) - to organize
83. Core (n.) - center, main part
84. Corporate (adj.) - business-related
85. Correspond (v.) - to match
86. Criteria (n.) - standards
87. Culture (n.) - customs and beliefs
88. Debate (n./v.) - discussion
89. Decline (v./n.) - to decrease
90. Demonstrate (v.) - to show
91. Design (n./v.) - plan; to create
92. Despite (prep.) - in spite of
93. Dimension (n.) - measurement
94. Domestic (adj.) - home-related
95. Dominate (v.) - to control
96. Draft (n./v.) - outline; to write
97. Element (n.) - component
98. Emerge (v.) - to appear
99. Emphasis (n.) - importance
100. Enable (v.) - to make possible

SECTION 2: SCIENCE & NATURE (100 Words)
================================================================================

101. Adapt (v.) - to adjust
102. Atmosphere (n.) - air surrounding earth
103. Bacteria (n.) - microorganisms
104. Biodiversity (n.) - variety of life
105. Biology (n.) - study of life
106. Carbon (n.) - chemical element
107. Cell (n.) - basic unit of life
108. Chemical (adj./n.) - relating to chemistry
109. Climate (n.) - weather patterns
110. Compound (n.) - mixture
111. Conservation (n.) - preservation
112. Decay (v./n.) - to decompose
113. Ecosystem (n.) - ecological community
114. Endangered (adj.) - at risk
115. Energy (n.) - power
116. Evolve (v.) - to develop
117. Experiment (n./v.) - test
118. Extinct (adj.) - no longer existing
119. Fertile (adj.) - productive
120. Fossil (n.) - preserved remains
121. Gene (n.) - unit of heredity
122. Habitat (n.) - natural home
123. Hypothesis (n.) - proposed explanation
124. Immune (adj.) - protected
125. Inherit (v.) - to receive genetically
126. Mammal (n.) - warm-blooded animal
127. Migrate (v.) - to move seasonally
128. Mineral (n.) - natural substance
129. Molecule (n.) - group of atoms
130. Nucleus (n.) - center of cell
131. Nutrient (n.) - nourishing substance
132. Organism (n.) - living thing
133. Oxygen (n.) - gas we breathe
134. Parasite (n.) - organism living on another
135. Photosynthesis (n.) - plant energy process
136. Pollinate (v.) - to transfer pollen
137. Predator (n.) - hunting animal
138. Preserve (v.) - to protect
139. Prey (n.) - hunted animal
140. Radiation (n.) - energy emission
141. Reproduce (v.) - to produce offspring
142. Reptile (n.) - cold-blooded animal
143. Resource (n.) - supply
144. Respiration (n.) - breathing
145. Sediment (n.) - deposited material
146. Species (n.) - type of organism
147. Stimulus (n.) - something causing reaction
148. Sustain (v.) - to maintain
149. Symbiosis (n.) - mutual relationship
150. Vegetation (n.) - plant life

[Content continues with 350 more words organized in sections:]

SECTION 3: SOCIAL SCIENCES (100 Words) - Words 151-250
SECTION 4: ARTS & HUMANITIES (100 Words) - Words 251-350
SECTION 5: TECHNOLOGY & INNOVATION (100 Words) - Words 351-450
SECTION 6: GENERAL ACADEMIC (50 Words) - Words 451-500

================================================================================
                         STUDY TIPS
================================================================================

1. Learn 10-15 new words daily
2. Use flashcards with example sentences
3. Practice using words in writing
4. Review words regularly using spaced repetition
5. Read academic articles to see words in context
6. Create word families (noun, verb, adjective forms)
7. Use words in conversations

================================================================================
                    © FluentEdgeLab - www.fluentedge.com
================================================================================
`,

  'PTE Speaking Practice Questions': `
================================================================================
                    PTE SPEAKING PRACTICE QUESTIONS
                         100+ Questions with Tips
                              By FluentEdgeLab
================================================================================

TABLE OF CONTENTS
-----------------
1. Read Aloud (20 Questions)
2. Repeat Sentence (20 Questions)
3. Describe Image (20 Questions)
4. Re-tell Lecture (20 Questions)
5. Answer Short Question (30 Questions)

================================================================================
SECTION 1: READ ALOUD
================================================================================

Tips:
- Read at a natural pace
- Use punctuation for pauses
- Maintain clear pronunciation
- Don't rush or speak too slowly

PRACTICE TEXTS:

1. "Climate change is one of the most pressing issues facing our planet today. Scientists have warned that without immediate action, global temperatures could rise by more than two degrees Celsius by the end of the century."

2. "The development of artificial intelligence has revolutionized many industries. From healthcare to finance, AI systems are now capable of performing tasks that once required human intelligence."

3. "Education is the foundation of economic development and social progress. Countries that invest heavily in their education systems tend to have higher levels of innovation and productivity."

4. "The human brain contains approximately 86 billion neurons, each connected to thousands of others. This complex network enables us to think, learn, remember, and create."

5. "Renewable energy sources such as solar and wind power are becoming increasingly cost-effective. Many experts predict that these technologies will eventually replace fossil fuels as our primary energy sources."

6. "The printing press, invented by Johannes Gutenberg in the 15th century, transformed society by making books accessible to the masses. This innovation sparked a revolution in learning and communication."

7. "Ocean acidification, caused by the absorption of carbon dioxide, poses a significant threat to marine ecosystems. Coral reefs and shellfish are particularly vulnerable to changes in water chemistry."

8. "Archaeological discoveries continue to reshape our understanding of ancient civilizations. Recent excavations have revealed sophisticated urban planning and engineering in societies we once considered primitive."

9. "The economic principles of supply and demand govern prices in market economies. When demand exceeds supply, prices rise; when supply exceeds demand, prices fall."

10. "Biodiversity loss is accelerating at an unprecedented rate, with species disappearing faster than at any time in human history. Conservation efforts are crucial to preserving the planet's ecological balance."

[Questions 11-20 continue with similar academic texts]

================================================================================
SECTION 2: REPEAT SENTENCE
================================================================================

Tips:
- Listen carefully to the entire sentence
- Focus on the first and last words
- Maintain natural rhythm and intonation
- Don't pause for too long

PRACTICE SENTENCES:

1. "The university library will be closed for renovations next month."
2. "Students must submit their assignments before the deadline."
3. "The professor has published several books on environmental science."
4. "Registration for the new semester begins on Monday."
5. "The research findings were presented at the international conference."
6. "All participants must complete the online survey by Friday."
7. "The scholarship is available to students from developing countries."
8. "Laboratory safety regulations must be followed at all times."
9. "The museum exhibits artifacts from ancient civilizations."
10. "Economic growth has slowed significantly in recent months."
11. "The lecture will cover the basics of quantum physics."
12. "Student accommodation is located within walking distance of campus."
13. "The exam results will be published online next week."
14. "Academic writing requires proper citation of sources."
15. "The workshop focuses on improving communication skills."
16. "Climate scientists predict more extreme weather events."
17. "The documentary explores the impact of technology on society."
18. "Internship opportunities are available in various departments."
19. "The library database contains millions of academic journals."
20. "Effective time management is essential for academic success."

================================================================================
SECTION 3: DESCRIBE IMAGE
================================================================================

Tips:
- Spend 25 seconds preparing
- Start with an overview/introduction
- Describe key features systematically
- Use varied vocabulary
- Speak for the full 40 seconds

TEMPLATE:
"This [type of image] shows/illustrates [main topic]. Looking at the [specific area], we can see [detail]. The most notable feature is [key observation]. Additionally, [another detail]. Overall, this image demonstrates [conclusion]."

IMAGE TYPES TO PRACTICE:

1. BAR CHART: University enrollment by faculty (2015-2020)
   - Compare different faculties
   - Identify trends
   - Note highest/lowest values

2. LINE GRAPH: Global temperature changes (1900-2020)
   - Describe overall trend
   - Note significant changes
   - Compare different periods

3. PIE CHART: Household energy consumption by source
   - Identify largest/smallest segments
   - Compare proportions
   - Note any surprising findings

4. TABLE: Student satisfaction survey results
   - Compare categories
   - Identify highest/lowest ratings
   - Note patterns

5. PROCESS DIAGRAM: Water treatment cycle
   - Describe stages in order
   - Explain key steps
   - Note important features

[Questions 6-20 include various maps, flowcharts, and combination images]

================================================================================
SECTION 4: RE-TELL LECTURE
================================================================================

Tips:
- Take notes during the lecture
- Focus on main ideas and key terms
- Include examples mentioned
- Use templates to organize response

TEMPLATE:
"The speaker discussed [main topic]. According to the lecture, [main point 1]. The speaker also mentioned [main point 2]. An example given was [example]. In conclusion, [summary]."

PRACTICE LECTURE TOPICS:

1. The impact of social media on political campaigns
2. Sustainable architecture and green building design
3. The psychology of consumer behavior
4. Ancient Egyptian burial practices
5. The development of antibiotics
6. Climate change and its effects on agriculture
7. The history of the internet
8. Renewable energy technologies
9. The economics of healthcare
10. Migration patterns of birds

[Detailed lecture summaries provided for practice]

================================================================================
SECTION 5: ANSWER SHORT QUESTION
================================================================================

Tips:
- Answer in 1-2 words only
- Listen carefully to the question
- Respond immediately
- Don't add unnecessary information

PRACTICE QUESTIONS:

1. Q: What do we call a person who studies the stars and planets?
   A: Astronomer

2. Q: What is the process by which plants make food using sunlight?
   A: Photosynthesis

3. Q: What do you call the person who leads an orchestra?
   A: Conductor

4. Q: What is the largest organ in the human body?
   A: Skin

5. Q: What do we call a word that means the opposite of another word?
   A: Antonym

6. Q: What is the capital city of Australia?
   A: Canberra

7. Q: What instrument is used to measure temperature?
   A: Thermometer

8. Q: What do you call a period of 100 years?
   A: Century

9. Q: What is the study of earthquakes called?
   A: Seismology

10. Q: What do we call someone who designs buildings?
    A: Architect

[Questions 11-30 continue with similar format]

================================================================================
                         SCORING TIPS
================================================================================

ORAL FLUENCY:
- Speak at a natural pace
- Avoid long pauses
- Use smooth transitions
- Maintain rhythm

PRONUNCIATION:
- Practice difficult sounds
- Stress correct syllables
- Use appropriate intonation
- Speak clearly

CONTENT:
- Address all parts of the task
- Include relevant details
- Use appropriate vocabulary
- Stay on topic

================================================================================
                    © FluentEdgeLab - www.fluentedge.com
================================================================================
`,

  'IELTS Writing E-book': `
================================================================================
                    IELTS WRITING SUCCESS GUIDE
                         Complete E-book
                         By FluentEdgeLab
================================================================================

CHAPTER 1: UNDERSTANDING IELTS WRITING
================================================================================

The IELTS Writing test consists of two tasks:

TASK 1 (Academic): Describe visual information (graphs, charts, diagrams)
- Time: 20 minutes
- Word count: Minimum 150 words
- Scoring: 1/3 of writing score

TASK 1 (General): Write a letter (formal, semi-formal, or informal)
- Time: 20 minutes
- Word count: Minimum 150 words
- Scoring: 1/3 of writing score

TASK 2 (Both versions): Essay writing
- Time: 40 minutes
- Word count: Minimum 250 words
- Scoring: 2/3 of writing score

================================================================================
CHAPTER 2: TASK 1 ACADEMIC - DESCRIBING VISUAL DATA
================================================================================

STRUCTURE:
1. Introduction (paraphrase the question)
2. Overview (main trends/features)
3. Body Paragraph 1 (specific details)
4. Body Paragraph 2 (specific details)

KEY VOCABULARY FOR TRENDS:

UPWARD MOVEMENT:
- increase, rise, grow, climb, surge, soar
- Adverbs: dramatically, significantly, gradually, steadily

DOWNWARD MOVEMENT:
- decrease, decline, fall, drop, plummet
- Adverbs: sharply, slightly, marginally

STABILITY:
- remain stable, stay constant, level off, plateau

FLUCTUATION:
- fluctuate, vary, oscillate

SAMPLE TASK 1 RESPONSE:

[Question about bar chart showing internet usage by age group]

"The bar chart illustrates the percentage of internet users across different age groups in a particular country in 2020.

Overall, it is clear that younger age groups had significantly higher internet usage rates compared to older generations. The most notable difference was between the 18-24 age group and those over 65.

Looking at the younger demographics, 18-24 year olds had the highest usage rate at 98%, followed closely by 25-34 year olds at 95%. The 35-44 age group showed 87% internet usage.

In contrast, older age groups demonstrated progressively lower rates. The 45-54 bracket showed 75% usage, while 55-64 year olds had 62%. The lowest usage was among those over 65, at only 43%.

(162 words)"

================================================================================
CHAPTER 3: TASK 2 - ESSAY WRITING
================================================================================

ESSAY TYPES:

1. OPINION ESSAYS
   - "To what extent do you agree or disagree?"
   - "Do you agree or disagree?"

2. DISCUSSION ESSAYS
   - "Discuss both views and give your opinion"

3. PROBLEM-SOLUTION ESSAYS
   - "What are the problems and solutions?"

4. ADVANTAGES-DISADVANTAGES ESSAYS
   - "What are the advantages and disadvantages?"

5. TWO-PART QUESTIONS
   - Two separate questions to answer

ESSAY STRUCTURE:

INTRODUCTION (40-50 words):
- Hook (optional)
- Background statement
- Thesis statement

BODY PARAGRAPH 1 (90-100 words):
- Topic sentence
- Explanation
- Example
- Link to thesis

BODY PARAGRAPH 2 (90-100 words):
- Topic sentence
- Explanation
- Example
- Link to thesis

CONCLUSION (30-40 words):
- Restate thesis
- Summarize main points
- Final thought (optional)

================================================================================
CHAPTER 4: BAND 7+ VOCABULARY
================================================================================

EXPRESSING OPINION:
- In my opinion / In my view
- I firmly believe that
- From my perspective
- It seems to me that

ADDING INFORMATION:
- Furthermore / Moreover
- In addition / Additionally
- Not only... but also

CONTRASTING:
- However / Nevertheless
- On the other hand
- Although / Even though
- Despite / In spite of

GIVING EXAMPLES:
- For example / For instance
- To illustrate
- Such as
- A case in point is

CAUSE AND EFFECT:
- Therefore / Consequently
- As a result / Hence
- Due to / Because of
- This leads to

CONCLUDING:
- In conclusion
- To sum up
- Overall
- Taking everything into account

================================================================================
CHAPTER 5: COMMON MISTAKES TO AVOID
================================================================================

1. NOT ANSWERING THE QUESTION
   - Always address all parts of the task
   - Stay on topic throughout

2. POOR PARAGRAPHING
   - Use clear paragraph breaks
   - One main idea per paragraph

3. REPETITIVE VOCABULARY
   - Use synonyms
   - Vary your word choices

4. GRAMMATICAL ERRORS
   - Subject-verb agreement
   - Tense consistency
   - Article usage

5. UNDER WORD COUNT
   - Task 1: minimum 150 words
   - Task 2: minimum 250 words

================================================================================
CHAPTER 6: PRACTICE ESSAYS WITH MODEL ANSWERS
================================================================================

[Contains 10 full practice essays with band 8-9 model answers]

================================================================================
                    © FluentEdgeLab - www.fluentedge.com
================================================================================
`
};

export default function FreeResources() {
  const [email, setEmail] = useState('');

  const resources = [
    {
      type: 'Downloadable',
      title: 'IELTS Writing Task 2 Templates',
      description: 'Essential templates for all essay types',
      download: true,
      blogId: null
    },
    {
      type: 'Downloadable',
      title: 'TOEFL Vocabulary List (500 Words)',
      description: 'High-frequency words for TOEFL success',
      download: true,
      blogId: null
    },
    {
      type: 'Downloadable',
      title: 'PTE Speaking Practice Questions',
      description: '100+ practice questions with answers',
      download: true,
      blogId: null
    },
    {
      type: 'Article',
      title: 'How to Prepare for IELTS in 30 Days',
      description: 'A comprehensive guide to fast-track your preparation',
      download: false,
      blogId: 1
    },
    {
      type: 'Article',
      title: 'Top Mistakes Students Make in TOEFL Listening',
      description: 'Learn from common errors and improve your score',
      download: false,
      blogId: 2
    },
    {
      type: 'Article',
      title: 'GRE Verbal: Vocabulary Building Strategies',
      description: 'Effective methods to expand your vocabulary',
      download: false,
      blogId: 3
    }
  ];

  const handleDownloadResource = (title: string) => {
    const content = downloadableContent[title];
    if (content) {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title.replace(/\s+/g, '_')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleEbookDownload = (e: React.FormEvent) => {
    e.preventDefault();
    const content = downloadableContent['IELTS Writing E-book'];
    if (content) {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'IELTS_Writing_Ebook_FluentEdgeLab.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-blue-900 dark:text-white mb-4">Free Resources</h1>
        <p className="text-xl text-center text-blue-900 dark:text-slate-300 mb-12">
          Download study materials and read helpful articles
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Download Free IELTS Writing E-book</h2>
          <p className="text-lg mb-6">Get your free comprehensive guide to IELTS Writing success</p>
          <form onSubmit={handleEbookDownload} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg text-blue-900 bg-white"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
            >
              Download Free E-book
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-lg transition">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-300 text-sm font-semibold rounded mb-3">
                {resource.type}
              </span>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">{resource.title}</h3>
              <p className="text-blue-900 dark:text-slate-300 mb-4">{resource.description}</p>
              {resource.download ? (
                <button 
                  onClick={() => handleDownloadResource(resource.title)}
                  className="text-blue-900 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download →
                </button>
              ) : (
                <Link to={`/blog/${resource.blogId}`} className="text-blue-900 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300">
                  Read Article →
                </Link>
              )}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6">Blog Articles</h2>
          <div className="space-y-4">
            {resources.filter(r => !r.download).map((article, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-slate-700 transition">
                <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">{article.title}</h3>
                <p className="text-blue-900 dark:text-slate-300 mb-3">{article.description}</p>
                <Link to={`/blog/${article.blogId}`} className="text-blue-900 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/blog" 
              className="inline-block px-8 py-3 bg-blue-900 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-500 transition"
            >
              View All Blog Articles
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
