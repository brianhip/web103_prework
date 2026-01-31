import React from "react";
import { Link } from "react-router-dom";
import { Youtube, Instagram, Twitter } from "lucide-react";

export default function CreatorCard(props) {
    return (
            <article>
                <div>
                    {props.imageURL ? <img src={props.imageURL}></img>: null}
                </div>
                
                <h2>{props.name}</h2>

                <p>{props.description.split('').slice(0,100).join('') + (props.description.length > 100 ? '...' : '')}</p>
                <footer >
                    <Link to={"/creator/" + props.id} role="button">
                        <div>ⓘ</div>
                    </Link>
                    <Link to={"/edit/" + props.id} role="button">
                        <div>✏️</div>
                    </Link>
                    { props.youtube ?
                    <Link to={"https://www.youtube.com/" + props.youtube} role="button">
                        <Youtube size={20}/>
                    </Link> : null }
                    { props.instagram ?
                    <Link to={"https://www.instagram.com/" + props.instagram} role="button">
                        <Instagram size={20}></Instagram>
                    </Link> : null }
                    { props.twitter ?
                    <Link to={"https://www.twitter.com/" + props.twitter} role="button">
                        <Twitter size={20}></Twitter>
                    </Link> : null }
                </footer>
            </article>
        
    )
}
