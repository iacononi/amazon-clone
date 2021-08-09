import React, { createContext, useContext, useReducer } from "react";

//Prepares Data Layer
export const StateContext = createContext();

//wrap app and provide datalayer
export const StateProvider = ({ reducer, initialState, children }) => ( 
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull info from datalayer
export const useStateValue = () => useContext(StateContext);