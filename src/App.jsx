import './App.css';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import Imagen from './img/backgroundCard.jpg'

function App() {
  return (
    <div className="App">

      <main>
        <div className="tarjeta">
        
                <div className="headerCard" >

                    <Avatar alt="Sebastian" src={Imagen} sx={{border:'4px solid orange'}}  id='avatar'/>

                </div>

                <div className="bodyCard">
                

                  <div className="dataCard" >
                  
                        <div className="textcard" >
                            <div style={{ display: 'flex', justifyContent:'center'}}>
                              <Typography variant="subtitle2" color="initial" >Sebastian Benitez</Typography>
                              <Typography variant="subtitle2"  style={{color:'gray',marginLeft:'0.5rem'}}>39</Typography>
                            </div> 
                            <Typography variant="caption" color="initial"  style={{color:'gray'}}>Londom</Typography>
                        </div>                       
                  </div>
                  <div className="scoreCard" style={{ display: 'flex'}}>

                    <div style={{flexGrow: 1,  display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                        <Typography variant="subtitle2" color="initial" >80K</Typography>
                        <Typography variant="subtitle2"  style={{color:'gray',marginLeft:'0.5rem'}}>hola</Typography>

                    </div>
                    <div style={{flexGrow: 1, display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                        <Typography variant="subtitle2" color="initial" >803K</Typography>
                        <Typography variant="subtitle2"  style={{color:'gray',marginLeft:'0.5rem'}}>Likes</Typography>

                    </div>
                    <div style={{flexGrow: 1, display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                        <Typography variant="subtitle2" color="initial" >1.4K</Typography>
                        <Typography variant="subtitle2"  style={{color:'gray',marginLeft:'0.5rem'}}>Photos</Typography>


                    </div>
                  </div>

                 </div>

        </div>
        


      
      </main>

      <div className="circle" id='circle1'>

        </div>
        <div className="circle" id='circle2'>

        </div>




        
     
    </div>
  );
}

export default App;
