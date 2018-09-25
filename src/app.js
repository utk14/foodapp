/*global document:true*/
/*eslint no-undef: "error"*/

import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from './Routers/AppRouter';

ReactDom.render(
    <AppRouter />,
    document.getElementById('app')
);