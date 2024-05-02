import React from 'react';
import './PageNotFound.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="page404">
      <p className="page404__title">Страница не найдена</p>

      <Button type="primary" onClick={() => navigate(-1)}>
        Назад
      </Button>
    </main>
  );
};

export default PageNotFound;
