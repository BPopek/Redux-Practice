import configureStore from './configure-store';

// Export a singleton store for use outside of the React-Redux Provider.
const Store = configureStore();
export default Store;
