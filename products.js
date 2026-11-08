// assert { type: "json" } ya no va
// https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file
import productsList from "./products.json" with { type: "json" };
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].price > arr[j + 1].price) {
                // Intercambiar elementos
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // Si no hubo intercambios, el array ya está ordenado
        if (!swapped)
            break;
    }
    return arr;
}
export function productsListComponent() {
    console.log("Datos de los productos:", productsList);
    const section = document.createElement("section");
    section.style.border = "solid 1px #ccc";
    section.style.padding = "10px";
    const list = document.createElement("ul");
    //Ordenamiento de producto - Modificacion agregada
    bubbleSort(productsList);
    productsList.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.title} - $${product.price}`;
        list.appendChild(listItem);
    });
    section.appendChild(list);
    return section;
}
