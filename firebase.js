// Registro de pedidos/leads — STUB listo para activar Firebase.
//
// Out-of-the-box NO requiere instalar nada y la tienda funciona.
// Para activar Firestore (ya conoces el flujo):
//   1) npm i firebase
//   2) descomenta el bloque de abajo y pega tu firebaseConfig
//
// import { initializeApp } from "firebase/app"
// import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"
// const firebaseConfig = { apiKey:"", authDomain:"", projectId:"", storageBucket:"", messagingSenderId:"", appId:"" }
// const db = getFirestore(initializeApp(firebaseConfig))
// export async function logOrder(order){
//   try { await addDoc(collection(db,"pedidos"), { ...order, fecha: serverTimestamp() }) } catch(e){}
// }

export async function logOrder(order) {
  // Mientras Firebase no esté activo, deja rastro en consola (no bloquea la venta).
  console.log("[Lumo] pedido:", order)
}
