
export async function create(state, props, logger) {
   logger.info('hello', props);
   return {
      async start() {
         logger.info('state ready');
      },
      async end() {
         logger.info('goodbye');
      }
   };
}
