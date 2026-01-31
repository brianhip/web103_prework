/* FORM:
    If comming from edit then the props should have the n infomation of the creator
*/
import React, { useState } from "react";
import { useNavigate } from "react-router";
import DeleteButton from "../components/deleteButton";

export default function CreatorForm(props) {
    const navigate = useNavigate();
    // PROPS
    const { mode, creatorId, initialData, onSubmit } = props;

    // STATE
    const [formData, setFormData] = useState(initialData || {
        name: '',
        imageURL: '',
        description: '',
        youtube: '',
        instagram: '',
        twitter: ''
    })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // FUNCTIONS
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        setError(null);
        setLoading(true);

        // Validation
        if (!formData.name || !formData.description) {
            setError('Please fill in all required fields');
            setLoading(false);
            return;
        }

        try {
            await onSubmit(formData);
            setLoading(false);

            if (mode === 'add') {
                setFormData({ name: '', imageURL: '', description: '', youtube: '', instagram: '', twitte: '' });
            }
            navigate('/');
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };
    
    // Handle the changes in input fieds
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    // Fetch a list of creators
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {error && (
                    <div style={{ 
                        color: 'red', 
                        padding: '10px', 
                        marginBottom: '10px',
                        border: '1px solid red',
                        borderRadius: '4px'
                    }}>
                        {error}
                    </div>
                )}
                <div>
                    <label>
                        Name *
                        <input
                            type="text"
                            name="name"
                            value={formData.name} 
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Image URL
                        <input
                            type="text"
                            name="imageURL"
                            value={formData.imageURL} 
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Description *
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Youtube
                        <input
                            type="text"
                            name="youtube"
                            value={formData.youtube} 
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Twitter
                        <input
                            type="text"
                            name="twitter"
                            value={formData.twitter} 
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Instagram
                        <input
                            type="text"
                            name="instagram"
                            value={formData.instagram} 
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="submit-delete-buttons">
                    <button 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? 'SUBMITTING...' : 'SUBMIT'}
                    </button>
                    { mode == 'edit'? 
                        <DeleteButton id={creatorId}></DeleteButton> :
                        <></>
                    }
                        
                </div>
            </form>
        </div>
    )
}
