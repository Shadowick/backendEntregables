class ProductManager {
  constructor() {
    this.products = []
    this.idCounter = 0;
  }
  
  getProducts() {
    return this.products
  }

  addProducts(title, description, price, thumbnail, code, stock) {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    }

    if(!product.code || !product.stock || !product.title || !product.description || !product.price || !product.thumbnail) {
      console.log('Error: code, stock, title, description, price or thumbnail missing');
        return;
      }
    if (this.products.some(p => p.code === product.code)) {
      console.log(`Error: product with code ${product.code} already exists`);
      return;
    }

      const newProduct = {
        ...product,
        id: ++this.idCounter
      };
      this.products.push(newProduct);
      console.log(`Product with id ${newProduct.id} has been added`);
  }
  getProductById(id) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      console.log('Error: product not found');
    }
    return product;
  }
}

const manager = new ProductManager()
manager.addProducts('Black Adam', 'Pelicula acerca de un superheroe...', 25, "Sin imágen","abc123", 10)
//Ejemplo con todos los datos correctos//
manager.addProducts('Black Adam', 'Pelicula acerca de un superheroe...', "Sin imágen","abc123", 10)
//Ejemplo dato faltante//
console.log(manager)
console.log(manager.getProductById())