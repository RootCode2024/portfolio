import { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";
import data from "../data/portfolio.json";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('An error occurred while sending your message. Please try again later.');
      }
    } catch (err) {
      setError('An error occurred while sending your message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError('');
      }, 2000); // 2000 ms = 2 secondes

      return () => clearTimeout(timer); // Nettoyage
    }
  }, [success, error]);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header />
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Get In Touch</h1>

          <div className="desktop:grid desktop:grid-cols-2 desktop:gap-8">
            {/* Formulaire de contact */}
            <form onSubmit={handleSubmit} className="mb-6 desktop:mb-0">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 h-32"
                ></textarea>
              </div>
              <div className='flex space-x-5'>
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-black text-white font-bold py-2 px-4 rounded transition duration-300 ${
                  isLoading ? "bg-gray-500 cursor-not-allowed" : "hover:bg-gray-800"
                }`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            {success && <p className="max-w-md bg-green-500 text-white font-bold py-2 px-4 rounded">Message sent successfully!</p>}
            {error && <p className="max-w-md bg-red-500 text-white font-bold py-2 px-4 rounded">{error}</p>}</div>
            </form>

            {/* Informations de contact */}
            <div>
                <h2 className="text-2xl font-bold mb-8 underline underline-offset-4">Contact Information</h2>
                <p className="mb-4"><strong>Email: </strong> <a href="mailto:chrislainavocegan24@gmail.com" className="text-blue-500">chrislainavocegan24@gmail.com</a></p>
                <p className="mb-4"><strong>Phone: </strong> <span className="text-blue-500">+221 77 681 52 08</span></p>
                <p className="mb-4">
                <strong>Come Up: </strong> 
                <a href="https://comeup.com/fr/@chrislain-code" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://comeup.com/fr/@chrislain-code</a>
                </p>
                <p className="text-md text-gray-700 mt-2">
                <em>For optimal security, you can also reach me through Come Up, a secure platform that guarantees payment protection and client satisfaction. It&apos;s a trusted way to collaborate with transparency and confidence.</em>
                </p>
            </div>
          </div>

          {/* Localisation */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <iframe
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201205.56305904582!2d-17.434477515370712!3d14.703479228719893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe8350a657764dd7%3A0xb6a927b1d3f1782e!2sDakar%20Libert%C3%A9%205!5e0!3m2!1sen!2sne!4v1696827321688!5m2!1sen!2sne"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
