package models;
 import javax.persistence.Entity;
import play.db.jpa.Model;


@Entity

public class Comida extends Model{

    public String platillo;
    public Integer cantidad;
    public Double precio;
    public Double importe;
    public boolean selected;

    public Comida(String platillo, Integer cantidad, Double precio, Double importe, boolean selected) {
        this.platillo = platillo;
        this.cantidad = cantidad;
        this.precio = precio;
        this.importe = importe;
        this.selected = selected;
    }
}