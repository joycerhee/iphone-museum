import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("homepage shell", () => {
  it("renders project-specific foundation text", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /story-led museum site foundation/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/museum117 is a story-led museum site in progress/i)
    ).toBeInTheDocument();
  });
});
