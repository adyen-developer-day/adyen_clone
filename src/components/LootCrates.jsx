import { useState, useEffect, useRef } from "react";
import { lootCrates } from "../data/content.js";

const RARITY_WEIGHTS = {
  common: 40,
  uncommon: 25,
  rare: 18,
  epic: 12,
  legendary: 5,
};

function pickWeightedReward(crateRarity) {
  const { rewards } = lootCrates;

  let pool;
  if (crateRarity === "common") {
    pool = rewards.filter((r) =>
      ["common", "uncommon"].includes(r.rarity)
    );
  } else if (crateRarity === "rare") {
    pool = rewards.filter((r) =>
      ["uncommon", "rare", "epic"].includes(r.rarity)
    );
  } else {
    pool = rewards.filter((r) =>
      ["rare", "epic", "legendary"].includes(r.rarity)
    );
  }

  const totalWeight = pool.reduce(
    (sum, r) => sum + (RARITY_WEIGHTS[r.rarity] || 10),
    0
  );
  let roll = Math.random() * totalWeight;
  for (const r of pool) {
    roll -= RARITY_WEIGHTS[r.rarity] || 10;
    if (roll <= 0) return r;
  }
  return pool[pool.length - 1];
}

function generateReelItems(winningReward, count = 20) {
  const { rewards } = lootCrates;
  const winIndex = 14;
  const items = [];
  for (let i = 0; i < count; i++) {
    if (i === winIndex) {
      items.push(winningReward);
    } else {
      items.push(rewards[Math.floor(Math.random() * rewards.length)]);
    }
  }
  return { items, winIndex };
}

const RARITY_LABELS = {
  common: "COMMON",
  uncommon: "UNCOMMON",
  rare: "RARE",
  epic: "EPIC",
  legendary: "LEGENDARY",
};

export default function LootCrates() {
  const [openingCrate, setOpeningCrate] = useState(null);
  const [isOpening, setIsOpening] = useState(false);
  const [reelItems, setReelItems] = useState([]);
  const [winIndex, setWinIndex] = useState(14);
  const [reward, setReward] = useState(null);
  const [showReward, setShowReward] = useState(false);
  const [copied, setCopied] = useState(false);
  const reelRef = useRef(null);

  function handleOpen(crate) {
    if (isOpening) return;

    const won = pickWeightedReward(crate.rarity);
    const { items, winIndex: wIdx } = generateReelItems(won);

    setOpeningCrate(crate);
    setReelItems(items);
    setWinIndex(wIdx);
    setReward(won);
    setShowReward(false);
    setIsOpening(true);
    setCopied(false);
  }

  useEffect(() => {
    if (!isOpening) return;
    const timer = setTimeout(() => {
      setShowReward(true);
    }, 3800);
    return () => clearTimeout(timer);
  }, [isOpening]);

  function handleClose() {
    setIsOpening(false);
    setOpeningCrate(null);
    setReelItems([]);
    setReward(null);
    setShowReward(false);
  }

  function handleCopy() {
    if (reward) {
      navigator.clipboard.writeText(reward.code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  const itemWidth = 120;
  const containerCenter = 300;
  const stopX = winIndex * itemWidth - containerCenter + itemWidth / 2;

  return (
    <section className="loot" id="loot-crates">
      <div className="container">
        <h2 className="loot__title">{lootCrates.title}</h2>
        <p className="loot__subtitle">{lootCrates.subtitle}</p>

        <div className="loot__grid">
          {lootCrates.crates.map((crate) => (
            <div
              key={crate.name}
              className="loot__card"
              style={{ borderColor: crate.color }}
            >
              <div
                className="loot__icon"
                style={{
                  background: `linear-gradient(135deg, ${crate.color}33, ${crate.color}88)`,
                  borderColor: crate.color,
                }}
              >
                <span className="loot__lock">🔒</span>
              </div>
              <h3 className="loot__card-name">{crate.name}</h3>
              <p className="loot__card-rarity" style={{ color: crate.color }}>
                {crate.rarity.toUpperCase()}
              </p>
              <p className="loot__card-price">{crate.price}</p>
              <button
                className="btn btn--primary loot__open-btn"
                onClick={() => handleOpen(crate)}
                disabled={isOpening}
              >
                OPEN
              </button>
            </div>
          ))}
        </div>
      </div>

      {isOpening && (
        <div className="loot__overlay" onClick={showReward ? handleClose : undefined}>
          <div className="loot__modal" onClick={(e) => e.stopPropagation()}>
            {!showReward ? (
              <div className="loot__reel-container">
                <div className="loot__reel-pointer" />
                <div className="loot__reel-viewport">
                  <div
                    ref={reelRef}
                    className="loot__reel-strip loot__reel-strip--spinning"
                    style={{
                      "--stop-x": `-${stopX}px`,
                      "--item-count": reelItems.length,
                    }}
                  >
                    {reelItems.map((item, i) => (
                      <div
                        key={i}
                        className="loot__reel-item"
                        style={{
                          borderColor: item.color,
                          background: `linear-gradient(180deg, ${item.color}22, ${item.color}44)`,
                        }}
                      >
                        <span className="loot__reel-discount">{item.discount}</span>
                        <span className="loot__reel-rarity" style={{ color: item.color }}>
                          {RARITY_LABELS[item.rarity]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="loot__reward"
                style={{
                  "--reward-color": reward.color,
                }}
              >
                <span
                  className="loot__reward-rarity"
                  style={{ color: reward.color }}
                >
                  {RARITY_LABELS[reward.rarity]}
                </span>
                <p className="loot__reward-discount">{reward.discount}</p>
                <p className="loot__reward-desc">{reward.description}</p>
                <div className="loot__reward-code">{reward.code}</div>
                <button
                  className="btn loot__copy-btn"
                  style={{
                    background: reward.color,
                    color: "#fff",
                  }}
                  onClick={handleCopy}
                >
                  {copied ? "COPIED!" : "COPY CODE"}
                </button>
                <button className="loot__close-btn" onClick={handleClose}>
                  CLOSE
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
