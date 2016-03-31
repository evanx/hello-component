
export default async function(state, props, logger, metrics, service) {
   logger.info('hello', props);
   return {
      async start() {
         logger.info('system ready');
      },
      async end() {
         logger.info('goodbye');
      }
   };
}
