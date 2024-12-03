import composedDataEntities from '../compositions/dataEntities.js';
import composedPageRoutes from '../compositions/pageRoutes.js';

const dataEntities = {
  mockLogins: composedDataEntities.mockLogins,
  profiles: composedDataEntities.profiles,
	animalBreeds: {
    fields: {
      animalFK:{
        dataType: 'foreignKey',
      },
      breedFK:{
        dataType: 'foreignKey',
      },
    },
	},
	animalColors: {
    fields: {
      animalFK:{
        dataType: 'foreignKey',
      },
      colorFK:{
        dataType: 'foreignKey',
      },
      primary_color:{
        dataType: 'boolean',
        defaultValue: false,
        required: true,
      },
    },
	},
	animalStatuses: {
    singularName: 'animal status',
    fields: {
      animalFK:{
        dataType: 'foreignKey',
      },
      statusFK:{
        dataType: 'foreignKey',
      },
      start_date:{
        dataType: 'timestamp-3',
      },
      end_date:{
        dataType: 'timestamp-3',
      },
    },
	},
	animals: {
    fields: {
      animal_name:{
        dataType: 'varchar-64',
        required: true,
      },
      age:{
        dataType: 'decimal',
      },
      weight:{
        dataType: 'decimal',
      },
      gender:{
        dataType: 'char-1',
      },
      spay_neuter:{
        dataType: 'boolean',
        defaultValue: false,
        required: true,
      },
      species:{
        dataType: 'varchar-64',
      },
      intake_typeFK:{
        dataType: 'foreignKey',
      },
      intake_subtypeFK:{
        dataType: 'foreignKey',
      },
      intake_date:{
        dataType: 'timestamp-3',
      },
      outcome_typeFK:{
        dataType: 'foreignKey',
      },
      outcome_subtypeFK:{
        dataType: 'foreignKey',
      },
      outcome_date:{
        dataType: 'timestamp-3',
      },
      locationFK:{
        dataType: 'foreignKey',
      },
    },
	},
	breeds: {
    fields: {
      breed_name:{
         dataType: 'varchar-64',
        required: true,
      },
    },
	},
	colors: {
    fields: {
      color_name:{
         dataType: 'varchar-64',
        required: true,
      },
    },
	},
	flags: {
    fields: {
      animalFK:{
        dataType: 'foreignKey',
      },
      flag_title:{
        dataType: 'varchar-128',
      },
      flag_text: {
        dataType: 'text'
      },
      is_critical:{
        dataType: 'boolean',
        defaultValue: false,
        required: true,
      },
    },
	},
	imagery: {
    singularName: 'image',
    fields: {
      animalFK:{
        dataType: 'foreignKey',
      },
      image_path:{
        dataType: 'varchar-256',
      },
      display_order:{
        dataType: 'integer'
      },
    },
  },
	intakeTypes: {
    fields: {
      type_name:{
        dataType: 'varchar-64',
        required: true,
      },
    },
	},
	intakeSubtypes: {
    fields: {
      subtype_name:{
        dataType: 'varchar-64',
        required: true,
      },
    },
	},
	locations: {
    fields: {
      location_name:{
        dataType: 'varchar-64',
        required: true,
      },
      description:{
        dataType: 'text'
      },
      shelterFK:{
        dataType: 'foreignKey',
      },
    },
	},
	medicalNotes: {
    fields: {
      animalFK:{
        dataType: 'foreignKey',
      },
      note_title:{
        dataType: 'varchar-128',
      },
      note_text: {
        dataType: 'text'
      },
      date_completed:{
        dataType: 'timestamp-3',
      },
    },
	},
  mockLogins: {
    singularName: 'Mock login',
    fields: {
      username: {
        dataType: 'email',
        inputHint: 'username',
        validations: [
          'notEmpty'
        ]
      },
      password: {
        dataType: 'password',
        inputHint: 'password',
        validations: [
          'notEmpty'
        ]
      },
      confirmPassword: {
        dataType: 'password',
        inputHint: 'confirm password',
        validations: [
          'notEmpty'
        ]
      }
    }
  },
	outcomeTypes: {
    fields: {
      type_name:{
        dataType: 'varchar-64',
        required: true,
      },
    },
	},
	outcomeSubtypes: {
    fields: {
      subtype_name:{
        dataType: 'varchar-64',
        required: true,
      },
    },
	},
	statuses: {
    singularName: 'status',
    fields: {
      status_name:{
        dataType: 'varchar-64',
        required: true,
      },
    },
	},
	shelters: {
    fields: {
      shelter_name:{
        dataType: 'varchar-128',
        required: true,
      },
      street_address:{
        dataType: 'varchar-64',
      },
      street_address_2:{
        dataType: 'varchar-64',
      },
      city:{
        dataType: 'varchar-64',
      },
      state:{
        dataType: 'varchar-2',
      },
      zip_code:{
        dataType: 'varchar-10',
      },
      mailing_address:{
        dataType: 'varchar-64',
      },
      mailing_address_2:{
        dataType: 'varchar-64',
      },
      mailing_city:{
        dataType: 'varchar-64',
      },
      mailing_state:{
        dataType: 'varchar-2',
      },
      mailing_zip_code:{
        dataType: 'varchar-10',
      },
      phone:{
        dataType: 'varchar-16',
      },
      latitude:{
        dataType: 'float'
      },
      longitude:{
        dataType: 'float'
      },
      capacity:{
        dataType: 'integer'
      },
    },
	},
	taskCategories: {
    singularName: 'task category',
    fields: {
      category_name:{
        dataType: 'varchar-64',
        required: true,
      },
      description:{
        dataType: 'text'
      },
    },
	},
	tasks: {
    fields: {
      task_name:{
        dataType: 'varchar-64',
        required: true,
      },
      description:{
        dataType: 'text'
      },
      task_date:{
        dataType: 'date',
      },
      task_time:{
        dataType: 'varchar-32',
      },
      is_done:{
        dataType: 'boolean',
        defaultValue: false,
        required: true,
      },
      admin_protected:{
        dataType: 'boolean',
        defaultValue: false,
        required: true,
      },
      notes:{
        dataType: 'text'
      },
      task_categoryFK:{
        dataType: 'foreignKey',
      },
      animalFK:{
        dataType: 'foreignKey',
      },
      personFK:{
        dataType: 'foreignKey',
      },
    },
	},
};

