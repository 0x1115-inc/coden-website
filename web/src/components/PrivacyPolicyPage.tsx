import { useLocale } from '../locales';

export function PrivacyPolicyPage() {
  const { content } = useLocale();
  const privacy = content.privacy;

  return (
    <div className="min-h-screen pt-16 bg-white">
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-4xl font-extrabold mb-4">
            {privacy.title}
          </h1>
          <p className="text-gray-500 text-sm uppercase tracking-wide">
            {privacy.lastUpdatedLabel}: {privacy.lastUpdatedDate}
          </p>
          <p className="text-gray-600 mt-6">
            {privacy.introduction}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {privacy.sections.map((section, index) => (
            <article key={index} className="p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
