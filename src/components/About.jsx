function About(){
    return(
        <>
            <section id="heroSection" className="hero--section">
                <div className="hero--section--content--box">
                    <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Vedant Bharti</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Backend Developer</span>
                    </h1>
                    <p className="hero--section-description">
                        Software engineer keen on solving core human problems through code. Experienced in backend development using java with supporting experience of several other technologies like react, google cloud, docker, kubernetes, etc. Outside work you can find me reading, playing some sports or binging some TV series.
                    </p>
                    </div>
                    {/* <button className="btn btn-primary">Get In Touch</button> */}
                </div>
                <div className="hero--section--img">
                    <img src="./images/profile_pic.jpg" alt="Hero Section" />
                </div>
            </section>
        </>
    );
}

export default About;