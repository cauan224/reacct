import './style.css'

export default function falaConosco(){

    return(
        <>
        <section>
             <h1>falaConosco</h1>
             <p> Tire suas duvidas e peças um orçamento sem compromisso</p>

             <form action="form" onSubmit={handleSubmit}>
             <div className='grind- cols-3'> 
                <label className="field">
                    <span>nome</span>
                    <input type="text" />

                </label>
               </div>
             </form>
        </section>
       
        </>
    )
}
