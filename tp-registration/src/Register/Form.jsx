import React from 'react';
import { useEffect, useRef, useState } from "react";
import cities from './Data/cities.json';
import hobbies from './Data/hobbies.json';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";


function Form() {
    const [indentifiant, setIndetifiant] = useState('');
    const [naissence, setNaissence] = useState('');
    const [ville, setVille] = useState('');
    const [genre, setGenre] = useState('');
    const [loisir, setLoisir] = useState([]);
    const [photo, setPhoto] = useState();
    const [preview, setPreview] = useState('');

    const navigate = useNavigate();
    // const [formData, setFormData] = useState({indentifiant, naissence, ville, genre, loisir: loisir.languages, photo, preview})

    /* FOR FORM */
    const handleSubmit = (event)=> {
        event.preventDefault(); 
        const formData = {indentifiant, naissence, ville, genre, loisir, photo, preview}
        navigate('/display', {state: formData});
    };

    /* CHECKING THE INFORMATIONS */
    const handleChange = (e) => {
        const { value, checked } = e.target;
        // const { languages, response } = loisir;
        console.log(value , checked)
      
        if (checked) {
          setLoisir((prevLoisir) => [...prevLoisir, value]);
        } else {
          setLoisir((prevLoisir) => prevLoisir.filter((item)=> item !== value));
        }
      };
      
      

    /* DISPLAY IMAGE */
    const fileInputRef = useRef();

    const handleImage = (event) => {
        const file = event.target.files[0];
      
        if (file && file.type.substr(0, 5) === "image") {
          setPhoto(file);
        } else {
          setPhoto(null);
        }
    };
      

    useEffect(() => {
        if (photo) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(photo);
        } else {
            setPreview(null);
        }
    }, [photo]);
    
    // useEffect(() => {
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         preview: preview || null,
    //     }));
    // }, [preview]);
      


    return (
        <div className='container form-step'>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    {/* FORM */}
                    <form className='p-3' onSubmit={handleSubmit}>
                        <h2 className='text-center text-warning'>Inscription:</h2>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label"><b>Indentifiant</b></label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setIndetifiant(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label"><b>Mot de passe</b></label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label"><b>Date de naissence</b></label>
                            <input type="date" className="form-control" id="date" onChange={(e)=> setNaissence(e.target.value)} />
                        </div>

                        <label className="form-label"><b>Ville</b></label>
                        <select className="form-select" aria-label="Default select example" onChange={(e)=> setVille(e.target.value)}>
                            {cities.map((op, index)=> {return(<option value={op.ville} key={index + 1}>{op.ville}</option>)} )}
                        </select>
                        
                        <div className='mt-3'>
                            <label className="form-label"><b>Genre</b></label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="homme" value="homme" onChange={(e)=> setGenre(e.target.value)} />
                                <label className="form-check-label" htmlFor="homme" >Homme</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="femme" value="femme" onChange={(e)=> setGenre(e.target.value)} />
                                <label className="form-check-label" htmlFor="femme" >Femme</label>
                            </div>
                        </div>
                        
                        <div className='mt-3'>
                            <label htmlFor="" className="form-label"><b>Loisirs</b></label>
                            {hobbies.map((text, index)=> {return(
                                <div className="mb-3 form-check" key={index + 1}>
                                    <input type="checkbox" className="form-check-input" id={text.loi} value={text.loi} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor={text.loi} key={index+1}> {text.loi}</label>
                                </div>
                            )} 
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label"><b>Photo</b></label>
                            <input className="form-control" type="file" ref={fileInputRef} accept="image/*" id="formFile" onChange={handleImage} />
                        </div>

                        <button type="submit" className="btn btn-success">S'inscrite</button>

                    </form>
                </div>
      
                {/* CHECK THE INFORMATIONS */}
                <div className='col-sm-12 col-md-6 fs-5 msg bg-success border text-light'>
                    <h3 className='text-center msgTitle text-warning mt-3'>Vérifiez les informations: </h3>

                    <div className="p-4">
                        <h4>Le nom: <span className='checking'> {indentifiant} </span></h4>
                        <h4>Né le: <span className='checking'> {naissence} </span></h4>
                        <h4>Localisation:<span className='checking'> {ville} </span></h4>
                        <h4>Genre :<span className='checking'> {genre} </span></h4>

                        <h4>Les loisirs:</h4>
                        <textarea className="textAr bg-success" name="response" value={loisir} id="floatingTextarea2" onChange={handleChange} disabled />

                        <h4>Photo:</h4>
                        {preview && (
                            <img src={preview} alt="Preview" />
                        )}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Form