import './intro.css'

export default function Intro(){

    return(
        <section className='introSection'>
            <div className="grayBox">
                <h1>Web Developer</h1>
                <div className='nameTagSection'>
                    <div className='nameTag'>
                        <div>
                            Welcome to
                        </div>
                    </div>
                    <div className='nameTag'>
                        <div>
                            Jinseong's Portpolio
                        </div>
                    </div>
                </div>
            </div>
            <div className="brownBox">
                <div>이미지</div>
                <div className='tagSection'>
                    &lt;head&gt;
                    <br></br>
                    <span>Development</span>
                    <br></br>
                    <span>Creativity</span>
                    <br></br>
                    <span>Stability</span>
                    <br></br>
                    &lt;/head&gt;
                    <br></br>
                    <br></br>
                    &lt;body&gt;
                    <br></br>
                    <span>&lt;heart&gt;</span>
                    <br></br>
                    <span className='tapTwo'>passion</span>
                    <br></br>
                    <span>&lt;/heart&gt;</span>
                    <br></br>
                    <span >&lt;stomach&gt;</span>
                    <br></br>
                    <span className='tapTwo'>caffein</span>
                    <br></br>
                    <span>&lt;/stomach&gt;</span>
                    <br></br>
                    &lt;/body&gt;

                </div>
            </div>
        </section>
    )
}