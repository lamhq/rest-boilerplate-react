import { useContext } from 'react';
import ApiContext from '../api/context';

/**
 * Hook that provide helper functions to communicate with server
 */
function useApi() {
  const context = useContext(ApiContext);
  return context;
}

export default useApi;
