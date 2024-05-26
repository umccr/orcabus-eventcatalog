module.exports = {
  title: 'OrcaBusEventCatalog',
  tagline: 'Discover, Explore our OrcaBus events',
  organizationName: 'UMCCR',
  projectName: 'OrcaBus Event Catalog',
  editUrl: '',
  trailingSlash: true,
  basePath: '/orcabus-eventcatalog',
  primaryCTA: {
    label: 'Explore Events',
    href: '/events'
  },
  secondaryCTA: {
    label: 'Getting Started',
    href:"https://www.eventcatalog.dev/"
  },
  logo: {
    alt: 'EventCatalog Logo',
    // found in the public dir
    src: 'logo.svg',
  },
  headerLinks: [
    { label: 'Events', href: '/events'},
    { label: 'Services', href: '/services' },
    { label: 'Domains', href: '/domains'},
    { label: 'Users', href: '/users'},
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
  ],
  footerLinks: [
    { label: 'Events', href: '/events' },
    { label: 'Services', href: '/services' },
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' }
  ],
  users: [
    {
      id: 'AWS',
      name: 'Amazon Web Services',
      role: 'Service Provider',
    },
    {
      id: 'Illumina',
      name: 'Illumina Inc',
      role: 'Service Provider',
    },
    {
      id: 'Florian',
      name: 'Florian Reisinger',
      role: 'Developer',
    },
    {
      id: 'Victor',
      name: 'Victor Lin',
      role: 'Developer',
    },
    {
      id: 'Alexis',
      name: 'Alexis Lucattini',
      role: 'Developer',
    },
    {
      id: 'Roman',
      name: 'Roman Valls',
      role: 'Developer',
    },
    {
      id: 'Marko',
      name: 'Marko Malenic',
      role: 'Developer',
    },
    {
      id: 'Ray',
      name: 'Ray Liu',
      role: 'Developer',
    },
  ],
  generators: [
    [
      '@eventcatalog/plugin-doc-generator-amazon-eventbridge',
      {
        eventBusName: 'OrcaBusMain',
        region: 'ap-southeast-2',
        registryName: 'orcabus.events',  // cannot export non discoverd or non aws managed schemas!
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          sessionToken: process.env.AWS_SESSION_TOKEN
        },
      },
    ],
  ],
}
