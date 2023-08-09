import { getConnection, querys, sql } from "../database";

export const getMateriales = async (req, res) => {
  try {
    res.render('productos.ejs');
  } catch (error) {
    res.status(500);
    // res.send(error.message);
  }
};

export const getAllMateriales = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys,getAllMateriales);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    // res.send(error.message);
  }
};

export const createNewMaterial = async (req, res) => {
  const { material, descripcion } = req.body;
  let { estado } = req.body;

  // Validating
  if (descripcion == null || material == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  if (estado == null) estado = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("material", sql.NVarChar, material)
      .input("descripcion", sql.NVarChar, descripcion)
      .input("estado", sql.Int, estado)
      .query(querys.addNewProduct);

    res.json({ material, descripcion, estado });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getMaterialById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getProducById);

    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteMaterialById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalMateriales = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalProducts);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateMaterialById = async (req, res) => {
  const { descripcion, material, estado } = req.body;

  // Validating
  if (descripcion == null || material == null || estado == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("material", sql.NVarChar, material)
      .input("descripcion", sql.NVarChar, descripcion)
      .input("estado", sql.Int, estado)
      .input("codigo", req.params.id)
      .query(querys.updateProductById);
    res.json({ material, descripcion, estado });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
