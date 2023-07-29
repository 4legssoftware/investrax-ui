import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Accordion from '../src/Accordion';
import App from "../src/App";

describe("App", () => {
  test("Should show Accordion", () => {
    render(<App></App>);

    expect(screen.getByText(/InvesTools/i)).toBeDefined()
  })
})
