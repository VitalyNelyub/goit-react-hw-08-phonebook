import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={css.notFound}>
      <h1 className={css.notFoundTitle}>Not found</h1>
      <p>
        <NavLink to="/" className={css.notFoundLink}>
          Go Home
        </NavLink>
      </p>
    </div>
  );
}
