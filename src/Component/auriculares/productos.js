import React from "react"
import fotosAuriculares from "./fotos"
import "./auriculares.css"


  

	const Productos = () => {
	
     return (

		<div>
       

    
        <div className="productos-general">
           
            
            <div className="container">
                <div className="row row-cards">
                    <div className="col-md-4 col-sm-10 productos card">
                        <div className="card-body">
                            <img src={fotosAuriculares[0].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotosAuriculares[0].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotosAuriculares[0].Descripción}</h6>
                            
                        </div>                
                    </div>
                    <div className="col-md-4 col-sm-10 productos card">
                        <div className="card-body">
						<img src={fotosAuriculares[1].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotosAuriculares[1].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotosAuriculares[1].Descripción}</h6>                  
                        </div>
                    </div>
                </div>
                <div className="row row-cards">
                    <div className="col-md-4 col-sm-10 productos card">                        
                        <div className="card-body">
						<img src={fotosAuriculares[2].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotosAuriculares[2].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotosAuriculares[2].Descripción}</h6>
                        </div>                       
                    </div>
                    <div className="col-md-4 col-sm-10 productos card">
                        <div className="card-body">
						<img src={fotosAuriculares[3].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotosAuriculares[3].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotosAuriculares[3].Descripción}</h6>
                        </div>                      
                    </div>
                </div>
                <div className="row row-cards">
                    <div className="col-md-4 col-sm-10 productos card">                        
                        <div className="card-body">
						<img src={fotosAuriculares[4].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotosAuriculares[4].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotosAuriculares[4].Descripción}</h6>      
                        </div>                       
                    </div>
                    <div className="col-md-4 col-sm-10 productos card">
                        <div className="card-body">
                        <img src={fotosAuriculares[5].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotosAuriculares[5].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotosAuriculares[5].Descripción}</h6>   
                        </div>                      
                    </div>
                </div>
                <div className="row row-cards">
                    <div className="col-md-4 col-sm-10 productos card">                        
                        <div className="card-body">
						<img src={fotosAuriculares[6].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotosAuriculares[6].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotosAuriculares[6].Descripción}</h6>    
                        </div>                       
                    </div>
                    <div className="col-md-4 col-sm-10 productos card">
                        <div className="card-body">
						<img src={fotosAuriculares[7].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotosAuriculares[7].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotosAuriculares[7].Descripción}</h6>    
                        </div>                      
                    </div>
                </div>
            </div>
            
        </div>
    </div>    
        
    )
		 
		
	
	 }

	

export default Productos