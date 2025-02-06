
interface Props {
    pays: string
    ville: string
}

export default function Capital(props: Props){

    return(
        <div>
            la capital de {props.pays} est {props.ville}
        </div>

    )

}