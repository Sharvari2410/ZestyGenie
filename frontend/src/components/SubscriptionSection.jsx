import { useState } from 'react';

function SubscriptionSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="section-alt">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-white/95 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-text-dark mb-4">
                Daily Recipe Magic
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Get enchanted with new recipes, cooking secrets, and magical kitchen tips delivered straight to your inbox by ZestyGenie.
              </p>

              {subscribed ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center justify-center space-x-2 text-green-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">Successfully subscribed!</span>
                  </div>
                  <p className="text-green-600 mt-2">Check your email for confirmation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="input-field flex-1"
                    required
                  />
                  <button type="submit" className="btn-secondary whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              )}

              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscriptionSection;