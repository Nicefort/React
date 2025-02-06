

import Capital from "./Capital";
import Hello from "./hello";
import Student from "./student";

export default function App02() {
    return (
        <div>
            <Capital pays="RCA" ville="Bangui" />
           <h1>Etudiant</h1>
           <Student name="Madara" age="19" phnoe_number="72134187" />
           <Student name="Naruto" age="19" phnoe_number="72134187" />
           <h1>Bienvenu</h1>
            <Hello name="Naruto" />
            <Hello lang="en"  name="Madara" />

           
        </div>
    )
}