// Original pixel-art sprites for the DOOM-inspired re-skin.
// Each sprite is an ASCII grid mapped to <rect> cells (no copyrighted assets).

export function PixelSprite({ map, palette, pixel = 6, className, title }) {
  const rows = map.replace(/^\n/, "").replace(/\n$/, "").split("\n");
  const width = Math.max(...rows.map((r) => r.length));
  const height = rows.length;
  const cells = [];
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x += 1) {
      const fill = palette[row[x]];
      if (fill) {
        cells.push(
          <rect key={`${x}-${y}`} x={x} y={y} width={1.02} height={1.02} fill={fill} />
        );
      }
    }
  });
  return (
    <svg
      className={className}
      width={width * pixel}
      height={height * pixel}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {cells}
    </svg>
  );
}

const cacodemonMap = `
....h........h....
....hh......hh....
.....s.ssss.s.....
...sssrrrrrrsss...
..srrrrrrrrrrrrs..
.srrrrrrrrrrrrrrs.
.srrwwwwwwwwwwrrs.
.srwwwiiiiiiwwwrs.
.srwwiiippiiiwwrs.
.srwwwiiiiiiwwwrs.
.srrwwwwwwwwwwrrs.
..srrtwtwtwtwrrs..
...ssrrrrrrrrss...
.....ssssssss.....
`;
const cacodemonPalette = {
  h: "#efe2c8",
  s: "#7a0a12",
  r: "#c1121f",
  w: "#f5efe6",
  i: "#2e86de",
  p: "#0a0a0a",
  t: "#0a0a0a",
};

export function Cacodemon(props) {
  return (
    <PixelSprite map={cacodemonMap} palette={cacodemonPalette} title="Cacodemon" {...props} />
  );
}

const impMap = `
..b..........b..
..bb........bb..
...bbb....bbb...
....bnnnnnnb....
...bnnnnnnnnb...
..bnnyynnyynnb..
..bnnnnnnnnnnb..
..bnnnwwwwnnnb..
..bnnwkkkkwnnb..
...bnnnnnnnnb...
..bbnnnnnnnnbb..
.b.bnnnnnnnnb.b.
.b..bnnnnnnb..b.
.....bb..bb.....
....b........b..
...f...f....f...
`;
const impPalette = {
  b: "#2a1a0e",
  n: "#7a4a28",
  y: "#ffd23f",
  w: "#3a2414",
  k: "#1a0e06",
  f: "#ff6a00",
};

export function Imp(props) {
  return <PixelSprite map={impMap} palette={impPalette} title="Imp" {...props} />;
}

const pinkyMap = `
...pppppppppp...
..pppppppppppp..
.ppppwwwwwwpppp.
.pppwkwwwwkwppp.
.ppppwwwwwwpppp.
.pppppppppppppp.
.ppppppppppppppp
.pgggggggggggggp
.gtwtwtwtwtwtwtg
.gtwtwtwtwtwtwtg
.pgggggggggggggp
..pppppppppppp..
...pppppppppp...
`;
const pinkyPalette = {
  p: "#d65a8f",
  w: "#f6e7ee",
  k: "#0a0a0a",
  g: "#9a2f5a",
  t: "#fbf5f8",
};

export function Pinky(props) {
  return <PixelSprite map={pinkyMap} palette={pinkyPalette} title="Pinky demon" {...props} />;
}

const doomguyMap = `
...hhhhhhhhhh...
..hhhhhhhhhhhh..
.hhhccccccccchh.
.hccssssssssoch.
.hcssssssssssch.
.csswwsssswwssc.
.csswkssskwsssc.
.cssssssssssssc.
.csssssnnssssssc
.cssssmmmmsssssc
.csswwwwwwwwsssc
.cssswwwwwwsssc.
..csssssssssc...
...cccccccc.....
`;
const doomguyPalette = {
  h: "#4a2f16",
  c: "#2a1a0c",
  s: "#d79a5e",
  o: "#b87a44",
  w: "#f3ece0",
  k: "#10243f",
  n: "#a86a3c",
  m: "#7a3326",
};

export function Doomguy(props) {
  return <PixelSprite map={doomguyMap} palette={doomguyPalette} title="Marine" {...props} />;
}

const shellMap = `
bbbb
bbbb
rrrr
rrrr
rrrr
rrrr
rrrr
`;
const shellPalette = { b: "#e0a93b", r: "#b5121b" };

export function Shell(props) {
  return <PixelSprite map={shellMap} palette={shellPalette} title="Shotgun shell" {...props} />;
}

const skullMap = `
.kkkkkk.
kwwwwwwk
kwbwwbwk
kwbwwbwk
kwwwwwwk
.kwwwwk.
.kw..wk.
.k.kk.k.
`;
const skullPalette = { k: "#1a1110", w: "#d9cdbb", b: "#0a0a0a" };

export function Skull(props) {
  return <PixelSprite map={skullMap} palette={skullPalette} title="Skull" {...props} />;
}
