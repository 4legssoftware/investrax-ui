// import React from 'react';
import {render} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import SummaryDisplay from "../src/SummaryDisplay";

// import SimpleTable from './SimpleTable';

describe('Summary Display', () => {
  test('renders the table component without errors', () => {
    render(<SummaryDisplay data={[]}/>);
  });
});
//
// // Test case 2: Check if the table renders the correct data
// test('renders the correct data in the table', () => {
//   const data = [
//     { id: 1, name: 'John', age: 30 },
//     { id: 2, name: 'Jane', age: 25 },
//   ];
//
//   const { getByText } = render(<SimpleTable data={data} />);
//
//   // Assert that the data is rendered correctly in the table
//   expect(getByText('1')).toBeInTheDocument();
//   expect(getByText('John')).toBeInTheDocument();
//   expect(getByText('30')).toBeInTheDocument();
//   expect(getByText('2')).toBeInTheDocument();
//   expect(getByText('Jane')).toBeInTheDocument();
//   expect(getByText('25')).toBeInTheDocument();
// });
