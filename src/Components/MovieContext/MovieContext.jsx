import React, { createContext, useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Services/firebase';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "peliculas"));
            const moviesList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMovies(moviesList);
        } catch (error) {
            console.error("Error fetching movies: ", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    
    return (
        <MoviesContext.Provider value={{ movies , fetchMovies}}>
            {children}
        </MoviesContext.Provider>
    );
};