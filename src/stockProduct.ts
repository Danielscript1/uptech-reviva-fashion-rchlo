interface imagens{
  url:string;
  descricao:string;
}

export interface stockProduct{
  id:number;
  nome: string;
  url:string,
  quantidade_disponivel: number;
  preco: number;
  tamanhos_disponiveis:string;
  imagens:[imagens];
}
