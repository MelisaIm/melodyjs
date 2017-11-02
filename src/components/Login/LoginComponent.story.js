import React from 'react';
import LoginComponent from './LoginComponent';
import { storiesOf } from '@storybook/react';

storiesOf('LoginComponent', module).add('HappyPath', () => <LoginComponent />);
