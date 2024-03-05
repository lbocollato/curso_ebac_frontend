function Ficha(proprietario, tipo, modelo, ano, cor){
    this.proprietario = proprietario;
    this.tipo = tipo;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
}
function Veiculo(proprietario, tipo, modelo, ano, cor){
    Ficha.call(this, proprietario, tipo, modelo, ano, cor);
    
}

var veiculo1 = new Veiculo("Maria", "Carro", "Fox", 2020, "preto");
var veiculo2 = new Veiculo("Joao", "Carro", "Ka", 2019, "vermelho");
var veiculo3 = new Veiculo("Luis", "Moto", "Virago", 2000, "verde");

console.log(veiculo1);
console.log(veiculo2);
console.log(veiculo3);