import React, { useState } from "react";

const items = [
  {
    id: 1,
    name: "Carregador 33w Turbo tipo C",
    description: "novo / sem avarias. Tipo de venda: imediata. Valor original: R$ 65",
    price: "R$ 30",
    image: "/carregador.jpeg",
    tag: "disponível"
  },
  {
    id: 2,
    name: "Powerbank por indução 5000mAh",
    description: "usado / 1 mês. Tipo de venda: imediata. Valor original: R$ 90",
    price: "R$ 40",
    image: "/power.jpeg",
    tag: "disponível"
  },
  {
    id: 3,
    name: "JBL Charge Essencial 2",
    description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 900",
    price: "R$ 450",
    image: "/somjbl.jpeg",
    tag: "disponível"
  },
  {
    id: 4,
    name: "Umidificador",
    description: "usado / 6 meses. Tipo de venda: imediata. Valor original: R$ 60",
    price: "R$ 25",
    image: "/umidificador.jpeg",
    tag: "disponível"
  },
  {
    id: 5,
    name: "Ventilador Pequeno",
    description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 100",
    price: "R$ 40",
    image: "/ventilador.jpeg",
    tag: "disponível"
  },
  {
    id: 6,
    name: "Airfry Elgin 4L",
    description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 250",
    price: "R$ 150",
    image: "/airfry.jpeg",
    tag: "disponível"
  },
  {
    id: 7,
    name: "Aspirador inteligente",
    description: "pouco usado. Tipo de venda: imediata. Valor original: R$ 50",
    price: "R$ 30",
    image: "/aspirador.jpeg",
    tag: "disponível"
  },
  {
    id: 8,
    name: "Geladeira Eletrolux 362 litros",
    description: "usado / 5 anos. Tipo de venda: final de maio. Valor original: R$ 1700",
    price: "R$ 500",
    image: "/geladeira.jpeg",
    tag: "disponível"
  },
  {
    id: 9,
    name: "Fogão Atlas 4 bocas ( sem avarias )",
    description: "usado / 2 anos. Tipo de venda: final de maio. Valor original: R$ 1200",
    price: "R$ 700",
    image: "/fogao.png",
    tag: "disponível"
  },
  {
    id: 10,
    name: "Televisão semp roku 50p",
    description: "usado / 8 meses. Tipo de venda: final de maio. Valor original: R$ 2000",
    price: "R$ 1700",
    image: "/tv50.jpeg",
    tag: "indisponível",
    sold: true
  },
  {
    id: 11,
    name: "Sofá Beje ( laterais inclinadas )",
    description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 300",
    price: "R$ 150",
    image: "/sofa.jpeg",
    tag: "disponível"
  },
  {
    id: 12,
    name: "Escudo Capitão América ( metal )",
    description: "usado / 8 meses. Tipo de venda: imediata. Valor original: R$ 380",
    price: "R$ 150",
    image: "/escudo_frente.jpeg",
    tag: "disponível"
  },
  {
    id: 13,
    name: "Colchão Inflável Solteiro Multiuso Até 100Kgs",
    description: "usado / 8 meses. Tipo de venda: imediata. Valor original: R$ 135",
    price: "R$ 60",
    image: "/colchao.jpeg",
    tag: "disponível"
  },
  {
    id: 14,
    name: "Patins Inline Traxart 41",
    description: "usado / 2 anos. Tipo de venda: imediata. Valor original: R$ 900",
    price: "R$ 350",
    image: "/placeholder.jpeg",
    tag: "disponível"
  },
  {
    id: 15,
    name: "Abajur luz amarela ( c/ avarias )",
    description: "usado / 2 anos. Tipo de venda: imediata. Valor original: R$ 90",
    price: "R$ 40",
    image: "/abajur.jpeg",
    tag: "disponível"
  },
  {
    id: 16,
    name: "Ferro de passar ( bom estado )",
    description: "usado / 1 ano. Tipo de venda: imediata. Valor original: R$ 100",
    price: "R$ 50",
    image: "/ferro.jpeg",
    tag: "disponível"
  },
  {
    id: 17,
    name: "Varal de chão Aço",
    description: "novo / sem avarias. Tipo de venda: imediata. Valor original: R$ 100",
    price: "R$ 50",
    image: "/varal.jpeg",
    tag: "disponível"
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
    name: "Caixa de Transporte Felino",
    description: "novo / sem avarias. Tipo de venda: imediata. Valor original: R$ 100",
    price: "R$ 60",
    image: "/caixa_felino.jpeg",
    tag: "disponível"
  },
  {
    id: 21,
    name: "Alexa echo Dot 3° geração",
    description: "novo / sem avarias. Tipo de venda: final de maio. Valor original: R$ 650",
    price: "R$ 350",
    image: "/alexa.jpeg",
    tag: "disponível"
  },
  {
    id: 22,
    name: "Heartstopper Volumes 1, 2 e 3",
    description: "usado / sem avarias. Tipo de venda: imediata. Valor original: R$ 120",
    price: "R$ 50",
    image: "/heart.jpeg",
    tag: "disponível"
  },
  {
    id: 23,
    name: "Monitor Dell",
    description: "usado / 1 ano. Tipo de venda: final de maio. Valor original: R$ 1400",
    price: "R$ 800",
    image: "/monitor.jpeg",
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
    tag: "disponível"
  },
  {
    id: 27,
    name: "Alocácia pequena 3 meses",
    description: "Tipo de venda: imediata",
    price: "R$ 20",
    image: "/orquidea.jpeg",
    tag: "disponível"
  },
  {
    id: 28,
    name: "Sapatos DARMAND Marrom seminovo",
    description: "Usado poucas vezes / tamano 41/41. Tipo de venda: imediata",
    price: "R$ 80",
    image: "/sapato_darmand.jpeg",
    tag: "disponível"
  },
  {
    id: 29,
    name: "Zamiocuca 9 meses",
    description: "Tipo de venda: imediata",
    price: "R$ 30",
    image: "/zamiocuca.jpeg",
    tag: "disponível"
  },
  {
    id: 30,
    name: "jibóia 1 ano e meio",
    description: "Tipo de venda: imediata",
    price: "R$ 30",
    image: "/jiboia.jpeg",
    tag: "disponível"
  },
  {
    id: 31,
    name: "cafeteira star wars",
    description: "Usado / 2 anos. Tipo de venda: imediata",
    price: "R$ 50",
    image: "/cafeteira_starwars.jpeg",
    tag: "disponível"
  },
  {
    id: 32,
    name: "Balança Corporal 180kg Daaz",
    description: "Novo / sem avarias. Tipo de venda: imediata",
    price: "R$ 60",
    image: "/balanca_dazz.jpeg",
    tag: "disponível"
  },
  {
    id: 33,
    name: "Espada de São Jorge Grande",
    description: "Tipo de venda: imediata",
    price: "R$ 40",
    image: "/espada_sao_jorge_grande.jpeg",
    tag: "disponível"
  },
  {
    id: 34,
    name: "Espada de São Jorge pequena",
    description: "Tipo de venda: imediata",
    price: "R$ 25",
    image: "/espada_sao_jorge_pequena.jpeg",
  }
];

