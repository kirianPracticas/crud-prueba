import Products from "../models/products.model.js";

export const getAllProducts = async (req, res) => {
  try {
    let products = await Products.find();
    if (!products) {
      return res.status(404).send("No hay productos");
    }
    return res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Hubo un error al mostrar los productos",
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    let products = Products(req.body);
    await products.save();
    res.send({ message: products });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Hubo un error al guardar el producto",
    });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    let { id } = req.params;
    await Products.findByIdAndDelete(id);
    return res.status(200).send({ message: "Producto borrado" });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Hubo un error al eliminar el producto",
    });
  }
};

export const editProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProductData = req.body;

    const existingProduct = await Products.findById(id);
    if (!existingProduct) {
      return res.status(404).send({ message: "Producto no encontrado" });
    }

    await Products.findByIdAndUpdate(id, updatedProductData);
    return res
      .status(200)
      .send({ message: "Producto actualizado correctamente" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ message: "Hubo un error al actualizar el producto" });
  }
};
