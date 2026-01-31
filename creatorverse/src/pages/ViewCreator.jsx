import React, { useEffect, useState } from "react";
import CreatorCard from "../components/CreatorCard";
import supabase from "../client";
import { useNavigate, useParams, Link } from "react-router-dom";
import DeleteButton from "../components/deleteButton";
import { Youtube, Instagram, Twitter } from "lucide-react";

export default function ViewCreator() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [creator, setCreator] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCreator() {
            const { data, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching creator:', error);
                setLoading(false);
                return;
            }

            setCreator(data);
            setLoading(false)
        }
        if (id) {
            fetchCreator();
        }
    }, [id])

    // Find the creator by using find then use that to create the CreatorCard
    if (loading) return <div>Loading...</div>;
    return (
       <main className="container">
            <article>
                {creator.imageURL && (
                    <img 
                        src={creator.imageURL} 
                        alt={creator.name}
                    />
                )}
                
                <h1>{creator.name}</h1>
                <p>{creator.description}</p>
                { creator.youtube ?
                    <Link to={"https://www.youtube.com/" + creator.youtube} role="button">
                        <Youtube size={20}/>
                        {"\t@"+creator.youtube}
                    </Link> : null 
                }
                { creator.instagram ?
                    <Link to={"https://www.instagram.com/" + creator.instagram} role="button">
                        <Instagram size={20}></Instagram>
                        {"\t@"+creator.instagram}
                    </Link> : null 
                }
                { creator.twitter ?
                    <Link to={"https://www.twitter.com/" + creator.twitter} role="button">
                        <Twitter size={20}></Twitter>
                        {"\t@"+creator.twitter}
                    </Link> : null 
                }
                <footer>
                    <button onClick={() => navigate(`/edit/${id}`)}>
                        EDIT
                    </button>
                    <DeleteButton id={id} />
                </footer>
            </article>
        </main>
    )
}
