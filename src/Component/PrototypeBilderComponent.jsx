import proto1 from '../img/prototype/Andri (16) edit.jpg';
import proto2 from '../img/prototype/Andri (18) edit.jpg';
import proto3 from '../img/prototype/Andri (21) edit.jpg';
import proto4 from '../img/prototype/Andri (22) edit.jpg';
import proto5 from '../img/prototype/Andri (23) edit.jpg';
import proto6 from '../img/prototype/Andri (24) edit.jpg';

const posts = [
  {
    id: 1,
    imageUrl:
      proto6,
  },
  {
    id: 2,
    imageUrl:
      proto2,
  },
  {
    id: 3,
    imageUrl:
      proto3,
  },
  {
    id: 4,
    imageUrl:
      proto4,
  },
  {
    id: 5,
    imageUrl:
      proto5,
  },
  {
    id: 6,
    imageUrl:
      proto1,
  },
]

export default function PrototypeBilder() {
  return (
  <div className="py-0 sm:py-0">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-0 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
          >
            <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          </article>
        ))}
      </div>
    </div>
  </div>
  )
}
