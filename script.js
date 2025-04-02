function changeDance() {
    const gif = document.querySelector('.anime-character img');
    const newGifs = [
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21hczluaTlrZGxvMGNuYW9qZzk0anB1ZnY4cnZsMTdmczRuemd2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RMpuiZ0PT6SWwr0NQR/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXJ5cXpidmR2Z3ZuNDJhMThvM3YxaTJtbW5rZ3ExMjRoMXc1Zzd4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TBfvOdxaKsKd9rPRwL/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWV3N2VqbzJkaGVvbTVpMnE1eDhieW83cWlzZnNjZXl0OWpkcHJ2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/28aGE5xerXkbK/giphy.gif"
    ];
    const randomIndex = Math.floor(Math.random() * newGifs.length);
    gif.src = newGifs[randomIndex];
}