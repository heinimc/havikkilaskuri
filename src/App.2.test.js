import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';


test('App-komponentti renderöityy oikein', () => {
  const component = renderer.create(
      <App/>,

  );

 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
});