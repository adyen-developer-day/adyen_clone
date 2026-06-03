import { Doomguy } from "./DoomSprites.jsx";

// Classic DOOM status-bar HUD, fixed to the bottom of the viewport.
// All labels/values are original; the face is our own pixel marine.
const arms = [2, 3, 4, 5, 6, 7];
const ammoStats = [
  { label: "BULL", cur: "200", max: "200" },
  { label: "SHEL", cur: "50", max: "50" },
  { label: "RCKT", cur: "50", max: "50" },
  { label: "CELL", cur: "300", max: "300" },
];

export default function DoomHud() {
  return (
    <div className="doom-hud" role="complementary" aria-label="DOOM status bar">
      <div className="doom-hud__stripe" aria-hidden="true" />
      <div className="doom-hud__panels">
        <div className="doom-hud__panel doom-hud__ammo">
          <span className="doom-hud__big">∞</span>
          <span className="doom-hud__cap">AMMO</span>
        </div>

        <div className="doom-hud__panel doom-hud__health">
          <span className="doom-hud__big">100%</span>
          <span className="doom-hud__cap">HEALTH</span>
        </div>

        <div className="doom-hud__panel doom-hud__arms">
          <span className="doom-hud__cap">ARMS</span>
          <div className="doom-hud__armsgrid">
            {arms.map((n) => (
              <span key={n} className="doom-hud__arm">
                {n}
              </span>
            ))}
          </div>
        </div>

        <div className="doom-hud__panel doom-hud__face">
          <Doomguy className="doom-hud__faceart" pixel={5} />
        </div>

        <div className="doom-hud__panel doom-hud__armor">
          <span className="doom-hud__big">200%</span>
          <span className="doom-hud__cap">ARMOR</span>
        </div>

        <div className="doom-hud__panel doom-hud__ammostats">
          {ammoStats.map((a) => (
            <div key={a.label} className="doom-hud__ammorow">
              <span className="doom-hud__ammolabel">{a.label}</span>
              <span className="doom-hud__ammonum">{a.cur}</span>
              <span className="doom-hud__ammomax">{a.max}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
