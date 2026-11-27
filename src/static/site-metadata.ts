interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://chefliang.github.io/workouts',
  logo: `${getBasePath()}/avatar.jpg`,
  description: 'Personal workout log',
  keywords: 'workouts, running, cycling, hiking',
  navLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/ChefLiang/workouts',
    },
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
  ],
};

export default data;
