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
    email: 'javieralvarez9803@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/javier-alvarez-sossa-846a571b4/',
  },
  {
    name: 'Dag H. Halvorsen',
    role: 'Produksjon- & prototypeansvarlig',
    imageUrl: dag,
    email: 'daghhalvorsen@outlook.com',
    linkedinUrl: 'https://www.linkedin.com/in/dag-henning-halvorsen-5b7903173/',
  },
  {
    name: 'Kristoffer Solheim',
    role: 'Systemingeniør & kommunikasjonsansvarlig',
    imageUrl: solheim,
    email: 'kristoffer@solheim.in',
    linkedinUrl: 'https://www.linkedin.com/in/kristoffer-solheim-794a10259/',
    githubUrl: 'https://github.com/krso1002',
  },
  {
    name: 'Mehdi Chamran',
    role: 'Dokumentasjon- & risikoansvarlig',
    imageUrl: mehdi,
    email: 'mehdi1996@live.no',
  },
  {
    name: 'Andri V. Tryggvason',
    role: 'Prosjektleder & produkteier',
    imageUrl: andri,
    email: 'andri@arivarton.com',
    linkedinUrl: 'https://www.linkedin.com/in/andri-tryggvason-83420776/',
    githubUrl: 'https://github.com/arivarton',
  },
  {
    name: 'Eskild D. Svennungsen',
    role: 'Programvare- & økonomiansvarlig',
    imageUrl: eskild,
    email: 'eskildsvennungsen@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/eskildsvennungsen/',
    githubUrl: 'https://github.com/eskildsvennungsen',
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
          <div>
            <h2 className='text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl text-center'>Gruppe 5</h2>
            <p className='mt-6 text-lg leading-8 text-gray-900 text-center'>
              Vi er HOLDT, hull- og lekkasje deteksjons teknologi. Gjennom vår-semesteret på USN Kongsberg skal vi ta for
              oss problemstillingen gitt av Tronrud Engineering.
            </p>
          </div>
          <ul className='space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8 animate-fade-up animate-once'>
            {people.map((person) => (
              <li
                key={person.name}
                className='rounded-lg bg-blue-600/[.06] hover:bg-blue-300/[.15] py-10 px-6 text-center xl:px-10'
              >
                <div className='space-y-6 xl:space-y-10'>
                  <img className='mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56 border-solid border-4 border-gray-400/[.10]' src={person.imageUrl} alt='' />
                  <div className='space-y-2'>
                    <div className='space-y-1 text-lg font-medium leading-6'>
                      <p className='text-sm text-red-900 font-bold'>{person.role}</p>
                      <h3 className='text-gray-900 mb-0 pb-0 font-bold'>{person.name}</h3>

                      {person.email && (
                        <p className='text-xs text-gray-600'>{ person.email }</p>
                      )}

                    <ul className='flex justify-center md:justify-normal space-x-5 pt-3'>
                      {person.linkedinUrl && (
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
                      )}
                      {person.githubUrl && (
                      <li>
                        <a href={person.githubUrl} className='text-gray-400 hover:text-gray-500'>
                          <span className='sr-only'>Github</span>
                          <svg className='h-5 w-5' aria-hidden='true' fill='currentColor' viewBox='0 0 32 32'>
                            <path
                              fillRule='evenodd'
                              d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
                              clipRule='evenodd'
                            />
                          </svg>
                        </a>
                      </li>
                      )}
                    </ul>
                    </div>

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
