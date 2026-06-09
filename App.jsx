import { useState, useEffect } from "react"
import { CONFIG } from "./config.js"
import { logOrder } from "./firebase.js"

const fmt = (n) => "$" + n.toLocaleString("es-MX") + " MXN"

export default function App() {
  const [cart, setCart] = useState(0)
  const [open, setOpen] = useState(false)
  const [faq, setFaq] = useState(null)
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 640)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const add = () => { setCart((c) => c + 1); setOpen(true) }
  const total = cart * CONFIG.PRECIO

  const checkoutWA = () => {
    const msg = encodeURIComponent(`Hola Lumo 👋 Quiero pedir ${cart} arenero(s) Lumo · Total ${fmt(total)}`)
    logOrder({ cantidad: cart, total, canal: "whatsapp" })
    window.open(`https://wa.me/${CONFIG.WHATSAPP}?text=${msg}`, "_blank")
  }
  const checkout = () => {
    logOrder({ cantidad: cart, total, canal: "mercadopago" })
    if (CONFIG.MERCADO_PAGO_LINK) window.open(CONFIG.MERCADO_PAGO_LINK, "_blank")
    else checkoutWA()
  }

  const features = [
    ["🔄", "Se limpia solo", "Cada vez que tu gato sale, Lumo separa los desechos y los sella. Tú vacías el cajón una vez por semana."],
    ["📱", "Salud por app", "Registra peso, frecuencia y duración de cada visita. Te avisa si algo cambia, antes que el veterinario."],
    ["🌬️", "Cero olor", "Esterilización UV y desodorización activa. Tu casa huele a casa, no a arenero."],
    ["🐈", "Multi-gato y seguro", "Reconoce a cada gato por peso y sensores de seguridad que detienen todo si entra mientras limpia."],
  ]
  const steps = [
    ["Conéctalo", "Lo enchufas, vinculas la app por WiFi y eliges el tipo de arena. Cinco minutos."],
    ["Olvídate", "Lumo detecta a tu gato y limpia automáticamente después de cada uso, en silencio."],
    ["Convive", "Recibes el reporte de salud en tu celular y vacías el cajón sellado una vez por semana."],
  ]
  const specs = [
    ["Capacidad del tambor", "9.5 L"], ["Cajón de desechos", "7 L · sellado"],
    ["Gatos recomendados", "hasta 4"], ["Conectividad", "WiFi 2.4 GHz · App iOS/Android"],
    ["Sensores de seguridad", "peso + infrarrojo"], ["Control de olor", "UV + desodorizante"],
    ["Energía", "110V · 24W"], ["Certificaciones", "CE · FCC · RoHS"],
  ]
  const reviews = [
    ["Llevábamos años peleando con el olor en el depa. Desde Lumo, nada. En serio, nada. Mi único trabajo ahora es vaciar el cajón el domingo.", "Mariana R.", "CDMX · 2 gatos", true],
    ["Viajo por trabajo y la app me deja ver que mi gata usa el arenero normal aunque yo no esté. Esa tranquilidad no tiene precio.", "Diego A.", "Monterrey", false],
    ["El soporte me contestó por WhatsApp el mismo día. Eso me convenció de comprarlo en México y no importarlo.", "Paola V.", "Guadalajara", false],
  ]
  const faqs = [
    ["¿Sirve con cualquier arena?", "Funciona con arena aglutinante de bentonita o de tofu. Trae dos cribas intercambiables incluidas."],
    ["¿Es seguro para mi gato?", "Sí. Tiene doble sensor de peso e infrarrojo que detiene la limpieza al instante si tu gato entra o se acerca."],
    ["¿Cada cuánto lo vacío?", "Para un gato, una vez por semana. El cajón sella el olor, así que no hueles nada entre vaciados."],
    ["¿Tiene garantía y soporte en México?", "Un año de garantía con soporte y refacciones locales. Nada de mandar tu arenero a China si algo falla."],
  ]

  return (
    <>
      <nav>
        <div className="wrap nav-in">
          <a href="#top" className="brand"><span className="ring" />lumo</a>
          <div className="nav-links">
            <a href="#features">Tecnología</a>
            <a href="#como">Cómo funciona</a>
            <a href="#specs">Especificaciones</a>
            <a href="#faq">Preguntas</a>
          </div>
          <div className="nav-right">
            <button className="cart-btn" onClick={() => setOpen(true)} aria-label="Carrito">
              🛒{cart > 0 && <span className="cart-count">{cart}</span>}
            </button>
            <button className="btn btn-primary" onClick={add}>Comprar</button>
          </div>
        </div>
      </nav>

      <div id="top" className="hero">
        <div className="halo" />
        <div className="wrap hero-in">
          <span className="eyebrow">Arenero inteligente · Hecho para tu gato</span>
          <h1>La limpieza, en automático.</h1>
          <p className="sub">Lumo se limpia solo, controla el olor y cuida la salud de tu gato desde tu celular. Tú solo convives con él.</p>
          <p className="price"><s>$7,490</s> <b>$5,990 MXN</b> · 12 MSI</p>
          <div className="ctas">
            <button className="btn btn-primary" onClick={add}>Comprar Lumo</button>
            <a href="#como" className="btn btn-ghost">Ver cómo funciona</a>
          </div>
          <svg className="product-art" viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" aria-label="Arenero Lumo">
            <defs>
              <radialGradient id="pg" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#5B6CFF" stopOpacity=".5" />
                <stop offset="60%" stopColor="#5B6CFF" stopOpacity=".08" />
                <stop offset="100%" stopColor="#5B6CFF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="70" y="250" width="220" height="46" rx="16" fill="#EDEDF2" />
            <rect x="70" y="250" width="220" height="46" rx="16" fill="none" stroke="#E0E0E8" />
            <rect x="84" y="70" width="192" height="200" rx="40" fill="#FBFBFD" stroke="#E4E4EC" strokeWidth="2" />
            <circle cx="180" cy="160" r="78" fill="url(#pg)" />
            <circle cx="180" cy="160" r="62" fill="#FFFFFF" stroke="#E4E4EC" strokeWidth="2" />
            <circle cx="180" cy="160" r="62" fill="none" stroke="#5B6CFF" strokeWidth="6" strokeDasharray="70 320" strokeLinecap="round" transform="rotate(-50 180 160)" />
            <circle cx="180" cy="160" r="40" fill="#F2F2F6" />
            <rect x="150" y="92" width="60" height="16" rx="8" fill="#1A1A1C" />
            <circle cx="160" cy="100" r="3" fill="#5B6CFF" />
          </svg>
        </div>
      </div>

      <div className="trust">
        <div className="trust-in">
          <span>🇲🇽 <b>Envío en todo México</b></span>
          <span>🛡️ <b>1 año de garantía</b></span>
          <span>📱 <b>App de salud incluida</b></span>
          <span>✓ <b>Certificado CE / FCC</b></span>
        </div>
      </div>

      <section className="block" id="features">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Tecnología</span>
            <h2>Todo lo que hace una niñera de gatos. En una caja.</h2>
            <p>La misma tecnología de las marcas de $13,000. Sin el precio de las marcas de $13,000.</p>
          </div>
          <div className="features">
            {features.map(([ic, t, d]) => (
              <div className="feat" key={t}><div className="ic">{ic}</div><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="como" style={{ background: "var(--bg-soft)" }}>
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Cómo funciona</span><h2>Listo en tres pasos.</h2></div>
          <div className="steps">
            {steps.map(([t, d]) => (<div className="step" key={t}><h3>{t}</h3><p>{d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="block" id="specs">
        <div className="wrap">
          <div className="specs">
            <h2>Especificaciones</h2>
            {specs.map(([k, v]) => (
              <div className="spec-row" key={k}><span className="k">{k}</span><span className="v">{v}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ background: "var(--bg-soft)" }}>
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Comparativa</span><h2>La misma liga. Mejor precio.</h2></div>
          <table className="cmp">
            <thead><tr><th></th><th>Litter-Robot 4</th><th className="lumo-col head">Lumo</th><th>PETKIT Pura Max</th></tr></thead>
            <tbody>
              <tr><td>Autolimpieza</td><td className="yes">✓</td><td className="lumo-col yes">✓</td><td className="yes">✓</td></tr>
              <tr><td>App de salud</td><td className="yes">✓</td><td className="lumo-col yes">✓</td><td className="yes">✓</td></tr>
              <tr><td>Control de olor UV</td><td>—</td><td className="lumo-col yes">✓</td><td className="yes">✓</td></tr>
              <tr><td>Garantía en México</td><td>limitada</td><td className="lumo-col yes">1 año local</td><td>limitada</td></tr>
              <tr><td>Precio aprox.</td><td className="price-cell">$13,500</td><td className="lumo-col price-cell">$5,990</td><td className="price-cell">$7,500</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="block" id="reviews">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Reseñas</span><h2>Pet parents que ya no tocan la pala.</h2></div>
          <div className="reviews">
            {reviews.map(([t, n, c, feat]) => (
              <div className={"review" + (feat ? " feature" : "")} key={n}>
                <div className="stars">★★★★★</div>
                <p>{t}</p>
                <div className="who">
                  <div className="avatar">{n[0]}</div>
                  <div><b>{n}</b><span>{c}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="buy">
            <span className="eyebrow">Edición de lanzamiento</span>
            <h2>Lumo</h2>
            <div className="price"><s>$7,490</s> $5,990 MXN</div>
            <small>12 meses sin intereses · Envío gratis · Garantía de 1 año</small>
            <div><button className="btn btn-primary" onClick={add}>Agregar al carrito</button></div>
          </div>
        </div>
      </section>

      <section className="block" id="faq" style={{ background: "var(--bg-soft)" }}>
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Preguntas</span><h2>Lo que todos preguntan.</h2></div>
          <div className="faq">
            {faqs.map(([q, a], i) => (
              <div className={"q" + (faq === i ? " open" : "")} key={q}>
                <button onClick={() => setFaq(faq === i ? null : i)}>{q}<span className="plus">+</span></button>
                <div className="a"><p>{a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot-in">
          <a href="#top" className="brand" style={{ fontSize: "18px" }}><span className="ring" />lumo</a>
          <span>© 2026 Lumo · Hecho en México con tecnología global · hola@lumo.mx</span>
        </div>
      </footer>

      <div className={"buybar" + (showBar && !open ? " show" : "")}>
        <div className="buybar-in">
          <div className="bb-info">
            <div className="bb-thumb">🐈</div>
            <div className="bb-txt">
              <b>Lumo · Arenero inteligente</b>
              <span><s>$7,490</s>{fmt(CONFIG.PRECIO)} · 12 MSI</span>
            </div>
          </div>
          <button className="btn btn-primary" onClick={add}>Agregar al carrito</button>
        </div>
      </div>

      <div className={"overlay" + (open ? " show" : "")} onClick={() => setOpen(false)} />
      <aside className={"drawer" + (open ? " show" : "")} aria-label="Carrito">
        <div className="drawer-head"><h3>Tu carrito</h3><button className="x" onClick={() => setOpen(false)}>×</button></div>
        {cart === 0 ? (
          <p className="empty">Tu carrito está vacío.</p>
        ) : (
          <>
            <div className="line-item">
              <div className="li-thumb">🐈</div>
              <div className="li-info">
                <h4>Lumo · Arenero inteligente</h4><span>{fmt(CONFIG.PRECIO)}</span>
                <div className="qty">
                  <button onClick={() => setCart((c) => Math.max(0, c - 1))}>−</button>
                  <span>{cart}</span>
                  <button onClick={() => setCart((c) => c + 1)}>+</button>
                </div>
              </div>
            </div>
            <div className="cart-total"><span>Total</span><span>{fmt(total)}</span></div>
            <button className="btn btn-primary" onClick={checkout}>Pagar con tarjeta · 12 MSI</button>
            <button className="btn wa" onClick={checkoutWA}>Pedir por WhatsApp</button>
            <p className="pay-note">Pago seguro · Envío gratis a todo México</p>
          </>
        )}
      </aside>
    </>
  )
}
