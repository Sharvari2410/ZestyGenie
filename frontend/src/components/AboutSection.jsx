function AboutSection() {
  const stats = [
    { number: "500K+", label: "Recipes Generated", icon: "📊" },
    { number: "50K+", label: "Happy Users", icon: "👥" },
    { number: "4.9", label: "Average Rating", icon: "⭐" },
    { number: "24/7", label: "AI Support", icon: "🤖" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Former Michelin-starred chef turned AI innovator, passionate about making cooking accessible to everyone.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head Chef & Recipe Curator",
      bio: "Culinary expert with 15+ years experience, ensuring every AI-generated recipe is restaurant-quality.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Emily Watson",
      role: "AI Research Director",
      bio: "PhD in Machine Learning, specializing in natural language processing for culinary applications.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const values = [
    {
      icon: "🌱",
      title: "Innovation",
      description: "Pushing the boundaries of AI to revolutionize how people cook and experience food."
    },
    {
      icon: "❤️",
      title: "Community",
      description: "Building a supportive community of food lovers who share recipes and inspiration."
    },
    {
      icon: "🎯",
      title: "Quality",
      description: "Every recipe is crafted with care, ensuring delicious results every time."
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description: "Making professional-quality cooking accessible to everyone, regardless of skill level."
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-dark mb-4">
            About ZestyGenie
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We're on a magical journey to transform cooking through the power of AI. Our mission is to make every meal extraordinary by combining culinary expertise with cutting-edge technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-green mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-text-dark mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                ZestyGenie was born from a simple idea: what if everyone could have access to restaurant-quality recipes tailored to their tastes, dietary needs, and available ingredients?
              </p>
              <p>
                Our founder, Sarah Chen, experienced this frustration firsthand as a busy professional who loved cooking but struggled to find recipes that matched her lifestyle. After years in the culinary world, she teamed up with AI experts to create the ultimate cooking companion.
              </p>
              <p>
                Today, ZestyGenie uses advanced AI to understand your preferences, dietary restrictions, and cooking style, generating personalized recipes that are not just delicious but also achievable in your kitchen.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Cooking with AI"
              className="rounded-2xl shadow-card"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent-orange text-white p-4 rounded-2xl shadow-lg">
              <div className="text-2xl mb-1">✨</div>
              <div className="text-sm font-medium">AI-Powered Magic</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-text-dark text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-text-dark mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-text-dark text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-text-dark mb-1">{member.name}</h4>
                <p className="text-primary-green font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="card bg-gradient-to-r from-primary-green to-primary-green-dark text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            To democratize culinary excellence by harnessing the power of AI, making professional-quality cooking accessible, enjoyable, and personalized for everyone, everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-primary-green font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Join Our Community
            </button>
            <button onClick={() => alert('Learn more about ZestyGenie coming soon!')} className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-primary-green transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;