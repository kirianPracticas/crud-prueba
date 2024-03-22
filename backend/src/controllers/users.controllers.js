import Users from "../models/users.models.js";

export const addUser = async (req, res) => {
  try {
    let user = Users(req.body);
    await user.save();
    res.send({ message: user });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Hubo un error al guardar el producto",
    });
  }
};

export const singin = async (req, res) => {
  try {
    const { email, password } = req.body; // Ahora se obtienen del cuerpo de la solicitud
    const user = await Users.findOne({ email, password });

    if (!user) {
      return res.status(404).send({
        message: "Usuario no encontrado",
      });
    }

    res.send({ message: user });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Hubo un error al buscar el usuario",
    });
  }
};
