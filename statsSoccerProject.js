// Criação de objetos usando classes em JavaScript


// Criação da classe de estatísticas de jogador
class statsPlayer {
    constructor(name, goals, assists, matches) {
        this.name = name;
        this.goals = goals;
        this.assists = assists;
        this.matches = matches;
    }


// Método para calcular o total de gols + assistências
    calculateTotalGA() {
        return this.goals + this.assists;
    }

// Método para calcular a avaliação do jogador com base em suas estatísticas
    calculateAvaliation() {
        if (this.matches === 0) {
            return 0;
        }

        let goalsPerMatch = this.goals / this.matches;
        let assistsPerMatch = this.assists / this.matches;
        let gaPerMatch = this.calculateTotalGA() / this.matches;

        let rating = 5 
            + (goalsPerMatch * 3.5)
            + (assistsPerMatch * 2.5)
            + (gaPerMatch * 1);

        return Math.min(rating, 10);
    }
}

let namePlayer = "Emive";
let goalsPlayer = 2;
let assistsPlayer = 2;
let matchesPlayer = 5;

let statsWelton = new statsPlayer(namePlayer, goalsPlayer, assistsPlayer, matchesPlayer);

console.log("Nome do jogador: " + statsWelton.name);
console.log("Gols: " + statsWelton.goals);
console.log("Assistências: " + statsWelton.assists);
console.log("Partidas: " + statsWelton.matches);

let totalGA = statsWelton.calculateTotalGA();
console.log("Total de Gols + Assistências: " + totalGA);

let avaliation = statsWelton.calculateAvaliation();
console.log("Avaliação do jogador: " + avaliation.toFixed(2));