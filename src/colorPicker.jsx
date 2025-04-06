import React , {useState} from 'react';

function colorPicker() {
 const [color , setColor] = useState('#ffffff');
    
    function handleChange(event){
        setColor(event.target.value);
    }
    return(<>
    <div>
        <h2>Color Picker</h2>
        
        <input type="color" value={color} onChange={handleChange} style={{width: 50 , height: 50 , border : 1 , borderStyle : 'solid' , borderColor : 'black' ,  margin : 20}}/>
        {/* <div className="colorprofile" style={{backgroundColor : color}}></div> */}
    </div>
        <div className='colorBox' onClick={() => setColor(color)} style={{backgroundColor : color , width: 250 , height: 100 , border : 1 , borderStyle : 'solid' , borderColor : 'black' , borderRadius : 10}}> </div>
        <p><h3>{color}</h3></p>
        
        

    </>)
}


export default colorPicker;