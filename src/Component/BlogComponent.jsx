import solheim from '../img/solheim.jpg';
import javBowling from '../img/javBowling.jpeg';
import logo from '../img/logoForBlogg.jpg';
import CuratorWidget from '../CuratorWidget';

const posts = [
  {
    title: 'Teambuilding - Bowling!',
    href: '#',
    category: { name: 'Blogginnlegg', href: '#' },
    description:
      'På fredag hadde vi vår første teambuilding. Denne ble arrangert av Mehdi og valget falt på bowling. Til tross for at dette er en lavterskelaktivitet, varta gutta opp med idrettsprestasjoner av rang, et godt eksempel på dette er Javier sin Turkey. Med god mat og drikke var forholdene ideelle for en bra kveld, noe det også ble. 10/10 would do again!',
    date: '23. jan, 2023',
    datetime: '2023-01-23',
    imageUrl: javBowling,
    author: {
      name: 'Kristoffer Solheim',
      href: '#',
      imageUrl:
        solheim,
    },
  },
  {
    title: 'Første bachelorpresentasjon',
    href: '#',
    category: { name: 'Første bachelorpresentasjon', href: '#' },
    description:
      'Første bachelorpresentasjon vel gjennoomført. Fantastisk godt oppmøte. Nesten full sal med gjester fra flere av instituttene her på huset. Med tilbakemeldinger fra sensorer og veiledere er vi godt rusta for hva vi skal gjøre fremover. GO TEAM!',
    date: '1. feb 2022',
    datetime: '2022-02-01',
    imageUrl:
      logo,
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
        <div>
          <CuratorWidget feedId="55961b8d-fccc-4ddf-af92-25b14f933dce"/>
        </div>
      </div>
    </div>
  );
}
