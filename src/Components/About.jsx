import './about.css';
export default function About(props) {
    return (
        <section className="about">
            <div className="left">
                <div className="image">
                    <div className="image_wrapper">
                        <img src={props.imageURL} alt={`Foto de ${props.imageAlt}`} />
                    </div>
                </div>
                <div className="details">
                    <h2>{props.name}</h2>
                    <p>{props.subName}</p>
                    <ul>
                        {props.children}
                    </ul>
                </div>
            </div>

            <div className="right">
                <h2>About me</h2>
                <p>{props.description}</p>
            </div>
        </section>
    );
}