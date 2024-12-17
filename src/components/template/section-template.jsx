export default function SectionTemplate({ title, description, children }) {
  return (
    <section className="max-w-7xl w-full mx-auto px-4">
      <div className="overflow-hidden w-full pt-6 pb-12 border-t">
        <div className="mb-6 text-center">
          <span className="text-2xl font-bold text-primary ">{title}</span>
          <p className="text-base text-gray-600">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
