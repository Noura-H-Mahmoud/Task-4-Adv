import ContactContainer from '../ContactContainer/ContactContainer'
import SharedText from '../SharedText/SharedText'
import Title from '../Title/Title'
import './Contact.css'

export default function Contact() {
    return (
        <section id='contact' className='text-color py-5 d-flex flex-column align-items-center gap-4' >
            <Title title='Contact' withAfter={true} />
            <SharedText />
            <div className='w-100 iframe-h'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65609.53086294983!2d-73.99328248032197!3d40.703353907149605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sar!2sae!4v1725616285110!5m2!1sar!2sae" className='w-100 h-100'></iframe>
            </div>
            <ContactContainer />
        </section >
    )
}
