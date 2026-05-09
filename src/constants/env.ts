import { createEnv } from "@t3-oss/env-core";
import { createIsomorphicFn } from "@tanstack/react-start";
import { z } from "zod";

export const env = createIsomorphicFn()
  .server(() =>
    createEnv({
      /**
       * List of all environment variables along with the corresponding zod validation schema.
       */
      server: {
        DATABASE_URL: z.url({
          error: "Please provide a valid postgres database url."
        })
      },

      /**
       * What object holds the environment variables at runtime.
       *
       * In this case for vite, it is `import.meta.env`
       */
      runtimeEnv: import.meta.env,

      /**
       * By default this library will feed the environment variables directly to the Zod validator.
       *
       * This means that if you have an empty string for a value that is supposed to be a number, Zod will incorrectly flag it as a type mismatch violation.
       * Additionally, if you have an empty string for a value that is supposed to be a string with a default value, the default value will never be applied.
       */
      emptyStringAsUndefined: true
    })
  )
  .client(() =>
    createEnv({
      /**
       * The prefix tht client-side variables must have. This is enforced both at a type-level and at runtime.
       */
      clientPrefix: "VITE_",

      /**
       * List of all environment variables along with the corresponding zod validation schema.
       */
      client: {},

      /**
       * What object holds the environment variables at runtime.
       *
       * In this case for vite, it is `import.meta.env`
       */
      runtimeEnv: import.meta.env,

      /**
       * By default this library will feed the environment variables directly to the Zod validator.
       *
       * This means that if you have an empty string for a value that is supposed to be a number, Zod will incorrectly flag it as a type mismatch violation.
       * Additionally, if you have an empty string for a value that is supposed to be a string with a default value, the default value will never be applied.
       */
      emptyStringAsUndefined: true
    })
  );
