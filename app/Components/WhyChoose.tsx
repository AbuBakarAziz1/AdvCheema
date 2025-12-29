export default function WhyChoose() {
  const reasons = [
    {
      title: 'More than 1000+ Successfully Crafted Signboards',
      icon: '📊'
    },
    {
      title: '100% customer satisfied customer service',
      icon: '⭐'
    },
    {
      title: '20+ Years of Experience',
      icon: '🏆'
    }
  ];

  return (
    <section className="py-20 bg-linear-to-r from-primary to-primary/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Cheema Advertising?
          </h2>
          <p className="text-xl max-w-4xl mx-auto">
            We combine years of expertise with a commitment to quality, delivering signboards that 
            make your brand stand out. Our customer-focused approach ensures personalized service, 
            from design to installation, with attention to detail and durability. Whether you need 
            custom signboards, LED displays, Indoor Signboard, Outdoor Signboard or other signage 
            solutions, we provide innovative and reliable results tailored to your business needs. 
            Choose us for high-impact signage that leaves a lasting impression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold">{reason.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
