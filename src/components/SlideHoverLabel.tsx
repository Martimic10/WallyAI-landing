import type { ReactNode } from "react";

const SLIDE =
  "duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]";

type Layout = "block" | "row";

const layoutClass: Record<Layout, string> = {
  block: "block w-full text-center",
  row: "flex w-full min-w-0 items-center justify-center gap-2",
};

/**
 * Duplicated label strip with the same hover motion as the reference button
 * (parent must include `group` + `cursor-pointer`).
 */
export default function SlideHoverLabel({
  children,
  layout = "block",
}: {
  children: ReactNode;
  layout?: Layout;
}) {
  const l = layoutClass[layout];

  return (
    <div className="relative w-full min-w-0 overflow-hidden">
      <div className={`${l} group-hover:-translate-y-7 ${SLIDE}`}>{children}</div>
      <div
        className={`absolute inset-x-0 top-7 ${l} group-hover:top-0 ${SLIDE}`}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
