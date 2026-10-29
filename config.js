// Datos del proyecto Supabase (Project Settings → API).
// La "anon key" es pública por diseño: la seguridad la ponen las reglas RLS del esquema.
window.CFG = {
  SUPABASE_URL: 'https://xgcdgpbivilabaedumkz.supabase.co',       // p. ej. 'https://abcdefgh.supabase.co'
  SUPABASE_ANON_KEY: 'sb_publishable_-Do6GZSipPC75SsUAHeUuQ_-L7ZS9HO',
  NOMBRE_APP: 'Fichaje',
  EMPRESA: '',            // razón social para el registro de jornada
  CIF: '',
  // Sedes: terminales (k = clave interna, l = nombre largo, s = corto, x = mini), bar y mínimo por terminal.
  SEDES: {
    1: { nombre: 'Barcelona', bar: true, min: 5, terminales: [
      { k: 'MSC', l: 'MSC',        s: 'MSC', x: 'MSC' },
      { k: 'TE',  l: 'Terminal E', s: 'E',   x: 'T-E' },
      { k: 'TD',  l: 'Terminal D', s: 'D',   x: 'T-D' } ] },
    2: { nombre: 'Tenerife', bar: false, min: 4, terminales: [
      { k: 'MSC', l: 'Terminal Tenerife', s: 'Tenerife', x: 'TFE' } ] },
  },
};
