
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Carrito from "../component/Carrito";

describe("Componente Carrito", () => {

  afterEach(() => {
    cleanup();
  });

  it("muestra el mensaje cuando el carrito está vacío", () => {
    render(
      <Carrito
        carrito={[]}
      />
    );

    const mensaje = screen.getByText("Tu carrito está vacío.");

    expect(mensaje.textContent).toBe("Tu carrito está vacío.");
    expect(
      screen.getByRole("button", { name: "Volver al catálogo" })
    ).toBeTruthy();
  });

  it("muestra el nombre y el precio del producto", () => {
    render(
      <Carrito
        carrito={[
          {
            id: 1,
            nombre: "Manga One Piece",
            imagen: "manga.jpg",
            precio: 10000,
            cantidad: 2
          }
        ]}
      />
    );

    const titulo = screen.getByRole("heading", {
      name: "Manga One Piece"
    });

    expect(titulo.textContent).toBe("Manga One Piece");
    expect(screen.getByText("Precio unitario: $10.000")).toBeTruthy();
    expect(screen.getByText("Subtotal: $20.000")).toBeTruthy();
  });

  it("muestra el total de la compra", () => {
    render(
      <Carrito
        carrito={[
          {
            id: 1,
            nombre: "Manga One Piece",
            imagen: "manga.jpg",
            precio: 10000,
            cantidad: 2
          }
        ]}
      />
    );

    const total = screen.getByText("Total: $20.000");

    expect(total.textContent).toBe("Total: $20.000");
  });

  it("muestra el mensaje de marcador gratis cuando el total supera $30.000", () => {
    render(
      <Carrito
        carrito={[
          {
            id: 1,
            nombre: "Manga One Piece",
            imagen: "manga.jpg",
            precio: 20000,
            cantidad: 2
          }
        ]}
      />
    );

    expect(
      screen.getByText("Tu compra incluye un marcador de regalo gratis.")
    ).toBeTruthy();
  });

  it("aumenta la cantidad al pulsar el botón correspondiente", () => {
    const onAumentarCantidad = jasmine.createSpy("onAumentarCantidad");

    render(
      <Carrito
        carrito={[
          {
            id: 1,
            nombre: "Manga One Piece",
            imagen: "manga.jpg",
            precio: 10000,
            cantidad: 1
          }
        ]}
        onAumentarCantidad={onAumentarCantidad}
      />
    );

    const boton = screen.getByRole("button", {
      name: "Aumentar cantidad de Manga One Piece"
    });

    fireEvent.click(boton);

    expect(onAumentarCantidad).toHaveBeenCalledWith(1);
  });

  it("elimina el producto al pulsar el botón correspondiente", () => {
    const onEliminarProducto = jasmine.createSpy("onEliminarProducto");

    render(
      <Carrito
        carrito={[
          {
            id: 1,
            nombre: "Manga One Piece",
            imagen: "manga.jpg",
            precio: 10000,
            cantidad: 1
          }
        ]}
        onEliminarProducto={onEliminarProducto}
      />
    );

    const boton = screen.getByRole("button", {
      name: "Eliminar producto"
    });

    fireEvent.click(boton);

    expect(onEliminarProducto).toHaveBeenCalledWith(1);
  });

});
