import React, { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import WilayaSelect from "./components/WilayaSelect";
import CommuneSelect from "./components/CommuneSelect";
import CardItem from "./components/CardItem";

const App = () => {
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [selectedCommune, setSelectedCommune] = useState("");
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    if (!selectedWilaya || !selectedCommune) {
      Swal.fire("Error", "Please select both a Wilaya and a Commune", "error");
      return;
    }
    const newCard = {
      id: Date.now(),
      wilaya: selectedWilaya,
      commune: selectedCommune,
    };
    setCards([...cards, newCard]);
    // Reset selections after adding the card
    setSelectedWilaya("");
    setSelectedCommune("");
    Swal.fire("Success", "Card added", "success");
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleEditCard = (id, updatedCard) => {
    setCards(cards.map((card) => (card.id === id ? updatedCard : card)));
  };

  return (
    <div className="container mt-4">
      <h2>Wilaya & Commune Manager</h2>
      
      {/* Wilaya Dropdown */}
      <WilayaSelect onWilayaChange={(wilayaCode) => {
        setSelectedWilaya(wilayaCode);
        setSelectedCommune(""); // Reset commune when wilaya changes
      }} />

      {/* Commune Dropdown - Appears only after a Wilaya is selected */}
      {selectedWilaya && (
        <div className="mt-3">
          <CommuneSelect
            wilayaId={selectedWilaya}
            onCommuneChange={setSelectedCommune}
          />
        </div>
      )}

      <button className="btn btn-primary mt-3 mb-4" onClick={handleAddCard}>
        Add Card
      </button>

      <div>
        {cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            onDelete={() => handleDeleteCard(card.id)}
            onEdit={handleEditCard}
          />
        ))}
      </div>
    </div>
  );
};

export default App;