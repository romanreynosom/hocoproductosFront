import React from 'react';
import './index.css';
import imagenes from '../img/imagenes';
import  { Link } from 'react-router-dom';







const Principal = () => {
  
    return (
        <div>
       
          
    
        <div className="productos-general">
           
            
            <div className="container">
                <div className="row row-cards">
                    <div className="col-md-4 col-sm-10 productos card">
                        <div className="card-body">
                           <Link to ='accesoriosAuto'> <img src={imagenes[0].img} alt="" className="card-img-top"/>  </Link>  
                            <h3 className="card-title">{imagenes[0].title}</h3>
                            
                            
                        </div>                
                    </div>
                    <div className="col-md-4 col-sm-10 productos card">
                        <div className="card-body">
						<Link to='cables'><img src={imagenes[3].img} alt="" className="card-img-top"/>  </Link> 
                            <h3 className="card-title">{imagenes[3].title}</h3> 
                                          
                        </div>
                    </div>
                </div>
                <div className="row row-cards">
                    <div className="col-md-4 col-sm-10 productos card">                        
                        <div className="card-body">
					<Link to='auriculares'> <img src={imagenes[2].img} alt="" className="card-img-top"/>  </Link> 	
                            <h3 className="card-title">{imagenes[2].title}</h3>
                           
                        </div>                       
                    </div>
                    
                </div>
                
                </div>
            </div>
       
            
        </div>
        
        
  
    )
        }

export default Principal