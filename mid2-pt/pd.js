class products {
    constructor(id, name, category, price) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.price = price;
    }
  }
  
  function ProductManagement() {
    let products = [];
  
    function getAllProducts() {
      return  products;
    }
  
    function addProduct(product) {
      products.push(product);
    }
  
    function searchByName(name) {
      const matchingPd = products.filter(product => product.name.toLowerCase() === name.toLowerCase())
      return matchingPd;
    }
  
    function searchByPriceRange(minPrice, maxPrice) {
      const priceMatch = products.filter(product => product.price >= minPrice && product.price <= maxPrice)
      return priceMatch;
    }
  
    function removeAll() {
      products.splice(0, products.length)
  
    }
  
    // const {removeAll,searchByName,searchByPriceRange,getAllProducts,addProduct}=ProductManagement();
  
  
    return {
      removeAll,
      searchByName,
      searchByPriceRange,
      getAllProducts,
      addProduct
    }
  }
  module.exports = ProductManagement
  const productCatalog = ProductManagement()
  