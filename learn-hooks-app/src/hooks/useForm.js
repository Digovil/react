import { useState } from "react";

export default function useForm(initialState = {}) {

    // Primero recibe un objeto
    const [values, setValues ] =  useState(initialState);

    const  handleInputChange = ({target}) => {

        setValues({
          ...values,
          [target.name]: target.value
        })
    }
    
    return [values,handleInputChange]
    
    
}