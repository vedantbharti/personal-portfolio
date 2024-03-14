import data from "../data/data.json"


function Skills(){
    return(
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                <div key={index} className="c">
                    <div className="skills--section--card--content">
                    <p className="skills--section--title">{item.title}</p>
                    <p className="skills--section--description">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;