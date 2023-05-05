import solheim from '../img/solheim.jpg';
import eskild from '../img/eskild.jpeg';
import andri from '../img/Andri.jpg';
import mehdi from '../img/Mehdi.jpg';
import dag from '../img/Dag.jpg';
import javier from '../img/javier.jpg';

const people = [
  {
    name: 'Javier A. Sossa',
    role: 'Test- & maskinvareansvarlig',
    imageUrl: javier,  
    linkedinUrl: 'https://www.linkedin.com/in/javier-alvarez-sossa-846a571b4/',
  },
  {
    name: 'Dag H. Halvorsen',
    role: 'Produksjon- & prototypeansvarlig',
    imageUrl: dag,
    linkedinUrl: 'https://www.linkedin.com/in/dag-henning-halvorsen-5b7903173/',
  },
  {
    name: 'Kristoffer Solheim',
    role: 'Systemingeniør & kommunikasjonsansvarlig',
    imageUrl: solheim,
    linkedinUrl: 'https://www.linkedin.com/in/kristoffer-solheim-794a10259/',
  },
  {
    name: 'Mehdi Chamran',
    role: 'Dokumentasjon- & risikoansvarlig',
    imageUrl: mehdi,
    linkedinUrl: '#',
  },
  {
    name: 'Andri V. Tryggvason',
    role: 'Prosjektleder & produkteier',
    imageUrl: andri,
    linkedinUrl: 'https://www.linkedin.com/in/andri-tryggvason-83420776/',
  },
  {
    name: 'Eskild D. Svennungsen',
    role: 'Programvare- og økonomiansvarlig',
    imageUrl: eskild,
    linkedinUrl: 'https://www.linkedin.com/in/eskildsvennungsen/',
  },
];

export default function Team() {
  return (
    <div className='isolate bg-white'>
      <div className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'>
        <svg
          className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
          viewBox='0 0 1155 400'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
            fillOpacity='.5'
            d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
          />
          <defs>
            <linearGradient
              id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
              x1='1155.49'
              x2='-78.208'
              y1='.177'
              y2='474.645'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#9089FC' />
              <stop offset={1} stopColor='#FF80B5' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='mx-auto max-w-7xl py-24 lg:py-24 px-6'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl'>Gruppe 5</h2>
            <p className='text-xl text-gray-700 max-w-3xl'>
              Vi er HOLDT, hull- og lekasje deteksjons teknologi. Gjennom vår-semesteret på USN Kongsberg skal vi ta for
              oss problemstillingen gitt av Tronrud Engineering.
            </p>
          </div>
          <ul className='space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'>
            {people.map((person) => (
              <li
                key={person.name}
                className='rounded-lg bg-gray-800/[.15] hover:bg-gray-700/[.20] py-10 px-6 text-center xl:px-10 xl:text-left'
              >
                <div className='space-y-6 xl:space-y-10'>
                  <img className='mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56' src={person.imageUrl} alt='' />
                  <div className='space-y-2 xl:flex xl:items-center xl:justify-between'>
                    <div className='space-y-1 text-lg font-medium leading-6'>
                      <h3 className='text-gray-900'>{person.name}</h3>
                      <p className='text-indigo-600'>{person.role}</p>
                    </div>

                    <ul className='flex justify-center space-x-5'>
                      <li>
                        <a href={person.linkedinUrl} className='text-gray-400 hover:text-gray-500'>
                          <span className='sr-only'>LinkedIn</span>
                          <svg className='h-5 w-5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
                            <path
                              fillRule='evenodd'
                              d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
