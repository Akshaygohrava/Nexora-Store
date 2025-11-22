import Navbar from "@/components/Navbar";

export default function Account() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">My Account</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Account Menu */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="space-y-2 sm:space-y-4">
                  <button className="w-full text-left px-3 sm:px-4 py-2 text-sm sm:text-base bg-indigo-50 text-indigo-600 rounded-lg font-medium">
                    Profile
                  </button>
                  <button className="w-full text-left px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    Orders
                  </button>
                  <button className="w-full text-left px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    Addresses
                  </button>
                  <button className="w-full text-left px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    Payment Methods
                  </button>
                  <button className="w-full text-left px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    Settings
                  </button>
                </div>
              </div>
            </div>

            {/* Account Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Profile Information</h2>
                
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-indigo-600 text-white px-4 sm:px-6 py-2 text-sm sm:text-base rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 text-sm sm:text-base rounded-lg hover:bg-gray-300 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

