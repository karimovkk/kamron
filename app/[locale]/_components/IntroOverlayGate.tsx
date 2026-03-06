"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import IntroOverlay from "./IntroOverlay";

export default function IntroOverlayGate() {
  const pathname = usePathname();

  const isHome = useMemo(() => {
    if (!pathname) return false;
    const p = pathname.replace(/\/(uz|ru|en)(\/)?/, "/");
    return p === "/" || p === "";
  }, [pathname]);

  if (!isHome) return null;

  return (
    <div className="hidden md:block">
      <IntroOverlay />
    </div>
  );
}