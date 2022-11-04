import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { IRootState } from './interfaces';
import { NavBar } from './layouts/NavBar/NavBar';
import { arrayRoutes } from './routes.index';

export const App = () => {

  const { isLoading } = useSelector((state: IRootState) => state.loadingSpinner);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      <NavBar routes={arrayRoutes}>
        <Routes>
          {
            arrayRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={React.createElement(element)} />
            ))
          }
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </NavBar>
    </>
  )
}
