import React, { useState } from "react";

const items = [
  {
    id: 1,
    name: "Carregador 33w Turbo tipo C",
    description: "novo / sem avarias. Tipo de venda: imediata. Valor original: R$ 65",
    price: "R$ 30",
    image: "/carregador2.jpeg",
    tag: "indisponível",
    sold: true
  },
  {
    id: 2,
    name: "Powerbank por indução 5000mAh Iphone",
    description: "usado / 1 mês. Tipo de venda: imediata. Valor original: R$ 90",
    price: "R$ 30",
    image: "/power.jpeg",
    tag: "indisponível",
    sold: true
  },
  {
    id: 3,
    name: "JBL Charge Essencial 2",
    description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 900",
    price: "R$ 400",
    image: "/somjbl.jpeg",
    tag: "disponível"
  },
  {
    id: 4,
    name: "Umidificador",
    description: "usado / 6 meses. Tipo de venda: imediata. Valor original: R$ 60",
    price: "R$ 25",
    image: "/umidificador.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 5,
    name: "Ventilador Pequeno",
    description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 100",
    price: "R$ 40",
    image: "/ventilador2.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 6,
    name: "Air fryer Elgin 4L",
    description: "usado / 1 ano e meio. Tipo de venda: imediata. Valor original: R$ 250",
    price: "R$ 120",
    image: "/airfry.jpeg",
    tag: "indisponível",
    sold: true
  },
  {
    id: 7,
    name: "Aspirador inteligente",
    description: "pouco usado. Tipo de venda: imediata. Valor original: R$ 75",
    price: "R$ 45",
    image: "/aspirador.jpeg",
    tag: "indisponível",
    sold: true
  },
  {
    id: 8,
    name: "Geladeira Eletrolux 362 litros",
    description: "usado / 5 anos. Tipo de venda: final de maio. Valor original: R$ 1700",
    price: "R$ 500",
    image: "/geladeira.jpeg",
    tag: "indisponível",
    sold: true
  },
  {
    id: 9,
    name: "Fogão Atlas 4 bocas ( sem avarias )",
    description: "usado / 2 anos. Tipo de venda: final de maio. Valor original: R$ 1200",
    price: "R$ 600",
    image: "/fogao.png",
    tag: "indisponível",
    sold:true
  },
  {
    id: 10,
    name: "Tv Semp Roku 50p",
    description: "novo / 8 meses. Tipo de venda: final de maio. Valor original: R$ 2000",
    price: "R$ 1700",
    priceNote: "à vista ou R$ 1800 parcelado",
    image: "/tv50.jpeg",
    tag: "disponível"
  },
  {
    id: 11,
    name: "Sofá Beje ( laterais inclinadas )",
    description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 300",
    price: "R$ 100",
    image: "/sofa.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 12,
    name: "Escudo Capitão América ( metal )",
    description: "usado / 8 meses. Tipo de venda: imediata. Valor original: R$ 380",
    price: "R$ 150",
    image: "/escudo_frente.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 13,
    name: "Colchão Inflável Solteiro Multiuso Até 100Kgs",
    description: "usado / 8 meses. Tipo de venda: imediata. Valor original: R$ 135",
    price: "R$ 80",
    image: "/colchao.jpeg",
    tag: "disponível"
  },
  {
    id: 14,
    name: "Patins Inline Traxart 41",
    description: "usado / 8 meses. Tipo de venda: imediata. Valor original: R$ 900",
    price: "R$ 350",
    image: "/patins.jpeg",
    tag: "disponível"
  },
  {
    id: 15,
    name: "Abajur ( c/ avarias na parte interior )",
    description: "usado / 2 anos. Tipo de venda: imediata. Valor original: R$ 90",
    price: "R$ 40",
    image: "/abajur2.jpeg",
    tag: "disponível"
  },
  {
    id: 16,
    name: "Ferro de passar ( bom estado )",
    description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 100",
    price: "R$ 50",
    image: "/ferro.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 17,
    name: "Varal de chão Aço",
    description: "novo / sem avarias. Tipo de venda: imediata. Valor original: R$ 100",
    price: "R$ 50",
    image: "/varal.jpeg",
    tag: "indisponível",
    sold: true
  },
  {
    id: 18,
    name: "Poltrona Chaise Sintética Média",
    description: "novo / 4 meses. Tipo de venda: Imediata. Valor original: R$ 1200",
    price: "R$ 900",
    image: "/poltrona.jpeg",
    tag: "disponível"
  },
  {
    id: 19,
    name: "Cadeira escritório azul/preto",
    description: "usado / 3 anos / com avaria. Tipo de venda: Imediata. Valor original: R$ 650",
    price: "R$ 300",
    image: "/cadeira_escrit.jpeg",
    tag: "indisponível",
    sold: true
  },
  {
    id: 20,
    name: "Caixa de Transporte animal Tamanho Médio",
    description: "novo / sem avarias. Tipo de venda: imediata. Valor original: R$ 100",
    price: "R$ 60",
    image: "/caixa_felino.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 21,
    name: "Alexa Echo Dot 3° geração",
    description: "novo / sem avarias. Tipo de venda: final de maio. Valor original: R$ 650",
    price: "R$ 350",
    image: "/alexa.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 22,
    name: "Heartstopper Volumes 1, 2 e 3",
    description: "usado / sem avarias. Tipo de venda: imediata. Valor original: R$ 120",
    price: "R$ 50",
    image: "/heart.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 23,
    name: "Monitor Dell 24p.",
    description: "Em ótimo estado / 2 anos. Tipo de venda: final de maio. Valor original: R$ 1400",
    price: "R$ 800",
    image: "/monitordell.jpeg",
    tag: "disponível"
  },
  {
    id: 25,
    name: "Rosa do deserto / 1 ano",
    description: "Tipo de venda: imediata.",
    price: "R$ 30",
    image: "/rosa_deserto.jpeg",
    tag: "disponível"
  },
  {
    id: 26,
    name: "Alocácia Grande 7 meses",
    description: "Tipo de venda: imediata",
    price: "R$ 30",
    image: "/orquidea_grande.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 27,
    name: "Alocácia pequena 3 meses",
    description: "Tipo de venda: imediata",
    price: "R$ 20",
    image: "/orquidea.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 28,
    name: "Sapatos DARMAND Marrom seminovo",
    description: "Usado poucas vezes / tamano 41/42. Tipo de venda: imediata. Valor original: R$ 250",
    price: "R$ 90",
    image: "/sapato_darmand.jpeg",
    tag: "disponível"
  },
  {
    id: 29,
    name: "Zamiocuca / 9 meses",
    description: "Tipo de venda: imediata",
    price: "R$ 25",
    image: "/zamiocuca.jpeg",
    tag: "disponível"
  },
  {
    id: 30,
    name: "Jibóia / 1 ano e meio",
    description: "Tipo de venda: imediata",
    price: "R$ 25",
    image: "/jiboia.jpeg",
    tag: "disponível"
  },
  {
    id: 31,
    name: "Cafeteira star wars / Mallory",
    description: "Usado / 2 anos. Tipo de venda: imediata",
    price: "R$ 50",
    image: "/cafeteira_starwars.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 32,
    name: "Balança Corporal 180kg Daaz",
    description: "Novo / sem avarias. Tipo de venda: imediata",
    price: "R$ 60",
    image: "/balanca_dazz.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 33,
    name: "Espada de São Jorge Grande",
    description: "Tipo de venda: imediata",
    price: "R$ 40",
    image: "/espada_sao_jorge_grande.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 34,
    name: "Espada de São Jorge pequena",
    description: "Tipo de venda: imediata",
    price: "R$ 25",
    image: "/espada_sao_jorge_pequena.jpeg",
    tag: "indisponível",
    sold: true
  },
  {
    id: 35,
    name: "Pesos 3kg cada",
    description: "Tipo de venda: imediata",
    price: "R$ 15",
    image: "/pesos.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 36,
    name: "Teclado HYPER semimecânico",
    description: "Sem defeitos / 2 anos. Tipo de venda: imediata. Valor original: R$ 200",
    price: "R$ 100",
    image: "/teclado.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 37,
    name: "5 Potes herméticos",
    description: "Sem defeitos, Tipo de venda: imediata. Valor original: R$ 80",
    price: "R$ 50",
    image: "/potes.jpeg",
    tag: "indisponível",
    sold: true
  },
  {
    id: 38,
    name: "Chapéu mario e luigi",
    description: "usado / Tipo de venda: imediata. Valor original: R$ 50 os dois",
    price: "R$ 25 os dois.",
    image: "/marioluigi.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 39,
    name: "Teclado POSITIVO",
    description: "Sem defeitos / com avarias na parte de baixo. Tipo de venda: imediata. Valor original: R$ 70",
    price: "R$ 20",
    image: "/teclado2.jpeg",
    tag: "disponível"
  },
  {
    id: 40,
    name: "Livro Mitologia Nórdica",
    description: "Sem avarias. Tipo de venda: imediata",
    price: "R$ 10",
    image: "/mitologianordica.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 41,
    name: "Livro Com Amor, Simon",
    description: "Sem avarias. Tipo de venda: imediata.",
    price: "R$ 20",
    image: "/simon.jpeg",
    tag: "disponível"
  },
  {
    id: 42,
    name: "Livro Me chame pelo seu nome",
    description: "Usado. Tipo de venda: imediata.",
    price: "R$ 20",
    image: "/callme.jpeg",
    tag: "disponível"
  },
  {
    id: 43,
    name: "Livros saga Crepúsculo/Eclipse/Lua Nova",
    description: "Usado. Tipo de venda: imediata.",
    price: "R$ 40",
    image: "/crepusculo.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 44,
    name: "Livro A forma da água",
    description: "Seminovo. Tipo de venda: imediata.",
    price: "R$ 20",
    image: "/formadagua.jpeg",
    tag: "disponível"
  },
  {
    id: 45,
    name: "Livro A Arte da Sabedoria",
    description: "Seminovo. Tipo de venda: imediata.",
    price: "R$ 10",
    image: "/arte.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 46,
    name: "Livro Paixão / um romance da série FALLEN",
    description: "Seminovo. Tipo de venda: imediata.",
    price: "R$ 20",
    image: "/paixao.jpeg",
    tag: "disponível"
  },
  {
    id: 47,
    name: "Livro CORALINE",
    description: "Marcas de uso. Tipo de venda: imediata.",
    price: "R$ 15",
    image: "/coraline.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 48,
    name: "Planta Comigo ninguém pode",
    description: "Tipo de venda: imediata.",
    price: "R$ 35",
    image: "/comigo.jpeg",
    tag: "disponível"
  },
  {
    id: 49,
    name: "Livro O homem do castelo alto",
    description: "Marcas de uso. Tipo de venda: imediata.",
    price: "R$ 10",
    image: "/casteloalto.jpeg",
    tag: "disponível"
  },
  {
    id: 50,
    name: "Cortina Blackout Cinza 1m90",
    description: "Blackout com avarias, parte do tecido sem avarias. Tipo de venda: imediata.",
    price: "R$ 40",
    image: "/cortina.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 51,
    name: "Manhwa On or Off: Volume 02 e 03 (Full Color)",
    description: "Novos. Tipo de venda: imediata.",
    price: "R$ 35 cada ou os 2 por 60",
    image: "/onoroff.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 52,
    name: "Jogo de 5 copos de vidro (1 quebrou)",
    description: "Novos/ nunca usados. Tipo de venda: imediata.",
    price: "R$ 20",
    image: "/copos.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 53,
    name: "2 Travessas de vidro",
    description: "Tamanho médio. Tipo de venda: imediata.",
    price: "R$ 20 cada um, 30 as duas",
    image: "/travessas.jpeg",
    tag: "indisponível",
    sold:true
  },
  {
    id: 54,
    name: "Mop Giratório Esfregão Top Cabo Inox",
    description: "5 meses de uso. Tipo de venda: imediata.",
    price: "R$ 40",
    image: "/mop.jpeg",
    tag: "disponível"
  },
  {
    id: 24,
    name: "Mini sapateira, comporta até 8 pares",
    description: "3 meses de uso. Tipo de venda: imediata.",
    price: "R$ 25",
    image: "/minisapateira.jpeg",
    tag: "indisponível",
    sold:true
  }
];

