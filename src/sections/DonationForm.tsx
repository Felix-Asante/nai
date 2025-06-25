export function DonationForm() {
  return (
    <div className="w-full flex flex-col  items-center  px-4">
      <div className="bg-white p-8">
        <h2 className="text-2xl font-bold text-center text-primary mb-8">
          Make Your Donation
        </h2>

        <form id="donationForm">
          <div className="mb-6">
            <label
              htmlFor="donation"
              className="block text-gray-700 font-semibold mb-3"
            >
              Select Donation Amount
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              <button
                type="button"
                className="donation-amount py-3 px-2 border-2 border-gray-200 rounded-lg font-semibold hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                $25
              </button>
              <button
                type="button"
                className="donation-amount py-3 px-2 border-2 border-primary rounded-lg font-semibold bg-primary text-white"
              >
                $50
              </button>
              <button
                type="button"
                className="donation-amount py-3 px-2 border-2 border-gray-200 rounded-lg font-semibold hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                $100
              </button>
              <button
                type="button"
                className="donation-amount py-3 px-2 border-2 border-gray-200 rounded-lg font-semibold hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                $250
              </button>
            </div>
            <input
              type="text"
              id="customAmount"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Or enter custom amount"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-semibold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="cardNumber"
              className="block text-gray-700 font-semibold mb-2"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <label
                htmlFor="expiry"
                className="block text-gray-700 font-semibold mb-2"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
                required
              />
            </div>

            <div>
              <label
                htmlFor="cvv"
                className="block text-gray-700 font-semibold mb-2"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-secondary/80 hover:bg-secondary text-white font-bold rounded-lg transition-colors shadow-md"
          >
            Complete Donation
          </button>

          <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Secure donation. Your information is protected with 256-bit
            encryption.
          </div>
        </form>
      </div>
    </div>
  );
}
