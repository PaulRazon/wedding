# Wedding Invitation Website - Anahí & Eduardo

Una hermosa página web de invitación de boda con diseño moderno y responsivo.

## 📅 Información del Evento

- **Novios**: Anahí Rosario Pérez Jara & Eduardo Bladimir Razón Machain
- **Fecha**: Sábado, 11 de Abril del 2026
- **Ceremonia**: 4:00 PM - Parroquia de San Cayetano, Xalisco
- **Recepción**: 5:30 PM - La Muralla Jardín Campestre, Xalisco

## 🎨 Características

- **Pantalla de Bienvenida**: Splash screen elegante con animación de confeti
- **Hero Section con Video**: Sección principal con video de fondo a pantalla completa
- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Navegación Móvil Inferior**: Menú de navegación fijo en la parte inferior (estilo app móvil)
- **Música de Fondo**: Control de reproducción de música ambiente con inicio automático
- **Modo Oscuro**: Toggle para cambiar entre tema claro y oscuro
- **Animación de Confeti**: Celebración visual al abrir la invitación
- **Confirmación RSVP**: Formulario que envía confirmación por WhatsApp
- **Código de Vestimenta**: Sección detallada con colores sugeridos
- **Paleta de Colores Beige Minimalista**: Tonos cálidos y elegantes:
  - `#F5F1EB` - Blanco cálido (primary)
  - `#E8DDD4` - Beige claro (secondary)
  - `#D4C4B0` - Beige medio (accent)
  - `#C7B299` - Beige cálido (warm)
  - `#A69080` - Beige neutral (neutral)
  - `#8B7355` - Beige oscuro (dark)
- **Colores Fuertes para Vestimenta**: Colores vibrantes (no pasteles):
  - `#F6E05E` - Amarillo fuerte
  - `#48BB78` - Verde fuerte
  - `#ED64A6` - Rosa fuerte
  - `#9F7AEA` - Lila fuerte
  - `#ED8936` - Naranja fuerte
  - `#718096` - Gris fuerte

## 📱 Secciones

1. **Hero/Inicio**: Video de fondo con nombres y fecha
2. **Nuestra Historia**: Información completa de los novios y familias
3. **Ceremonia**: Detalles de la ceremonia religiosa
4. **Recepción**: Información del salón de eventos
5. **Código de Vestimenta**: Guía detallada de vestimenta y colores
6. **Galería**: Fotos de la pareja
7. **Confirmación RSVP**: Formulario de confirmación por WhatsApp
8. **Footer**: Información final

## 🎵 Archivos Multimedia Requeridos

Para que la página funcione completamente, necesitas agregar estos archivos en la carpeta `public/`:

### Imagen de Bienvenida
- **Archivo**: `welcome-image.png`
- **Formato**: PNG con fondo claro
- **Uso**: Pantalla de bienvenida con overlay semitransparente
- **Recomendación**: Imagen clara para buena legibilidad del texto

### Video de Fondo
- **Archivo**: `wedding-video.mp4`
- **Formato**: MP4 optimizado para web
- **Recomendación**: Video de 30-60 segundos en loop
- **Resolución**: 1920x1080 o superior

### Música de Fondo
- **Archivo**: `wedding-music.mp3`
- **Formato**: MP3 optimizado para web
- **Recomendación**: Música instrumental suave
- **Duración**: 3-5 minutos en loop
- **Bitrate**: 128-192 kbps recomendado

## 🚀 Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Agregar archivos multimedia**:
   - Coloca tu video como `public/wedding-video.mp4`
   - Coloca tu música como `public/wedding-music.mp3`

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

4. **Construir para producción**:
   ```bash
   npm run build
   npm start
   ```

## 🎛️ Controles de Usuario

- **🎵 Música**: Botón para activar/desactivar música de fondo
- **🌙 Modo Oscuro**: Toggle para cambiar tema
- **📱 Menú Móvil**: Navegación hamburguesa en dispositivos móviles

## 🎨 Personalización

### Cambiar Nombres
Edita el archivo `src/app/page.tsx` y busca:
```jsx
<h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Eduardo & Anahi</h1>
```

### Cambiar Fecha
Busca y modifica:
```jsx
<p>17 de Septiembre, 2022</p>
```

