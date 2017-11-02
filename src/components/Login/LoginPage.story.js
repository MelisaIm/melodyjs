import { storiesOf } from '@storybook/react';
import React from 'react';
import LoginPage from './LoginPage';

storiesOf('LoginPage', module).add('Happy Path', () => <LoginPage props={'/'} />);
