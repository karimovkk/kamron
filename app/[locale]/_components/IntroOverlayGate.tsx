"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import IntroOverlay from "./IntroOverlay";

export default function IntroOverlayGate() {
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  const isHome = useMemo(() => {
    if (!pathname) return false;
    const p = pathname.replace(/\/(uz|ru|en)(\/)?/, "/");
    return p === "/" || p === "";
  }, [pathname]);

  if (!isHome) return null;
  if (!isDesktop) return null;

  return <IntroOverlay />;
}