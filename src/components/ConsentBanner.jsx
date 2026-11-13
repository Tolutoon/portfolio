import { useEffect, useState } from "react";

const STORAGE_KEY = "tolu-cookie-consent";

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  // Show on first visit only (small delay so it doesn't fight the hero entrance)
  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  // Footer "Cookie settings" re-opens the dialog
  useEffect(() => {
    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  const choose = (value) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, at: new Date().toISOString() })
      );
    } catch {
      /* storage unavailable — just dismiss */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="cookie-pop fixed z-50 bottom-0 inset-x-0 p-4 sm:p-6 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-3xl bg-white text-black rounded-2xl shadow-2xl shadow-black/40 border border-black/10 px-5 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
        <div className="flex-1 min-w-0">
          <h2 id="cookie-title" className="font-heading font-bold text-base leading-tight">
            A quick note on cookies 🍪
          </h2>
          <p id="cookie-desc" className="text-[13px] leading-relaxed mt-1 text-black/70">
            This site only uses minimal local storage to remember choices like
            this one. No tracking, no ads, no third-party cookies.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => choose("accepted")}
            autoFocus
            className="rounded-full bg-black text-white text-xs font-heading uppercase tracking-wide px-6 py-2 hover:opacity-85 transition-opacity cursor-pointer"
          >
            Accept
          </button>
          <button
            onClick={() => choose("declined")}
            className="rounded-full border border-black/20 text-xs font-heading uppercase tracking-wide px-6 py-2 hover:bg-black/5 transition-colors cursor-pointer"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
