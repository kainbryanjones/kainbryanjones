import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "left",
        flexWrap: "wrap",

      }}>
        <div style={{
          maxWidth: "100%",
          backgroundColor: "aliceblue",
          border: '5px solid lightblue',
          padding: "1.5%",
          borderRadius: "0% 0% 15% 15%",
          boxShadow: "0px 2px 8px 0px black"
        }}>
          <img
            src={"https://media.licdn.com/dms/image/D4D03AQH8LWTcO42vDw/profile-displayphoto-shrink_800_800/0/1665586590062?e=1677715200&v=beta&t=JkMAsNzIfoPOXvSu-MOzpVyLGIHVQ88uMrzEM6IO8O0"}
            style={{
              maxWidth: "50%",
              borderRadius: "100%",
            }}
          />
        </div>
        <div>
          <h1>Kain Bryan-Jones</h1>
          <h4>(website work in progress)</h4>
          <main>
            <div className='main-content'>
              <p>
                Enthusiastic frontend development with skills in application development, music production and animation. Looking to get my foot in the door of the music software industry.<br />
                As a young musician myself, I have experience within the world of music production including the tools used to help facilitate it. With this personal experience and my background in software development, I have a strong desire to build quality products to assist other musicians in their own journey, whether they want to be a casual four-chord player or a professional multi-instrumentalist.
              </p>
            </div>
          </main>
        </div>
        <div className='menu-index'>
          <ul>
            <li>
              Frontend development
              <ul>
                <li>
                  <a href="https://www.halogensband.com">"Halogens" Website</a>
                </li>
              </ul>
            </li>
            <li>Music
              <ul>
                <li>
                  <a href="https://www.youtube.com/playlist?list=PLT0QgQf0TBxEGjlBJ1yWk-iuxF3mjkVgh">"Captain Mercy" Album</a>
                </li>
              </ul>
            </li>
            <li>
              Animation
              <ul>
              <li><a href="https://www.youtube.com/watch?v=jcC4XfAb8ZM">"Motorbike" Official Visualiser</a></li>
              <li><a href="https://www.youtube.com/@halogensband">"Hypochondria" Official Visualiser(Releases 27th January)</a></li>
              </ul>
            </li>
            <li>
              Audio Plugins
              <ul>
              <li>
              <a href="https://github.com/kainbryanjones/Mercy">"Mercy" JUCE project</a>
              </li>
              </ul>
            </li>
            <li><a href="/cv.pdf">CV</a></li>
            <li><a href="mailto: contact.kainbryanjones@gmail.com">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
