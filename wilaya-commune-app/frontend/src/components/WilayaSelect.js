import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import "selectize";
import Swal from "sweetalert2";
import "selectize/dist/css/selectize.bootstrap3.css";

const WilayaSelect = ({ onWilayaChange }) => {
  const [wilayas, setWilayas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/wilayas")
      .then(response => {
        console.log("Wilayas fetched:", response.data);
        setWilayas(response.data);
      })
      .catch(error => {
        console.error("Error fetching wilayas:", error);
        Swal.fire("Error", "Failed to fetch wilayas", "error");
      });
  }, []);

  // Initialize Selectize after wilayas load
  useEffect(() => {
    if (wilayas.length > 0) {
      const $select = $("#wilaya-select").selectize();
      const selectizeInstance = $select[0].selectize;
      selectizeInstance.clearOptions();
      wilayas.forEach(wilaya => {
        selectizeInstance.addOption({ 
          value: wilaya.wilaya_code, 
          text: wilaya.wilaya_name_ascii 
        });
      });
      selectizeInstance.refreshOptions(false);
    }
  }, [wilayas]);

  return (
    <select 
      id="wilaya-select"
      onChange={(e) => onWilayaChange(e.target.value)} 
      className="w-100 p-2 border border-gray-300 rounded"
    >
      <option value="">Select Wilaya</option>
      {wilayas.map((wilaya) => (
        <option key={wilaya.wilaya_code} value={wilaya.wilaya_code}>
          {wilaya.wilaya_name_ascii}
        </option>
      ))}
    </select>
  );
};

export default WilayaSelect;