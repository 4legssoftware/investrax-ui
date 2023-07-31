import { describe, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom/extend-expect';

describe(App, () => {
  it('renders the App title', () => {
    render(<App></App>);

    expect(screen.getByText(/InvesTools/i)).toBeDefined();
    expect(screen.getByText(/Percent/i)).toBeDefined();
  });

  describe('Login & Logout', () => {
    it('changes button state and text on click', () => {
      const { getByText } = render(<App />);

      const loginButton = getByText('Login');
      expect(loginButton).toBeInTheDocument();

      fireEvent.click(loginButton);

      const logoutButton = getByText('Logout');
      expect(logoutButton).toBeInTheDocument();
    });
  });
});
