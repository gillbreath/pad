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
              // TODO: handle errors from update
              this.collection.push(record);
              return resolve();
            }
            return reject({
              errors: failedValidationMessages
            });
          });

          return validatePromise;
        },
        read(searchCriteria) {
          const findPromise = new Promise((resolve, reject) => {
            if (searchCriteria.all) resolve(this.collection);
            if (searchCriteria.index) resolve([this.collection[searchCriteria.index]]);

            // TODO: handle multiple records
            const foundRecord = this.collection.find((eachRecord) => {
              let searchSucceeded = true;
              Object.keys(searchCriteria).forEach((eachCriteria) => {
                if (eachRecord[eachCriteria] !== searchCriteria[eachCriteria])
                  searchSucceeded = false;
              });
              return searchSucceeded ? eachRecord : '';
            });

            if (!foundRecord) reject({ errors: [{ errorMessage: 'Not found.' }] });
            resolve(foundRecord);
          });

          return findPromise;
        },
        update(updateRecord) {
          const updatePromise = new Promise((resolve, reject) => {
            const updateIndex = this.collection.findIndex(
              (e) => e.primarykey === updateRecord.primarykey
            );

            if (updateIndex < 0) reject('primarykey not found');

            // TODO: handle errors from update
            this.collection[updateIndex] = { ...this.collection[updateIndex], ...updateRecord };
            resolve(this.collection[updateIndex]);
          });

          return updatePromise;
        },
        delete(index) {
          // TODO: change to primarykey
          this.collection.splice(index, 1);
        },
        isValid(record) {
          let failedValidationMessages = [];

          Object.keys(record).forEach((eachField) => {
            dataEntityValue.fields[eachField]?.validations?.forEach((eachValidation) => {
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
