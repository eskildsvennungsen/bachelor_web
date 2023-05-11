import React, { useRef } from 'react';
import { TwitchPlayer } from 'react-twitch-embed';

const Twitch = () => {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.
  
  const handleReady = (e) => {
    embed.current = e;
  };
  
  return (
    <TwitchPlayer channel="holdt_bachelor" autoplay muted withChat={false} darkMode={false} onVideoReady={handleReady} hideControls={true} width={"100%"} height={600} class="mx-auto my-4"/>
  );
};

export default Twitch;
