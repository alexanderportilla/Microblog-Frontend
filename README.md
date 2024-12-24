# Microblog-Frontend

Este es el repositorio del frontend para una aplicación de microblogging desarrollada con **Next.js**. Este proyecto permite a los usuarios publicar mensajes, interactuar con ellos (me gusta, editar, eliminar) y alternar entre un modo claro y oscuro, ofreciendo una experiencia de usuario moderna y dinámica.

![messaje -app](https://github.com/user-attachments/assets/d5c898c6-db63-41c5-a20f-c02734cca1fa)

## Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución en Desarrollo](#ejecución-en-desarrollo)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Scripts Disponibles](#scripts-disponibles)
- [Dependencias](#dependencias)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- **Publicación de Mensajes**: Los usuarios pueden escribir y enviar mensajes.
- **Interacciones**: Los usuarios pueden dar "me gusta", editar o eliminar mensajes.
- **Modo Oscuro**: Cambia entre modo claro y oscuro con un botón dedicado.
- **Diseño Moderno**: Interfaz limpia y amigable.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (v16 o superior)
- **npm** o **yarn**

## Instalación

Sigue estos pasos para clonar e instalar el proyecto:

```bash
# Clona el repositorio
$ git clone https://github.com/alexanderportilla/Microblog-Frontend.git

# Ingresa al directorio del proyecto
$ cd microblog-frontend

# Instala las dependencias
$ npm install
# o, si usas yarn
$ yarn install
```

## Ejecución en Desarrollo

Para iniciar el servidor de desarrollo:

```bash
$ npm run dev
# o, si usas yarn
$ yarn dev
```

El proyecto estará disponible en `http://localhost:3000`.

## Estructura del Proyecto

```plaintext
microblog-frontend/
├── .next/                # Archivos generados por Next.js
├── node_modules/         # Dependencias instaladas
├── public/               # Archivos públicos (imágenes, íconos, etc.)
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Avatar.js
│   │   ├── MessageForm.js
│   │   ├── MessageList.js
│   │   └── OnlineUsers.js
│   ├── pages/            # Rutas del proyecto (Next.js)
│   │   ├── _app.js       # Configuración global de la app
│   │   └── index.js      # Página principal
│   ├── styles/           # Archivos CSS
│   │   └── globals.css
│   └── utils/            # Utilidades y funciones auxiliares
│       └── mockApi.js    # Simulación de API
├── .gitignore            # Archivos ignorados por Git
├── next.config.js        # Configuración de Next.js
├── package.json          # Configuración del proyecto y dependencias
├── README.md             # Documentación del proyecto
└── postcss.config.js     # Configuración de PostCSS
```

## Tecnologías Utilizadas

- **Next.js**: Framework para React con funcionalidades como SSR y rutas dinámicas.
- **React.js**: Biblioteca para construir interfaces de usuario.
- **TailwindCSS**: Framework CSS para estilizar los componentes.
- **Axios**: Cliente HTTP para realizar peticiones a APIs.
- **Radix UI**: Biblioteca de componentes accesibles y estilizados.
- **React-Toastify**: Manejo de notificaciones.

## Scripts Disponibles

En el archivo `package.json` se definen los siguientes scripts:

- `dev`: Inicia el servidor de desarrollo.
- `build`: Genera una versión optimizada para producción.
- `start`: Inicia el servidor en producción.
- `lint`: Ejecuta el linter para verificar errores en el código.

## Dependencias

### Producción

- `@radix-ui/react-avatar`: ^1.1.2
- `autoprefixer`: ^10.4.20
- `axios`: ^1.7.9
- `next`: 15.1.2
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-icons`: ^5.4.0
- `react-toastify`: ^11.0.2

### Desarrollo

- `@types/node`: 22.10.2
- `postcss`: ^8.4.49
- `tailwindcss`: ^3.4.17
- `typescript`: ^5

## Contribuciones

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tu funcionalidad: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza los cambios y haz commits: `git commit -m 'Agrega nueva funcionalidad'`.
4. Envía tus cambios: `git push origin feature/nueva-funcionalidad`.
5. Crea un pull request en este repositorio.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
