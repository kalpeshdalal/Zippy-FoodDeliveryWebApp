import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../HomeComponents/Carousal.css";

const OfferCard = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="offercard-container">
      <Carousel className="sub" responsive={responsive}>
        <div>
          <img
            className="offercard-img"
            src="https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg"
            alt="pizza"
          />
          <p>Pizza</p>
        </div>

        <div>
          <img
            className="offercard-img"
            src="https://img.freepik.com/free-photo/hamburger-isolated-white-background-fresh-burger-fastfood-with-beef-cheese_90220-1329.jpg?w=2000"
            alt="burger"
          />
          <p>Burger</p>
        </div>

        <div>
          <img
            className="offercard-img"
            src="https://img.freepik.com/premium-photo/bowl-food-with-piece-meat-vegetables-it_867452-673.jpg"
            alt="biryani"
          />
          <p>Biryani</p>
        </div>
        <div>
          <img
            className="offercard-img"
            src="https://img.freepik.com/premium-photo/two-homemade-sandwiches-with-toasted-bread-lettuce-cheese-meat-isolated_244366-392.jpg"
            alt="sandwich"
          />
          <p>Sandwich</p>
        </div>
        <div>
          <img
            className="offercard-img"
            src=" https://attagirl.in/wp-content/uploads/2021/01/Classic-Rice-Batter_800-x-800-600x600.jpg"
            alt="idli dosa"
          />
          <p>Idli Dosa</p>
        </div>
        <div>
          <img
            className="offercard-img"
            src="         https://delhiclubadelaide.com.au/wp-content/uploads/2020/11/Chicken-Momos-600x600.jpg"
            alt="momos"
          />
          <p>Momos</p>
        </div>
        <div>
          <img
            className="offercard-img"
            src="https://www.kindpng.com/picc/m/138-1384990_indian-veg-thali-png-transparent-png.png"
            alt="idli dosa"
          />
          <p>Idli Dosa</p>
        </div>
        <div>
          <img
            className="offercard-img"
            src=" https://attagirl.in/wp-content/uploads/2021/01/Classic-Rice-Batter_800-x-800-600x600.jpg"
            alt="idli dosa"
          />
          <p>Idli Dosa</p>
        </div>
        <div>
          <img
            className="offercard-img"
            src=" https://attagirl.in/wp-content/uploads/2021/01/Classic-Rice-Batter_800-x-800-600x600.jpg"
            alt="idli dosa"
          />
          <p>Idli Dosa</p>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default OfferCard;
