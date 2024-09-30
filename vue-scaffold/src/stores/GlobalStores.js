import { defineStore } from 'pinia';
import mainPad from '../../../main.pad.js';
import validationRecipes from '@/stores/recipes/validationRecipes.js';

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
            const failedValidationMessages = this.isValid(record);
            if (failedValidationMessages.length === 0) {
              this.collection.push(record);
              return resolve();
            }
            return reject({
              errors: failedValidationMessages
            });
          });

          return validatePromise;
        },
        delete(index) {
          this.collection.splice(index, 1);
        },
        isValid(record) {
          let failedValidationMessages = [];

          Object.keys(record).forEach((eachField) => {
            dataEntityValue.fields[eachField].validations.forEach((eachValidation) => {
              const eachFailedValidationMessage = validationRecipes[eachValidation](
                eachField,
                record[eachField]
              );

              if (eachFailedValidationMessage) {
                failedValidationMessages.push(
                  validationRecipes[eachValidation](eachField, record[eachField])
                );
              }
            });
          });

          return failedValidationMessages;
        }
      }
    });
  });
}

export default useGlobalStores;
