/* CREATE:
    * User can add new creator they just need to include all three details
        * Name
        * Link to channel or page (Validate is unique URL)
        * Description of channel
    * Update list state:
        * After creation it will be displayed in the list of creators
*/

import React from "react";
import supabase from "../client";
import CreatorForm from "./CreatorForm";

export default function AddCreator() {
    // Handle the changes in input fields
    const handleCreate = async (formData) => {
        const { data, error } = await supabase
            .from('creators')
            .insert(formData)
            .select();
        if (error) {
            throw error
        }
        return data;
    };

    return (
        <CreatorForm 
            mode={"add"} 
            creatorId={null}
            initialData={{}}
            onSubmit={handleCreate}
        />
    );
}