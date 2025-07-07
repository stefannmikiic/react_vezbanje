import React from 'react';

function ReceptKartica({ slika, naziv, opis, kategorija, kuhinja, youtube, sastojci }) {
  return (
    <div className='recept-kartica'>
      <h2>{naziv}</h2>
      <img src={slika} alt={naziv} style={{ width: '100%', borderRadius: '10px' }} />
      
      <p><strong>Kategorija:</strong> {kategorija}</p>
      <p><strong>Kuhinja:</strong> {kuhinja}</p>

      <h4>🧂 Sastojci:</h4>
      <ul>
        {sastojci.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h4>📝 Instrukcije:</h4>
      <p>{opis}</p>

      {youtube && (
        <>
          <h4>🎥 Video:</h4>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${youtube.split("v=")[1]}`}
            title="YouTube recept video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </>
      )}
    </div>
  );
}

export default ReceptKartica;
