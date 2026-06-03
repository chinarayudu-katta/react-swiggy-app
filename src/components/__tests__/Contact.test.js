import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page", ()=> {
    test("Should load contact component", () => {
        render(<Contact />);
        const heading = screen.getByText("Contact Us");
        expect(heading).toBeInTheDocument()
    })
    test("Should load another contact component", () => {
        render(<Contact />);
        const heading = screen.getByText("Get in Touch");
        expect(heading).toBeInTheDocument()
    })

})
