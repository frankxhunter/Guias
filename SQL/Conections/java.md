# Conexion de java con SQL

Para la conexion de java con bases de datos sql se utiliza java.sql

A continuacion se pondran ejemplos de como se hace y comentarios en cada caso

## Statment

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Statment {

    public static void main(String[] args) {
        try {
            String url = "jdbc:mysql://localhost:3306/pedidos";
            String user = "root";
            String password = "root";

            // Crear la conexion 
            Connection con = DriverManager.getConnection(url, user, password);

            // Consulta sql
            String sql = "Select * from categorias;";

            java.sql.Statement st = con.createStatement();

            // Obtener resultado
            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {
                int empno = rs.getInt(1);
                String ename = rs.getString("nombre");

                System.out.println(empno + ": " + ename);

            }

            // Cierre
            rs.close();
            st.close();
            con.close();

            System.err.println("Lo logre");
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        }
    }
}
```

## PreparedStatment

### Principales diferencias con el statment

 **PreparedStatement**:

- PreparedStatement es una subinterfaz de Statement que se utiliza para ejecutar consultas SQL parametrizadas.
Las consultas SQL pueden contener parámetros marcados con comodines (?), que se pueden establecer posteriormente utilizando métodos setXXX() antes de ejecutar la consulta.
- Las consultas preparadas se compilan una vez y se almacenan en caché, lo que mejora significativamente el rendimiento si se ejecutan varias veces con diferentes valores de parámetros.
- Son menos propensas a ataques de inyección SQL, ya que los parámetros se establecen de manera segura y no se interpretan como parte del SQL.

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PreparedStatment {

    public static void main(String[] args) {
        try {
            String url = "jdbc:mysql://localhost:3306/pedidos";
            String user = "root";
            String password = "root";

            Connection con = DriverManager.getConnection(url, user, password);

            // Consulta sql
            String sql = "Select * from categorias where nombre = ?";

            // Notar que aqui se pasa la consulta
            java.sql.PreparedStatement pt = con.prepareStatement(sql);
            pt.setString(1, "Ropa") ;
            
            // Obtener resultado
            ResultSet rs = pt.executeQuery();

            while (rs.next()) {
                int empno = rs.getInt(1);
                String ename = rs.getString("nombre");

                System.out.println(empno + ": " + ename);

            }

            // Cierre
            rs.close();
            pt.close();
            con.close();

            System.err.println("Lo logre");
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        }
    }
}
```

## Insert

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Insert {

    public static void main(String[] args) {
        try {
            String url = "jdbc:mysql://localhost:3306/pedidos";
            String user = "root";
            String password = "root";

            Connection con = DriverManager.getConnection(url, user, password);

            // Consulta sql
            String sql = "Insert into categorias values (?, ?, ?)";

            java.sql.PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, 7 );
            ps.setString(2, "Comidas ");
            ps.setString(3, "Estas son todas las comidas que existen ");

            // Obtener resultado
            int rs = ps.executeUpdate();

            System.out.println(rs);


            // Cierre
            ps.close();
            con.close();

            System.err.println("Lo logre");
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        }
    }
}
```

### Update

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Update {
    public static void main(String[] args){
        String url = "jdbc:mysql://localhost:3306/pedidos";
        String user = "root";
        String password = "root";
        try(Connection con = DriverManager.getConnection(url, user, password);){
            String sql = "Update categorias set nombre = ? where idCategoria = ? or idCategoria = ? ";
            
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, "Frank");
            ps.setInt(2, 5);
            ps.setInt(3, 6);

            //Retorna el numero de filas que fueron modificadas
            int rs = ps.executeUpdate();
            System.out.println(rs);
          
            
        }catch(SQLException e){
            e.printStackTrace();
        }

    }
}

```

## DML

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DML {
  public static void main(String[] args) {
    String url = "jdbc:mysql://localhost:3306/pedidos";
    String user = "root";
    String password = "root";

    try(Connection con = DriverManager.getConnection(url, user, password); ){
        // String sql = "Create Table MisDatos (id INTEGER PRIMARY KEY AUTO_INCREMENT, name varchar(10));";
        // PreparedStatement  ps = con.prepareStatement(sql);
        // ps.executeUpdate();
        // ps.close();

        String sql1= "Insert INTO MISDATOS (name) VALUES(?)";
        PreparedStatement preparedStatement = con.prepareStatement(sql1);
        preparedStatement.setString(1, "Arango");

        int result = preparedStatement.executeUpdate();
        System.err.println(result);




    }catch(SQLException e){
        e.printStackTrace();
    }
  }
}
```

## Transaction

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Transaction {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/pedidos";
        String user = "root";
        String password = "root";
        Connection con = null;
        try {
            con = DriverManager.getConnection(url, user, password);
            con.setAutoCommit(false);
            Statement st = con.createStatement();

            String sql = "Delete from misdatos where id = 1";

            String sql2 = "Insert into misDatos Values (2, 'Francisco')";

            try {
                st.executeUpdate(sql);
                st.executeUpdate(sql2);
                con.commit();
            } catch (SQLException e) {
                System.out.println("1");
                e.printStackTrace();
                con.rollback();
            }

        } catch (SQLException e) {
            System.out.println("2");
            e.printStackTrace();

        }
    }
}

```
