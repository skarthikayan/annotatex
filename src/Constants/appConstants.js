export const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const pageTransition = {
  type: 'tween',
  duration: 0.5,
};

export const categories = [
  {
    name: 'Data Sourcing',
    icon: 'datasourcing',
    content: 'Collect text, image, audio, and video data',
    id: 1,
  },
  {
    name: 'Data Annotation',
    icon: 'dataannotation',
    content: 'NER annotation, Sentiment, and Intent Analysis',
    id: 2,
  },
  {
    name: 'Data De-Identification',
    icon: 'datadeidentification',
    content: 'APIs with human-in-loop & Expert Certification',
    id: 3,
  },
  {
    name: 'Data Licensing',
    icon: 'datalicensing',
    content: '5M+ Transcribed Patient Records in 31 specialties',
    id: 4,
  },
];
