class Category {
  private nome;
  private descricao;
  private conection;

  constructor(nome: string, descricao: string, conection:string) {
    this.conection = conection;
    this.descricao = descricao;
    this.nome = nome;
  }

  instanciaBanco() {
    // faz a instanciação do banco
  }

  fechaConexao() {
    // fecha a conexão com o banco
  }


  adicionaCategoria() {
    // adiciona uma categoria no banco
  }
}