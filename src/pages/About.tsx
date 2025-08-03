import { motion } from 'framer-motion';
import { Scale, BookOpen, GavelIcon, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary-500/10 to-transparent dark:from-primary-900/20 pt-16 pb-24">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center mb-6 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Sobre o Caso
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 dark:text-white mb-6 tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Contexto Jurídico
            </motion.h1>
            
            <motion.p 
              className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Entenda o pano de fundo legal e as questões jurídicas envolvendo as religiões minoritárias de Novas Veredas.
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      {/* Content sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: O Caso */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mr-4">
                <GavelIcon className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-white">O Caso</h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert">
              <p>
                O caso jurídico fictício de Novas Veredas envolve um conflito entre duas religiões minoritárias: 
                a <strong>Fraternidade da Pureza Divina</strong> e o <strong>Círculo das Ervas Eternas</strong>. 
                A tensão entre esses grupos escalou para questões legais relacionadas à liberdade religiosa, 
                direito à prática de rituais e limites da interferência estatal em assuntos religiosos.
              </p>
              
              <p>
                Este caso foi desenvolvido para uma competição de Visual Law, com o objetivo de apresentar 
                questões jurídicas complexas de forma visualmente acessível e imersiva, facilitando a 
                compreensão do público sobre os princípios legais envolvidos.
              </p>
            </div>
          </motion.section>
          
          {/* Section 2: As Religiões */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mr-4">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-white">As Religiões</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Fraternidade */}
              <motion.div 
                className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700"
                whileHover={{ y: -5, boxShadow: "0 12px 20px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-700 dark:to-indigo-900 p-4">
                  <h3 className="text-xl font-bold text-white">Fraternidade da Pureza Divina</h3>
                </div>
                <div className="p-5">
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    Seguida por cerca de 35% da população, prega a abstenção de substâncias que alterem a consciência.
                  </p>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-2"></span>
                      <span>Liderada por Mestre Pablo Gaviria</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-2"></span>
                      <span>Possui uma ala radical chamada "Ordem dos Castos"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-2"></span>
                      <span>Ligada ao Instituto Esperança e Luz (clínica de recuperação)</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Círculo */}
              <motion.div 
                className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700"
                whileHover={{ y: -5, boxShadow: "0 12px 20px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-700 dark:to-emerald-900 p-4">
                  <h3 className="text-xl font-bold text-white">Círculo das Ervas Eternas</h3>
                </div>
                <div className="p-5">
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    Representa 4% da população, focada na purificação das aflições humanas com chás medicinais e rituais.
                  </p>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2"></span>
                      <span>Liderada por Dona Toninha, matriarca e curandeira</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2"></span>
                      <span>Administrada pelo Coletivo dos Sete</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2"></span>
                      <span>Realiza cerimônias de cura com chás medicinais</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.section>
          
          {/* Section 3: Questões Jurídicas */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mr-4">
                <Scale className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-white">Questões Jurídicas</h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert">
              <p>
                O caso explora diversas questões jurídicas fundamentais relacionadas à liberdade religiosa e seus limites:
              </p>
              
              <ul>
                <li>Até que ponto o Estado pode regular práticas religiosas?</li>
                <li>Como equilibrar a liberdade religiosa com a proteção da saúde pública?</li>
                <li>Quais os limites da coerção religiosa e proselitismo?</li>
                <li>Como proteger minorias religiosas de discriminação e perseguição?</li>
              </ul>
              
              <p>
                Estas questões são apresentadas através de uma narrativa imersiva que permite ao público 
                compreender os princípios jurídicos de forma mais acessível e engajadora.
              </p>
            </div>
          </motion.section>
          
          {/* Section 4: Visual Law */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mr-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-white">Visual Law</h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Visual Law é uma abordagem que utiliza elementos visuais e design para tornar informações 
                jurídicas mais acessíveis e compreensíveis. Este projeto demonstra como princípios de 
                design, interatividade e narrativa podem ser aplicados para comunicar conceitos jurídicos 
                complexos de forma eficaz.
              </p>
              
              <p>
                Através de uma interface imersiva, animações sutis e uma experiência de usuário cuidadosamente 
                projetada, este caso jurídico fictício exemplifica como a tecnologia e o design podem 
                democratizar o acesso ao conhecimento jurídico.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}