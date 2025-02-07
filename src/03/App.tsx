import Pays from "./Pays";

const PaysList = [

    {nom:"RCA",
    Capital:"Bangui",
    populaion: 6000000,
    drapeau: "./img/image.png"},

    {nom:"CEMROUN",
        Capital:"YOUNDE",
        populaion: 15000000,
        drapeau: "./img/camer.png"},
]

export default function App(){


    const pays = PaysList.map(function(p,index){
        return (
            <Pays key={index}
             nom={p.nom } 
             ville = {p.Capital}
             population={p.populaion}
             drapeau={p.drapeau}/>
        )
    });

    return(
        <div>
            <h1>Pays</h1>
            {pays}
           
        </div>
    )
}

