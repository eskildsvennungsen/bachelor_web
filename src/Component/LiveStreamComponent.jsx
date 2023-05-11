import React from 'react';
import Twitch from '../Component/TwitchEmbedComponent';

export default function LiveStream() {
  return (
    <React.Fragment>
    <div className="mx-auto max-w-2xl pt-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
          Live fra USNExpo2023 og presentasjon
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-900">
          Her kommer direkteoverføring fra USNExpo2023 den 24. Juni og presentasjon den 7. Juni som starter 13:30.
        </p>
      </div>
    </div>
    <Twitch />
    </React.Fragment>
  )
}
