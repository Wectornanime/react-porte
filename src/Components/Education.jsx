import './education.css';
import Container from "./Container";

export default function Education(props) {
    return(
        <Container class="education">
            <h2>Education</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, modi amet sed odit molestias exercitationem soluta impedit dolor incidunt odio optio iusto corporis voluptatem hic debitis cupiditate tempore ducimus perferendis.</p>
            <div className="education-badges">
                <ul>{props.children}</ul>
            </div>

        </Container>
    )
};