import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import $ from "jquery";
import "selectize";
import "selectize/dist/css/selectize.bootstrap3.css";

const CommuneSelect = ({ wilayaId, onCommuneChange }) => {
  const [communes, setCommunes] = useState([]);
  const selectRef = useRef(null);

  // Fetch communes when a Wilaya is selected
  useEffect(() => {
    if (wilayaId) {
      console.log("Fetching communes for Wilaya ID:", wilayaId);
      axios
        .get(`http://localhost:5000/api/communes/${wilayaId}`)
        .then(response => {
          console.log("Communes fetched:", response.data);
          setCommunes(response.data);
        })
        .catch(error => {
          console.error("Error fetching communes:", error);
        });
    } else {
      setCommunes([]);
    }
  }, [wilayaId]);

  // Initialize Selectize on mount and update options when communes change
  useEffect(() => {
    if (selectRef.current) {
      // Initialize Selectize if not already initialized
      if (!selectRef.current.selectize) {
        $(selectRef.current).selectize({
          onChange: onCommuneChange,
        });
      }
      // Get the selectize instance
      const selectizeInstance = selectRef.current.selectize;
      if (selectizeInstance) {
        selectizeInstance.clearOptions();
        communes.forEach(commune => {
          selectizeInstance.addOption({
            value: commune.commune_name,
            text: commune.commune_name_ascii,
          });
        });
        selectizeInstance.refreshOptions(false);
      }
    }
  }, [communes, onCommuneChange]);

  return (
    <select
      ref={selectRef}
      id="commune-select"
      className="w-100 p-2 border border-gray-300 rounded"
    >
      <option value="">Select Commune</option>
      {communes.map(commune => (
        <option key={commune.commune_name} value={commune.commune_name}>
          {commune.commune_name_ascii}
        </option>
      ))}
    </select>
  );
};

export default CommuneSelect;