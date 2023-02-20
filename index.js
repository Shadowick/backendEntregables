class ProductManager {
  constructor() {
    this.products = []
  }
  
  getProducts() {
    return this.products
  }

  addProducts(title, description, price, thumbnail, code, stock) {
    const product = {
      id: this.#generateId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    }
  this.products.push(product);
  }

  #generateId() {
    const id =
      this.products.length === 0
        ? 1
        : this.products[this.products.length - 1].id + 1
    return id
  }
}

function contieneProducto(producto, lista) {
  let i;
  for (i = 0; i < lista.length; i++) {
      if (lista[i] === producto) {
          return true;
      }
  }
  return false;
}

const manager = new ProductManager()
manager.addProducts('Black Adam', 'Pelicula acerca de un superheroe...', 25, "Sin imágen","abc123", 10)
manager.addProducts('Producto2', 'Pelicula acerca de un superheroe...', 40, "Sin imágen2","def456", 15)
manager.addProducts('Producto3', 'Pelicula acerca de un superheroe...', 50, "Sin imágen3","ghi789", 20)
manager.addProducts('Producto4', 'Pelicula acerca de un superheroe...', 60, "Sin imágen4","abc123", 23)
console.log(manager)