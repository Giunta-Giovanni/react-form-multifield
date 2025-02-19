// Esercizio
// Ampliare l’esercizio precedente aggiungendo, nel form, il campo autore, contenuto ed un campo per una categoria.
// Quindi ogni post ha le seguenti proprietà: id, titolo, autore, contenuto, categoria.

import dataArticoli from "../data/dataArticoli"
export default function Articoli() {

    console.table(dataArticoli)

    return (
        <section>
            {/* contenitore esterno */}
            <div className="container">
                {/* PARTE OUTPUT FORM */}

                {/* PARTE OUTPUT ARTICOLI*/}
                <div className="row gap-3">

                    {/* singolo articolo*/}
                    {dataArticoli.map(articolo => (
                        <div key={articolo.id} className="toast d-block">

                            {/* contenitore header */}
                            <div className="toast-header">
                                {/* titolo */}
                                <strong className="me-auto">{articolo.titolo}</strong>
                                {/* categoria */}
                                <span class="badge text-bg-secondary mx-2 p-2">
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