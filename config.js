/* ============================================================================
 * Configuração do app de Ranking (Amaro / Intranet)
 * ----------------------------------------------------------------------------
 * Esta variante: edita e PUBLICA os resultados oficiais + exporta para a Intranet.
 * ========================================================================== */
window.APP_VARIANT = 'amaro';

/* Fluxo de LEITURA (Ler_Palpites) — carrega palpites + resultados já publicados.
   Mesma URL usada no app Geral. */
window.READ_ENDPOINT = 'https://defaulta4a0857a652e45f494b1685bad4ec3.bd.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/87f99646bea44827ac259babc7de547d/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=R3He56VcrkszdSsEyDA4niPMG-Ilz6ByPArrcUDpuLE';

/* Fluxo de GRAVAÇÃO de resultados (Gravar_Resultados). */
window.WRITE_RESULTS_ENDPOINT = 'https://defaulta4a0857a652e45f494b1685bad4ec3.bd.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ea5dc72a7210439c9f54be22dc43b04a/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rr_kfLZBPyOFP339Qy9zVLlBE6ThQ2EliP54l1AT5O4';

/* Compartilhamento (card) */
window.PALPITES_URL = 'https://matheusalho.github.io/Palpites_Mata-Mata/';
window.SHARE_URL_LABEL = 'matheusalho.github.io/Palpites_Mata-Mata';
