import "./main.css";

function Main() {
    let styleH1 = {
        color: "black",
        fontFamily: "Arial",
        fontSize: "xx-large",
        textDecoration: "underline",
        marginTop: "10px"
    };
    let title = "FILOTAXIA"

    return (
        <main className="main">
            <div className="mainPortada">
                <img src="/assets/images/portada/portadaFilotaxia7.jpg" alt="" className="mainPortadaImg" />
                <div className="mainPortadaTxt">
                    <h2 className="mainPortadaTxtTitulo">Filotaxia</h2>
                    <p className="mainPortadaTxtParrafo">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet rem dolores mollitia porro! Dolor officia aperiam natus pariatur labore eaque, fugit cumque. Dicta unde pariatur, consequuntur nesciunt veniam esse repellat?
                        Quos, voluptatibus a? Cum animi soluta illum eveniet. 
                    </p>
                    <button className="mainPortadaTxtButton">Armonia en Plantas</button>
                </div>
            </div>
        </main>
    );
}
export default Main;


