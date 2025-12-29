export default function Process() {
  const steps = [
    {
      title: 'Sign Design',
      description: 'We craft signage that captures attention and reflects your brand identity. Our experienced designers ensure each sign is not only visually appealing but also structurally sound and compliant with local regulations, leaving a lasting impression.',
      icon: '🎨'
    },
    {
      title: 'Sign Manufacturing',
      description: 'We go beyond industry standards, combining skilled craftsmanship with advanced technology to produce durable, high-quality signs. All manufacturing is done in-house, ensuring strict quality control at every stage.',
      icon: '🏭'
    },
    {
      title: 'Sign Installation',
      description: 'Our expert technicians ensure secure, efficient installation, using the latest equipment to guarantee your signs perform optimally for years. From small storefronts to large billboards, we manage every detail to stay on schedule and within budget.',
      icon: '🔧'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to installation, we handle every step with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-6 left-8 bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                {index + 1}
              </div>
              <div className="text-5xl mb-6 mt-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
