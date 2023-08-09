import { getConnection, querys, sql } from "../database";

export const getMarcas = async (req, res) => {
  try {
    res.render('marcas.ejs');
  } catch (error) {
    res.status(500);
    // res.send(error.message);
  }
};

export const getAllMarcas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllMarcas);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    // res.send(error.message);
  }
};

export const createNewMarca = async (req, res) => {
  const { marca, descripcion } = req.body;
  let { estado } = req.body;

  // Validating
  if (descripcion == null || marca == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  if (estado == null) estado = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("marca", sql.NVarChar, marca)
      .input("descripcion", sql.Text, descripcion)
      .input("estado", sql.Int, estado)
      .query(querys.addNewMarcas());

    res.json({ marca, descripcion, estado });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getMarcaById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getMarcasById());

    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteMarcaById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteMarcaById);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalMarcas = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getAllMarcas);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateMarcaById = async (req, res) => {
  const { descripcion, marca, estado } = req.body;

  // Validating
  if (descripcion == null || marca == null || estado == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("marca", sql.NVarChar, marca)
      .input("descripcion", sql.Text, descripcion)
      .input("estado", sql.Int, estado)
      .input("codigo", req.params.id)
      .query(querys.updateMarcasById);
    res.json({ marca, descripcion, estado });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
