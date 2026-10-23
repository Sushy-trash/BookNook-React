
import { render, screen, cleanup } from "@testing-library/react";
import Producto from "../component/Producto";

describe("Componente Producto", () => {

  afterEach(() => {
    cleanup();
  });

  it("muestra el nombre del producto", () => {
    render(
      <Producto
        producto={{
          nombre: "Zapatillas",
          imagen: "https://ejemplo.com/zapatillas.webp",
          precio: 599990,
          categoria: "Calzado"
        }}
      />
    );

    const titulo = screen.getByRole("heading", {
      name: "Zapatillas",
    });

    expect(titulo.textContent).toBe("Zapatillas");
  });

  it("muestra el botón para ver detalles", () => {
    render(
      <Producto
        producto={{
          nombre: "Zapatillas",
          imagen: "https://ejemplo.com/zapatillas.webp",
          precio: 599990,
          categoria: "Calzado"
        }}
      />
    );

    const boton = screen.getByRole("button", {
      name: "Ver detalles",
    });

    expect(boton.textContent.trim()).toBe("Ver detalles");
    expect(boton.disabled).toBeFalse();
  });

});
