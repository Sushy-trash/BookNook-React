import { render,screen,cleanup,fireEvent} from "@testing-library/react";




import Header from "../component/Header";

 

describe("Componente Header", () => {

 afterEach(() => {

  cleanup();

 });
 it("muestra los enlaces de navegación", () => {
    render(
      <Header
        cantidadCarrito={0}
      />
    );

    expect(screen.getByRole("link", { name: "Inicio" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Catálogo" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Nosotros" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Contacto" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Admin" })).toBeTruthy();
  });

  it("muestra el botón Login cuando no hay un usuario conectado", () => {
    render(
      <Header
        usuarioActual={null}
        cantidadCarrito={0}
      />
    );

    const boton = screen.getByRole("button", {
      name: "Login",
    });

    expect(boton.textContent.trim()).toBe("Login");
  });

  it("muestra la cantidad de productos en el carrito", () => {
    render(
      <Header
        cantidadCarrito={3}
      />
    );

    const boton = screen.getByRole("button", {
      name: /Carrito \(3\)/,
    });

    expect(boton).toBeTruthy();
  });

  it("ejecuta la función al pulsar Login", () => {
    const onLoginClick = jasmine.createSpy("onLoginClick");

    render(
      <Header
        onLoginClick={onLoginClick}
        cantidadCarrito={0}
      />
    );

    const boton = screen.getByRole("button", {
      name: "Login",
    });

    fireEvent.click(boton);

    expect(onLoginClick).toHaveBeenCalled();
  });


});