import DisplayBox from "../../components/DisplayBox";
import MyCarousel from "../../components/carousel";

import promo1 from "../../assets/promo/promo1.png";
import promo2 from "../../assets/promo/promo2.png";
import "./home.css";
const Home = () => {
  const PromoImages = [
    {
      src: promo1,
    },
    {
      src: promo2,
    },
  ];
  return (
    <>
      <body className="home_body">
        <section className="home_ads">
          <MyCarousel promos={PromoImages} />
        </section>

        <section className="home_ads">
          <DisplayBox title="Frutas" content="Frutas frescas é aqui mesmo." />
          <DisplayBox title="Frutas" content="Frutas frescas é aqui mesmo." />
          <DisplayBox title="Frutas" content="Frutas frescas é aqui mesmo." />
          <DisplayBox
            title="Vinhos"
            content="Conheça a nosso estoque de vinhos|"
          />
          <DisplayBox
            title="Açougue"
            content="Muita variedade, muita qualidade, baixo preço"
          />
        </section>
      </body>
    </>
  );
};

export default Home;
