import "./product.css";

const Product = ({img, link, text, id}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
          <div className="capa">
            <p className="titulo">Proyecto {id}</p>
            <h3 className="text">{text}</h3>
          </div>
      </a>
    </div>
  );
};

export default Product;
