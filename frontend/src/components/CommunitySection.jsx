function CommunitySection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Home Chef",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      content: "ZestyGenie transformed my cooking! I never knew I could make restaurant-quality dishes with what I already had in my kitchen.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Food Blogger",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      content: "The AI suggestions are incredible. It's like having a professional chef in my pocket. My followers love the creative recipes!",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Busy Mom",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      content: "As a busy mom, ZestyGenie saves me so much time. Quick, delicious meals that my whole family enjoys!",
      rating: 5
    }
  ];

  const communityStats = [
    { label: "Happy Users", value: "50K+", icon: "👥" },
    { label: "Recipes Generated", value: "1M+", icon: "📖" },
    { label: "Countries", value: "120+", icon: "🌍" },
    { label: "5-Star Reviews", value: "98%", icon: "⭐" }
  ];

  return (
    <section id="community" className="section-alt">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Cooking Community
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Connect with fellow food enthusiasts, share your creations, and discover new culinary adventures together.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-accent-yellow mb-1">{stat.value}</div>
              <div className="text-gray-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">What Our Community Says</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-white/95 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-text-dark">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent-yellow">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card bg-white/95 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-accent-orange text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-text-dark">Recipe Discussions</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Share your cooking experiences, ask questions, and get tips from fellow chefs around the world.
            </p>
            <button onClick={() => alert('Recipe discussions feature coming soon!')} className="text-primary-green font-medium hover:text-primary-green-dark transition-colors">
              Join Discussion →
            </button>
          </div>

          <div className="card bg-white/95 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-accent-orange text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-text-dark">Cooking Challenges</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Participate in monthly cooking challenges and showcase your culinary creativity.
            </p>
            <button onClick={() => alert('Cooking challenges feature coming soon!')} className="text-primary-green font-medium hover:text-primary-green-dark transition-colors">
              View Challenges →
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card bg-white/95 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-dark mb-4">Ready to Join the Fun?</h3>
            <p className="text-gray-600 mb-6">
              Become part of our growing community of food lovers and start your culinary journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => alert('Community registration coming soon!')} className="btn-primary">Join Community</button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;