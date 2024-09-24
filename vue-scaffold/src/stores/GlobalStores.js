import { defineStore } from 'pinia';
import mainPad from '../../../main.pad.js';

const useGlobalStores = {};

if (mainPad.dataEntities) {
  Object.entries(mainPad.dataEntities).forEach((dataEntity) => {
    const [dataEntityKey, dataEntityValue] = dataEntity;

    dataEntityValue?.preLoad?.forEach((eachPreLoad) => {
      Object.keys(dataEntityValue.fields).forEach((field) => {
        if (Object.keys(eachPreLoad).indexOf(field) < 0) {
          eachPreLoad[field] = dataEntityValue.fields[field].defaultValue;
        }
      });
    });

    useGlobalStores[dataEntityKey] = defineStore(dataEntityKey, {
      state: () => ({ collection: dataEntityValue.preLoad || [] }),
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
