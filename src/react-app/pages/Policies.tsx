import { useParams } from 'react-router-dom';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Policies() {
  const { policyType } = useParams<{ policyType: string }>();

  const policies: Record<string, { title: string; content: string }> = {
    terms: {
      title: 'Terms & Conditions',
      content: `
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">By accessing and using FluentEdgeLab services, you accept and agree to be bound by these Terms and Conditions.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">2. Services</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">FluentEdgeLab provides online test preparation coaching for IELTS, TOEFL, PTE, CELPIP, and GRE. Services include live online classes, study materials, and personalized feedback.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">3. Payment Terms</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">Course fees must be paid in full or according to the agreed payment plan. All fees are non-refundable except as stated in our Refund Policy.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">4. Student Responsibilities</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">Students are expected to attend classes regularly, complete assignments, and maintain respectful communication with the instructor.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">5. Intellectual Property</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">All course materials, including but not limited to videos, documents, and resources, are the intellectual property of FluentEdgeLab and may not be shared or distributed without permission.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">6. Limitation of Liability</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">While we strive to help students achieve their target scores, we cannot guarantee specific test results. Individual results may vary.</p>
      `
    },
    privacy: {
      title: 'Privacy Policy',
      content: `
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">1. Information We Collect</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">We collect information you provide directly, including name, email, phone number, and payment information when you register for our services.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">2. How We Use Your Information</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">We use your information to provide services, process payments, communicate with you, and improve our services.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">3. Information Sharing</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">4. Data Security</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">5. Your Rights</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">You have the right to access, update, or delete your personal information. Contact us to exercise these rights.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">6. Cookies</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">We use cookies to enhance your experience. You can choose to disable cookies through your browser settings.</p>
      `
    },
    refund: {
      title: 'Refund Policy',
      content: `
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">1. Refund Eligibility</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">Refunds may be requested within 7 days of course enrollment, provided no more than 2 classes have been attended.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">2. Refund Process</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">To request a refund, contact us via email with your enrollment details. Refunds will be processed within 14 business days.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">3. Partial Refunds</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">If more than 2 classes have been attended, a partial refund may be considered on a case-by-case basis.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">4. Non-Refundable Items</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">Study materials, mock tests, and one-on-one sessions are non-refundable once accessed.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">5. Payment Plan Cancellation</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">If you cancel a payment plan, you remain responsible for payments for classes already attended.</p>
        
        <h2 class="text-2xl font-bold text-blue-900 dark:text-white mt-8 mb-4">6. Special Circumstances</h2>
        <p class="text-gray-700 dark:text-slate-300 mb-4">Refunds may be considered in special circumstances such as medical emergencies or other unforeseen situations. Contact us to discuss.</p>
      `
    }
  };

  const policy = policies[policyType || 'terms'] || policies.terms;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-white mb-8">{policy.title}</h1>
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: policy.content }} />
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
          <p className="text-blue-900 dark:text-slate-300 mb-4">Last updated: January 2024</p>
          <p className="text-blue-900 dark:text-slate-300">
            If you have questions about these policies, please{' '}
            <a href="/contact" className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">contact us</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
