let bebida = "cha";
let valor;

switch (bebida) {
    case "cafe":
        valor = 3.00;
        console.log("Pedido de cafe realizado. Valor a pagar: R${valor}");
        break;
    case "leite":
        valor = 2.50;
        console.log("Pedido de leite realizado. Valor a pagar: R${valor}");
        break;
    case "cha":
        valor = 2.00;
        console.log("Pedido de cha realizado. Valor a pagar: R${valor}");
        break;
    default:
        console.log("A bebida selecionada deve ser cafe, leite ou cha. Tente novamente.");
        break;
}


class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}.`);
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`${this.nome} está programando em ${this.linguagem}.`);
  }
}

// Criando instâncias de um gerente e de um desenvolvedor
let gerente = new Gerente('Carlos', 35, 'Gerente de Projetos', 'TI');
let desenvolvedor = new Desenvolvedor('Ana', 28, 'Desenvolvedora', 'JavaScript');

// Chamando os métodos apropriados para cada funcionário
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();
