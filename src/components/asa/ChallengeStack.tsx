type Challenge = {
  num: string;
  title: string;
  body: string;
  risk: string;
  response: string;
  image: string;
};

export function ChallengeStack({ items }: { items: Challenge[] }) {
  return (
    <div className="mt-20">
      {items.map((item, i) => (
        <div
          key={item.num}
          className="sticky"
          style={{ top: `calc(6rem + ${i * 1.25}rem)`, zIndex: i + 1 }}
        >
          <article
            className="grid overflow-hidden border border-rule bg-background shadow-[0_-1px_0_0_var(--rule)] md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
            style={{ marginBottom: "1.25rem" }}
          >
            <div className="relative min-h-56 bg-navy">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                width={1600}
                height={1104}
                className="h-full w-full object-cover opacity-90"
              />
              <span className="type-meta absolute left-6 top-6 bg-background px-3 py-1 text-asa-blue">
                {item.num}
              </span>
            </div>

            <div className="flex flex-col p-8 md:p-12">
              <h3 className="type-h3 max-w-[20ch]">{item.title}</h3>
              <p className="mt-5 max-w-[52ch] text-[0.95rem] leading-relaxed text-muted-foreground">{item.body}</p>
              <dl className="mt-auto pt-10">
                <div className="border-t border-rule py-4">
                  <dt className="type-label text-muted-foreground">At risk</dt>
                  <dd className="type-meta mt-2">{item.risk}</dd>
                </div>
                <div className="border-t border-rule py-4">
                  <dt className="type-label text-asa-blue">ASA response</dt>
                  <dd className="type-meta mt-2">{item.response}</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