export default function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
  style={{
    backgroundImage: 'url(/logo.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    color: darkMode ? '#fff' : '#000'
  }}
>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
  <img src="/logo.png" alt="Logo Thrift" style={{ width: '120px', marginBottom: '1rem' }} />
  <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#2d4e1d', textAlign: 'center', fontFamily: 'Arial Black, sans-serif' }}>
    Bazar Virtual - Ryan e Alef
  </h1>
</div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{ marginLeft: '1rem', padding: '0.5rem 1rem', borderRadius: '12px', border: 'none', backgroundColor: '#7cbb00', color: '#fff', cursor: 'pointer' }}
        >
          {darkMode ? '☀️ Claro' : '🌙 Escuro'}
        </button>
      </div>

      <input
        type="text"
        placeholder="Buscar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '2rem', borderRadius: '12px', border: '1px solid #ccc' }}
      />

      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {filteredItems.map((item) => (
          <div key={item.id} style={{ backgroundColor: darkMode ? '#2a2a2a' : '#fefae0', borderRadius: '1rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                  cursor: 'zoom-in'
                }}
                onClick={() => window.open(item.image, '_blank')}
              />
              {item.tag && (
                <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#ff6347', color: '#fff', padding: '0.25rem 0.5rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>
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
                  href="https://wa.me/5592993770892?text=Ol%C3%A1%2C%20estava%20olhando%20seu%20bazar%20e%20me%20interessei%20por%20alguns%20itens%20%F0%9F%98%8A%2C%20poderia%20conversar%3F."
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
        ))}
      </div>
    </div>
  );
}




