type ProductProps = {
  productId: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export const Product = (props: ProductProps) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <div className="card-image" style={{ backgroundImage: `url(${props.image})` }}></div>
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <h3 className="card-price">${props.price}</h3>
          <h6 className="card-description">{props.description}</h6>
        </div>
      </div>
    </div>
  );
};
