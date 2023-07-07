type HeaderProps = {
    value: string
}

export const Header = (props: HeaderProps) => {
    return (
        <div className="col-lg-12 col-md-12 mb-12 text-center">
            <div className="title">
                <img className="logo-left" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" />
                <h1>{props.value}</h1>
                <img className="logo-right" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" />
            </div>
        </div>
    )
}