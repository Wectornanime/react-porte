import './container.css';

export default function Container(props) {
    return (
        <section className={`container ${props.class}`}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="container-badges">
                <ul>{props.children}</ul>
            </div>
        </section>
    )
}