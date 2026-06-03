import { useState, useEffect } from "react";

const AMOUNTS = ["€129.99", "$2,450.00", "£89.50", "¥12,800", "A$349.00"];
const METHODS = ["Visa", "Mastercard", "Apple Pay", "iDEAL", "Klarna"];
const CARD_NUMBERS = [
  "4242 •••• •••• 4242",
  "5500 •••• •••• 0004",
  "3782 •••• •••• 0005",
  "6011 •••• •••• 9424",
  "4000 •••• •••• 1234",
];

export default function PaymentVisual() {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setTransitioning(true);
      const timer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % AMOUNTS.length);
        setTransitioning(false);
      }, 400);
      return () => clearTimeout(timer);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="payment-visual" aria-hidden="true">
      <div className="payment-visual__card">
        {/* Header row */}
        <div className="payment-visual__header">
          <div className="payment-visual__chip">
            <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
              <rect x="0" y="0" width="36" height="28" rx="4" fill="#c8a962" />
              <rect x="4" y="8" width="10" height="12" rx="2" fill="#b8933e" />
              <line x1="14" y1="11" x2="32" y2="11" stroke="#b8933e" strokeWidth="1.5" />
              <line x1="14" y1="17" x2="32" y2="17" stroke="#b8933e" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="payment-visual__contactless">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 14a6 6 0 0 1 0-8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10 12.5a3.5 3.5 0 0 1 0-5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M13 11a1 1 0 0 1 0-2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Card number */}
        <div className={`payment-visual__number ${transitioning ? "payment-visual--fade-out" : "payment-visual--fade-in"}`}>
          {CARD_NUMBERS[index]}
        </div>

        {/* Amount */}
        <div className="payment-visual__amount-row">
          <span className="payment-visual__label">Amount</span>
          <span className={`payment-visual__amount ${transitioning ? "payment-visual--fade-out" : "payment-visual--fade-in"}`}>
            {AMOUNTS[index]}
          </span>
        </div>

        {/* Divider */}
        <div className="payment-visual__divider" />

        {/* Status + method */}
        <div className="payment-visual__footer">
          <div className="payment-visual__status">
            <span className="payment-visual__dot" />
            Approved
          </div>
          <div className={`payment-visual__methods ${transitioning ? "payment-visual--fade-out" : "payment-visual--fade-in"}`}>
            <MethodIcon method={METHODS[index]} />
            <span className="payment-visual__method-label">{METHODS[index]}</span>
          </div>
        </div>
      </div>

      {/* Floating transaction pills */}
      <div className="payment-visual__pills">
        <span className="payment-visual__pill payment-visual__pill--1">+€42.00</span>
        <span className="payment-visual__pill payment-visual__pill--2">+$18.50</span>
        <span className="payment-visual__pill payment-visual__pill--3">+£7.99</span>
      </div>
    </div>
  );
}

function MethodIcon({ method }) {
  switch (method) {
    case "Visa":
      return (
        <svg className="payment-visual__method-icon" width="32" height="20" viewBox="0 0 32 20" fill="none">
          <rect width="32" height="20" rx="3" fill="#1a1f71" />
          <text x="16" y="14" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="sans-serif">VISA</text>
        </svg>
      );
    case "Mastercard":
      return (
        <svg className="payment-visual__method-icon" width="32" height="20" viewBox="0 0 32 20" fill="none">
          <rect width="32" height="20" rx="3" fill="#252525" />
          <circle cx="13" cy="10" r="6" fill="#eb001b" />
          <circle cx="19" cy="10" r="6" fill="#f79e1b" />
        </svg>
      );
    case "Apple Pay":
      return (
        <svg className="payment-visual__method-icon" width="32" height="20" viewBox="0 0 32 20" fill="none">
          <rect width="32" height="20" rx="3" fill="#000" />
          <text x="16" y="14" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="600" fontFamily="sans-serif">Pay</text>
        </svg>
      );
    case "iDEAL":
      return (
        <svg className="payment-visual__method-icon" width="32" height="20" viewBox="0 0 32 20" fill="none">
          <rect width="32" height="20" rx="3" fill="#cc0066" />
          <text x="16" y="14" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700" fontFamily="sans-serif">iDEAL</text>
        </svg>
      );
    case "Klarna":
      return (
        <svg className="payment-visual__method-icon" width="32" height="20" viewBox="0 0 32 20" fill="none">
          <rect width="32" height="20" rx="3" fill="#ffb3c7" />
          <text x="16" y="14" textAnchor="middle" fill="#0a0b09" fontSize="7" fontWeight="700" fontFamily="sans-serif">K.</text>
        </svg>
      );
    default:
      return null;
  }
}
