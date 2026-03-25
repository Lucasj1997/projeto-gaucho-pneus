export function BrandLogo({ className }: { className?: string }) {
  return (
    <div
      className={
        "flex items-center gap-3 rounded-full bg-black px-4 py-2 text-white shadow-sm " +
        (className ?? "")
      }
    >
      <svg
        viewBox="0 0 48 48"
        className="size-10 shrink-0 text-white"
        aria-hidden
      >
        <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          fill="currentColor"
          d="M10 28c4-10 24-10 28 0-2 4-26 4-28 0zm2-4c5-6 19-6 24 0M12 20c6-5 18-5 24 0"
          opacity="0.9"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M14 32h20M16 16h16"
        />
      </svg>
      <div className="leading-tight">
        <p className="text-base font-bold tracking-tight">Gaúcho Pneus</p>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/85">
          Pneus e rodas agrícolas
        </p>
      </div>
    </div>
  );
}
