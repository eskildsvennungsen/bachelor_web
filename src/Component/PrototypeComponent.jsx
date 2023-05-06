import prototype_illustrasjon from '../img/prototype_ill.jpg';
import PrototypeBilder from './PrototypeBilderComponent'

export default function Prototype() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src={ prototype_illustrasjon }
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-12 sm:py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl animate-once animate-flip-up">
              Prototypen
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-900 animate-once animate-flip-down">
              I samarbeid med Tronrud Engineering har vi fått muligheten til å produsere vår egen prototype. Prototypen er ennå under utvikling men du vil få mulighet til å se den i aksjon ved USN Expoen i Kongsberg den 24. mai.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.usn.no/samarbeid-med-oss/rekruttering-av-studenter/usnexpo/program/usnexpo-kongsberg-2023"
                target="_blank" rel="noreferrer"
                className='rounded-md bg-red-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10'
              >
                USNExpo 2023
              </a>
            </div>
          </div>
          <PrototypeBilder />
        </div>
      </div>
    </div>
  )
}
