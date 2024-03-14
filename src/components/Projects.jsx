import data from "../data/data.json"

function Experience(){
    return(
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                <h2 className="section--title">My Projects</h2>
                </div>
                <div>
                <button className="btn btn-github">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
                    Visit My GitHub
                </button>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                <div key={index} className="portfolio--section--card">
                    <div className="portfolio--section--img">
                    <img src={item.src} alt="Placeholder" />
                    </div>
                    <div className="portfolio--section--card--content">
                    <div>
                        <h3 className="portfolio--section--title">{item.title}</h3>
                        <p className="text-md">{item.description}</p>
                    </div>
                    <p className="text-sm portfolio--link">
                        {item.link}
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 19"
                        fill="none"
                        >
                        <path
                            d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                            stroke="currentColor"
                            stroke-width="2.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                    </p>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;