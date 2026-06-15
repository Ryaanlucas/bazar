import React, { useState } from "react";

const TruckLogo = () => (
  <svg width="180" viewBox="0 0 680 320" role="img" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", margin: "0 auto" }}>
    <title>Logo caminhão de mudança</title>
    <desc>Caminhão de mudança estilizado em verde oliva com detalhes creme</desc>
    <style>{`
      .truck-body { fill: #4a6741; }
      .truck-cab { fill: #3a5232; }
      .truck-window { fill: #a8c5a0; opacity: 0.85; }
      .truck-wheel { fill: #2b2b2b; }
      .truck-hubcap { fill: #d4c9a0; }
      .truck-ground { fill: #4a6741; opacity: 0.18; }
      .box-item { fill: #c5b882; }
    `}</style>
    <ellipse cx="310" cy="228" rx="180" ry="14" className="truck-ground"/>
    <rect x="100" y="100" width="260" height="115" rx="6" className="truck-body"/>
    <line x1="230" y1="105" x2="230" y2="210" stroke="#3a5232" strokeWidth="2" fill="none"/>
    <line x1="100" y1="155" x2="360" y2="155" stroke="#3a5232" strokeWidth="1.5" fill="none"/>
    <rect x="222" y="148" width="16" height="14" rx="3" fill="#d4c9a0"/>
    <rect x="226" y="151" width="8" height="8" rx="2" fill="#a89a6a"/>
    <rect x="115" y="88" width="42" height="18" rx="3" className="box-item" opacity="0.9"/>
    <line x1="136" y1="88" x2="136" y2="106" stroke="#9a8a5a" strokeWidth="1" fill="none"/>
    <rect x="165" y="82" width="38" height="22" rx="3" className="box-item" opacity="0.85"/>
    <rect x="210" y="86" width="44" height="18" rx="3" className="box-item" opacity="0.9"/>
    <line x1="232" y1="86" x2="232" y2="104" stroke="#9a8a5a" strokeWidth="1" fill="none"/>
    <rect x="360" y="118" width="115" height="97" rx="8" className="truck-cab"/>
    <path d="M360 130 Q380 105 430 103 L475 103 L475 118 L360 118 Z" className="truck-cab"/>
    <rect x="370" y="112" width="75" height="52" rx="5" className="truck-window"/>
    <line x1="410" y1="112" x2="410" y2="164" stroke="#3a5232" strokeWidth="2" fill="none"/>
    <rect x="468" y="170" width="18" height="10" rx="3" fill="#e8dfa0"/>
    <rect x="360" y="205" width="115" height="10" rx="3" fill="#2e3d28"/>
    <rect x="420" y="175" width="20" height="6" rx="2" fill="#d4c9a0"/>
    <rect x="355" y="180" width="12" height="25" rx="2" fill="#2e3d28"/>
    <circle cx="165" cy="228" r="28" className="truck-wheel"/>
    <circle cx="165" cy="228" r="14" className="truck-hubcap"/>
    <circle cx="165" cy="228" r="5" fill="#4a6741"/>
    <circle cx="230" cy="228" r="28" className="truck-wheel"/>
    <circle cx="230" cy="228" r="14" className="truck-hubcap"/>
    <circle cx="230" cy="228" r="5" fill="#4a6741"/>
    <circle cx="435" cy="228" r="28" className="truck-wheel"/>
    <circle cx="435" cy="228" r="14" className="truck-hubcap"/>
    <circle cx="435" cy="228" r="5" fill="#3a5232"/>
    <rect x="140" y="222" width="116" height="8" rx="3" fill="#2e3d28"/>
    <line x1="80" y1="140" x2="96" y2="140" stroke="#d4c9a0" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
    <line x1="75" y1="155" x2="94" y2="155" stroke="#d4c9a0" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <line x1="82" y1="170" x2="96" y2="170" stroke="#d4c9a0" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const COLORS = {
  bgLight: "#f5f0e8",
  bgDark: "#1a1e17",
  oliveDeep: "#3a5232",
  oliveMid: "#4a6741",
  oliveMuted: "#6b7a5a",
  cream: "#fdf6e3",
  creamDark: "#ede8d5",
  sand: "#d4c9a0",
  cardLight: "#fdf6e3",
  cardDark: "#252c22",
  textDark: "#2b3325",
  textLight: "#f5f0e8",
  green: "#5a8a3c",
  red: "#b85c3a",
  sold: "#8a8a7a",
};

const items = [
  { id: 1, name: "Carregador 33w Turbo tipo C", description: "novo / sem avarias. Tipo de venda: imediata. Valor original: R$ 65", price: "R$ 30", image: "/carregador2.jpeg", tag: "indisponível", sold: true },
  { id: 2, name: "Powerbank por indução 5000mAh Iphone", description: "usado / 1 mês. Tipo de venda: imediata. Valor original: R$ 90", price: "R$ 30", image: "/power.jpeg", tag: "indisponível", sold: true },
  { id: 3, name: "JBL Charge Essencial 2", description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 900", price: "R$ 400", image: "/somjbl.jpeg", tag: "disponível" },
  { id: 4, name: "Umidificador", description: "usado / 6 meses. Tipo de venda: imediata. Valor original: R$ 60", price: "R$ 25", image: "/umidificador.jpeg", tag: "indisponível", sold: true },
  { id: 5, name: "Ventilador Pequeno", description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 100", price: "R$ 40", image: "/ventilador2.jpeg", tag: "indisponível", sold: true },
  { id: 6, name: "Air fryer Elgin 4L", description: "usado / 1 ano e meio. Tipo de venda: imediata. Valor original: R$ 250", price: "R$ 120", image: "/airfry.jpeg", tag: "indisponível", sold: true },
  { id: 7, name: "Aspirador inteligente", description: "pouco usado. Tipo de venda: imediata. Valor original: R$ 75", price: "R$ 45", image: "/aspirador.jpeg", tag: "indisponível", sold: true },
  { id: 8, name: "Geladeira Eletrolux 362 litros", description: "usado / 5 anos. Tipo de venda: final de maio. Valor original: R$ 1700", price: "R$ 500", image: "/geladeira.jpeg", tag: "indisponível", sold: true },
  { id: 9, name: "Fogão Atlas 4 bocas ( sem avarias )", description: "usado / 2 anos. Tipo de venda: final de maio. Valor original: R$ 1200", price: "R$ 600", image: "/fogao.png", tag: "indisponível", sold: true },
  { id: 10, name: "Tv Semp Roku 50p", description: "novo / 8 meses. Tipo de venda: final de maio. Valor original: R$ 2000", price: "R$ 1700", priceNote: "à vista ou R$ 1800 parcelado", image: "/tv50.jpeg", tag: "disponível" },
  { id: 11, name: "Sofá Beje ( laterais inclinadas )", description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 300", price: "R$ 100", image: "/sofa.jpeg", tag: "indisponível", sold: true },
  { id: 12, name: "Escudo Capitão América ( metal )", description: "usado / 8 meses. Tipo de venda: imediata. Valor original: R$ 380", price: "R$ 150", image: "/escudo_frente.jpeg", tag: "indisponível", sold: true },
  { id: 13, name: "Colchão Inflável Solteiro Multiuso Até 100Kgs", description: "usado / 8 meses. Tipo de venda: imediata. Valor original: R$ 135", price: "R$ 80", image: "/colchao.jpeg", tag: "disponível" },
  { id: 14, name: "Patins Inline Traxart 41", description: "usado / 8 meses. Tipo de venda: imediata. Valor original: R$ 900", price: "R$ 350", image: "/patins.jpeg", tag: "disponível" },
  { id: 15, name: "Abajur ( c/ avarias na parte interior )", description: "usado / 2 anos. Tipo de venda: imediata. Valor original: R$ 90", price: "R$ 40", image: "/abajur2.jpeg", tag: "disponível" },
  { id: 16, name: "Ferro de passar ( bom estado )", description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 100", price: "R$ 50", image: "/ferro.jpeg", tag: "indisponível", sold: true },
  { id: 17, name: "Varal de chão Aço", description: "novo / sem avarias. Tipo de venda: imediata. Valor original: R$ 100", price: "R$ 50", image: "/varal.jpeg", tag: "indisponível", sold: true },
  { id: 18, name: "Poltrona Chaise Sintética Média", description: "novo / 4 meses. Tipo de venda: Imediata. Valor original: R$ 1200", price: "R$ 900", image: "/poltrona.jpeg", tag: "disponível" },
  { id: 19, name: "Cadeira escritório azul/preto", description: "usado / 3 anos / com avaria. Tipo de venda: Imediata. Valor original: R$ 650", price: "R$ 300", image: "/cadeira_escrit.jpeg", tag: "indisponível", sold: true },
  { id: 20, name: "Caixa de Transporte animal Tamanho Médio", description: "novo / sem avarias. Tipo de venda: imediata. Valor original: R$ 100", price: "R$ 60", image: "/caixa_felino.jpeg", tag: "indisponível", sold: true },
  { id: 21, name: "Alexa Echo Dot 3° geração", description: "novo / sem avarias. Tipo de venda: final de maio. Valor original: R$ 650", price: "R$ 350", image: "/alexa.jpeg", tag: "indisponível", sold: true },
  { id: 22, name: "Heartstopper Volumes 1, 2 e 3", description: "usado / sem avarias. Tipo de venda: imediata. Valor original: R$ 120", price: "R$ 50", image: "/heart.jpeg", tag: "indisponível", sold: true },
  { id: 23, name: "Monitor Dell 24p.", description: "Em ótimo estado / 2 anos. Tipo de venda: final de maio. Valor original: R$ 1400", price: "R$ 800", image: "/monitordell.jpeg", tag: "disponível" },
  { id: 24, name: "Mini sapateira, comporta até 8 pares", description: "3 meses de uso. Tipo de venda: imediata.", price: "R$ 25", image: "/minisapateira.jpeg", tag: "indisponível", sold: true },
  { id: 25, name: "Rosa do deserto / 1 ano", description: "Tipo de venda: imediata.", price: "R$ 30", image: "/rosa_deserto.jpeg", tag: "disponível" },
  { id: 26, name: "Alocácia Grande 7 meses", description: "Tipo de venda: imediata", price: "R$ 30", image: "/orquidea_grande.jpeg", tag: "indisponível", sold: true },
  { id: 27, name: "Alocácia pequena 3 meses", description: "Tipo de venda: imediata", price: "R$ 20", image: "/orquidea.jpeg", tag: "indisponível", sold: true },
  { id: 28, name: "Sapatos DARMAND Marrom seminovo", description: "Usado poucas vezes / tamano 41/42. Tipo de venda: imediata. Valor original: R$ 250", price: "R$ 90", image: "/sapato_darmand.jpeg", tag: "disponível" },
  { id: 29, name: "Zamiocuca / 9 meses", description: "Tipo de venda: imediata", price: "R$ 25", image: "/zamiocuca.jpeg", tag: "disponível" },
  { id: 30, name: "Jibóia / 1 ano e meio", description: "Tipo de venda: imediata", price: "R$ 25", image: "/jiboia.jpeg", tag: "disponível" },
  { id: 31, name: "Cafeteira star wars / Mallory", description: "Usado / 2 anos. Tipo de venda: imediata", price: "R$ 50", image: "/cafeteira_starwars.jpeg", tag: "indisponível", sold: true },
  { id: 32, name: "Balança Corporal 180kg Daaz", description: "Novo / sem avarias. Tipo de venda: imediata", price: "R$ 60", image: "/balanca_dazz.jpeg", tag: "indisponível", sold: true },
  { id: 33, name: "Espada de São Jorge Grande", description: "Tipo de venda: imediata", price: "R$ 40", image: "/espada_sao_jorge_grande.jpeg", tag: "indisponível", sold: true },
  { id: 34, name: "Espada de São Jorge pequena", description: "Tipo de venda: imediata", price: "R$ 25", image: "/espada_sao_jorge_pequena.jpeg", tag: "indisponível", sold: true },
  { id: 35, name: "Pesos 3kg cada", description: "Tipo de venda: imediata", price: "R$ 15", image: "/pesos.jpeg", tag: "indisponível", sold: true },
  { id: 36, name: "Teclado HYPER semimecânico", description: "Sem defeitos / 2 anos. Tipo de venda: imediata. Valor original: R$ 200", price: "R$ 100", image: "/teclado.jpeg", tag: "indisponível", sold: true },
  { id: 37, name: "5 Potes herméticos", description: "Sem defeitos, Tipo de venda: imediata. Valor original: R$ 80", price: "R$ 50", image: "/potes.jpeg", tag: "indisponível", sold: true },
  { id: 38, name: "Chapéu mario e luigi", description: "usado / Tipo de venda: imediata. Valor original: R$ 50 os dois", price: "R$ 25 os dois.", image: "/marioluigi.jpeg", tag: "indisponível", sold: true },
  { id: 39, name: "Teclado POSITIVO", description: "Sem defeitos / com avarias na parte de baixo. Tipo de venda: imediata. Valor original: R$ 70", price: "R$ 20", image: "/teclado2.jpeg", tag: "disponível" },
  { id: 40, name: "Livro Mitologia Nórdica", description: "Sem avarias. Tipo de venda: imediata", price: "R$ 10", image: "/mitologianordica.jpeg", tag: "indisponível", sold: true },
  { id: 41, name: "Livro Com Amor, Simon", description: "Sem avarias. Tipo de venda: imediata.", price: "R$ 20", image: "/simon.jpeg", tag: "disponível" },
  { id: 42, name: "Livro Me chame pelo seu nome", description: "Usado. Tipo de venda: imediata.", price: "R$ 20", image: "/callme.jpeg", tag: "disponível" },
  { id: 43, name: "Livros saga Crepúsculo/Eclipse/Lua Nova", description: "Usado. Tipo de venda: imediata.", price: "R$ 40", image: "/crepusculo.jpeg", tag: "indisponível", sold: true },
  { id: 44, name: "Livro A forma da água", description: "Seminovo. Tipo de venda: imediata.", price: "R$ 20", image: "/formadagua.jpeg", tag: "disponível" },
  { id: 45, name: "Livro A Arte da Sabedoria", description: "Seminovo. Tipo de venda: imediata.", price: "R$ 10", image: "/arte.jpeg", tag: "indisponível", sold: true },
  { id: 46, name: "Livro Paixão / um romance da série FALLEN", description: "Seminovo. Tipo de venda: imediata.", price: "R$ 20", image: "/paixao.jpeg", tag: "disponível" },
  { id: 47, name: "Livro CORALINE", description: "Marcas de uso. Tipo de venda: imediata.", price: "R$ 15", image: "/coraline.jpeg", tag: "indisponível", sold: true },
  { id: 48, name: "Planta Comigo ninguém pode", description: "Tipo de venda: imediata.", price: "R$ 35", image: "/comigo.jpeg", tag: "disponível" },
  { id: 49, name: "Livro O homem do castelo alto", description: "Marcas de uso. Tipo de venda: imediata.", price: "R$ 10", image: "/casteloalto.jpeg", tag: "disponível" },
  { id: 50, name: "Cortina Blackout Cinza 1m90", description: "Blackout com avarias, parte do tecido sem avarias. Tipo de venda: imediata.", price: "R$ 40", image: "/cortina.jpeg", tag: "indisponível", sold: true },
  { id: 51, name: "Manhwa On or Off: Volume 02 e 03 (Full Color)", description: "Novos. Tipo de venda: imediata.", price: "R$ 35 cada ou os 2 por 60", image: "/onoroff.jpeg", tag: "indisponível", sold: true },
  { id: 52, name: "Jogo de 5 copos de vidro (1 quebrou)", description: "Novos/ nunca usados. Tipo de venda: imediata.", price: "R$ 20", image: "/copos.jpeg", tag: "indisponível", sold: true },
  { id: 53, name: "2 Travessas de vidro", description: "Tamanho médio. Tipo de venda: imediata.", price: "R$ 20 cada um, 30 as duas", image: "/travessas.jpeg", tag: "indisponível", sold: true },
  { id: 54, name: "Mop Giratório Esfregão Top Cabo Inox", description: "5 meses de uso. Tipo de venda: imediata.", price: "R$ 40", image: "/mop.jpeg", tag: "disponível" },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const availableItems = filteredItems.filter((item) => !item.sold).sort((a, b) => a.name.localeCompare(b.name));
  const soldItems = filteredItems.filter((item) => item.sold).sort((a, b) => a.name.localeCompare(b.name));

  const bg = darkMode ? COLORS.bgDark : COLORS.bgLight;
  const textColor = darkMode ? COLORS.textLight : COLORS.textDark;

  return (
    <div style={{
      backgroundColor: bg,
      color: textColor,
      minHeight: "100vh",
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "'Georgia', serif",
    }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem", position: "relative" }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: "absolute", top: 0, right: 0,
            padding: "0.5rem 1rem",
            borderRadius: "10px",
            border: `1px solid ${COLORS.sand}`,
            backgroundColor: darkMode ? COLORS.oliveMid : COLORS.creamDark,
            color: darkMode ? COLORS.cream : COLORS.oliveDeep,
            cursor: "pointer",
            fontSize: "0.9rem",
            fontFamily: "Georgia, serif",
          }}
        >
          {darkMode ? "☀️ Claro" : "🌙 Escuro"}
        </button>

        <TruckLogo />

        <h1 style={{
          fontSize: "2.2rem",
          fontWeight: "700",
          color: darkMode ? COLORS.sand : COLORS.oliveDeep,
          marginTop: "0.5rem",
          letterSpacing: "0.02em",
        }}>
          Bazar Virtual de Mudança
        </h1>

        {/* Info box */}
        <div style={{
          backgroundColor: darkMode ? "rgba(212,201,160,0.08)" : COLORS.cream,
          border: `1px solid ${COLORS.sand}`,
          borderRadius: "14px",
          padding: "1.2rem 1.8rem",
          marginTop: "1.2rem",
          maxWidth: "760px",
          marginLeft: "auto",
          marginRight: "auto",
          color: darkMode ? COLORS.sand : COLORS.oliveMuted,
          fontSize: "1rem",
          lineHeight: "1.7",
          textAlign: "left",
        }}>
          👋 Olá! Seja bem-vindo ao meu <strong style={{ color: darkMode ? COLORS.cream : COLORS.oliveDeep }}>Bazar Virtual</strong>.<br />
          Estou disponibilizando itens novos, seminovos e usados pois estou de mudança em alguns dias. 📦✨<br />
          Entre em contato para mais detalhes e agendamento da retirada.<br /><br />
          Aceito cartão de crédito e débito! 🌿 Sinta-se à vontade 😁
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Buscar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.65rem 1rem",
          width: "100%",
          marginBottom: "2rem",
          borderRadius: "12px",
          border: `1.5px solid ${COLORS.sand}`,
          backgroundColor: darkMode ? COLORS.cardDark : COLORS.cream,
          color: darkMode ? COLORS.textLight : COLORS.textDark,
          fontSize: "1rem",
          fontFamily: "Georgia, serif",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      {/* Available */}
      <h2 style={{ marginBottom: "1rem", color: darkMode ? COLORS.sand : COLORS.oliveMid, fontSize: "1.4rem" }}>
        📦 Itens disponíveis
      </h2>
      <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {availableItems.map((item) => (
          <ItemCard key={item.id} item={item} darkMode={darkMode} />
        ))}
      </div>

      {/* Sold */}
      <h2 style={{ margin: "3rem 0 1rem", color: darkMode ? "#6b7060" : "#9a9a8a", fontSize: "1.4rem" }}>
        ✅ Vendidos
      </h2>
      <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {soldItems.map((item) => (
          <ItemCard key={item.id} item={item} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}

function ItemCard({ item, darkMode }) {
  const cardBg = darkMode ? "#252c22" : "#fdf6e3";
  const nameColor = darkMode ? "#d4c9a0" : "#3a5232";
  const descColor = darkMode ? "#8a9a7a" : "#6b7a5a";
  const priceColor = darkMode ? "#a8c584" : "#4a6741";

  return (
    <div style={{
      backgroundColor: cardBg,
      borderRadius: "1rem",
      border: `1px solid ${darkMode ? "#3a4535" : "#d4c9a0"}`,
      boxShadow: "0 2px 10px rgba(58,82,50,0.08)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            cursor: item.sold ? "default" : "zoom-in",
            opacity: item.sold ? 0.5 : 1,
            display: "block",
          }}
          onClick={() => !item.sold && window.open(item.image, "_blank")}
        />
        {item.tag && (
          <div style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: item.tag === "disponível" ? COLORS.oliveMid : COLORS.red,
            color: "#fff",
            padding: "0.25rem 0.6rem",
            borderRadius: "8px",
            fontSize: "0.72rem",
            fontWeight: "700",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontFamily: "Arial, sans-serif",
          }}>
            {item.tag}
          </div>
        )}
      </div>

      <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        <h2 style={{ fontSize: "1.1rem", color: nameColor, fontWeight: "700", margin: 0 }}>{item.name}</h2>
        <p style={{ fontSize: "0.85rem", color: descColor, margin: 0 }}>{item.description}</p>
        <p style={{ fontWeight: "700", fontSize: "1.1rem", color: priceColor, margin: "0.3rem 0 0" }}>{item.price}</p>
        {item.priceNote && (
          <p style={{ fontSize: "0.8rem", color: descColor, margin: 0 }}>{item.priceNote}</p>
        )}
        <div style={{ marginTop: "auto", paddingTop: "0.8rem" }}>
          {!item.sold ? (
            <a
              href="https://wa.me/5541995281904?text=Ol%C3%A1%2C%20estava%20olhando%20seu%20bazar%20e%20me%20interessei%20por%20alguns%20itens%20%F0%9F%98%8A%2C%20poderia%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                backgroundColor: COLORS.oliveMid,
                color: COLORS.cream,
                padding: "0.65rem 1rem",
                borderRadius: "10px",
                textAlign: "center",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontFamily: "Georgia, serif",
                fontWeight: "600",
                transition: "background 0.2s",
              }}
            >
              Falar no WhatsApp
            </a>
          ) : (
            <div style={{
              display: "block",
              backgroundColor: darkMode ? "#2e3530" : COLORS.creamDark,
              color: darkMode ? "#5a6050" : COLORS.sold,
              padding: "0.65rem 1rem",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "0.95rem",
              fontWeight: "600",
              fontFamily: "Georgia, serif",
            }}>
              Vendido
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
