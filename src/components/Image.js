import React from "react";





const Image = () => {

    //estilos en linea

    const styles = {
        width: 400,
        margin: '1em auto',
        borderRadius: '10px'
    }

    return (
        <div style={styles}>
            <img 
            src='https://images.pexels.com/photos/31002127/pexels-photo-31002127/free-photo-of-luces-de-neon-cinematograficas-en-las-vibrantes-calles-de-tokio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            alt='Imagen Increible'
            width='100%'
            />
        </div>
    );

}

export default Image;