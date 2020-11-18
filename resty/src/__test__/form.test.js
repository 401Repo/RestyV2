import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '../form.js';
// import People from '../people.js';

describe('Testing our form component', () => {
  it('should display the url Path', async () => {
    render(<Form />);
    const DOMElement = await screen.findByTestId('display-url');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });
  it('should display the method', async () => {
    render(<Form />);
    const DOMElement = await screen.findByTestId('display-method');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });

});