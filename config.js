// Datos del proyecto Supabase (Project Settings → API).
// La "anon key" es pública por diseño: la seguridad la ponen las reglas RLS del esquema.
window.CFG = {
  SUPABASE_URL: 'https://xgcdgpbivilabaedumkz.supabase.co',       // p. ej. 'https://abcdefgh.supabase.co'
  SUPABASE_ANON_KEY: 'sb_publishable_-Do6GZSipPC75SsUAHeUuQ_-L7ZS9HO',
  NOMBRE_APP: 'Fichaje',
  EMPRESA: '',            // razón social para el registro de jornada
  CIF: '',
  // Sedes: terminales (k = clave interna, l = nombre largo, s = corto, x = mini), bar (zona extra; barNombre = cómo se llama) y mínimo por terminal.
  SEDES: {
    // festivos: carga inicial (REVISAR con el calendario oficial; en la pestaña Vacaciones se cambian pulsando el día)
    1: { nombre: 'Barcelona', bar: true, min: 5, festivos: {
      '2026-01-01': 'Año Nuevo', '2026-01-06': 'Reyes', '2026-04-03': 'Viernes Santo', '2026-04-06': 'Lunes de Pascua',
      '2026-05-01': 'Fiesta del Trabajo', '2026-05-25': 'Segunda Pascua (local BCN)', '2026-06-24': 'Sant Joan', '2026-08-15': 'Asunción',
      '2026-09-11': 'Diada', '2026-09-24': 'La Mercè (local BCN)', '2026-10-12': 'Fiesta Nacional', '2026-12-08': 'Inmaculada',
      '2026-12-25': 'Navidad', '2026-12-26': 'Sant Esteve' }, terminales: [
      { k: 'MSC', l: 'MSC',        s: 'MSC', x: 'MSC' },
      { k: 'TE',  l: 'Terminal E', s: 'E',   x: 'T-E' },
      { k: 'TD',  l: 'Terminal D', s: 'D',   x: 'T-D' } ] },
    2: { nombre: 'Tenerife', bar: true, barNombre: 'Tienda', min: 4, festivos: {
      '2026-01-01': 'Año Nuevo', '2026-01-06': 'Reyes', '2026-04-02': 'Jueves Santo', '2026-04-03': 'Viernes Santo',
      '2026-05-01': 'Fiesta del Trabajo', '2026-05-30': 'Día de Canarias', '2026-08-15': 'Asunción', '2026-10-12': 'Fiesta Nacional',
      '2026-12-08': 'Inmaculada', '2026-12-25': 'Navidad' }, terminales: [
      { k: 'MSC', l: 'Terminal Tenerife', s: 'Tenerife', x: 'TFE' } ] },
  },
};
