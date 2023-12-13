import React from "react";

const Resume = () => {
  return (
    <div className="tab_item bg-slate-50 dark:bg-[#111111] rounded-xl mb-14">
      <div className="pt-16 px-12 mt-8">
        <div>
          <h2 className="text-4xl text-slate-900 font-roboto-slab dark:text-slate-50 font-bold relative after:contents[] after:w-36 after:h-[2px] after:bg-primary after:absolute after:top-1/2 -translate-y-1/2 after:right-8 after:left-52">
            Resume
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-3xl dark:text-white font-medium pb-6">
              Formation
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-yellow-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                <span className="text-sm text-slate-400">Oct 2023</span>
                <h4 className="text-xl font-medium text-slate-800 dark:text-slate-100">
                  INGÉNIEUR - GÉNIE CHIMIQUE INDUSTRIEL
                </h4>
                <p className="text-base font-normal text-slate-700 dark:text-slate-200">
                  Ecole Nationale d'Ingénieur de Gafsa, Gafsa.
                </p>
              </div>
              <div className="bg-rose-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                <span className="text-sm text-slate-400">Août 2019</span>
                <h4 className="text-xl font-medium text-slate-800 dark:text-slate-100">
                  TECHNICIEN SUPÉRIEUR - GÉNIE DE PROCÉDÉS CHIMIQUES.
                </h4>
                <p className="text-base font-normal text-slate-700 dark:text-slate-200">
                  Institut supérieur des études technologiques , Zaghouan.
                </p>
              </div>
              <div className="bg-indigo-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                <span className="text-sm text-slate-400">Juin 2016</span>
                <h4 className="text-xl font-medium text-slate-800 dark:text-slate-100">
                  BACCALAURÉAT. - SCIENCES EXPÉRIMENTALES.
                </h4>
                <p className="text-base font-normal text-slate-700 dark:text-slate-200">
                  BACCALAURÉAT. - SCIENCES EXPÉRIMENTALES.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl dark:text-white font-medium pb-6">
              Experience
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-cyan-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                <span className="text-sm text-slate-400">
                  Mai 2023 - Août 2023
                </span>
                <h4 className="text-xl font-medium text-slate-800 dark:text-slate-100">
                  STAGE DE PROJET DE FIN D ÉTUDE : INGÉNIEUR EN GÉNIE CHIMIQUE
                  INDUSTRIEL
                </h4>
                <p className="text-base font-normal text-slate-700 dark:text-slate-200">
                  <h4>Projet 1:</h4> Développement d'adhésifs biosourcé à bases
                  de protéines pour le bois d'ingénierie. L'objectif de ce
                  projet est d'incorporer des protéines dans un systéme
                  d'adhésif polyuréthane et substituer l'isocyanate
                  pétrochimique utilisé dans le système adhésif par un
                  isocyanate biosourcé.
                  <h4>Projet 2:</h4>Stabilisation du bois dans un contexte
                  d'économie circulaire. L'objectif est de travailler sur la
                  densification de la paroi cellulaire par la polyestérification
                  de bois afin d'avoir une stabilité dimensionnelle du bois et
                  une résistance aux microorganismes et ainsi augmenter la durée
                  de service du matériau bois surtout pour des applications en
                  extérieur soumises à des fortes variations de climat.
                </p>
              </div>
              <div className="bg-pink-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                <span className="text-sm text-slate-400">Août 2022</span>
                <h4 className="text-xl font-medium text-slate-800 dark:text-slate-100">
                  STAGE D'INGÉNIEUR
                </h4>
                <p className="text-base font-normal text-slate-700 dark:text-slate-200">
                  La Société tunisienne des industries de raffinage STIR :
                  Service Unités de production., Bizerte-Tunisie Dimensionnement
                  d'un échangeur par l a méthode de KERN dans le but d'obtenir
                  une puissance d'échange donné avec la plus faible surface
                  d'échange et moins de perte de charge possible.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                <span className="text-sm text-slate-400">
                  Fév. 2019 - Mai 2019
                </span>
                <h4 className="text-xl font-medium text-slate-800 dark:text-slate-100">
                  STAGE DE TECHNICIEN EN PROCÉDÉS CHIMIQUE
                </h4>
                <p className="text-base font-normal text-slate-700 dark:text-slate-200">
                  Société Industrielle des Textiles SITEX, Ksra Helal-Tunisie
                  Mise en place d'une application mousse avec indigo Carmen.
                  <br></br>
                  Optimisation d'une nouvelle recette de teinture à partir d'un
                  colorant alimentaire E123 en suivant les paramètres
                  nécessaires.
                </p>
              </div>

              <div className="bg-cyan-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                <span className="text-sm text-slate-400">
                  Jan. 2018 - Jan. 2018
                </span>
                <h4 className="text-xl font-medium text-slate-800 dark:text-slate-100">
                  STAGE DE PERFECTIONNEMENT
                </h4>
                <p className="text-base font-normal text-slate-700 dark:text-slate-200">
                  Herbes de Tunisie, Siliana-Tunisie <br></br>
                  Intervention dans un laboratoire de contrôle <br></br>
                  Mener des analyses physico-chimiques d'échantillons
                </p>
              </div>
              <div className="bg-pink-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                <span className="text-sm text-slate-400">
                  Août 2017 - Août 2017
                </span>
                <h4 className="text-xl font-medium text-slate-800 dark:text-slate-100">
                  STAGE D'INITIATION (SUPPLÉMENTAIRE)
                </h4>
                <p className="text-base font-normal text-slate-700 dark:text-slate-200">
                  SITEX : Service traitements des eaux., Ksar helal-Tunisie
                  <br></br>
                  Suivi les analyses nécessaires pour contrôler l'eau au cours
                  et après son traitement<br></br>
                  Effectue des prélèvements pour s'assurer que les opérations de
                  traitement se déroulent correctement
                </p>
              </div>
              <div className="bg-green-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                <span className="text-sm text-slate-400">
                  Jan. 2017 - Jan. 2017
                </span>
                <h4 className="text-xl font-medium text-slate-800 dark:text-slate-100">
                  STAGE D'INITIATION (OBLIGATOIRE)
                </h4>
                <p className="text-base font-normal text-slate-700 dark:text-slate-200">
                  Herbes de Tunisie, Siliana-Tunisie<br></br>
                  <ul>
                    <li>
                      Occasion de pénétrer la vie professionnelle en tant qu'une
                      stagiaire sur une ligne de fabrication au sein d'une
                      équipe
                    </li>
                    <li>Apercevoir les différentes analyses au laboratoire</li>
                    <li>
                      Réception les prélèvements, contrôler leur conformité et
                      les enregistrer selon les protocoles en place
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 lg:pt-12">
          <div>
            <h3 className="text-3xl dark:text-white font-medium pb-8">
              Compétences professionnelles
            </h3>
            <div className="pb-8">
              <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
                <span>Pack office</span>
                <span>80%</span>
              </p>
              <div className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[80%] after:h-full after:bg-red-400 after:absolute after:top-0 after:left-0 after:rounded"></div>
            </div>
            <div className="pb-8">
              <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
                <span>
                  Fiche de données de sécurité (FDS): étiquette de lieu de
                  travail · étiquette de fournisseur.
                </span>
                <span>95%</span>
              </p>
              <div className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[95%] after:h-full after:bg-yellow-400 after:absolute after:top-0 after:left-0 after:rounded"></div>
            </div>
            <div className="pb-8">
              <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
                <span>
                  Compétences scientifiques, technique et analytiques :
                </span>
                <span>86%</span>
              </p>
              <div className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[66%] after:h-full after:bg-cyan-500 after:absolute after:top-0 after:left-0 after:rounded"></div>
            </div>
            <div className="pb-8">
              <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
                <span>Travail au laboratoire</span>
                <span>75%</span>
              </p>
              <div className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[75%] after:h-full after:bg-purple-400 after:absolute after:top-0 after:left-0 after:rounded"></div>
            </div>
            <div className="pb-8">
              <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
                <span>Gestion de données</span>
                <span>80%</span>
              </p>
              <div className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[80%] after:h-full after:bg-red-400 after:absolute after:top-0 after:left-0 after:rounded"></div>
            </div>
            <div className="pb-8">
              <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
                <span>Capacité de rédaction</span>
                <span>95%</span>
              </p>
              <div className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[95%] after:h-full after:bg-yellow-400 after:absolute after:top-0 after:left-0 after:rounded"></div>
            </div>
            <div className="pb-8">
              <p className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100">
                <span>Esprit d’analyse et de synthèse</span>
                <span>86%</span>
              </p>
              <div className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[66%] after:h-full after:bg-cyan-500 after:absolute after:top-0 after:left-0 after:rounded"></div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl dark:text-white font-medium pb-8">
              Informations Supplémentaires
            </h3>
            <div className="flex flex-wrap gap-4">
              <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                Autonome
              </button>
              <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                Curieuse
              </button>
              <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                Aime le travail en équipe
              </button>
              <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                Aime prendre le lead
              </button>
              <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                Gestion du temps
              </button>
              <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                Flexibilité
              </button>
              <button className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-black p-6 text-center mt-8 rounded-br-xl rounded-bl-xl">
        <p className="text-slate-800 dark:text-slate-50">
          &#169; <span id="year"></span> All Rights Reserved by aziz.
        </p>
      </div>
    </div>
  );
};

export default Resume;
