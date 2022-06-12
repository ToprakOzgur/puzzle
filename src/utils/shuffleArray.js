function shuffleArray(order) {
    for (let i = 0; i < order.length; i++) {
        const randomIndex = Math.floor(Math.random() * order.length);
        const temp = order[i];
        order[i] = order[randomIndex];
        order[randomIndex] = temp;
    }

}

export default shuffleArray