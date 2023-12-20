import DisplayBox from "../../components/DisplayBox";
import "./home.css";
const Home = () => {
  return (
    <>
      <body className="home_body">
        <section className="home_ads">
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
