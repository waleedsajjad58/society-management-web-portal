import { Navbar } from '../components/Navbar';

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="public" />
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Information</h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Society Office</h3>
                <p className="text-gray-900">123 Society Complex, Main Road</p>
                <p className="text-gray-900">City, State - 123456</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Phone</h3>
                <p className="text-gray-900">+91 1234567890</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
                <p className="text-gray-900">contact@society.com</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Office Hours</h3>
                <p className="text-gray-900">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-900">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-900">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Send a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}