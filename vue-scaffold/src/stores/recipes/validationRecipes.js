const validationRecipes = {
  notEmpty(fieldName, value) {
    if (value) return;
    return { errorMessage: fieldName + ' must not be empty' };
  }
};

export default validationRecipes;
