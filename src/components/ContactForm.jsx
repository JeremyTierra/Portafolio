import { useRef } from 'react';
import emailjs from '@emailjs/browser'; // Importa la biblioteca emailjs-com en lugar de emailjs
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (e.target[0].value !== "") {
      emailjs.sendForm('service_os63lcl', 'template_jc0985m', form.current, 'egR8ebY9osDvl1f_S')
        .then(() => {
          toast.success('Mensaje enviado con éxito!');
          form.current.reset();
        }, () => {
          toast.error('Error al enviar el mensaje.');
        });
    }
  };

  return (
    <>
      <div id="formEmail" className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-center text-gray-800">
          <div className="max-w-[700px] mx-auto px-3 lg:px-6">
            <h2 className="text-3xl font-bold mb-12">Contact me</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  name="user_name"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  name="user_email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  name="message"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                className="w-full px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
}
