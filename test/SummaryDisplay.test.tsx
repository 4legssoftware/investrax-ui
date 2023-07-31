import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SummaryDisplay from '../src/SummaryDisplay';
import '@testing-library/jest-dom/extend-expect';

describe('Summary Display', () => {
  it('renders the table component without errors', () => {
    render(<SummaryDisplay data={[]} />);
  });

  it('renders the correct data in the table', () => {
    const data = [
      { name: 'Stock', amount: 7000, percent: 70 },
      { name: 'Cash', amount: 3000, percent: 30 },
    ];

    const { getByText } = render(<SummaryDisplay data={data} />);

    expect(getByText('Stock')).toBeInTheDocument();
  });
});
