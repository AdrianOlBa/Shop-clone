# Fake Store

Aplicación frontend de una tienda de moda de demostración. Permite explorar productos, filtrarlos por categoría, consultar sus detalles y gestionarlos en un carrito. No procesa compras reales; es un proyecto práctico construido con React.

## Tecnologías y funcionamiento

- **React 19 y TypeScript:** interfaz basada en componentes, con props y estado para representar productos, filtros y cantidades.
- **React Router:** navegación entre inicio, tienda, carrito y páginas de producto.
- **Tailwind CSS:** estilos y diseño adaptable mediante clases utilitarias.
- **API de productos:** los productos se cargan con `fetch` desde `https://fakestoreapi.noksha.dev/api/products`, una api con datos para productos de prueba.

## Estructura del proyecto

```text
src/
├── main.tsx                 # Inicializa React y el enrutamiento
├── App_index.tsx            # Define las rutas y el layout principal
├── components/              # Elementos reutilizables, como botones y tarjetas
├── features/                 # Secciones: inicio, tienda, producto, carrito y cabecera
├── hooks/                    # Custom hooks reusables.
├── types/                    # Tipos compartidos de TypeScript
├── utils/                    # Utilidades, incluida la persistencia del carrito
├── assets/                   # Imágenes y otros recursos visuales
├── App.css
└── index.css                 # Estilos globales
```

La carpeta `features` agrupa los archivos por sección de la tienda, mientras que `components`, `hooks`, `types` y `utils` reúnen elementos compartidos según su responsabilidad.

+