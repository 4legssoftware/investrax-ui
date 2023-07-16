import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Accordion from '../src/Accordion';

describe("Accordion test", () => {
  test("Should show title", () => {
    render(<Accordion title='Testing'><h4>Content</h4></Accordion>);

    expect(screen.getByText(/Testing/i)).toBeDefined()
  })
})
