import React, { useState } from "react";

const CardItem = ({ card, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedWilaya, setEditedWilaya] = useState(card.wilaya);
  const [editedCommune, setEditedCommune] = useState(card.commune);

  const handleSave = () => {
    const updatedCard = {
      ...card,
      wilaya: editedWilaya,
      commune: editedCommune,
    };
    onEdit(card.id, updatedCard);
    setEditMode(false);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {editMode ? (
          <>
            <div className="mb-2">
              <label>Wilaya:</label>
              <input 
                type="text" 
                value={editedWilaya} 
                onChange={(e) => setEditedWilaya(e.target.value)} 
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label>Commune:</label>
              <input 
                type="text" 
                value={editedCommune} 
                onChange={(e) => setEditedCommune(e.target.value)} 
                className="form-control"
              />
            </div>
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={() => setEditMode(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">Wilaya: {card.wilaya}</h5>
            <p className="card-text">Commune: {card.commune}</p>
            <button className="btn btn-primary me-2" onClick={() => setEditMode(true)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CardItem;
