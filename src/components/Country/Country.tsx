import React, { useEffect, useState } from 'react';
import './Country.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'antd';

interface ICountry {
  name: { official: string };
  translations: { [key in string]: { common: string; official: string } };
  flags: { png: string; alt: string };
  population: number;
  capital: string[];
  area: number;
}

const Country = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<ICountry>();
  const [messageText, setMessageText] = useState<null | string>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setMessageText(`Загрузка данных о ${country}...`);
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${country}`
        );
        setData(response.data[0]);
        setMessageText(null);
        console.log(response.data[0]);
      } catch (error) {
        setMessageText(`Возникла ошибка ${error}`);
      }
    };

    fetchCountry();
  }, [country]);

  return (
    <main className="country">
      {data ? (
        <div className="country__container">
          <img
            className="country__flag"
            src={data.flags.png}
            alt={data.flags.alt}
          />
          <div className="country__data">
            <h2 className="country__title">{`${data.translations.rus.common} (${data.translations.rus.official})`}</h2>
            <p className="country__feature">
              Площадь, кв.км
              <span className="country__value">{data.area}</span>
            </p>
            <p className="country__feature">
              Столица
              <span className="country__value">{data.capital.join(',')}</span>
            </p>
            <p className="country__feature">
              Население, чел.
              <span className="country__value">{data.population}</span>
            </p>
            <p className="country__feature">
              <span className="country__value"></span>{' '}
            </p>
          </div>
        </div>
      ) : (
        <p className="country__message">{messageText}</p>
      )}
      <Button type="primary" onClick={() => navigate(-1)}>
        Назад
      </Button>
    </main>
  );
};

export default Country;
