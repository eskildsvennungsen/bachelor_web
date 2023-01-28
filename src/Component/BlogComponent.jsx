import solheim from '../img/solheim.jpg';
import javBowling from '../img/javBowling.jpeg';

const posts = [
  {
    title: 'Teambuilding - Bowling!',
    href: '#',
    category: { name: 'Blogginnlegg', href: '#' },
    description:
      'På fredag hadde vi vår første teambuilding. Denne ble arrangert av Mehdi og valget falt på bowling. Til tross for at dette er en lavterskelaktivitet, varta gutta opp med idrettsprestasjoner av rang, et godt eksempel på dette er Javier sin Turkey. Med god mat og drikke var forholdene ideelle for en bra kveld, noe det også ble. 10/10 would do again!',
    date: '23. jan, 2023',
    datetime: '2023-01-23',
    imageUrl:
      javBowling,
    author: {
      name: 'Kristoffer Solheim',
      href: '#',
      imageUrl:
        solheim,
    },
  },
];

export default function Blog() {
  return (
    <div className='relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28'>
      <div className='relative mx-auto max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Blogg</h2>
          <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4'>
            Her kommer det innlegg om hva vi som gruppe gjør og oppnår under bachelor-prosjektet.
          </p>
        </div>
        <div className='mx-auto mt-12 grid gap-5 max-w-md md:max-w-3xl lg:max-w-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => (
            <div key={post.title} className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
              <div className='flex-shrink-0'>
                <img className='h-48 w-full object-cover' src={post.imageUrl} alt='' />
              </div>
              <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-indigo-600'>
                    <a href={post.category.href} className='hover:underline'>
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className='mt-2 block'>
                    <p className='text-xl font-semibold text-gray-900'>{post.title}</p>
                    <p className='mt-3 text-base text-gray-500'>{post.description}</p>
                  </a>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <a href={post.author.href}>
                      <span className='sr-only'>{post.author.name}</span>
                      <img className='h-10 w-10 rounded-full' src={post.author.imageUrl} alt='' />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <a href={post.author.href} className='hover:underline'>
                        {post.author.name}
                      </a>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={post.datetime}>{post.date}</time>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
