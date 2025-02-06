
interface Props {
    lang?: string
    name: string
   
}

export default function Hello(props: Props){

    if (props.lang=="en"){
        return (
            <div>
                Welcom <strong>{props.name}</strong>
            </div>
        )
    }

    return(
        <div>
            Bienvenu <strong>{props.name}</strong>
        </div>
    )

}