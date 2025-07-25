"use client";

import {useTranslations} from 'next-intl';
import HeroSection from '@/components/HeroSection';


export default function AboutUs() {
  const t = useTranslations();

  const values = [
    { key: 'integrity', icon: '🤝' },
    { key: 'excellence', icon: '⭐' },
    { key: 'innovation', icon: '🚀' },
    { key: 'clientFocus', icon: '🎯' }
  ];

  const teamMembers = [
    { key: 'sarah', image: '👩‍💼' },
    { key: 'michael', image: '👨‍💼' },
    { key: 'emily', image: '👩‍💼' }
  ];

  const stats = [
    { key: 'clients', label: 'Happy Clients' },
    { key: 'cases', label: 'Cases Won' },
    { key: 'years', label: 'Years Experience' },
    { key: 'successRate', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <HeroSection />


      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-darker-grotesque font-bold text-cape-cod mb-8">
              {t('about.mission.title')}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-pure-mint py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-darker-grotesque font-bold text-cape-cod text-center mb-12">
            {t('about.values.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.key} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-darker-grotesque font-bold text-cape-cod mb-4">
                  {t(`about.values.items.${value.key}.title`)}
                </h3>
                <p className="text-gray-700">
                  {t(`about.values.items.${value.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-darker-grotesque font-bold text-cape-cod text-center mb-12">
            {t('about.team.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.key} className="text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-darker-grotesque font-bold text-cape-cod mb-2">
                  {t(`about.team.members.${member.key}.name`)}
                </h3>
                <p className="text-pure-mint font-semibold mb-2">
                  {t(`about.team.members.${member.key}.role`)}
                </p>
                <p className="text-gray-600">
                  {t(`about.team.members.${member.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

            

      {/* Stats Section */}
      <section className="bg-cape-cod text-pure-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.key}>
                <div className="text-4xl font-darker-grotesque font-bold text-pure-mint mb-2">
                  {t(`about.stats.${stat.key}`)}
                </div>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 