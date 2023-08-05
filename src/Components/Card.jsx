import './card.css';

export default function Card(props) {
    return(
        <div className="card">
            <div className="card_image">
                <div className="wrapper">
                    <img src={props.imageLink} alt={props.imageAlt} />
                </div>
            </div>
            <div className="card_datails">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href={props.link} target='_blank' rel='noreferrer'>Saiba mais!</a>
            </div>
        </div>
    )
}