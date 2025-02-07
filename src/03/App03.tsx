
import Hello from "../02/Hello";

function transform(valeur: number, index:number){
    return (
        <div key={index}>Chiffre: {valeur} </div>
    )
}

function transform2(nom: string, index:number){
    return (
        <Hello key={index} name={nom}/>
    )
}

export default function App02() {




    const data = [ 10,2,3,4,10];
    const listEtudiant = data.map(transform);


    const data2 = ["Madara","Naruto","Minato","Obito","Nagato"];
    const Bienvenu = data2.map(transform2);


    return (
        <div>
          {listEtudiant}
          <hr />
           {Bienvenu}
        </div>
    )
}