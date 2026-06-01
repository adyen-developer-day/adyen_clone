const brands = ["Spotify", "Uber", "Etsy", "eBay", "Microsoft", "L'Oréal"];

export default function LogoCloud() {
  return (
    <section className="logocloud" aria-label="Trusted by leading businesses">
      <div className="container">
        <p className="logocloud__lead">Powering growth for ambitious businesses</p>
        <ul className="logocloud__list">
          {brands.map((brand) => (
            <li key={brand} className="logocloud__item">
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
