import './social-Icons.css'

export default function SocialIcon(props){
    return (
        <li className="social-icon">
            <a href={props.link} target="_blank" rel="noreferrer">
            <ion-icon name={props.name}></ion-icon>
            </a>
        </li>
    )
}