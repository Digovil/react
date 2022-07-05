import React from "react";

const ShowIncrement = React.memo(function ShowIncrement ({increment}) {
    // console.log('Me volví a generar D:');

    return (  
        <button
            className= "btn btn-primary"
            onClick={()=>{
                increment(5)
            }}
        >
            Incrementar
        </button>
    );
})

export default ShowIncrement;