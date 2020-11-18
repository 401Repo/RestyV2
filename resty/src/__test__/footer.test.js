import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from '../footer.js';
// import People from '../people.js';

describe('Testing our footer component', () => {
  it('should display the first line', async () => {
    render(<Footer />);
    const DOMElement = await screen.findByTestId('line-1');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });
  it('should display the second footer line', async () => {
    render(<Footer />);
    const DOMElement = await screen.findByTestId('line-2');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });

});