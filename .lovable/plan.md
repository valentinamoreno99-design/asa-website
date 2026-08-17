# Rediseño estructural por secciones (hero intacto)

El cambio es de **estructura**, no de estilo: cada sección cambia de layout y de forma de presentar el contenido. Se mantiene el hero tal cual, la marca (navy, azul ASA, Archivo + IBM Plex Mono) y todo el copy actual.

## Estructura actual → estructura nueva

**Services (01)** — hoy: lista de filas con panel de imagen lateral fijo.
Nueva: secuencia de bloques a ancho completo, uno por servicio, alternando lado de imagen (zig-zag). Cada bloque: número grande fuera de la caja de texto, statement como titular, nombre del servicio como subtítulo mono, capacidades en dos columnas debajo. La imagen ocupa la mitad del bloque con pin/paralaje al hacer scroll.

**Why ASA (02)** — hoy: 4 tarjetas iguales en fila.
Nueva: retícula bento asimétrica 2×2 con pesos distintos (una tarjeta doble ancho, tres compactas) y el número como marca de agua de fondo.

**Experience (03)** — hoy: bloque de cifras + logos.
Nueva: banda a pantalla completa en navy dividida en tres franjas horizontales: titular editorial arriba, cifras en fila con reglas técnicas entre ellas, logos de clientes en una franja inferior separada por línea.

**Challenges (04)** — hoy: lista de definición de 5 filas.
Nueva: layout dos columnas sticky — a la izquierda el índice numerado de los 5 retos (fijo mientras se hace scroll), a la derecha el detalle de cada reto con su imagen de apoyo. En móvil se convierte en acordeón apilado.

**Projects (05)** — hoy: texto + imagen lado a lado.
Nueva: caso de estudio a ancho completo: imagen grande de portada arriba con el título superpuesto, debajo una franja de métricas (+38%, +29%, +54%) a tres columnas, y el detalle del proyecto en columna estrecha centrada.

**Leadership (06)** — hoy: dos tarjetas simétricas con foto pequeña.
Nueva: dos bloques de perfil a ancho completo apilados, foto en formato retrato grande a un lado (alternando), declaración en tipografía editorial y expertise como lista numerada mono.

**Contact (07)** — hoy: texto izquierda + formulario derecha.
Nueva: cabecera de sección a ancho completo, y debajo formulario a dos columnas (datos / mensaje) sobre navy, con campos de línea inferior. Misma lógica de envío.

**Header y footer**
Header: indicador de sección activa numerado y línea de progreso de scroll; menú móvil a pantalla completa.
Footer: retícula editorial de tres columnas (logo, navegación numerada, contacto).

## Detalles técnicos
- Sin librerías nuevas: `Reveal.tsx`, `framer-motion` (ya instalado) y tokens de `src/styles.css`.
- Nuevos componentes de sección donde el layout cambia por completo; se conservan datos y copy en su sitio actual y `src/lib/asa-content.ts` sin cambios.
- Sticky/paralaje respetando `prefers-reduced-motion`.
- Verificación con Playwright a 1280 / 1440 / 768 / 390 px, sin scroll horizontal.
