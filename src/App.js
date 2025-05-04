import React, { useState } from "react";

const items = [
  {"id": 1, "name": "Carregador 33w Turbo tipo C", "description": "Novo / sem avarias / sim. Valor original: R$ 65", "price": "R$ 30", "image": "/carregador.jpeg"},
  {"id": 2, "name": "Powerbank por indução 5000mAh", "description": "Usado / 1 mês / sim. Valor original: R$ 90", "price": "R$ 40", "image": "/powerbank.jpeg"},
  {"id": 3, "name": "JBL Charge Essencial 2", "description": "Usado / 1 ano / sim. Valor original: R$ 900", "price": "R$ 450", "image": "/somjbl.jpeg"},
  {"id": 11, "name": "Sofá Beje ( laterais inclinadas )", "description": "Usado / 1 ano / sim. Valor original: R$ 1100", "price": "R$ 650", "image": "/sofa.jpeg"},
  {"id": 23, "name": "Cadeira Escritório preta/azul", "description": "Usado / com avarias. Valor original: R$ 750", "price": "R$ 300", "image": "/cadeira_escrit.jpeg"},
  {"id": 18, "name": "2 Poltronas Chaise Sintética Média", "description": "Usado / 1 ano / sim. Valor original: R$ 300", "price": "R$ 150", "image": "/poltrona.jpeg"}
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#b5d67d', minHeight: '100vh', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Bazar de viagem ✈️</h1>
      <input
        type="text"
        placeholder="Buscar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.7rem', width: '100%', marginBottom: '2rem',borderRadius: '0.75rem' }}
      />
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {filteredItems.map((item) => (
          <div key={item.id} style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '100%',
                height: '350px',
                objectFit: 'cover',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
                transition: 'transform 0.3s ease-in-out'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{ padding: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', color: '#4e6b1a', fontWeight: '600' }}>{item.name}</h2>
              <p style={{ fontSize: '0.875rem', color: '#666', margin: '0.5rem 0' }}>{item.description}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#4e6b1a' }}>{item.price}</p>
              <a
                href="https://wa.me/5592993770892"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginTop: '1rem', backgroundColor: '#7cbb00', color: 'white', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', textAlign: 'center', textDecoration: 'none', fontSize: '1rem' }}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
