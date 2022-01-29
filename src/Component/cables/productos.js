import React from 'react'
import fotosCables from './fotosCables';
import "../auriculares/auriculares.css"

function Productos() {
    return (
        <div>

            
<div className="productos-general">
   
    
    <div className="container">
        <div className="row row-cards">
            <div className="col-md-4 col-sm-10 productos card">
                <div className="card-body">
                    <img src={fotosCables[0].img} alt="" className="card-img-top"/>
                    <h5 className="card-title">{fotosCables[0].Articulo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{fotosCables[0].Descripcion}</h6>
                   
                </div>                
            </div>
            <div className="col-md-4 col-sm-10 productos card">
                <div className="card-body">
                  <img src={fotosCables[1].img} alt="" className="card-img-top"/>
                    <h5 className="card-title">{fotosCables[1].Articulo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{fotosCables[1].Descripcion}</h6>                  
                </div>
            </div>
        </div>
        <div className="row row-cards">
            <div className="col-md-4 col-sm-10 productos card">                        
                <div className="card-body">
                    <img src={fotosCables[2].img} alt="" className="card-img-top"/>
                    <h5 className="card-title">{fotosCables[2].Articulo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{fotosCables[2].Descripcion}</h6>
                </div>                       
            </div>
            <div className="col-md-4 col-sm-10 productos card">
                <div className="card-body">
                  <img src={fotosCables[3].img} alt="" className="card-img-top"/>
                    <h5 className="card-title">{fotosCables[3].Articulo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{fotosCables[3].Descripcion}</h6>
                </div>                      
            </div>
        </div>
        <div className="row row-cards">
            <div className="col-md-4 col-sm-10 productos card">                        
                <div className="card-body">
                 <img src={fotosCables[4].img} alt="" className="card-img-top"/>
                    <h5 className="card-title">{fotosCables[4].Articulo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{fotosCables[4].Descripcion}</h6>      
                </div>                       
            </div>
            <div className="col-md-4 col-sm-10 productos card">
                <div className="card-body">
                <img src={fotosCables[5].img} alt="" className="card-img-top"/>
                    <h5 className="card-title">{fotosCables[5].Articulo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{fotosCables[5].Descripcion}</h6>   
                </div>                      
            </div>
        </div>
        <div className="row row-cards">
            <div className="col-md-4 col-sm-10 productos card">                        
                <div className="card-body">
                 <img src={fotosCables[6].img} alt="" className="card-img-top"/>
                    <h5 className="card-title">{fotosCables[6].Articulo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{fotosCables[6].Descripcion}</h6>    
                </div>                       
            </div>
          
        </div>
    </div>
    
</div>
        </div>
    )
}

export default Productos
