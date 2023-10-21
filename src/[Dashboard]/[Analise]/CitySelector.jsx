import React, { useState, useEffect } from "react";
import Select from "react-select";

export default function CitySelector() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetch("YOUR_CITY_API_URL")
      .then((response) => response.json())
      .then((data) => {
        const cityOptions = data.map((city) => ({
          value: city.id,
          label: city.name,
        }));
        setCities(cityOptions);
      })
      .catch((error) => {
        console.error("Erro ao requisitar os dados das cidades: ", error);
      });
  }, []);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  return (
    <div className="mt-10">
      <Select
        options={cities}
        value={selectedCity}
        onChange={handleCityChange}
        placeholder="Selecione uma cidade"
      />
    </div>
  );
};