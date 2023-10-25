import React, { useState, useEffect } from "react";
import Select from "react-select";

export default function CitySelector() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/SC/municipios")
      .then((response) => response.json())
      .then((data) => {
        const cityOptions = data.map((city) => ({
          value: city.id,
          label: city.nome,
                    
        }));
        setCities(cityOptions);
      })
      .catch((error) => {
        console.error("Erro ao requisitar os dados das cidades: ", error);
      });
  }, []);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedOption.label},SC,BR&lang=pt_br&units=metric&appid=bb186615f7a8211e4664a8c376adf145`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Erro ao encontrar a cidade na API OpenWeatherMap: ", error);
      });
  };

  return (
      <Select
        className="select-city mt-10"
        options={cities}
        value={selectedCity}
        onChange={handleCityChange}
        placeholder="Selecione uma cidade de Santa Catarina"
      />
  );
};