composedPageRoutes.mockLogins.loginForm.path = '/';

const pageRoutes = {
  forgotPassword: composedPageRoutes.mockLogins.forgotPassword,
  newUser: composedPageRoutes.mockLogins.newUser,
  resetPassword: composedPageRoutes.mockLogins.resetPassword,
  root: composedPageRoutes.mockLogins.loginForm,
  home: {
    path: '/home',
    beforeRouteEnter: (to, from, data) => {
      if (data.profiles.collection.length === 0) {
        return '/profiles/create';
      }
    },
    children: [
      {
        elementType: 'routerLink',
        class: 'button',
        innerHtml: 'ANIMAL INVENTORY',
        to: '/animals'
      },
      {
        elementType: 'routerLink',
        class: 'button',
        innerHtml: 'ADD AN ANIMAL',
        to: '/animals/create'
      },
    ]
  },
  forgotPassword: {
    path: '/forgot-password',
    children: [
      {
        elementType: 'dataEntity',
        dataEntityKey: 'mockLogins',
        children: [
          {
            elementType: 'p',
            innerHtml: 'TBD: email a magic link.'
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'username'
            }
          },
          {
            elementType: 'formControl',
            options: {
              type: 'submit',
              buttonText: 'EMAIL ME',
            }
          }
        ],
        renderType: 'find',
        findOptions: {
          successRedirect: '/reset-password'
        }
      }
    ],
    layout: 'LoggedOutLayout'
  },
  resetPassword: {
    path: '/reset-password',
    children: [
      {
        elementType: 'p',
        innerHtml: 'Reset your password.'
      },
      {
        elementType: 'dataEntity',
        dataEntityKey: 'mockLogins',
        children: [
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'password'
            }
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'confirmPassword'
            }
          },
          {
            elementType: 'formControl',
            options: {
              type: 'submit',
              buttonText: 'RESET',
            }
          }
        ],
        renderType: 'update',
        updateOptions: {
          successRedirect: '/'
        }
      }
    ],
    layout: 'LoggedOutLayout'
  },
  newUser: {
    path: '/new-user',
    children: [
      {
        elementType: 'dataEntity',
        children: [
          {
            elementType: 'p',
            innerHtml: 'Create a new user.'
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'username'
            }
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'password'
            }
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'confirmPassword'
            }
          },
          {
            elementType: 'formControl',
            options: {
              type: 'submit',
              buttonText: 'CREATE USER',
            }
          }
        ],
        dataEntityKey: 'mockLogins',
        renderType: 'create',
        createOptions: {
          successRedirect: '/'
        }
      },
    ],
    layout: 'LoggedOutLayout'
  },
};

const padOptions = {
  appName: 'Example',
  layouts: {
    DefaultLayout: {
      header: [{
        elementType: 'preFabHeader',
        options: {
          navLinks: [
            {
              routerLink: '/home',
              text: 'home'
            },
            {
              routerLink: '/animals/create',
              text: 'add'
            },
            {
              routerLink: '/',
              text: 'logout'
            },
          ],
        }
      }],
      layoutClass: 'logged-in'
    },
    LoggedOutLayout: {
      footer: [
        {
          elementType: 'p',
          innerHtml: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dui fermentum justo sodales congue vulputate fames pharetra justo. Eu purus duis habitant, potenti fermentum parturient. Egestas parturient dapibus in sit fermentum sapien auctor suspendisse auctor.'
        }
      ],
      header: [
        {
          elementType: 'h1',
          innerHtml: 'Freeware'
        },
        {
          elementType: 'h2',
          innerHtml: 'Powered by Best Friends'
        }
      ]
    },
  }
};

const siteSchema = {
  dataEntities,
  padOptions,
  pageRoutes
};
export default siteSchema;
