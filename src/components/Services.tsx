"use client";

import {useTranslations} from 'next-intl';

export default function Services() {
  const t = useTranslations();

  const services = [
    {
      key: 'corporate',
      icon: '🏢',
      bgColor: 'bg-pure-mint',
      textColor: 'text-cape-cod'
    },
    {
      key: 'contracts',
      icon: '📄',
      bgColor: 'bg-obsidian',
      textColor: 'text-pure-white'
    },
    {
      key: 'employment',
      icon: '👥',
      bgColor: 'bg-cape-cod',
      textColor: 'text-pure-white'
    },
    {
      key: 'intellectual',
      icon: '💡',
      bgColor: 'bg-pure-mint',
      textColor: 'text-cape-cod'
    },
    {
      key: 'realEstate',
      icon: '🏠',
      bgColor: 'bg-obsidian',
      textColor: 'text-pure-white'
    },
    {
      key: 'litigation',
      icon: '⚖️',
      bgColor: 'bg-cape-cod',
      textColor: 'text-pure-white'
    }
  ];

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cape-cod to-obsidian text-pure-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-darker-grotesque font-bold mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.key}
                className={`${service.bgColor} ${service.textColor} p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-darker-grotesque font-bold mb-4">
                  {t(`services.cards.${service.key}.title`)}
                </h3>
                <p className="text-lg leading-relaxed">
                  {t(`services.cards.${service.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pure-mint py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-darker-grotesque font-bold text-cape-cod mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-cape-cod mb-8 max-w-2xl mx-auto">
            {t('services.cta.description')}
          </p>
          <button className="bg-cape-cod text-pure-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-obsidian transition-colors duration-300">
            {t('services.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
} 