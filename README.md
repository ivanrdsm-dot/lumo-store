# Lumo — Tienda

Tienda de una sola página para el arenero inteligente **Lumo**. React + Vite, estructura plana, lista para Vercel.

## Correr local
```bash
npm install
npm run dev
```

## Deploy a Vercel
1. Sube esta carpeta a un repo de GitHub (ej. `ivanrdsm-dot/lumo-store`).
2. En Vercel: **New Project → Import** el repo.
3. Framework: **Vite** (autodetectado). Build: `npm run build`. Output: `dist`. Deploy.

## Lo único que tienes que editar — `config.js`
```js
export const CONFIG = {
  PRECIO: 5990,
  MERCADO_PAGO_LINK: "",   // pega tu link de pago de Mercado Pago
  WHATSAPP: "525500000000" // tu número con 52, sin signos
}
```
- **Sin `MERCADO_PAGO_LINK`:** el botón de pago manda el pedido por WhatsApp → vendes desde hoy.
- **Con link de Mercado Pago:** cobra con tarjeta y 12 MSI. Creas el link en tu panel MP (Cobrar → Link de pago) en ~5 min.

## Activar Firebase (opcional)
Ver instrucciones en `firebase.js`. Out-of-the-box no es necesario.

## Archivos
```
index.html      App.jsx        styles.css     config.js
main.jsx        firebase.js    vite.config.js vercel.json
assets/         package.json
```
