import React, { Component } from 'react';

import logoImage from '../../assets/images/logo.png';

import { Logo } from './styles';

export default class LogoTitle extends Component {
  render() {
    return <Logo source={logoImage} />;
  }
}
