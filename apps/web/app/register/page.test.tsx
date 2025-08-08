import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RegisterPage from './page';

describe('Register Page', () => {
  it('renders registration form', () => {
    render(<RegisterPage />);
    expect(
      screen.getByRole('heading', { name: /Register/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Register/i }),
    ).toBeInTheDocument();
  });
});
