import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
    return (
        // Title Creatorverse
        <header style={{ 
            backgroundImage: 'url(https://img.freepik.com/premium-photo/image-that-represent-social-media_1091144-16657.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textAlign: 'center', 
            padding: '3rem 0',
            marginBottom: '2rem',
            position: 'relative'
        }}>
            
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'inline-block', padding: '0.5rem 1rem' }}>
                    CREATORVERSE
                </h1>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                    <button onClick={() => navigate('/')}>
                        VIEW ALL CREATORS
                    </button>
                    <button onClick={() => navigate('/new')} className="secondary">
                        ADD CREATOR
                    </button>
                </div>
            </div>
        </header>
    )
}
