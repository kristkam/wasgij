import { describe, it, expect } from "vitest";
import { render } from  "@testing-library/react";
import { Button } from "../index.tsx";

 describe('Button', () => {
  it.skip('should render', () => {
    render(<Button onClick={() => undefined}>click me</Button>);
    expect(document.querySelector('button')).toBeInTheDocument();
  });

  it.skip('should', () => {});
});