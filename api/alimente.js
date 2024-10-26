const URL = "https://670fe639a85f4164ef2c645a.mockapi.io/e-alimente";

export async function getAllproducts() {
    const response = await fetch(URL);
    const products = await response.json();

    return products;
}

