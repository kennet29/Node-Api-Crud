import { getConnection, querys, sql } from "../database";

export const getPromociones = async (req, res) => {
  try {
    res.render('promociones.ejs');
  } catch (error) {
    res.status(500);
    // res.send(error.message);
  }
};

export const getAllPromociones = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllPromociones);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    // res.send(error.message);
  }
};

export const createNewPromocion = async (req, res) => {
  const { promocion, fecha_inicio, fecha_final, descuento, descripcion } = req.body;
  let { estado } = req.body;

  // Validating
  if (promocion == null || fecha_inicio == null || fecha_final == null || descuento == null || descripcion == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  if (estado == null) estado = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("promocion", sql.NVarChar, promocion)
      .input("fecha_inicio", sql.NVarChar, fecha_inicio)
      .input("fecha_final", sql.NVarChar, fecha_final)
      .input("descuento", sql.Int, descuento)
      .input("descripcion", sql.NVarChar, descripcion)
      .input("estado", sql.Int, estado)
      .query(querys.addNewPromocion);

    res.json({ promocion, fecha_inicio, fecha_final, descuento, descripcion, estado });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getPromocionById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getPromocionesById);

    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deletePromocionById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deletePromocion);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updatePromocionById = async (req, res) => {
  const { promocion, fecha_inicio, fecha_final, descuento, descripcion, estado } = req.body;

  // Validating
  if (promocion == null || fecha_inicio == null || fecha_final == null || descuento == null || descripcion == null || estado == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("promocion", sql.NVarChar, promocion)
      .input("fecha_inicio", sql.NVarChar, fecha_inicio)
      .input("fecha_final", sql.NVarChar, fecha_final)
      .input("descuento", sql.Int, descuento)
      .input("descripcion", sql.NVarChar, descripcion)
      .input("estado", sql.Int, estado)
      .input("id", req.params.id)
      .query(querys.updatePromocionById);

    res.json({ promocion, fecha_inicio, fecha_final, descuento, descripcion, estado });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
