import UserProducts from "../models/userProduct.model.js";

export const addUserProduct = async (req, res) => {
  try {
    let userProducts = UserProducts(req.body);
    await userProducts.save();
    res.send({ message: userProducts });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Hubo un error al guardar el producto",
    });
  }
};
export const deleteUserProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const userProduct = await UserProducts.findById(id);
    if (!userProduct) {
      return res.status(404).json({ message: "User product not found" });
    }

    await UserProducts.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ message: "User product deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllUserProducts = async (req, res) => {
  try {
    let userProducts = await UserProducts.find();
    if (!userProducts) {
      return res.status(404).send("No hay productos");
    }
    return res.send(userProducts);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Hubo un error al mostrar los productos",
    });
  }
};

export const getUserProductsDetails = async (req, res) => {
  try {
    const userProducts = await UserProducts.find()
      .populate({
        path: "user_id",
        model: "Users",
        select: "username",
      })
      .populate({
        path: "product_id",
        model: "Products",
        select: "title quantity",
      });
    if (!userProducts || userProducts.length === 0) {
      return res.status(404).send("No hay productos de usuario");
    }
    res.send(userProducts);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Hubo un error al mostrar los productos de usuario",
    });
  }
};
