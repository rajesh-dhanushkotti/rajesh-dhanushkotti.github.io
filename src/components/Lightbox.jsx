import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Full-screen photo viewer.
// items:   [{ image, caption, sub }]  (only entries that have an image)
// index:   which photo is open
// onClose: close the viewer
// onMove:  (newIndex) => void, used for previous/next
export default function Lightbox({ items, index, onClose, onMove }) {
  const closeRef = useRef(null);
  const item = items[index];
  const many = items.length > 1;
  const prev = () => onMove((index - 1 + items.length) % items.length);
  const next = () => onMove((index + 1) % items.length);

  // Keyboard: Esc closes, arrow keys move between photos.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (many && e.key === "ArrowLeft") prev();
      else if (many && e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Stop the page behind from scrolling, and move focus into the viewer.
  useEffect(() => {
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const lastFocused = document.activeElement;
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = before;
      lastFocused?.focus?.();
    };
  }, []);

  if (!item) return null;

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button ref={closeRef} type="button" className="lb-close" onClick={onClose} aria-label="Close photo">
        ×
      </button>

      {many && (
        <button type="button" className="lb-nav lb-prev" onClick={prev} aria-label="Previous photo">‹</button>
      )}

      <figure className="lb-figure">
        <img key={item.image} src={item.image} alt={item.caption} />
        <figcaption>
          {item.caption}
          {item.sub && <span>{item.sub}</span>}
          {many && <span className="lb-count">{index + 1} / {items.length}</span>}
        </figcaption>
      </figure>

      {many && (
        <button type="button" className="lb-nav lb-next" onClick={next} aria-label="Next photo">›</button>
      )}
    </div>,
    document.body
  );
}