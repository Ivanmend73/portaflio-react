import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title" style={{fontFamily: "sans-serif"}}>Proyectos</h1>
        <p className="pl-desc" style={{fontSize:"1.2rem"}}>
          Acá te presento algunos de mis proyectos que he ido realizando
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product id={item.id} img={item.img} link={item.link} text={item.text}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
