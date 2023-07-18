
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

const createMagic = () => {
  return (
    typeof window !== "undefined" &&
    new Magic( process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY,
      {
        extensions: [new OAuthExtension()],
      }
      
      )
  ); 
};

export const magic = createMagic();


