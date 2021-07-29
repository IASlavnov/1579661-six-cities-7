import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logout } from '../../store/api-action';
import { getAuthorizationStatus, getEmail } from '../../store/user/selectors';

function Header() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const email = useSelector(getEmail);

  const dispatch = useDispatch();
  const logoutApp = () => dispatch(logout());

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.ROOT}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.AUTH
                  ? (
                    <>
                      <li className="header__nav-item user">
                        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__user-name user__name">{email}</span>
                        </Link>
                      </li>
                      <li className="header__nav-item">
                        <Link
                          onClick={(evt) => {
                            evt.preventDefault();
                            logoutApp();
                          }}
                          className="header__nav-link"
                          to='/'
                        >
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                    </>
                  )
                  : (
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.SIGNIN}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>
                  )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
