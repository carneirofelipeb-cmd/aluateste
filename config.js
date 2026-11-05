/* Ligação da loja com o banco de produtos (Supabase).
   Preencha as duas linhas abaixo (veja o GUIA-DE-CONFIGURACAO.md, passo 4).
   Estas duas informações são PÚBLICAS por natureza: quem protege a loja são as regras do banco,
   não o segredo destes valores. NUNCA coloque aqui a chave "service_role" / "secret". */
window.ALUA_CONFIG = {
  SUPABASE_URL: "https://isiapbzmrqbnheovvzwv.supabase.co",      // ex.: https://abcdefgh.supabase.co
  SUPABASE_KEY: "sb_publishable_fa3duRAfict_wttdxyu9yg_DVo-ejI1"        // a chave "anon" (ou "publishable")
};
