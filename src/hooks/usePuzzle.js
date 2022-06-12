import { useEffect, useState } from "react";
import shuffleArray from "../utils/shuffleArray";

const usePuzzle = () => {
    const [isWinner, setIsWinner] = useState(false);
    const [turn, setTurn] = useState(1);
    const [imgOrder, setImgOrder] = useState(() => initImgOrder());
    const [moveAnimation, setMoveAnimation] = useState([-1, ""]);


    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);  // add event listener to window")
        return () => window.removeEventListener("keyup", handleKeyUp);  // remove event listener from window
    }, [imgOrder]);


    function initImgOrder() {
        const order = [];
        for (let i = 1; i <= 16; i++) {
            order.push(i);
        }
        shuffleArray(order);

        return order;
    }

    function handleKeyUp(e) {
        e.preventDefault();
        let direction = 0;

        if (e.key === "ArrowUp") {

            direction = 4;
        }
        if (e.key === "ArrowDown") {

            direction = -4;
        }
        if (e.key === "ArrowLeft") {
            direction = 1;

        }
        if (e.key === "ArrowRight") {
            direction = -1;

        }
        move(direction, e.key)
    }

    function move(direction, key) {


        let emptyPiece = imgOrder.findIndex((x) => x === 16);
        if (!imgOrder[emptyPiece + direction])
            return;
        if (emptyPiece % 4 === 3 && direction === 1)
            return;
        if (emptyPiece % 4 === 0 && direction === -1)
            return;

        const movingPiece = [emptyPiece + direction, key];
        setMoveAnimation(movingPiece);

        window.removeEventListener("keyup", handleKeyUp);

        setTimeout(() => {
            setImgOrder((prev) => {

                let newOrder = [...prev];
                newOrder[emptyPiece] = newOrder[emptyPiece + direction]
                newOrder[emptyPiece + direction] = 16;
                checkWinner(newOrder);
                return newOrder;
            })

        }, 300);

        setTurn((prev) => prev + 1);
    }

    function checkWinner(newOrder) {
        if (newOrder.join(",") !== "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16")
            return;

        setIsWinner(true);
        setTimeout(() => alert("You won!"), 100);
    }

    return { isWinner, setIsWinner, turn, imgOrder, moveAnimation };
}

export default usePuzzle