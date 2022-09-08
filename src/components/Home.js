import React from "react";

function Home() {
  return (
    <main>
      <div className="container py-4">
        <div className=" how-work p-5 mb-4  rounded-3">
          <div className=" container-fluid py-5">
            <h1 className=" fw-bold">Learning System</h1>
            <p className="col-md-8">
              This system is using React.js as front-end framework, and Node.js,
              MongoDB as backend server. This kind of project is called Learning
              project, which is one of the most popular way to create modern
              websites.
            </p>
            <button className="btn btn-secondary btn-lg" type="button">
              See how it works.
            </button>
          </div>
        </div>

        <div class="popular-articles">
          <div class="mini-card-grid">
            <aritcle
              class="mini-card module module-article article"
              id="mini-post-367003"
            >
              <time>
                <stroung>Article </stroung>
                on Jul 28,2022
              </time>
              <h3 class="mini-card-title">
                <a href="#">This is the Best 2022 learn HTML</a>
              </h3>
              <div class="tags">
                <a href="#" rel="tag">
                  React
                </a>
                <a href="#" rel="tag">
                  HTML5
                </a>

                <img
                  className="teacher"
                  src="https://img-c.udemycdn.com/user/200_H/31334738_a13c_2.jpg"
                />
                <img src="data:image/png;base64,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" />
              </div>
              <div></div>
            </aritcle>
            <aritcle
              class="mini-card module module-article article"
              id="mini-post-367003"
            >
              <time>
                <stroung>Article </stroung>
                on Jul 28,2022
              </time>
              <h3 class="mini-card-title">
                <a href="#">This is secand</a>
              </h3>
              <div class="tags">
                <a href="#" rel="tag">
                  React
                </a>
                <a href="#" rel="tag">
                  HTML5
                </a>
              </div>
              <div></div>
            </aritcle>
            <aritcle
              class="mini-card module module-article article"
              id="mini-post-367003"
            >
              <time>
                <stroung>Article </stroung>
                on Jul 28,2022
              </time>
              <h3 class="mini-card-title">
                <a href="#">This is Test</a>
              </h3>
              <div class="tags">
                <a href="#" rel="tag">
                  React
                </a>
                <a href="#" rel="tag">
                  HTML5
                </a>
              </div>
              <div></div>
            </aritcle>
            <aritcle
              class="mini-card module module-article article"
              id="mini-post-367003"
            >
              <time>
                <stroung>Article </stroung>
                on Jul 28,2022
              </time>
              <h3 class="mini-card-title">
                <a href="#">This is Test</a>
              </h3>
              <div class="tags">
                <a href="#" rel="tag">
                  React
                </a>
                <a href="#" rel="tag">
                  HTML5
                </a>
              </div>
              <div></div>
            </aritcle>
            <aritcle
              class="mini-card module module-article article"
              id="mini-post-367003"
            >
              <time>
                <stroung>Article </stroung>
                on Jul 28,2022
              </time>
              <h3 class="mini-card-title">
                <a href="#">This is Test</a>
              </h3>
              <div class="tags">
                <a href="#" rel="tag">
                  React
                </a>
                <a href="#" rel="tag">
                  HTML5
                </a>
              </div>
              <div></div>
            </aritcle>
            <aritcle
              class="mini-card module module-article article"
              id="mini-post-367003"
            >
              <time>
                <stroung>Article </stroung>
                on Jul 28,2022
              </time>
              <h3 class="mini-card-title">
                <a href="#">This is Test</a>
              </h3>
              <div class="tags">
                <a href="#" rel="tag">
                  React
                </a>
                <a href="#" rel="tag">
                  HTML5
                </a>
              </div>
              <div></div>
            </aritcle>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="asstudent col-md-8">
            <div className=" h-100 p-5 text-white bg-dark rounded-3">
              <h2>As a student</h2>
              <p>
                Students can register in courses they like. This website is for
                practice purpose only, so please do not provide any personal
                information, such as credit card numbers.
              </p>
              <button className="btn btn-outline-light" type="button">
                Login or Register Now
              </button>
            </div>
          </div>
          <div className="asinstructor col-md-8">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>As an Instructor</h2>
              <p>
                You can become an instructor by registering as one, and start
                making online courses. This website is for practice purpose
                only, so please do not provide any personal information, such as
                credit card numbers.
              </p>
              <button class="btn btn-outline-secondary" type="button">
                Login or Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
