import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Images } from "../../shared/interfaces/promo";

// Defina as props do componente MyCarousel
interface MyCarouselProps {
  promos: Images[];
}

const MyCarousel = ({ promos }: MyCarouselProps) => {
  return (
    <Carousel className="w-100">
      {promos.map((promo) => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={promo.src} alt={promo.src} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default MyCarousel;
