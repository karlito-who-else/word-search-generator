const getRandomItem: any[] = (list) => array[Math.floor(Math.random() * list.length)];

const directions: string[] = ['up', 'down', 'left', 'right', 'up-left', 'up-right', 'down-left', 'down-right'];

const words: string[] = ['toy', 'cow', 'square', 'play', 'round', 'floor', 'circle', 'ceiling', 'window', 'xylophone', 'giraffe'];

const longestWord: string = words.reduce(function (a, b) { return a.length > b.length ? a : b; });

const gridSize: int = Math.floor(Math.random() * ((longestWord.length + 5) - longestWord.length + 1)) + longestWord.length;

words.forEach(word => {
    let direction: string = getRandomItem(directions);

    if(direction.includes === 'left' || direction.includes === 'up') {
        direction = getRandomItem(directions);
    }
    
    if(direction.includes === 'left' || direction.includes === 'up') {
        direction = getRandomItem(directions);
    }

    
});