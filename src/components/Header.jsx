import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import Home from './Home';

class Header extends Component {
  constructor(props) {
    super(props);
    this.Gravatar = this.Gravatar.bind(this);
  }

  getPlayerDataFromLocalStorage() {
    const getPlayerData = JSON.parse(localStorage.getItem('state')).player;
    return getPlayerData;
  }

  Gravatar() {
    const { name, gravatarEmail } = this.getPlayerDataFromLocalStorage();

    const hashGerada = md5(gravatarEmail).toString();
    const imgemPerfil = `https://www.gravatar.com/avatar/${hashGerada}`;
    const perfil = { name, imgemPerfil, gravatarEmail };

    return perfil;
  }

  render() {
    const { name, imgemPerfil } = this.Gravatar();
    const { score, testID } = this.props;
    return (
      <header className="header">
        <img
          src={ imgemPerfil }
          alt={ name }
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">
          { name }
        </p>
        <h3 data-testid={ testID }>
          <p data-testid="header-score">{score}</p>
        </h3>
        <Home />
      </header>
    );
  }
}

const { number, string } = PropTypes;
Header.propTypes = {
  score: number.isRequired,
  testID: string.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.ScoreReducer.score,
});

export default connect(mapStateToProps)(Header);
