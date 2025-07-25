"use client";

import {useTranslations} from 'next-intl';

export default function ClientStories() {
  const t = useTranslations();

  const stories = [
    { key: 'retail', icon: '🛍️' },
    { key: 'tech', icon: '💻' },
    { key: 'manufacturing', icon: '🏭' }
  ];

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cape-cod to-obsidian text-pure-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-darker-grotesque font-bold mb-6">
            {t('clientStories.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('clientStories.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-pure-mint rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-darker-grotesque font-bold text-cape-cod mb-6">
              {t('clientStories.featured.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-cape-cod mb-4">
                  {t('clientStories.featured.company')}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cape-cod">Challenge:</h4>
                    <p className="text-gray-700">{t('clientStories.featured.challenge')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cape-cod">Solution:</h4>
                    <p className="text-gray-700">{t('clientStories.featured.solution')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cape-cod">Result:</h4>
                    <p className="text-gray-700">{t('clientStories.featured.result')}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-8xl">🏆</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Stories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.key} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{story.icon}</div>
                <h3 className="text-2xl font-darker-grotesque font-bold text-cape-cod mb-4">
                  {t(`clientStories.stories.${story.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t(`clientStories.stories.${story.key}.description`)}
                </p>
                <button className="bg-pure-mint text-cape-cod px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                  {t('common.readMore')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-darker-grotesque font-bold text-cape-cod text-center mb-12">
            {t('clientStories.testimonials.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <div key={index} className="bg-pure-mint rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">💬</div>
                <p className="text-gray-700 mb-6 italic">
                  &quot;{t(`clientStories.testimonials.items.${index}.text`)}&quot;
                </p>
                <div>
                  <p className="font-semibold text-cape-cod">
                    {t(`clientStories.testimonials.items.${index}.author`)}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t(`clientStories.testimonials.items.${index}.company`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 