
interface Props {
    nom: string
    ville: string
    population: number
    drapeau: string
}

export default function Pays(props: Props){

    return(
        <div>
           <div>Pays :<strong>{props.nom}</strong> </div> 
           <div>Capital :<strong>{props.ville}</strong> </div>
           <div>populaion :<strong>{props.population}</strong></div>
            <div> <img src={props.drapeau} width={20} /></div>
            <hr />
        </div>

    )

}