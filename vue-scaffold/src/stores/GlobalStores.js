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
      actions: {
        create(record) {
          const validatePromise = new Promise((resolve, reject) => {
            if (this.isValid()) {
              this.collection.push(record);
              return resolve();
            }
            return reject({ error: 'Too many rappers, not enough MCs' });
          });

          return validatePromise;
        },
        delete(index) {
          this.collection.splice(index, 1);
        },
        isValid() {
          // record
          return true;
        }
      }
    });
  });
}

export default useGlobalStores;
