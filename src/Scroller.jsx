import { useEffect } from "react";

export default function Scroller() {
  useEffect(() => {
    const v = document.querySelector<HTMLElement>(".bpMessageListViewport");
    const i = document.querySelector<HTMLElement>(".bpComposerInput");
    if (!v || !i) return;
    const scroll = () => v.scrollTo({ top: v.scrollHeight, behavior: "smooth" });
    i.addEventListener("focus", scroll);
    i.addEventListener("input", scroll);
    return () => {
      i.removeEventListener("focus", scroll);
      i.removeEventListener("input", scroll);
    };
  }, []);
  return null;
}
