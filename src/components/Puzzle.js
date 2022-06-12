import React from 'react'
import usePuzzle from '../hooks/usePuzzle'
import slicedImages from '../data/images.js';
import Piece from './Piece';
import "../styles/puzzle.scss";

const Puzzle = () => {

    const { turn, imgOrder, moveAnimation } = usePuzzle();


    return (
        <div>
            <h3>{turn}</h3>
            <div className='puzzle'>
                {imgOrder.map((image, index) => <Piece img={slicedImages[image - 1]} key={index} movementClass={index === moveAnimation[0] ? moveAnimation[1] : ""} />)}
            </div>
        </div>
    )
}

export default Puzzle