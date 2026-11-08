export function footerComponent() {
    console.log("El footer invocado");
    const footer = document.createElement("footer");
    footer.innerHTML = "<h1>Footer con info</h1>";
    footer.style.border = "solid 3px black";
    footer.style.padding = "12px";
    return footer;
}
