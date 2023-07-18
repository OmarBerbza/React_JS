import React from "react";


class JeuDe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            compteur: 0,
            face: null,
            fin: false
        }
    }
    jouer = ()=>{
       const valeur = Math.floor(Math.random()*6) + 1;

       if(valeur === this.props.cache){
        this.setState({compteur:this.state.compteur + 1, face: valeur, fin: true});
       }
       else{
        this.setState({compteur:this.state.compteur + 1, face: valeur, fin: false});
       }
    }
    initialiser = ()=>{
        this.setState({compteur:0, face: null, fin: false})
    }

    render(){
        return(
            <div style={{color: "lightgray"}}>
                <h1>Jeu de Dé...</h1>
                <img src={this.state.face==null? "Dé.PNG" : `face${this.state.face}.PNG`} />
                
                <h2>Face: {this.state.face}</h2>
                <h5>Nombre d'essais: <b> {this.state.compteur}</b></h5>
                {
                    !this.state.fin 
                    ?<button onClick={this.jouer}>JOUER</button> 
                    :<div>
                        <div class="firework"></div>
                        <div class="firework"></div>
                        <div class="firework"></div>
                        <button onClick={this.initialiser}>INITIALISER</button>
                        <p>Bravo vous avez trouvez la face cachée (le nombre d'essez est: {this.state.compteur}) </p> 
                    </div>
                    
                }
            </div>
        );
    }
}

export default JeuDe