import data from "../data/data.json"

export function Extracurricular() {
    return (
        <section className="extracurricular--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">Extracurricular</p>
            </div>
            <div className="extracurricular--section--container">
                {/* <div className="extracurricular--section--card"> */}
                    <ul>
                        <li>
                            <b>I love to</b> 
                            <ul>
                                <li>Playing Badminton and Volleyball. Pretty good with badminton, average in Volleyball.</li><br/>
                                <li>Exploring new cultures and meet people there and see how they think and lives. I think it really helps in widening one's perspective about the world.</li><br/>
                                <li>Research about space exploration. During my college time I have done my BTP in Space-farming and Space-manufacturing, its pretty good, if you want to read it ping me on any of my socials, I'd love to share.</li><br/>
                                <li>Also I'm working on something related to humans in space. Will update about it here once I think its good enough to share with you guys!</li><br/>
                            </ul>
                        </li>
                        <li>
                            <b>Achievements</b>
                            <ul>
                                <li>JEE(Advanced) 2017: Among the 0.03 percent out of 0.20 million students that appeared for JEE Advanced. More than 1.5 million students appeared for JEE Mains.</li><br/>
                            </ul>
                        </li>
                    </ul>
                {/* </div> */}
            </div>
        </section>
    );
}