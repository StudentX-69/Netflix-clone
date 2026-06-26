import { ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="max-w-4xl text-white">
      <h1 className="text-4xl font-bold md:text-6xl">Unlimited movies,</h1>

      <h1 className="text-4xl font-bold md:text-6xl">TV shows and more</h1>

      <p className="mt-6 text-lg font-medium md:text-2xl">
        Starts at Rs 149. Cancel anytime.
      </p>

      <p className="mt-6 text-base md:text-lg">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded border border-gray-500 bg-black/50 px-4 py-4 text-white outline-none md:w-[400px]"
        />

        <button className="flex items-center justify-center rounded bg-red-600 px-8 py-3 text-2xl font-semibold hover:bg-red-700">
          Get Started
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default Index;
