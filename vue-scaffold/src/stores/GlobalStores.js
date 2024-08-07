import { defineStore } from 'pinia';
import mainPad from '../../../main.pad.js';

const useGlobalStores = {};
if (mainPad.dataEntities) {
  Object.entries(mainPad.dataEntities).forEach((dataEntity) => {
    const [dataEntityKey, dataEntityValue] = dataEntity;
    useGlobalStores[dataEntityKey] = defineStore(dataEntityKey, {
      state: () => ({ collection: dataEntityValue.preLoad }),
      getters: {
        doubleCount: (state) => state.count * 2
      },
      actions: {
        remove(index) {
          this.collection.splice(index, 1);
        }
      }
    });
  });
}

export default useGlobalStores;
