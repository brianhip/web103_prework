import { useNavigate } from "react-router-dom";
import supabase from "../client";

export default function DeleteButton(props) {
    const { id } = props;
    const navigate = useNavigate();

    const handleDelete = async () => {
        // API call
        try {
            const { status, error } = await supabase
                .from('creators')
                .delete()
                .eq('id', id);

            if (error) {
                throw error
            }
            alert('Creator deleted successfully!', status);
            navigate('/')
        } catch (error) {
            console.error('Error deleting creator:', error);
        }
        
    }
    return (
        <button 
            type="button" 
            onClick={handleDelete}
        >
            DELETE
        </button>
    )
}