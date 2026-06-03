// Pixel-art decorations inspired by Terraria: grass, trees, slimes, zombies, bats, stars
export default function PixelDecorations() {
  return (
    <>
      {/* Grass strip with trees and mobs between hero and content */}
      <div className="grass-strip" aria-hidden="true">
        {/* Trees */}
        <div className="pixel-tree" style={{ left: "8%" }}>
          <div className="pixel-tree__leaves" />
          <div className="pixel-tree__trunk" />
        </div>
        <div className="pixel-tree" style={{ left: "25%" }}>
          <div className="pixel-tree__leaves" />
          <div className="pixel-tree__trunk" />
        </div>
        <div className="pixel-tree" style={{ left: "55%" }}>
          <div className="pixel-tree__leaves" />
          <div className="pixel-tree__trunk" />
        </div>
        <div className="pixel-tree" style={{ left: "80%" }}>
          <div className="pixel-tree__leaves" />
          <div className="pixel-tree__trunk" />
        </div>

        {/* Slimes */}
        <div className="pixel-slime" style={{ left: "18%" }}>
          <div className="pixel-slime__body">
            <div className="pixel-slime__eyes">
              <div className="pixel-slime__eye" />
              <div className="pixel-slime__eye" />
            </div>
          </div>
        </div>
        <div
          className="pixel-slime"
          style={{ left: "45%", animationDelay: "0.5s" }}
        >
          <div
            className="pixel-slime__body"
            style={{ background: "#3399ff" }}
          >
            <div className="pixel-slime__eyes">
              <div className="pixel-slime__eye" />
              <div className="pixel-slime__eye" />
            </div>
          </div>
        </div>
        <div
          className="pixel-slime"
          style={{ left: "70%", animationDelay: "1s" }}
        >
          <div
            className="pixel-slime__body"
            style={{ background: "#cc44cc" }}
          >
            <div className="pixel-slime__eyes">
              <div className="pixel-slime__eye" />
              <div className="pixel-slime__eye" />
            </div>
          </div>
        </div>

        {/* Zombie */}
        <div className="pixel-zombie" style={{ left: "35%" }}>
          <div className="pixel-zombie__head" />
          <div className="pixel-zombie__body-part" />
          <div className="pixel-zombie__legs">
            <div className="pixel-zombie__leg" />
            <div className="pixel-zombie__leg" />
          </div>
        </div>
        <div
          className="pixel-zombie"
          style={{ left: "62%", animationDelay: "2s", animationDirection: "reverse" }}
        >
          <div className="pixel-zombie__head" />
          <div className="pixel-zombie__body-part" />
          <div className="pixel-zombie__legs">
            <div className="pixel-zombie__leg" />
            <div className="pixel-zombie__leg" />
          </div>
        </div>
      </div>

      {/* Floating bats */}
      <div className="pixel-bat" style={{ top: "20%", left: "30%" }} aria-hidden="true">
        <div className="pixel-bat__body">
          <div className="pixel-bat__wing pixel-bat__wing--left" />
          <div className="pixel-bat__wing pixel-bat__wing--right" />
        </div>
      </div>
      <div
        className="pixel-bat"
        style={{ top: "15%", right: "20%", animationDelay: "2s" }}
        aria-hidden="true"
      >
        <div className="pixel-bat__body">
          <div className="pixel-bat__wing pixel-bat__wing--left" />
          <div className="pixel-bat__wing pixel-bat__wing--right" />
        </div>
      </div>

      {/* Stars scattered in dark sections */}
      <div className="pixel-star" style={{ top: "62%", left: "10%" }} aria-hidden="true" />
      <div className="pixel-star" style={{ top: "58%", left: "25%", animationDelay: "0.5s" }} aria-hidden="true" />
      <div className="pixel-star" style={{ top: "65%", left: "40%", animationDelay: "1s" }} aria-hidden="true" />
      <div className="pixel-star" style={{ top: "60%", left: "55%", animationDelay: "0.3s" }} aria-hidden="true" />
      <div className="pixel-star" style={{ top: "63%", left: "70%", animationDelay: "1.5s" }} aria-hidden="true" />
      <div className="pixel-star" style={{ top: "57%", left: "85%", animationDelay: "0.8s" }} aria-hidden="true" />
      <div className="pixel-star" style={{ top: "68%", left: "15%", animationDelay: "1.2s" }} aria-hidden="true" />
      <div className="pixel-star" style={{ top: "70%", left: "50%", animationDelay: "0.6s" }} aria-hidden="true" />
    </>
  );
}
