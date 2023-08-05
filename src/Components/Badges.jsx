import './badges.css';

export default function Badges(props) {
    return (
        <li className='badges'>
            <i class={props.name}></i>
            <p>{props.text}</p>
        </li>
    )

}