import Header from './header.jsx';

function App() {

  return (
    <>
      
      <body class="flex items-center justify-center min-h-screen bg-white">
        <Header />
        <div class="w-96 p-8 border-2 border-red-500 rounded-lg shadow-lg" id="login-form">
            <h2 class="text-3xl font-semibold text-red-600 text-center mb-6">Sign in</h2>
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-1">Email</label>
                    <input type="email" class="w-full px-4 py-2 border border-red-500 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="someone@example.com"/>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 mb-1">Password</label>
                    <input type="password" class="w-full px-4 py-2 border border-red-500 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="password"/>
                </div>
                <button class="w-full py-2 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition">Sign In</button>
                <div class="text-center mt-4">
                    <a href="#" class="text-gray-700 hover:underline">Forgot password?</a>
                </div>
            </form>
        </div>
      </body>
  </>
  )
}

export default App
