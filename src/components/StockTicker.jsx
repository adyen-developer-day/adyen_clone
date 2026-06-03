const stocks = [
  { symbol: "MGNUM", price: "$42,069.00", change: "+420.69%", up: true },
  { symbol: "CHOC", price: "$999.99", change: "+99.9%", up: true },
  { symbol: "VNLA", price: "$777.77", change: "+77.7%", up: true },
  { symbol: "WFCN", price: "$1,337.00", change: "+133.7%", up: true },
  { symbol: "SPRKL", price: "$0.01", change: "-99.9%", up: false },
  { symbol: "HGND", price: "$888.88", change: "+88.8%", up: true },
  { symbol: "CRML", price: "$555.55", change: "+55.5%", up: true },
  { symbol: "BEN&J", price: "$2.00", change: "-80.0%", up: false },
];

function TickerItems() {
  return stocks.map((s) => (
    <span className="stock-ticker__item" key={s.symbol}>
      <span className="stock-ticker__symbol">{s.symbol}</span>
      <span className={`stock-ticker__arrow stock-ticker__change--${s.up ? "up" : "down"}`}>
        {s.up ? "▲" : "▼"}
      </span>
      <span className="stock-ticker__price">{s.price}</span>
      <span className={`stock-ticker__change--${s.up ? "up" : "down"}`}>
        ({s.change})
      </span>
    </span>
  ));
}

export default function StockTicker() {
  return (
    <div className="stock-ticker">
      <div className="stock-ticker__track">
        <TickerItems />
        <TickerItems />
      </div>
    </div>
  );
}
