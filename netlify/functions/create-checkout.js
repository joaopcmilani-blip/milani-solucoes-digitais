// Checkout InfinitePay — desativado por padrão. Não inserir chaves no navegador.
// Ative somente após validar o contrato da API, a verificação de pagamento e a recorrência.
const PLANS = Object.freeze({
  essencial: { name: 'Plano Essencial', cents: 4990 },
  profissional: { name: 'Plano Profissional', cents: 9990 },
  empresarial: { name: 'Plano Empresarial', cents: 19990 }
});
const json = (statusCode, payload) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  body: JSON.stringify(payload)
});
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Método não permitido.' });
  if (process.env.MILANI_PAYMENTS_ENABLED !== 'true') {
    return json(503, { error: 'Contratação online em preparação. Nenhum pagamento foi iniciado.' });
  }
  // Não iniciar cobranças até implementar: autenticação, pedidos persistentes,
  // identificação do comprador, proteção contra abuso, validação de callback,
  // confirmação server-to-server e modelo de renovação.
  return json(503, { error: 'Checkout aguardando validação de segurança.' });
};
