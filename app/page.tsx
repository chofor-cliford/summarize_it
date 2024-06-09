"use client";

import Demo from "@/components/shared/Demo";
import Hero from "@/components/shared/Hero";
import { store } from "@/lib/store";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <Provider store={store}>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>

        <div className="app">
          <Hero />
          <Demo />
        </div>
      </main>
    </Provider>
  );
};

export default Home;
