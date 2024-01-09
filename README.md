# MVP Sistema de Venda e Estoque Bar

# Requisitos Funcionais

## \*Rotas de Autenticação e Autorização

- [x] Deve ser possível cadastrar usuário como Comum;
- [x] Deve ser possível cadastrar usuário como ser um Administrador do Sistema;
- [x] Deve ser possível criar uma sessão no sistema;

- [ ] Admin

  - [x] Deve ser possível criar uma nova conta no sistema;
  - [ ] Deve ser possível atualizar a contra de outro usuário;
  - [ ] Deve ser possível deletar um usuário do sistema;
  - [ ] Deve ser possível listar todas as contas do sistema;
  - [ ] Deve ser possível pegar os dados de qualquer usuário do sistema;

- [ ] Todos
  - [ ] Deve ser possível atualizar sua própria conta no sistema
  - [ ] Deve ser possível listar os dados da sua própria conta;
  - [ ] Deve ser possível validar um usuário no sistema;

## \*Rota de Vendas

### \*Gestão de Produtos:

- [x] \*Tabela de Produtos
  - [ ] Adicionar Produto;
  - [ ] Editar Produto;
  - [ ] Excluir Produto;
- [ ] \*Recuperar informações detalhadas sobre um produto específico;
- [ ] \*Listar todos os produtos disponíveis por query de pesquisas;

### \*Gestão de Pedidos de Venda:

- [x] \*Tabela de Pedidos de Venda
- [ ] \*Criar um novo pedido de Venda;
- [ ] \*Adicionar produtos a um pedido existente;
- [ ] \*Remover produtos de um pedido;
- [ ] \*Visualizar detalhes de um pedido específico;
- [ ] \*Finalizar um pedido como pago (cartão (cred/deb), pix, dinheiro);

### \*Relatórios e Estatísticas:

- [ ] \*Visualizar estatísticas de produtos mais vendidos;
- [ ] \*Acessar dados históricos de pedidos;
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

- [ ] Só deve ser possível criar uma nova conta se você estiver autenticado como administrador;
- [ ] Só deve ser possível listar todos os usuários se você for administrador;
- [ ] Apenas administradores podem deletar um usuário
- [ ] Apenas Administradores devem alterar os dados de algum usuário que não ele próprio;
- [ ] Só deve ser possível pegar dados de um único usuário como administrador OU em caso de usuário comum, o seu próprio;

## Rota de Vendas:

- [ ] Apenas usuários autenticados com autorização de administrador podem adicionar, editar ou excluir produtos;
- [ ] Todos os usuários autenticados podem recuperar informações sobre produtos;

- [ ] Apenas usuários autenticados podem criar, adicionar, remover ou visualizar pedidos de venda (atuais e histórico);
- [ ] Um pedido pode ser finalizado como pago marcado por qualquer usuário autenticado (NA VERSÃO MVP);

## Rotas de Estoque

- [ ] Apenas administradores podem adicionar novos produtos, atualizar informações ou registrar a quantidade inicial no estoque;
- [ ] Cada transação de estoque deve registrar o usuário responsável pela operação;
- [ ] Todas as entradas, saídas e transferências de produtos devem ser rastreadas (saber quem fez);

- [ ] Usuários autenticados podem consultar o saldo atual e filtrar produtos por categoria, fornecedor, etc.

- [ ] Backups regulares dos dados do estoque devem ser mantidos.

# Requisitos Não Funcionais (TODO)
