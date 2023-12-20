import "./DisplayBox.css";

interface IDisplayBox {
  title: string;
  content: string;
}

const DisplayBox = ({ title, content }: IDisplayBox) => {
  return (
    <section className="DisplayBox">
      <h2>{title}</h2>

      <p>{content}</p>
    </section>
  );
};

export default DisplayBox;
