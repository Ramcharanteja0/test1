const dances = [
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm9tZnpqZWN1dWJla2k5dDhoOTE3ejhhNW43M3VhaWRpNjRjZWZ5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wkW0maGDN1eSc/giphy.gif',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWU1Z2txaHZkZ29zam85OXN1a2JzZzM1NGs0cHZoNHAyN2hlaHpzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/137qIhWsIf9bDW/giphy.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG1uNXZxZGY3eTU2OHI2Z3RxNDdxZTVsaGNzcnl0eDg1c2o1bXdwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VHmenyqdCbn32/giphy.gif'
];

let currentDance = 0;

function changeDance() {
    currentDance = (currentDance + 1) % dances.length;
    document.querySelector('.anime-character img').src = dances[currentDance];
}