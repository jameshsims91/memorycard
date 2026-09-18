import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Scoreboard from "./components/Scoreboard"
import CardContainer from "./components/CardContainer"
import { getCharacters } from './services/FuturamaApi'
import './App.css'

const shuffleCards = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

export default function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await getCharacters();

        const characterArray = response.items ? response.items.slice(0, 12) : response.slice(0, 12);

        setCards(shuffleCards(characterArray));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchCards();
  }, []);

  const handleCardClick = (card) => {
    const cardId = card.id;

    if (clickedCards.includes(cardId)) {
      setScore(0);
      setClickedCards([]);
      setCards((prevCards) => shuffleCards(prevCards));
      return;
    }

    const newScore = score + 1;
    setScore(newScore);
    setClickedCards([...clickedCards, cardId]);

    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    if (newScore === cards.length) {
      alert('Good news, everyone! You have a perfect memory!');
      setScore(0);
      setClickedCards([]);
      setCards((prevCards) => shuffleCards(prevCards));
      return;
    }

    setCards((prevCards) => shuffleCards(prevCards));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white font-sans px-4 text-center">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-cyan-400 mb-4"></div>
        <p className="text-lg sm:text-xl font-medium tracking-wide text-slate-300">
          Loading the Planet Express crew...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans antialiased selection:bg-cyan-500 selection:text-slate-900 p-4 sm:p-6">
      <div className="w-full max-w-md mx-auto flex flex-col">
        
        {/* Render Header and nest Scoreboard inside it */}
        <Header>
          <Scoreboard score={score} bestScore={bestScore} />
        </Header>

        {/* Render Card Grid and pass the game variables down */}
        <CardContainer cards={cards} onCardClick={handleCardClick} />

      </div>
    </div>
  );
}

