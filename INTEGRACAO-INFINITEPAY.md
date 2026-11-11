# Integração InfinitePay — preparação segura

A seção de planos exibe valores aprovados: Essencial R$ 49,90, Profissional R$ 99,90, Empresarial R$ 199,90.

A função `netlify/functions/create-checkout.js` está deliberadamente BLOQUEADA e não cria cobranças, mesmo que a variável `MILANI_PAYMENTS_ENABLED` seja definida. A função não deve ser ativada até que existam:

1. Contas reais com autenticação e armazenamento de pedidos em banco de dados.
2. Endpoint de checkout com valores determinados exclusivamente pelo servidor, identificação de cliente e pedido único (`order_nsu`).
3. Integração autenticada com a API InfinitePay e credenciais somente nas variáveis de ambiente do Netlify.
4. Webhook validado e consulta de status pelo servidor, com tratamento idempotente e registro de pagamentos.
5. Testes de fluxo completo, falhas, duplicações e reembolsos.
6. Confirmação do mecanismo de recorrência disponível para conta CPF; o endpoint de link avulso NÃO garante assinatura mensal.

InfiniteTag informada: `joaomilani`. API documentada pelo usuário: `POST https://api.checkout.infinitepay.io/links`. Preços em centavos: 4990, 9990 e 19990.

Não publicar API keys, senhas, dados de clientes ou credenciais no GitHub. Não considerar a área de cliente demonstrativa como autenticação real.
