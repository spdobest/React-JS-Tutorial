import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/step1/App';
import AppState from './step2_mantain_state/AppState'
import AppChildren from './step3_children_othercomponent/AppChildren'
import AccessNestedData from './step4_access_nested_Data_using_children_prop/AccessNestedData'
import CustomProptypeValidation from './step5_custom_proptype_validation/CustomProptypeValidation';
import EventHandling from './step6_event_handling/EventHandling';
import GetReference from './step7_getreference_of_other_component/GetReference';
import ComponentLifecycle from './step8_lifecycle/ComponentLifecycle'

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
  <ComponentLifecycle />,
  document.getElementById('root')
);
