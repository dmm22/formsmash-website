import { forwardRef } from "react";

const ScrollViewAnchor = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    aria-hidden
    className="pointer-events-none absolute top-1/2 left-0 h-px w-full opacity-0"
  />
));

ScrollViewAnchor.displayName = "ScrollViewAnchor";

export default ScrollViewAnchor;
