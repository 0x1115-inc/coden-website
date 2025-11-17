interface Policy {
  title: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  introduction: string;
  bodyHtml: string;
}

interface PolicyDocumentProps {
  policy: Policy;
}

export function PolicyDocument({ policy }: PolicyDocumentProps) {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="privacy-policy-content space-y-6 text-gray-700 leading-relaxed p-8 rounded-2xl border border-gray-200 shadow-sm bg-white"
            dangerouslySetInnerHTML={{ __html: policy.bodyHtml }}
          />
        </div>
      </section>
    </div>
  );
}
