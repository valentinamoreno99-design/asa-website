# Rediseño completo (excepto el hero)

Objetivo: elevar toda la web a un nivel más premium y editorial, manteniendo intactos el hero, la identidad ASA (navy, azul ASA, Archivo + IBM Plex Mono) y todo el copy actual. Se rediseña la composición, el ritmo y las interacciones de cada sección.

## Qué se mantiene igual
- Hero: imagen, gradiente, titular, subtítulo, botones y línea "Strengthen · Solve · Execute".
- Todos los textos, métricas y nombres de servicios/proyecto/liderazgo.
- Paleta, tipografías, navegación y estructura de secciones.
- Backend, formulario de contacto e integraciones MCP.

## Qué se rediseña

**Header**
Barra minimal con línea de progreso de scroll y numeración de sección activa; menú móvil a pantalla completa tipo editorial.

**Services (01)**
Filas numeradas a pantalla completa con línea divisoria fina, número grande en el margen, statement en azul ASA y capacidades en dos columnas. Imagen lateral con revelado por máscara al entrar en viewport y ligero paralaje.

**Why ASA (02)**
De 4 tarjetas iguales a una retícula asimétrica (bento): la primera tarjeta ocupa mayor peso, resto compacto. Número enorme como marca de agua, línea de acento animada al hover.

**Experience (03)**
Composición editorial a dos tercios: bloque de cifras con reglas técnicas y contador animado al entrar en viewport. Tira de logos estática con revelado de color individual al hover.

**Challenges (04)**
Lista de definición convertida en filas expansibles/apiladas con imagen de apoyo revelada al hover en desktop y visible en móvil, manteniendo los 5 textos actuales.

**Projects (05)**
Caso de estudio a pantalla ancha: imagen grande con paralaje, métricas (+38%, +29%, +54%) en tipografía display con contador animado, descripción en columna estrecha.

**Leadership (06)**
Retratos más grandes en formato editorial, nombre superpuesto con regla técnica y lista de expertise en columnas monoespaciadas.

**Contact (07)**
Formulario sobre navy con campos de línea inferior, foco en azul ASA y estado de envío refinado. Misma lógica de envío.

**Footer**
Retícula editorial con logo grande, navegación numerada y datos de contacto.

## Detalles técnicos
- Sin librerías nuevas: se reutilizan `Reveal.tsx`, `framer-motion` (ya instalado) y tokens de `src/styles.css`.
- Se añaden tokens/utilidades de espaciado y una utilidad de paralaje ligero en `src/styles.css`; nada hardcodeado en componentes.
- Se respeta `prefers-reduced-motion` en contadores y paralaje.
- Verificación con Playwright a 1280 / 1440 / 768 / 390 px, sin scroll horizontal.