export default function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const availableItems = filteredItems
    .filter((item) => !item.sold)
    .sort((a, b) => a.name.localeCompare(b.name));
  const soldItems = filteredItems
    .filter((item) => item.sold)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1d1d1d" : "#a3b18a",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "1rem",
          position: "relative",
        }}
      >
        <img
          src="/logo_mala.png"
          alt="Logo Thrift"
          style={{
            maxWidth: "150px",
            width: "100%",
            marginBottom: "1rem",
            filter: darkMode ? "brightness(0.9)" : "none",
          }}
        />
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "900",
            color: "#2d4e1d",
            fontFamily: "Garamond",
          }}
        >
          Bazar Virtual de Mudança
        </h1>
        <div
          style={{
            backgroundColor: darkMode
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(255, 255, 255, 0.7)",
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "1rem 1.5rem",
            marginTop: "1rem",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "Arial, sans-serif",
            color: darkMode ? "#eee" : "#2d4e1d",
            fontSize: "1rem",
            lineHeight: "1.6",
          }}
        >
          👋 Olá! Seja bem-vindo ao nosso <strong>Bazar Virtual</strong>. <br />
          Estamos disponibilizando alguns itens novos, seminovos e usados para
          venda pois estamos de mudança dentro de algumas semanas. 📦✨<br />
          Entre em contato conosco se desejar mais detalhes dos produtos e
          agendamento da retirada. <br />
            <br /> Aceitamos cartão de crédito e débito!
          <br />🌿 Sinta-se à vontade 😁
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "0.5rem 1rem",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#7cbb00",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {darkMode ? "☀️ Claro" : "🌙 Escuro"}
        </button>
      </div>
      <input
        type="text"
        placeholder="Buscar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '0.5rem',
          width: '100%',
          marginBottom: '2rem',
          borderRadius: '12px',
          border: '1px solid #ccc'
        }}
      />

      <h2 style={{ marginBottom: '1rem', color: '#4e6b1a' }}>📦 Itens disponíveis</h2>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {availableItems.map((item) => (
          <ItemCard key={item.id} item={item} darkMode={darkMode} />
        ))}
      </div>

      <h2 style={{ margin: '3rem 0 1rem', color: '#888' }}>✅ Vendidos</h2>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {soldItems.map((item) => (
          <ItemCard key={item.id} item={item} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}

function ItemCard({ item, darkMode }) {
  return (
    <div style={{ backgroundColor: darkMode ? '#2a2a2a' : '#fefae0', borderRadius: '1rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: '100%',
            height: '350px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            cursor: 'zoom-in',
            opacity: item.sold ? 0.6 : 1
          }}
          onClick={() => !item.sold && window.open(item.image, '_blank')}
        />
        {item.tag && (
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: item.tag.toLowerCase() === 'disponível' ? '#7cbb00' : '#ff6347',
            color: '#fff',
            padding: '0.25rem 0.5rem',
            borderRadius: '8px',
            fontSize: '0.75rem',
            fontWeight: 'bold'
          }}>
            {item.tag.toUpperCase()}
          </div>
        )}
      </div>
      <div style={{ padding: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#5a5a00', fontWeight: '600' }}>{item.name}</h2>
        <p style={{ fontSize: '0.875rem', color: '#666', margin: '0.5rem 0' }}>{item.description}</p>
        <p style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#4e6b1a' }}>{item.price}</p>
        {!item.sold ? (
          <a
            href="https://wa.me/XXXX?text=Ol%C3%A1%2C%20estava%20olhando%20seu%20bazar%20e%20me%20interessei%20por%20alguns%20itens%20%F0%9F%98%8A%2C%20poderia%20conversar%3F"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', marginTop: '1rem', backgroundColor: '#7cbb00', color: 'white', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', textAlign: 'center', textDecoration: 'none', fontSize: '1rem' }}
          >
            Falar no WhatsApp
          </a>
        ) : (
          <div style={{ display: 'inline-block', marginTop: '1rem', backgroundColor: '#ccc', color: '#444', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', textAlign: 'center', fontSize: '1rem', fontWeight: 'bold' }}>
            Vendido
          </div>
        )}
      </div>
    </div>
  );
}
