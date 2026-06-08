//Criação da classe de item mágico

class itemMagico {
    
    //Construtor recebe os atributos da classe Item Magico
    constructor(tipo, dano, resistencia) {
        this.tipo = tipo;
        this.dano = dano;
        this.resistencia = resistencia; 
    }
    
    calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
}

const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

const itemPersonalizado = new ItemMagico('arma', 200 , 300);

print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

const danoTotal = itemPersonalizado.calcularDano();

print("dano em combate: " + danoTotal);