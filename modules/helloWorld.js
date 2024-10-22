export const helloWorld = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  };
  
  // messages.js
  import { helloWorld } from './helloWorld.js';
  
  export const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
  };