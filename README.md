# Bolão Balera 2026 — Mata-Mata · Ranking + Exportação (Amaro)

Igual ao app **Geral** (`../Bolao_Balera_2026_Mata-Mata_Geral`), porém destinado ao responsável pela Intranet: inclui o botão **Exportar Excel** na aba Ranking.

A diferença é só o `index.html` definir `window.APP_VARIANT = 'amaro'` (ativa o botão). `app.js` e `dados-mm.js` são os mesmos do Geral.

## Exportação
Gera `IMPORTACAO_RANKING_BALERA_MATAMATA.xlsx` com as colunas: `cpf, placar, artilheiros, totalpontos` (CPF como texto, preservando zeros à esquerda). O CPF vem do próprio palpite (a página de palpites coleta CPF obrigatório).

> Se o layout do importador da Intranet exigir colunas diferentes, ajuste `MM.exportar` em `app.js`. Se algum participante não tiver CPF no palpite, defina um mapa `window.CPF_BY_NAME = { "Nome": "cpf" }` antes do `app.js` (fallback por nome).

Demais instruções: ver o README do app Geral.
