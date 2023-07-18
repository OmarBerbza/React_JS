import React, { useState } from 'react'

function Bmi() {
    const [weight, setWeight] = useState();
    const [size, setSize] = useState();
    const [result, setResult] = useState();
    const [bmi, setBmi] = useState();

    function handleClick(){
        var bmi = weight / (size * size);
        setBmi(bmi);

        if(bmi >= 18.5 && bmi <= 24.5){
            setResult(()=> <p style={{backgroundColor: "green", color: "white"}} className='w-25 rounded p-3'>Normal</p>)
        }
        else if(bmi < 18.5){
            setResult(()=> <p style={{backgroundColor: "red", color: "white"}} className='w-25 rounded p-3'>Under Weight</p>)
        }else{
            setResult(()=> <p style={{backgroundColor: "#FF4500", color: "white"}} className='w-25 rounded p-3'>Overweight</p>)
        }
    }

  return (
    <div className='container'>
        <h1 className='mt-3'>Body Mass Index</h1>
        <form>
            <label htmlFor="poids">Weight in (Kg)</label>
            <input type="number" value={weight} onChange={(e)=> setWeight(e.target.value)} className='form-control w-50' name='poids' />
            <br />
            <label htmlFor="taille">Size in (centimetr)</label>
            <input type="number" value={size} onChange={(e)=> setSize(e.target.value)} className='form-control w-50' name="taille" />
            <br />

            <button type='button' onClick={()=>handleClick()} className='btn btn-primary'>Calculate</button>
            <br />

            <h5 className='mt-4'>Result: </h5>
            {bmi}
            {result}
        </form>
    </div>
  )
}

export default Bmi