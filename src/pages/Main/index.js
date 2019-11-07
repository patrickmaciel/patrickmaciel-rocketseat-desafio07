import React from 'react';
import { Button } from 'react-native';

import { Container } from './styles';

import LogoTitle from '../../components/LogoTitle';

export default function Main() {
  return <Container />;
}

Main.navigationOptions = {
  headerTitle: () => <LogoTitle />,
  // headerRight: () => <Button onPress={() => {}} title="Cart" color="#fff" />,
};
