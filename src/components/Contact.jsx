import "../assets/styles/Contact.css"

function Contact() {
    return (
        <section className="contact">
            <div className="box">
                <h2 id="contacter">Contact</h2>
                <form action="mailto:emailid@example.com" method="post" encType="text/plain">
                    <label value="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Entrer votre email (ex: jean@gmail.com)" />
                    <label value="message">Message</label>
                    {/* <input type="text" name="" id="message" placeholder="Que souhaitez-vous dire ?" /> */}
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Que souhaitez-vous dire ?"></textarea>
                    <input type="submit" value="envoyer" />
                </form>
            </div>
        </section>
    );
  }
  
  export default Contact;