// Esercizio
// Ampliare l’esercizio precedente aggiungendo, nel form, il campo autore, contenuto ed un campo per una categoria.
// Quindi ogni post ha le seguenti proprietà: id, titolo, autore, contenuto, categoria.


// importiamo use state
import { useState } from "react";
// importiamo l'array di oggetti
import dataArticoli from "../data/dataArticoli"

// mettiamo l'oggetto vuoto all'interno di una variabile
const initialFormData = {
    //aggiungiamo tutte le proprietà che vogliamo mappare e assegniamo loro un valore iniziale.
    titolo: "",
    autore: "",
    contenuto: "",
    categoria: ""
}

export default function Articoli() {
    console.table(dataArticoli)


    // creiamo una variabile di stato che conterrà il nostro array di oggetti
    // creiamo una variabile di stato che sarà riempita dell'oggetto sopra indicato
    const [formData, setFormData] = useState(initialFormData);

    // Creiamo una funzione unica per gestire l'evento onChange dei nostri campi.
    function handleFormData(event) {
        // all'avvio della funzione richiama currentForm Data
        setFormData((currentformData) => ({
            // prendi tutto l'array 
            ...currentformData,
            // e aggiungigli
            [event.target.name]: event.target.value,
        }));

    }

    // Creiamo una funzione unica per gestire l'invio del form.
    const handleSubmitForm = (e) => {
        e.preventDefault()

        // creimo il nuovo oggetto 
        const newArticol = {
            id: Date.now
        }
    }




    return (
        <section className="section-articoli">
            {/* contenitore esterno */}
            <div className="container">
                <h2>Inserisci un Nuovo articolo</h2>
                {/* PARTE OUTPUT FORM */}
                <form className="form-articoli"
                    onSubmit={handleSubmitForm}>
                    {/* input titolo */}
                    <input
                        type="text"
                        // questo sara event.target.name
                        name="titolo"
                        // questo sarà event.target.value
                        // lo riempiamo con il valore corretto della proprietà mappata
                        value={formData.titolo}
                        onChange={handleFormData}
                        placeholder="Inserisci il titolo"
                    />


                    {/* input categoria */}
                    <input
                        type="text"
                        // questo sara event.target.name
                        name="categoria"
                        // questo sarà event.target.value
                        // lo riempiamo con il valore corretto della proprietà mappata
                        value={formData.categoria}
                        onChange={handleFormData}
                        placeholder="Inserisci la categoria"
                    />


                    {/* input contenuto */}
                    <textarea
                        type="textarea"
                        // questo sara event.target.name
                        name="contenuto"
                        // questo sarà event.target.value
                        // lo riempiamo con il valore corretto della proprietà mappata
                        value={formData.contenuto}
                        onChange={handleFormData}
                        placeholder="Inserisci il contenuto"
                    />

                    {/* input autore */}
                    <input
                        type="textarea"
                        // questo sara event.target.name
                        name="autore"
                        // questo sarà event.target.value
                        // lo riempiamo con il valore corretto della proprietà mappata
                        value={formData.autore}
                        onChange={handleFormData}
                        placeholder="Inserisci l'autore"
                    />

                    <button type="submit" className="btn btn-secondary btn-lg">
                        Aggiungi Articolo
                    </button>
                </form>


                {/* PARTE OUTPUT ARTICOLI*/}
                <div className="box-articoli">

                    {/* singolo articolo*/}
                    {dataArticoli.map(articolo => (
                        <div key={articolo.id} className="toast d-block">

                            {/* contenitore header */}
                            <div className="toast-header">
                                {/* titolo */}
                                <strong className="me-auto">{articolo.titolo}</strong>
                                {/* categoria */}
                                <span className="badge text-bg-secondary mx-2 p-2">
                                    {articolo.categoria}
                                </span>
                                {/* button delete */}
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>

                            {/* contenitore corpo */}
                            <div className="toast-body">
                                {/* contenuto */}
                                <p>{articolo.contenuto}</p>
                                {/* autore */}
                                <p className="autore">{articolo.autore}</p>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </section >
    )

}