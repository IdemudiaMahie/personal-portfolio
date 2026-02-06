

function Contact() {
  return (
    <>
        <h1>Contact Me</h1>

        <div className="contact-wrapper">
            <section className="contact-info">
                <div className="contact-item">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email:</span>
                    <a href="mailto:idemudiamahie23@gmail.com">idemudiamahie23@gmail.com</a>
                </div>

                <div className="contact-item">
                    <i className="fa-solid fa-phone"></i>
                    <span>Phone:</span>
                    <span>+234 703 2737 284</span>
                </div>

                <div className="contact-item">
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn:</span>
                    <a href="https://www.linkedin.com/in/mahie-idemudia" target="_blank">
                        mahie-idemudia
                    </a>
                </div>

                <div className="contact-item">
                    <i className="fa-brands fa-github"></i>
                    <span>GitHub:</span>
                    <a href="https://github.com/IdemudiaMahie" target="_blank">
                        IdemudiaMahie
                    </a>
                </div>

                <div className="contact-item">
                    <i className="fa-brands fa-x-twitter"></i>
                    <span>X (Twitter):</span>
                    <span>@mahie_id</span>
                </div>
            </section>

            <form action="index.html" method="GET">
                <input type="text" name="firstName" placeholder="First Name" required />
                <input type="text" name="lastName" placeholder="Last Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <input type="text" name="phone" placeholder="Contact Number" />
                <textarea name="message" placeholder="Write your message here..." required></textarea>
            </form>
        </div>
    </>
  )
}

export default Contact