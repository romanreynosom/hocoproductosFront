import React from 'react'
import "../auriculares/auriculares.css"
import fotos from "./fotos"

function FotosProductos() {
    return (
        <div>
            <div className="productos-general">
   
    
   <div className="container">
       <div className="row row-cards">
           <div className="col-md-4 col-sm-10 productos card">
               <div className="card-body">
                   <img src={fotos[0].img} alt="" className="card-img-top"/>
                   <h5 className="card-title">{fotos[0].Articulo}</h5>
                   <h6 className="card-subtitle mb-2 text-muted">{fotos[0].Color}</h6>
                   
               </div>                
           </div>
           <div className="col-md-4 col-sm-10 productos card">
               <div className="card-body">
                 <img src={fotos[1].img} alt="" className="card-img-top"/>
                   <h5 className="card-title">{fotos[1].Articulo}</h5>
                   <h6 className="card-subtitle mb-2 text-muted">{fotos[1].Color}</h6>                  
               </div>
           </div>
       </div>
       <div className="row row-cards">
           <div className="col-md-4 col-sm-10 productos card">                        
               <div className="card-body">
                   <img src={fotos[2].img} alt="" className="card-img-top"/>
                   <h5 className="card-title">{fotos[2].Articulo}</h5>
                   <h6 className="card-subtitle mb-2 text-muted">{fotos[2].Color}</h6>
               </div>                       
           </div>
           <div className="col-md-4 col-sm-10 productos card">
               <div className="card-body">
                 <img src={fotos[3].img} alt="" className="card-img-top"/>
                   <h5 className="card-title">{fotos[3].Articulo}</h5>
                   <h6 className="card-subtitle mb-2 text-muted">{fotos[3].Color}</h6>
               </div>                      
           </div>
       </div>
       <div className="row row-cards">
           <div className="col-md-4 col-sm-10 productos card">                        
               <div className="card-body">
                <img src={fotos[4].img} alt="" className="card-img-top"/>
                   <h5 className="card-title">{fotos[4].Articulo}</h5>
                   <h6 className="card-subtitle mb-2 text-muted">{fotos[4].Color}</h6>      
               </div>                       
           </div>
           <div className="col-md-4 col-sm-10 productos card">
               <div className="card-body">
               <img src={fotos[5].img} alt="" className="card-img-top"/>
                   <h5 className="card-title">{fotos[5].Articulo}</h5>
                   <h6 className="card-subtitle mb-2 text-muted">{fotos[5].Color}</h6>   
               </div>                      
           </div>
       </div>
      
   </div>
   
</div>

        </div>
    )
}

export default FotosProductos