### Cambiar Ubicaciones
Modifica las secciones de ceremonia y recepción con tus ubicaciones reales.

### Colores Personalizados
Los colores están definidos usando las clases de Tailwind con los valores hex especificados:
- `bg-[#60a7e3]`
- `bg-[#63c2e2]`
- `bg-[#5d8ae0]`
- `bg-[#6ea3e6]`

## 📱 Compatibilidad

- ✅ Chrome/Safari/Firefox (últimas versiones)
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ Responsive design (320px - 2560px)

## 🎯 Tecnologías Utilizadas

- **Next.js 15** - Framework React
- **Tailwind CSS** - Estilos y animaciones
- **Lucide React** - Iconos elegantes
- **TypeScript** - Tipado estático
- **Canvas Confetti** - Animaciones de confeti para celebración
- **Next Themes** - Sistema de temas con soporte SSR
- **Google Fonts** - Tipografías elegantes para bodas:
  - **Cinzel** - Títulos principales (similar a Koch Antiqua)
  - **Playfair Display** - Subtítulos elegantes
  - **Cormorant Garamond** - Texto del cuerpo
  - **Dancing Script** - Texto decorativo y cursivo

## 🧩 Arquitectura de Componentes

La aplicación está dividida en componentes modulares para mejor mantenimiento:

### `/src/components/`
- **`WelcomeScreen.tsx`** - Pantalla de bienvenida con confeti y botón de apertura
- **`Navbar.tsx`** - Navegación superior con animaciones y controles
- **`MobileBottomNav.tsx`** - Navegación inferior para móviles (estilo app)
- **`Hero.tsx`** - Sección principal con video de fondo
- **`OurStory.tsx`** - Información de los novios y familias
- **`Ceremony.tsx`** - Detalles de la ceremonia religiosa
- **`Reception.tsx`** - Información de la recepción y actividades
- **`DressCode.tsx`** - Código de vestimenta y colores sugeridos
- **`Gallery.tsx`** - Galería de fotos con efectos hover
- **`RSVP.tsx`** - Formulario de confirmación por WhatsApp
- **`Footer.tsx`** - Pie de página con información de contacto

### Características de los Componentes:
- ✨ **Diseño minimalista** con espacios limpios y elementos esenciales
- 🎨 **Tipografías elegantes** específicas para bodas (Cinzel, Playfair, Cormorant)
- 📱 **Diseño completamente responsivo** optimizado para todos los dispositivos
- 🌙 **Modo oscuro/claro** con transiciones suaves y colores adaptativos
- 🎵 **Controles de música** integrados en la navegación
- 💫 **Animaciones sutiles** con Intersection Observer
- 📱 **Integración WhatsApp** para confirmaciones RSVP
- 🎨 **Código de vestimenta** con colores vibrantes y guía visual
- 🎊 **Confeti beige** personalizado con tonos cálidos
- 🎯 **Paleta beige minimalista** inspirada en bodas elegantes

## 📱 Funcionalidades Especiales

### 💌 Confirmación RSVP por WhatsApp
- Formulario elegante con validación
- Envío automático a WhatsApp (+57 311 106 4708)
- Mensaje personalizado con información del invitado
- Opciones de asistencia: Solo, con acompañante, o no asistir

### 👗 Código de Vestimenta Interactivo
- Guía visual de colores sugeridos (amarillo, verde, rosa, lila, naranja, gris)
- Restricción del color azul (color distintivo de la boda)
- Consejos para evento al aire libre
- Paleta de colores pastel con efectos hover

## 📝 Notas Importantes

1. **Autoplay de Video**: Los navegadores modernos requieren interacción del usuario para reproducir audio, pero el video se reproduce automáticamente sin sonido.

2. **Música de Fondo**: El usuario debe hacer clic en el botón de música para activarla debido a las políticas de autoplay de los navegadores.

3. **Optimización**: Asegúrate de que tus archivos multimedia estén optimizados para web para mejorar los tiempos de carga.

4. **SEO**: Considera agregar meta tags personalizados en `src/app/layout.tsx` para mejor SEO.

¡Disfruta de tu hermosa página de invitación de boda! 💒💕
