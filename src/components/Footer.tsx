type FooterProps = {
    textValue: string
}

export const Footer = (props: FooterProps) => {
    return (
        <div className="col-lg-12 col-md-12 mb-12 text-center">
            <div className="footer">
                <h3>{props.textValue}</h3>
            </div>
        </div>
    )
}