import Navbar from "./Navbar";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <Navbar />

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summarize It,
         an open-source tool that turns
        long articles into clear, concise 
        and enjoyable summaries.
      </h2>
    </header>
  );
};

export default Hero;
