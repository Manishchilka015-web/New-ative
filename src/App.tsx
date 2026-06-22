/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { FormSection } from "./components/FormSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Stats />
        <FormSection />
        <WhyChooseUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
