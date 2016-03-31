
export async function(state, props, logger, service) {
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
