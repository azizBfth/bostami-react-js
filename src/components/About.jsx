import React from "react";
import Footer from "./Footer";
import Slider from "./Slider";

const About = () => {
  return (
    <div className="tab_item bg-slate-50 dark:bg-[#111111] rounded-xl mb-14">
      <div className="pt-16 px-12 mt-8">
        <div>
          <h2 className="text-4xl text-slate-900 font-roboto-slab dark:text-slate-50 font-bold relative after:contents[] after:w-36 after:h-[2px] after:bg-primary after:absolute after:top-1/2 -translate-y-1/2 after:right-8 after:left-80">
            Aprops de Moi
          </h2>
          <p className="text-gray-700 dark:text-slate-500 leading-7 font-medium">
            Une nouvelle diplômée en génie chimique industriel,ayant effectuée
            plusieurs stages professionnels. J'ai acquis une base de
            connaissance technique que je souhaite mette en pratique dans un
            univers professionnel et dynamique. Autonome, je fais preuve de
            proactivité et d'un grand sens de l'initiative.
          </p>
          <p className="text-gray-700 dark:text-slate-500 leading-7 font-medium mt-3">
            Je m'efforce d'accomplir mes missions avec détermination, dans le
            respect des consignes et recommandations de mes collègues et
            supérieurs en vue de l'amélioration continue de service
          </p>

          <h3 className="text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4">
          ce que je fais!
          </h3>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
            <div>
              <img
                className="w-28"
                src="/images/icons/icon-1.svg"
                alt="icon-1"
              />
            </div>
            <div>
              <h4 className="dark:text-white text-xl font-semibold">
              Concevoir et encadrer
              </h4>
              <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                description.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
            <div>
              <img
                className="w-28"
                src="/images/icons/icon-1.svg"
                alt="icon-2"
              />
            </div>
            <div>
              <h4 className="dark:text-white text-xl font-semibold">
              Fabriquer des produits
              </h4>
              <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
              description.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
            <div>
              <img
                className="w-28"
                src="/images/icons/icon-1.svg"
                alt="icon-3"
              />
            </div>
            <div>
              <h4 className="dark:text-white text-xl font-semibold">
              créer des molécules
              </h4>
              <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
              description.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
            <div>
              <img
                className="w-28"
                src="/images/icons/icon-1.svg"
                alt="icon-4"
              />
            </div>
            <div>
              <h4 className="dark:text-white text-xl font-semibold">
              Analyser
              </h4>
              <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
              description.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
            <div>
              <img
                className="w-28"
                src="/images/icons/icon-1.svg"
                alt="icon-5"
              />
            </div>
            <div>
              <h4 className="dark:text-white text-xl font-semibold">
              interpréter
              </h4>
              <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
              description.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
            <div>
              <img
                className="w-28"
                src="/images/icons/icon-1.svg"
                alt="icon-6"
              />
            </div>
            <div>
              <h4 className="dark:text-white text-xl font-semibold">
                diffuser
              </h4>
              <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
              description.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4">
            Centre d'Interet
          </h3>
          <Slider></Slider>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
