import { useState } from 'react';
import { motion } from 'framer-motion';
import ReligionCard, { ReligionData } from './ReligionCard';
import ReligionModal from './ReligionModal';

// Data for the two religions
const religionsData: ReligionData[] = [
  {
    id: 'fraternidade',
    name: 'Fraternidade da Pureza Divina',
    followers: 'Seguida por cerca de 35% da população',
    dogma: 'Abstenção de substâncias que alterem a consciência',
    color: 'bg-indigo-700',
  },
  {
    id: 'circulo',
    name: 'Círculo das Ervas Eternas',
    followers: 'Seguidores: 4% da população',
    dogma: 'Purificação das aflições humanas com chás medicinais e rituais',
    color: 'bg-emerald-700',
  }
];

// Additional information for each religion
const religionsAdditionalInfo = {
  fraternidade: {
    history: 'A Fraternidade da Pureza Divina surgiu há cerca de 50 anos em Novas Veredas, fundada por um grupo de médicos e líderes comunitários preocupados com o aumento do consumo de substâncias psicoativas na região. Inicialmente um movimento de saúde pública, gradualmente adquiriu características religiosas, com rituais de purificação e uma hierarquia bem definida.',
    figures: [
      {
        name: 'Juan Vidigal',
        role: 'Influenciador e dono da VidiBet',
        description: 'Figura pública associada à Fraternidade, utiliza sua plataforma para promover os valores do grupo e financiar suas atividades.'
      },
      {
        name: 'Mestre Pablo Gaviria',
        role: 'Líder espiritual',
        description: 'Principal líder da Fraternidade, também é proprietário do Instituto Esperança e Luz, uma clínica de recuperação para dependentes químicos.'
      }
    ],
    practices: [
      'Rituais semanais de purificação',
      'Abstinência total de álcool, drogas e medicamentos psicotrópicos',
      'Meditação diária para "limpar a mente"',
      'Doações regulares para o Instituto Esperança e Luz'
    ],
    hasAudio: true
  },
  circulo: {
    history: 'O Círculo das Ervas Eternas tem raízes ancestrais, combinando conhecimentos indígenas sobre plantas medicinais com práticas espirituais diversas. Formalmente estabelecido há cerca de 15 anos, o grupo ganhou notoriedade por seus rituais de cura e pelo uso de chás medicinais considerados sagrados.',
    figures: [
      {
        name: 'Dona Toninha',
        role: 'Matriarca e curandeira',
        description: 'Idosa respeitada por seu vasto conhecimento sobre ervas medicinais e rituais de cura. Lidera as cerimônias principais do Círculo.'
      },
      {
        name: 'Coletivo dos Sete',
        role: 'Conselho administrativo',
        description: 'Grupo de sete membros que administra as atividades do Círculo, organiza eventos e gerencia os recursos da comunidade.'
      }
    ],
    practices: [
      'Cerimônias de cura com chás medicinais',
      'Cultivo comunitário de plantas sagradas',
      'Rituais de conexão com a natureza em datas específicas',
      'Compartilhamento de conhecimentos sobre ervas e seus usos'
    ]
  }
};

export default function CenarioSocial() {
  const [selectedReligion, setSelectedReligion] = useState<ReligionData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (religion: ReligionData) => {
    setSelectedReligion(religion);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cenário Social
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Conheça as duas religiões minoritárias de Novas Veredas e suas características
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {religionsData.map((religion) => (
            <motion.div key={religion.id} variants={itemVariants}>
              <ReligionCard 
                religion={religion} 
                onClick={() => handleOpenModal(religion)} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ReligionModal 
        religion={selectedReligion}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        additionalInfo={religionsAdditionalInfo}
      />
    </div>
  );
}