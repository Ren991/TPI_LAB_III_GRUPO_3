import React, { createContext, useState, useContext, useEffect } from 'react';
import { db } from '../../Services/firebase';
import { doc, updateDoc } from 'firebase/firestore';

// Crear el contexto
const UserContext = createContext();

// Hook personalizado para usar el contexto
export const useUser = () => useContext(UserContext);

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signIn = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userData.token);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem("userRol");
  };

  const addFavorites = async (movieId) => {
    if (user) {
      const updatedFavorites = [...user.favorites, movieId];
      const updatedUser = {
        ...user,
        favorites: updatedFavorites,
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      try {
        const userDoc = doc(db, 'users', user.id);
        await updateDoc(userDoc, { favorites: updatedFavorites });
      } catch (error) {
        console.error("Error adding favorite: ", error);
      }
    }
  };

  const deleteFavorites = async (movieId) => {
    if (user) {
      const updatedFavorites = user.favorites.filter(favoriteId => favoriteId !== movieId);
      const updatedUser = {
        ...user,
        favorites: updatedFavorites,
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));

      try {
        const userDoc = doc(db, 'users', user.id);
        await updateDoc(userDoc, { favorites: updatedFavorites });
      } catch (error) {
        console.error("Error deleting favorite: ", error);
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, signIn, signOut, addFavorites, deleteFavorites }}>
      {children}
    </UserContext.Provider>
  );
};
