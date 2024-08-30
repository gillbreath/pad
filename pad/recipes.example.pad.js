const dataEntities = {
  ingredients: {
    fields: {
      slug: {
        unique: true,
        urlFormatted: true,
        inputHint: 'must be unique, should be url-formatted (lowercase, dashes)'
      },
      name: {
        inputHint: 'must be between 2-255 characters',
        type: 'shortString',
        range: [2, 255]
      },
      measurement: {
        defaultValue: 'whole',
        type: 'shortString',
        range: [0, 100]
      },
    },
    preLoad: [
      {
        slug: 'onions',
        name: 'Onions'
      },
      {
        slug: 'garlic',
        name: 'Garlic',
        measurement: 'clove'
      },
      {
        slug: 'carrots',
        name: 'Carrots'
      },
      {
        slug: 'tofu',
        name: 'Tofu',
        measurement: 'block'
      },
      {
        slug: 'beans-red',
        name: 'Red Beans',
        measurement: 'can'
      },
      {
        slug: 'beans-white-dry',
        name: 'White Beans, dry',
        measurement: 'cup'
      },
      {
        slug: 'rice-brown',
        name: 'Brown rice, short grain',
        measurement: 'cup'
      },
      {
        slug: 'rice-white-jasmine',
        name: 'White rice, jasmine',
        measurement: 'cup'
      },
    ]
  },
  inventory: {
    fields: {
      fkIngredients: {
        foreignKey: 'ingredients.slug'
      },
      quantity: {
        type: 'number',
        range: [0, 100]
      },
    },
    preLoad: [
      {
        fkIngredients: 'onions',
        quantity: 2
      },
      {
        fkIngredients: 'garlic',
        quantity: 8
      },
      {
        fkIngredients: 'carrots',
        quantity: 4
      },
      {
        fkIngredients: 'beans-red',
        quantity: 1
      },
      {
        fkIngredients: 'tofu',
        quantity: 1
      },
      {
        fkIngredients: 'white-beans-dry',
        quantity: 4
      },
      {
        fkIngredients: 'brown-rice',
        quantity: 10
      },
    ]
  },
  recipes: {
    fields: {
      slug: {
        unique: true,
        urlFormatted: true
      },
      name: {
        type: 'shortString',
        range: [0, 255]
      },
      instructions: {
        type: 'longText',
        range: [0, 255]
      },
    },
    preLoad: [
      {
        slug: 'minestrone',
        name: 'Minestrone Soup',
        instructions: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        slug: 'tofu-stir-fry',
        name: 'Tofu Stir Fry',
        instructions: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        slug: 'red-beans-and-rice',
        name: 'New Orleans-style Red Beans and Rice',
        instructions: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]
  },
  recipeContents: {
    fields: {
      fkRecipes: {
        foreignKey: 'recipes.slug'
      },
      fkIngredients: {
        foreignKey: 'ingredients.slug'
      },
      quantity: {
        type: 'number',
        range: [0, 100]
      },
    },
    preLoad: [
      {
        fkRecipes: 'minestrone',
        fkIngredients: 'onions',
        quantity: 1
      },
      {
        fkRecipes: 'tofu-stir-fry',
        fkIngredients: 'onions',
        quantity: 1
      },
      {
        fkRecipes: 'red-beans-and-rice',
        fkIngredients: 'onions',
        quantity: 1
      },
      {
        fkRecipes: 'minestrone',
        fkIngredients: 'garlic',
        quantity: 2
      },
      {
        fkRecipes: 'tofu-stir-fry',
        fkIngredients: 'garlic',
        quantity: 4
      },
      {
        fkRecipes: 'red-beans-and-rice',
        fkIngredients: 'garlic',
        quantity: 4
      },
      {
        fkRecipes: 'minestrone',
        fkIngredients: 'carrots',
        quantity: 2
      },
      {
        fkRecipes: 'tofu-stir-fry',
        fkIngredients: 'carrots',
        quantity: 4
      },
      {
        fkRecipes: 'red-beans-and-rice',
        fkIngredients: 'beans-red',
        quantity: 2
      },
      {
        fkRecipes: 'tofu-stir-fry',
        fkIngredients: 'tofu',
        quantity: 1
      },
      {
        fkRecipes: 'minestrone',
        fkIngredients: 'white-beans-dry',
        quantity: 2
      },
      {
        fkRecipes: 'tofu-stir-fry',
        fkIngredients: 'brown-rice',
        quantity: 1
      },
    ]
  },
};

const pageRoutes = {
  home: {
    path: '/',
    title: 'Home',
    children: [
      {
        elementType: 'p',
        innerHtml: 'Welcome to PAD Pantry, an example site.'
      }
    ]
  }
};
const padOptions = {
  header: {
    elementType: 'preFabHeader',
    options: {
      siteName: 'PAD Pantry',
      navLinks: [
        {
          routerLink: '/admin/data-entities/inventory/',
          text: 'Pantry'
        },
        {
          routerLink: '/admin/data-entities/recipes/',
          text: 'Recipies'
        },
      ]
    }
  }
};

const siteSchema = {
  dataEntities,
  padOptions,
  pageRoutes
};
export default siteSchema;
