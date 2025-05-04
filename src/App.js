
import React, { useState } from "react";

const items = [
  {"id": 1, "name": "Carregador 33w Turbo tipo C", "description": "Novo / sem avarias / sim. Valor original: R$ 65", "price": "R$ 30", "image": "https://via.placeholder.com/300"},
  {"id": 2, "name": "Powerbank por indução 5000mAh", "description": "Usado / 1 mês / sim. Valor original: R$ 90", "price": "R$ 40", "image": "https://via.placeholder.com/300"},
  {"id": 3, "name": "JBL Charge Essencial 2", "description": "Usado / 1 ano / sim. Valor original: R$ 900", "price": "R$ 450", "image": "https://via.placeholder.com/300"},
  {"id": 4, "name": "Umidificador", "description": "Usado / 6 meses / sim. Valor original: R$ 60", "price": "R$ 25", "image": "https://via.placeholder.com/300"},
  {"id": 5, "name": "Ventilador Pequeno", "description": "Usado / 1 ano / sim. Valor original: R$ 100", "price": "R$ 50", "image": "https://via.placeholder.com/300"},
  {"id": 6, "name": "Ayrfry Elgin", "description": "Usado / 1 ano / sim. Valor original: R$ 250", "price": "R$ 150", "image": "https://via.placeholder.com/300"},
  {"id": 7, "name": "Aspirador inteligente", "description": "Pouco usado / sim. Valor original: R$ 50", "price": "R$ 30", "image": "https://via.placeholder.com/300"},
  {"id": 8, "name": "Geladeira Eletrolux 362 litros", "description": "Usado / 5 anos / sim. Valor original: R$ 1700", "price": "R$ 500", "image": "https://via.placeholder.com/300"},
  {"id": 9, "name": "Fogão Atlas 4 bocas ( sem avarias )", "description": "Usado / 2 anos / sim. Valor original: R$ 1200", "price": "R$ 700", "image": "https://via.placeholder.com/300"},
  {"id": 10, "name": "Televisão semp 49p ( novo )", "description": "Usado / 8 meses / sim. Valor original: R$ 2000", "price": "R$ 1800", "image": "https://via.placeholder.com/300"},
  {"id": 11, "name": "Sofá Beje ( laterais inclinadas )", "description": "Usado / 1 ano / sim. Valor original: R$ 1100", "price": "R$ 650", "image": "https://via.placeholder.com/300"},
  {"id": 12, "name": "Escudo Capitão América ( metal )", "description": "Usado / 8 meses / sim. Valor original: R$ 250", "price": "R$ 120", "image": "https://via.placeholder.com/300"},
  {"id": 13, "name": "Cama inflável Solteiro", "description": "Usado / 1 ano / sim. Valor original: R$ 180", "price": "R$ 90", "image": "https://via.placeholder.com/300"},
  {"id": 14, "name": "Patins Inline Traxart 41", "description": "Usado / 2 anos / sim. Valor original: R$ 450", "price": "R$ 200", "image": "https://via.placeholder.com/300"},
  {"id": 15, "name": "Abajur luz amarela ( c/ avarias )", "description": "Usado / 2 anos / sim. Valor original: R$ 45", "price": "R$ 15", "image": "https://via.placeholder.com/300"},
  {"id": 16, "name": "Ferro de passar ( bom estado )", "description": "Usado / 1 ano / sim. Valor original: R$ 100", "price": "R$ 50", "image": "https://via.placeholder.com/300"},
  {"id": 17, "name": "Varal de chão Aço", "description": "Usado / 1 ano / sim. Valor original: R$ 100", "price": "R$ 50", "image": "https://via.placeholder.com/300"},
  {"id": 18, "name": "2 Poltronas Chaise Sintética Média", "description": "Usado / 1 ano / sim. Valor original: R$ 300", "price": "R$ 150", "image": "https://via.placeholder.com/300"},
  {"id": 19, "name": "Cômoda de Madeira 5 gavetas", "description": "Usado / 1 ano / sim. Valor original: R$ 300", "price": "R$ 120", "image": "https://via.placeholder.com/300"},
  {"id": 20, "name": "Caixa de Transporte Felino", "description": "Usado / 1 ano / sim. Valor original: R$ 100", "price": "R$ 50", "image": "https://via.placeholder.com/300"},
  {"id": 21, "name": "Alexa echo Dot 3° geração", "description": "Usado / 1 ano / sim. Valor original: R$ 250", "price": "R$ 120", "image": "https://via.placeholder.com/300"},
  {"id": 22, "name": "Heartstopper Volumes 1, 2 e 3", "description": "Usado / 6 meses / sim. Valor original: R$ 150", "price": "R$ 60", "image": "https://via.placeholder.com/300"},
  {"id": 23, "name": "Monitor Dell", "description": "Usado / 1 ano / sim. Valor original: R$ 800", "price": "R$ 350", "image": "https://via.placeholder.com/300"}
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#b5d67d', minHeight: '100vh', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Catálogo de Vendas</h1>
      <input
        type="text"
        placeholder="Buscar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '2rem' }}
      />
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {filteredItems.map((item) => (
          <div key={item.id} style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} />
            <div style={{ padding: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', color: '#4e6b1a', fontWeight: '600' }}>{item.name}</h2>
              <p style={{ fontSize: '0.875rem', color: '#666', margin: '0.5rem 0' }}>{item.description}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#4e6b1a' }}>{item.price}</p>
              <a
                href="https://wa.me/5592993770892"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginTop: '1rem', backgroundColor: '#7cbb00', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.75rem', textAlign: 'center', textDecoration: 'none' }}
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
