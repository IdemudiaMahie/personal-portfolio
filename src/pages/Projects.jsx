import WeatherApp from '../assets/img/WeatherApp Image.png'
import contactManagerApp from '../assets/img/contact-manager-app.jpg'
import recipeApp from '../assets/img/recipe app.png'

function projects() {
    return (
        <>
            <h1>Projects</h1>

            <section className="project">
                <img src={WeatherApp} alt="Weather App" />
                    <h3>Weather App</h3>
                    <p>Developed a responsive weather application using ReactJS and Vanilla JavaScript that displays current weather conditions and forecasts. Focused on usability and clean design.</p>
            </section>

            <section className="project">
                <img src={contactManagerApp} alt="Contact Manager App" />
                    <h3>Contact Manager App</h3>
                    <p>Built a full-stack Node.js & MongoDB application allowing users to manage contacts with features like create, update, delete, and authentication. Demonstrated backend integration and secure data handling.</p>
            </section>

            <section className="project">
                <img src={recipeApp} alt="Recipe App" />
                    <h3>Recipe App (MERN)</h3>
                    <p>Developed a full-stack MERN recipe app enabling users to view recipes and calculate meal costs. Highlighted skills in React, Express, Node.js, and MongoDB integration.</p>
            </section>
        </>
    )
}

export default projects