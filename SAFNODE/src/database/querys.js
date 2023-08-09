export const querys = {
    //getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products] for json auto",
    getAllProducts: "SELECT CodigoCategoria as codigo, NombreCategoria as nombre, Descripcion as descripcion, Estado as estado FROM CatCategorias",
    getProducById: "SELECT * FROM CatCategorias Where Id = @Id",
    addNewProduct:
      "INSERT INTO CatCategorias (nombrecategoria, descripcion, estado) VALUES (@nombre,@descripcion,@estado)",
    deleteProduct: "DELETE FROM [webstore].[dbo].[CatCategorias] WHERE Id= @Id",
    getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.CatCategorias",
    updateProductById:
      "UPDATE CatCategorias SET nombrecategoria = @nombre, Descripcion = @descripcion WHERE codigocategoria = @codigo",

      //Categorias 

      getAllCats: "SELECT Id_categoria as codigo, Categoria as nombre, Descripcion as descripcion, Estado as estado FROM Categorias",
      getCatsById: "SELECT * FROM Categorias WHERE Id_categoria = @Id",
      addNewCats: "INSERT INTO Categorias (Categoria, Descripcion, Estado) VALUES (@nombre, @descripcion, @estado)",
      deleteCats: "DELETE FROM Categorias WHERE Id_categoria = @Id",
      getTotalCats: "SELECT COUNT(*) FROM Categorias",
      updateCatsById: "UPDATE Categorias SET Categoria = @nombre, Descripcion = @descripcion WHERE Id_categoria = @codigo",
  


      getAllColor: "SELECT Id_color as codigo, Color as nombre,Descripcion as descripcion  , Estado as estado FROM Colores",
      getColoryId: "SELECT * FROM Tallas WHERE Id = @Id",
      addNewColor: "INSERT INTO Colores (Color,Descripcion,Estado) VALUES (@nombre,@descripcion,@estado)",
      deleteColor: "DELETE FROM Tallas WHERE ID_Talla = @codigo",
      getTotalColor: "SELECT COUNT(*) FROM Tallas",
      updateColorById: "UPDATE Colores SET Color = @nombre ,Descripcion=@descripcion, Estado = @estado   WHERE Id_color = @codigo",
      
      getAllDiseños: "SELECT Id_diseño as codigo, Diseño as nombre, Descripcion as descripcion, Estado as estado FROM Diseño",
      getDiseñosById: "SELECT * FROM Diseño WHERE Id_diseño = @Id",
      addNewDiseños: "INSERT INTO Diseño (Diseño, Descripcion, Estado) VALUES (@nombre, @descripcion, @estado)",
      deleteDiseños: "DELETE FROM Diseño WHERE Id_diseño = @Id",
      getTotalDiseños: "SELECT COUNT(*) FROM Diseño",
      updateDiseñosById: "UPDATE Diseño SET Diseño = @nombre, Descripcion = @descripcion WHERE Id_diseño = @codigo",


      getAllEstilos: "SELECT Id_estilos as codigo, Estilo as nombre, Descripcion as descripcion, Estado as estado FROM Estilos",
      getEstilosById: "SELECT * FROM Estilos WHERE Id_estilos = @Id",
      addNewEstilos: "INSERT INTO Estilos (Estilo, Descripcion, Estado) VALUES (@nombre, @descripcion, @estado)",
      deleteEstilos: "DELETE FROM Estilos WHERE Id_estilos = @Id",
      getTotalEstilos: "SELECT COUNT(*) FROM Estilos",
      updateEstilosById: "UPDATE Estilos SET Estilo = @nombre, Descripcion = @descripcion WHERE Id_estilos = @codigo",

      getAllMarcas: "SELECT Id_marca as codigo, Marca as nombre, Descripcion as descripcion, Estado as estado FROM Marcas",
      getMarcasById: "SELECT * FROM Marcas WHERE Id_marca = @Id",
      addNewMarcas: "INSERT INTO Marcas (Marca, Descripcion, Estado) VALUES (@nombre, @descripcion, @estado)",
      deleteMarcas: "DELETE FROM Marcas WHERE Id_marca = @Id",
      getTotalMarcas: "SELECT COUNT(*) FROM Marcas",
      updateMarcasById: "UPDATE Marcas SET Marca = @nombre, Descripcion = @descripcion WHERE Id_marca = @codigo",


      getAllMateriales: "SELECT Id_material as codigo, Material as nombre, Descripcion as descripcion, Estado as estado FROM Materiales",
      getMaterialesById: "SELECT * FROM Materiales WHERE Id_material = @Id",
      addNewMateriales: "INSERT INTO Materiales (Material, Descripcion, Estado) VALUES (@nombre, @descripcion, @estado)",
      deleteMateriales: "DELETE FROM Materiales WHERE Id_material = @Id",
      getTotalMateriales: "SELECT COUNT(*) FROM Materiales",
      updateMaterialesById: "UPDATE Materiales SET Material = @nombre, Descripcion = @descripcion WHERE Id_material = @codigo",

      getAllPromociones: "SELECT Id_promocion as codigo, Promocion as nombre, Fecha_inicio as fechaInicio, Fecha_final as fechaFinal, Descuento as descuento, Descripcion as descripcion, Estado as estado FROM Promociones",
      getPromocionesById: "SELECT * FROM Promociones WHERE Id_promocion = @Id",
      addNewPromociones: "INSERT INTO Promociones (Promocion, Fecha_inicio, Fecha_final, Descuento, Descripcion, Estado) VALUES (@nombre, @fechaInicio, @fechaFinal, @descuento, @descripcion, @estado)",
      deletePromociones: "DELETE FROM Promociones WHERE Id_promocion = @Id",
      getTotalPromociones: "SELECT COUNT(*) FROM Promociones",
      updatePromocionesById: "UPDATE Promociones SET Promocion = @nombre, Fecha_inicio = @fechaInicio, Fecha_final = @fechaFinal, Descuento = @descuento, Descripcion = @descripcion WHERE Id_promocion = @codigo",

      getAllProveedores: "SELECT Id_proveedor as codigo, Nombre as nombre, Dirreccion as direccion, Telefono as telefono, Correo as correo, Descripcion as descripcion, Estado as estado FROM Proveedores",
      getProveedoresById: "SELECT * FROM Proveedores WHERE Id_proveedor = @Id",
      addNewProveedores: "INSERT INTO Proveedores (Nombre, Dirreccion, Telefono, Correo, Descripcion, Estado) VALUES (@nombre, @direccion, @telefono, @correo, @descripcion, @estado)",
      deleteProveedores: "DELETE FROM Proveedores WHERE Id_proveedor = @Id",
      getTotalProveedores: "SELECT COUNT(*) FROM Proveedores",
      updateProveedoresById: "UPDATE Proveedores SET Nombre = @nombre, Dirreccion = @direccion, Telefono = @telefono, Correo = @correo, Descripcion = @descripcion WHERE Id_proveedor = @codigo",


      getAllTallas: "SELECT Id_talla as codigo, Talla as talla, Descripcion as descripcion, Estado as estado FROM Tallas",
      getTallasById: "SELECT * FROM Tallas WHERE Id_talla = @Id",
      addNewTallas: "INSERT INTO Tallas (Talla, Descripcion, Estado) VALUES (@talla, @descripcion, @estado)",
      deleteTallas: "DELETE FROM Tallas WHERE Id_talla = @Id",
      getTotalTallas: "SELECT COUNT(*) FROM Tallas",
      updateTallasById: "UPDATE Tallas SET Talla = @talla, Descripcion = @descripcion WHERE Id_talla = @codigo",


    };

  

   