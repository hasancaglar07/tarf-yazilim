import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders hero heading and CTA buttons", () => {
    render(<Home />);
    expect(
      screen.getByText(/Dijital dönüşüm yolculuğunuzda/i),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /Teklif Al/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("button", { name: /Demo Talep Et/i })).toBeInTheDocument();
  });
});
