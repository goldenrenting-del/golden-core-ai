import React from 'react';
import { createRoot } from 'react-dom/client';
import { Building2, Factory, Store, TrendingUp, MessageCircle, Send, CalendarCheck, Bot, Phone } from 'lucide-react';
import './styles.css';

function App() {
  const whatsapp = 'https://wa.me/34633303402?text=Hola%20Golden%20Renting%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20captaci%C3%B3n%20de%20mi%20propiedad';
  const cards = [
    { icon: <Factory />, title: 'Naves industriales', text: 'Captamos propietarios de naves en Barcelona, Baix Llobregat, Vallès, Maresme y alrededores.' },
    { icon: <Store />, title: 'Locales comerciales', text: 'Sistema preparado para propietarios con locales vacíos, cerrados o sin rentabilidad.' },
    { icon: <TrendingUp />, title: 'Activos en inversión', text: 'Búsqueda y gestión de activos comerciales, industriales y operaciones en rentabilidad.' }
  ];
  const steps = ['Nuevo lead', 'Contactado', 'Visita agendada', 'Negociación', 'Exclusiva conseguida', 'Operación cerrada'];
  return <div className="page">
    <header className="hero">
      <nav className="nav"><div className="brand"><Building2 size={28}/><span>GOLDEN CORE AI</span></div><a className="navBtn" href={whatsapp}>WhatsApp</a></nav>
      <section className="heroGrid">
        <div className="heroText">
          <p className="eyebrow">Golden Renting Barcelona</p>
          <h1>Captación automática de propietarios y exclusivas inmobiliarias.</h1>
          <p className="subtitle">Sistema IA especializado en naves industriales, locales comerciales, suelos, inversión y activos grandes en Barcelona.</p>
          <div className="actions"><a className="primary" href="#formulario">Captar propiedad</a><a className="secondary" href={whatsapp}>Hablar por WhatsApp</a></div>
          <div className="badges"><span>CRM</span><span>WhatsApp</span><span>Telegram</span><span>IA</span><span>Meta Ads</span></div>
        </div>
        <div className="panel" id="formulario">
          <h2>Formulario propietario</h2><p>Déjanos los datos de tu activo y te contactamos.</p>
          <form onSubmit={(e)=>{e.preventDefault(); window.location.href=whatsapp;}}>
            <input placeholder="Nombre" required/><input placeholder="Teléfono / WhatsApp" required/><input placeholder="Email"/>
            <select><option>Nave industrial</option><option>Local comercial</option><option>Solar</option><option>Oficina</option><option>Edificio</option><option>Activo en inversión</option></select>
            <input placeholder="Ubicación"/><input placeholder="Metros aproximados"/><input placeholder="Precio aproximado"/>
            <textarea placeholder="Describe tu propiedad" rows="4"></textarea><button>Enviar propiedad</button>
          </form>
        </div>
      </section>
    </header>
    <main>
      <section className="cards">{cards.map((c,i)=><article className="card" key={i}><div className="icon">{c.icon}</div><h3>{c.title}</h3><p>{c.text}</p></article>)}</section>
      <section className="system"><div><p className="eyebrow">Sistema de captación</p><h2>El propietario entra, el robot responde y el CRM lo organiza.</h2><p>Flujo preparado para anuncios, formularios, aviso por Telegram, WhatsApp directo y seguimiento comercial.</p></div><div className="automation"><div><MessageCircle/> WhatsApp automático</div><div><Send/> Aviso Telegram</div><div><CalendarCheck/> Visita agendada</div><div><Bot/> Clasificación IA</div></div></section>
      <section className="pipeline"><h2>Pipeline CRM</h2><div className="pipeGrid">{steps.map((s,i)=><div className="step" key={s}><span>0{i+1}</span>{s}</div>)}</div></section>
      <section className="cta"><h2>¿Tienes una nave, local o activo inmobiliario?</h2><p>Golden Renting Barcelona puede ayudarte a vender, alquilar o encontrar la mejor estrategia para tu propiedad.</p><a href={whatsapp}><Phone size={20}/> Contactar ahora</a></section>
    </main>
    <footer>Golden Core AI System · Golden Renting Barcelona · 633 303 402</footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
