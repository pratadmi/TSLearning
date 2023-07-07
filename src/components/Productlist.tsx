type ProductList = {
    title: string
    desc: string
    id: number
    image: string
}

export const ProductList = (props: ProductList) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4" key={props.id}>
            <div className="card h-100">
            <div className="card-image" style={{ backgroundImage: `url(${props.image})` }}></div>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <h6 className="card-description">{props.desc}</h6>
                </div>
            </div>
        </div>
    )
}

