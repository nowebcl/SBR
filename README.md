# SBR.cl - Servicios Bienes Raíces (Talca, Chile)

Sitio web inmobiliario moderno para **SBR Propiedades** (Talca y Región del Maule), desarrollado con la arquitectura y diseño réplica 1:1 de **Quarter Real Estate** en **React 18 + Vite + TypeScript + Tailwind CSS + Lucide Icons**.

---

## 🏢 Información Corporativa

- **Empresa**: SBR Propiedades (Servicios Bienes Raíces)
- **Eslogan**: *"Servicios, Asesorías y Gestión"*
- **Pilares**:
  - *Pasión por el Cliente*
  - *Pasión por la Inversión*
  - *Pasión por el Resultado*
- **Servicios Oficiales**:
  1. Compra, Venta y Arriendo de Propiedades
  2. Valorización de Bienes Raíces (Tasaciones)
  3. Evaluación de Inversión o Desinversión
  4. Asesoría en Evaluación de Potencial Comprador
  5. Desarrollo de Oportunidades de Negocio
  6. Análisis de Transacción y Riesgo Inherente
- **Contacto**:
  - WhatsApp / Teléfono: +56 9 9299 0961
  - Correo: contacto@sbr.cl
  - Dirección: Av. Las Rastras 1240, Talca, Región del Maule, Chile
  - Portal Inmobiliario: [Tienda Oficial SBR](https://www.portalinmobiliario.com/_CustId_330115137)

---

## 🚀 Tecnologías

- **React 18** (Functional components + Hooks)
- **Vite 6** (Build tool ultrarrápido)
- **TypeScript 5** (Tipado estricto)
- **Tailwind CSS 3** (Diseño responsive y paleta de colores corporativa `#FF5722` y `#0040FF`)
- **Lucide React** (Iconografía moderna)

---

## 🛠️ Instalación y Uso Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Vista previa de la compilación de producción
npm run preview
```

---

## 📱 Características Principales

- **Diseño 1:1 Quarter Template**: Cabecera con TopBar, Navbar sticky, Hero Slider blanco luminoso, buscador avanzado flotante, sección About Us con medalla de experiencia, contador de estadísticas, spotlight de propiedad, cuadrícula de 6 servicios, catálogo con filtros, planos interactivos, video tour, amenidades, zonas de Talca, testimonios, aliados bancarios, blog, banner CTA y footer con logo blanco.
- **Modales Integrados**:
  - Vista rápida de propiedad (`QuickViewModal`) con enlace directo a WhatsApp personalizado con ID y precio de la propiedad.
  - Agendamiento de visitas (`ScheduleVisitModal`).
  - Panel de favoritos persistente (`FavoritesDrawer`).
  - Buscador predictivo en tiempo real (`SearchModal`).
  - Formulario para publicar propiedades (`AddListingModal`).
  - Tour virtual (`VideoModal`).
- **Responsive & Mobile First**: Sin desbordamiento de canvas horizontal (`overflow-x-hidden`) y scroll táctil horizontal en selectores móviles.
