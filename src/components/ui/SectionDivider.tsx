/** Decorative rule that keeps the long single-page scroll segmented. */
export default function SectionDivider() {
  return (
    <div aria-hidden="true" className="shell">
      <div className="flex items-center gap-4">
        <span className="hairline flex-1" />
        <span className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-accent-500/50" />
          <span className="h-2 w-2 rotate-45 border border-accent-400/60" />
          <span className="h-1 w-1 rounded-full bg-accent-500/50" />
        </span>
        <span className="hairline flex-1" />
      </div>
    </div>
  );
}
