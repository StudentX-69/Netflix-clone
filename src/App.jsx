import Index from './components'
import Content from './components/Content'

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 h-screen">
        <img
          className="h-full w-full object-cover"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
          alt=""
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      <header className="relative z-20 flex items-center justify-between px-4 py-2 sm:px-6 md:px-32 lg:px-40">
        <img
          src="https://img.icons8.com/color/512/netflix.png"
          alt="Netflix"
          className="w-20 md:w-40"
        />

        <div className="flex gap-3">
          <select
            className="rounded border bg-black/40 px-2 py-1 font-semibold text-white"
            name="language"
            id="language"
          >
            <option value="English">ネA English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <button className="rounded bg-red-600 px-4 py-1 font-semibold text-white hover:bg-red-700">
            Sign In
          </button>
        </div>
      </header>

      <main className="relative z-20 flex min-h-[80vh] items-center justify-center px-4 text-center">
        <Index />
      </main>

      <Content />
      <footer className="relative z-20 w-full bg-black px-6 py-12 md:px-32 lg:px-40 border-t border-zinc-800 text-zinc-400">
        <p className="mb-6">Questions? Call <span>000-800-919-1694</span> </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm underline cursor-pointer">
          <p>FAQ</p>
          <p>Help Centre</p>
          <p>Account</p>
          <p>Media Centre</p>
          <p>Investor Relations</p>
          <p>Jobs</p>
          <p>Ways to Watch</p>
          <p>Terms of Use</p>
          <p>Privacy</p>
          <p>Cookie Preferences</p>
          <p>Corporate Information</p>
          <p>Contact Us</p>
          <p>Speed Test</p>
          <p>Legal Notices</p>
          <p>Only on Netflix</p>
        </div>
        <p className="mt-8 text-sm">Netflix India (Clone Edition)</p>
      </footer>
    </div>
  )
}

export default App
