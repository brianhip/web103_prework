import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../client";
import CreatorForm from "./CreatorForm";

export default function EditCreator() {
    const { id } = useParams();
    const [creatorData, setCreatorData] = useState(null)
    // Get the information of the creator from the database
    useEffect(() => {
        async function fetchCreator() {
            const { data, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching the creator:', error);
                return;
            }

            setCreatorData({
                name: data.name || '',
                imageURL: data.imageURL || '',
                description: data.description || '',
                youtube: data.youtube || '', 
                instagram: data.instagram || '',
                twitter: data.twitter || '',
            })
        }
        if (id) {
            fetchCreator();
        }
    }, [id])

    const handleUpdate = async (formData) => {
        // API call
        const { data, error } = await supabase
            .from('creators')
            .update(formData)
            .eq('id', id)
            .select(); 

        if (error) {
            throw error;
        }
        return data;
    }
    // Fetch a list of creators
    return (
        <>
            {
                creatorData? (
                    <CreatorForm 
                        mode={'edit'} 
                        creatorId={id} 
                        initialData={creatorData} 
                        onSubmit={handleUpdate}
                    />
                ) : (
                    <div>Loading...</div>
                )
            }
        </>
    )
}
