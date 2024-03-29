# MVP Sistema de Venda e Estoque Bar

# Requisitos Funcionais

## \*Rotas de Autenticação e Autorização

- [x] Deve ser possível criar uma sessão no sistema;
- [x] Ao Iniciar o sistema pela primeira vez, deve ser possível acessar a conta de um admin existente;
- [x] O sistema não pode ficar sem um usuário administrador;
- [x] Só deve ser possível criar uma nova conta se você estiver autenticado como administrador;

- [x] Admin

  - [x] Deve ser possível criar uma nova conta no sistema;
  - [x] Deve ser possível listar todas as contas do sistema;
  - [x] Deve ser possível pegar os dados de qualquer usuário do sistema;
  - [x] Deve ser possível deletar um usuário do sistema;
  - [x] Deve ser possível atualizar a contra de outro usuário;

- [x] Admin e Common
  - [x] Deve ser possível atualizar sua própria conta no sistema;
  - [x] Deve ser possível listar os dados da sua própria conta;
  - [x] Deve ser possível validar um usuário no sistema;

## \*Rota de Vendas

### \*Gestão de Produtos:

- [x] Tabela de Produtos

  - [x] \*Admin
    - [x] Adicionar Produto;
    - [x] Editar Produto;
    - [x] Excluir Produto;

- [x] Common
  - [x] \*Listar todos os produtos disponíveis por query de pesquisas;
  - [x] Recuperar informações detalhadas sobre um produto específico;

### \*Gestão de Pedidos de Venda:

- [x] \*Tabela de Pedidos de Venda

  - [x] \*Criar um novo pedido de Venda;
  - [x] \*Visualizar detalhes de um pedido específico;
  - [x] \*Atualizar um pedido de venda
  - [x] \*Listar todos os pedidos de venda abertos;
  - [x] \*Finalizar um pedido como pago (cartão (cred/deb), pix, dinheiro);

  - [x] Admin
    - [x] \*Listar todos os pedidos de vendas;
    - [x] \*Listar todos os pedidos de venda fechados;

### Relatórios e Estatísticas:

- [ ] Visualizar estatísticas de produtos mais vendidos;
- [x] Acessar dados históricos de pedidos;
- [ ] Gerar relatórios de vendas diárias, semanais e mensais;

### Processamento de Pagamentos:

- [ ] Aceitar diferentes formas de pagamento (cartão (cred/deb), pix, dinheiro);
- [ ] Calcular o total do pedido incluindo taxas e impostos;
- [ ] Registrar informações de transações de pagamento;

## Rotas de Estoque

### \*Cadastro de Estoque:

- [ ] \*Tabela de Estoque
  - [ ] \*Adicionar novos produtos ao estoque;
  - [ ] \*Atualizar informações de produtos existentes (preço, descrição, etc);
  - [ ] \*Registrar a quantidade inicial de cada produto em estoque;

### \*Rastreabilidade:

- [ ] \*Identificar e registrar os responsáveis por cada transação;
- [ ] Rastrerar o histórico de movimentação de cada produto (entradas, saídas, transferências);

### \*Consulta de Estoque:

- [ ] \*Consultar o saldo atual de cada produto em estoque;
- [ ] Filtrar produtos por categoria, fornecedor(?), etc; (?)
- [ ] Verificar a disponibilidade de produtos em tempo real;

### \*Relatórios de Estoque:

- [ ] Obter análises sobre produtos mais vendidos, menos vendidos, etc;

### \*Segurança:

- [ ] Implementar controles de acesso para garantir que apenas usuários autorizados possam fazer alterações no estoque;
- [ ] Manter backups regulares dos dados do estoque para evitar perdas acidentais;
- [ ] Proteger informações sensíveis, como preços de custo e margens de lucro.

### Pedidos de Reposição;

- [ ] \*Receber alertas quando os níveis de estoque atingirem um ponto de reposição;
- [ ] Gerar Pedidos de Reposição Com base nos níveis do Estoque;
- [ ] Permitir a revisão e aprovação manual dos pedidos antes de enviá-los aos fornecedores;

### Integrações

- [ ] Suportar integração com leitores de códigos de barras e RFID, maquininha, etc;

# Regras de Negócio

## Autenticação (TODO):

## Rota de Vendas:

- [x] Apenas usuários autenticados com autorização de administrador podem adicionar, editar ou excluir produtos;
- [x] Todos os usuários autenticados podem recuperar informações sobre produtos;

- [x] Apenas usuários autenticados podem criar, adicionar, remover ou visualizar pedidos de venda (atuais e histórico);
- [x] Um pedido pode ser finalizado como pago marcado por qualquer usuário autenticado (NA VERSÃO MVP);

## Rotas de Estoque

- [ ] Apenas administradores podem adicionar novos produtos, atualizar informações ou registrar a quantidade inicial no estoque;
- [ ] Cada transação de estoque deve registrar o usuário responsável pela operação;
- [ ] Todas as entradas, saídas e transferências de produtos devem ser rastreadas (saber quem fez);

- [ ] Usuários autenticados podem consultar o saldo atual e filtrar produtos por categoria, fornecedor, etc.

- [ ] Backups regulares dos dados do estoque devem ser mantidos.

# Requisitos Não Funcionais (TODO)
