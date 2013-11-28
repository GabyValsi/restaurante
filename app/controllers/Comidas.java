package controllers;

import com.google.gson.Gson;
import java.util.List;
import models.Comida;
import play.mvc.Controller;

/**
 *
 * @author Gabriella
 */
public class Comidas extends Controller {
    public static void index(){
        
        List<Comida>comidas = Comida.findAll();
        
        renderJSON(comidas);
        
    
    }
    
      
    public static void comidas() {
        
        List<Comida> comidas = Comida.findAll();
        renderJSON(comidas);
              
    }
  
    public static void deleteComidas(Long id) {
      
        Comida c = Comida.findById(id);
      
        if(c!=null){
            c.delete();
            renderJSON(id);
            
        }else{
            id *= -1;
        }
        
        renderJSON(id);
    }
  
    public static void saveComida() {
      
        Gson g = new Gson();
        Comida newComida = g.fromJson(params.get("body"), Comida.class);
        newComida.save();
        renderJSON(newComida);
      
    }
  
    public static void updateComida(Long id) {
      
        Gson g = new Gson();
      
        Comida newComida = g.fromJson(params.get("body"), Comida.class);
        Comida dbComida = Comida.findById(id);
        
        dbComida.platillo = newComida.platillo;
        dbComida.precio = newComida.precio;
      
        dbComida.save();
        renderJSON(dbComida);
      
    }
    

}
    

