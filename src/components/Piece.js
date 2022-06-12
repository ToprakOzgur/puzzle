import React, { useEffect } from 'react'
import { useRef } from 'react';
import "../styles/piece.scss";

const Piece = ({ img, movementClass }) => {

    const imgRef = useRef(null);

    useEffect(() => {
        const imgRect = imgRef.current?.getBoundingClientRect();
        console.log(imgRect);
    }, [img]);


    return (
        <div className="piece">
            {
                img && <img className={movementClass} ref={imgRef} src={img} alt="piece" />
            }
        </div>
    )
}

export default Piece