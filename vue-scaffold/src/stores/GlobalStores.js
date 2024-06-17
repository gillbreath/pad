import { defineStore } from 'pinia';
import mainPad from '../../../main.pad.js'

const useGlobalStores = {};
Object.entries(mainPad.dataEntities).forEach(dataEntity => {
  const [dataEntityKey, dataEntityValue] = dataEntity;
  useGlobalStores[dataEntityKey] = defineStore(dataEntityKey, {
    state: () => ({ dataEntityCollection: [
      'one', 'two', { innerHtml: (entity) => entity.value, value: 'thr33', children: [{ elementType: 'h2', innerHtml: 'keedl' }] }
    ] }),
      getters: {
        doubleCount: (state) => state.count * 2,
      },
      actions: {
        increment() {
          this.count++
        },
      },
    });
});

export default useGlobalStores;
