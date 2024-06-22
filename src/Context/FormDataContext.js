import React, { createContext, useContext, useState } from 'react';

// Create a context to store the form data
const FormDataContext = createContext();

// Create a provider component
export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Custom hook to access the form data
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
