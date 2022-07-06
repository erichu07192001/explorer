import Display from './components/display'
import React from 'react';
import ValueProvider from './components/ValueStorageContext';

let data = {city: 'Waltham',
state: 'MA',
email: 'erichu@brandeis.edu'
}

export default function App() {
  return (
    <ValueProvider value={data} tag="explorer">
      <Display/>
    </ValueProvider>
    
  );
}

