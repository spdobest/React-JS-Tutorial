import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/step1/App';
import AppState from './step2/AppState'
import AppChildren from './step3/AppChildren'
import AccessNestedData from './step4/AccessNestedData'
import CustomProptypeValidation from './step5/CustomProptypeValidation';
import EventHandling from './step6/EventHandling';
import GetReference from './step7/GetReference';
import ComponentLifecycle from './step8/ComponentLifecycle';
import LifeCycleWithState from './step9/LifeCycleWithState';
import ComponentsUpdateOnPropsChange from './step10/ComponentsUpdateOnPropsChange';
import AppIterateWithMap from './step11/AppIterateWithMap';
import HigherOrderComponent from './step12/HigherOrderComponent';
import ReactChildrenUtilities from './step13/ReactChildrenUtilities';
import CloneComponent from './step14/CloneComponent';
import RusableComponent from './step15/RusableComponent';

import './index.css';
// https://egghead.io/lessons/react-use-create-react-app-to-setup-a-simple-react-app
ReactDOM.render(
  // <App txt='This is the proptext' />,
  // <AppState txt='This is the proptext' />,
  // <AppChildren txt='This is the proptext' />,
  // <AccessNestedData/>,
  // <CustomProptypeValidation/>,
  // <EventHandling/>,
  // <GetReference />,
  // <ComponentLifecycle />,
  // <LifeCycleWithState/>,
  // <ComponentsUpdateOnPropsChange />,
  // <AppIterateWithMap />,
  // <HigherOrderComponent/>,
  // <ReactChildrenUtilities/>,
  // <CloneComponent/>,
  <RusableComponent />,
  document.getElementById('root')
);
