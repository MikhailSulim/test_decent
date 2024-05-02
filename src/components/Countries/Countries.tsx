import React, { useEffect, useState } from 'react';
import './Countries.scss';
import axios, { AxiosResponse } from 'axios';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

interface ICountry {
  name: {
    common: string;
  };
  translations: { [key in string]: { common: string; official: string } };
}

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [messageText, setMessageText] = useState<null | string>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setMessageText('Идёт загрузка данных...');
      try {
        const response: AxiosResponse = await axios.get(
          'https://restcountries.com/v3.1/all'
        );
        setCountries(response.data);
        setMessageText(null);
      } catch (error) {
        setMessageText(`Ошибка (${error}). Обновите страницу`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="countries">
      {countries.length ? (
        countries.map((item: ICountry) => (
          <Button
            type="text"
            key={item.name.common}
            onClick={() => navigate(`/country/${item.name.common}`)}
          >
            {item.translations.rus.common}
          </Button>
        ))
      ) : (
        <p className="message">{messageText}</p>
      )}
    </div>
  );
};

export default Countries;
