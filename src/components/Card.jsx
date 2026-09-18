export default function Card({ card, onClick }) {
  return (
    <button
      className="card"
      onClick={() => onClick(card)}
    >
      <img
        src={card.img}
        alt={card.name}
      />

      <h2>{card.name}</h2>
    </button>
  );
}