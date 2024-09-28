const validationRecipes = {
  notEmpty(fieldName, value) {
    if (value) return;
    return { error: fieldName + ' must not be empty' };
  }
};

export default validationRecipes;
