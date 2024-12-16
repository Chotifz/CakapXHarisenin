export default function PrakerjaTitle() {
  return (
    <div
      href="/"
      aria-label="Go home"
      title="Company"
      className="inline-flex gap-3 items-center pb-4  "
    >
      <img
        className="w-40 border-none"
        src="/icons/cakap-logo.svg"
        alt="icon"
      />
      <span className="py-[1.25rem] border-l-2 text-center border-tertiary"></span>
      <img
        className="w-40 border-none"
        src="/icons/prakerja-logo.svg"
        alt="logo"
      />
    </div>
  );
}
