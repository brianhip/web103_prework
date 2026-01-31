import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import supabase from '../client'
import CreatorCard from "../components/CreatorCard";

export default function ShowCreators() {
    const [data, setData] = useState([])
    
    useEffect(()=>{
        async function fetchCreators() {
            const { data, error } = await supabase
                .from('creators')
                .select('*')
            if (error) {
                return;
            }
            setData(data)
        }
        fetchCreators();
    },[]);

    return (
        <div className="creator-list">
            { data.length > 0 ? 
                data.map((creator, index) => (
                <CreatorCard 
                    key = {index}
                    id = {creator.id}
                    name={creator.name} 
                    description={creator.description} 
                    imageURL={creator.imageURL}
                    youtube={creator.youtube}
                    instagram={creator.instagram}
                    twitter={creator.twitter}
                />
                )) 
                : "No Creators Yet"}
        </div>
    )
}
