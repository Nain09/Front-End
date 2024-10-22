// messages.js
import { helloWorld } from './helloWorld.js';

export const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
  };