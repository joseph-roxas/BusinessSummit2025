import React, { useEffect, useState } from 'react';
import './TopHeader.css';

export default function TopHeader({ title = '1ST CITY OF TALISAY BUSINESS SUMMIT' }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : original;
    return () => (document.body.style.overflow = original);
  }, [open]);

  return (
    <>
      {/* Super Header */}
      <header className="th-header">
        <div className="th-inner">
          <div className="th-title" title={title}>{title}</div>

          <button
            className="th-eqbtn"
            aria-label="Open post-summit feedback"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className="th-eqbar" />
            <span className="th-eqbar" />
            <span className="th-eqbar" />
            <span className="th-eqbar" />
          </button>
        </div>
      </header>

      {/* Overlay (no blur). Click outside to close */}
      {open && (
        <div
          className="th-overlay"
          id="th-overlay"
          onClick={(e) => e.target.id === 'th-overlay' && close()}
          aria-hidden="true"
        />
      )}

      {/* Drawer: right → left */}
      <aside
        className={`th-drawer ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="th-drawer-title"
      >
        <div className="th-drawer-head">
          <h3 id="th-drawer-title">We Value Your Feedback</h3>
          <button className="th-close" onClick={close} aria-label="Close">✕</button>
        </div>

        <div className="th-drawer-body">
          <p className="th-message">
            Thank you for being part of the <strong>1st City of Talisay Business Summit</strong>.
            Your insights help us do better—what worked, and what can we improve?
            Please take a minute to complete our post-summit evaluation.
          </p>

          <a
            href="https://forms.gle/jDF7rF9XAXEb9uHNA"
            target="_blank"
            rel="noopener noreferrer"
            className="th-cta"
          >
            Fill Out Evaluation Form
          </a>
        </div>
      </aside>
    </>
  );
}
