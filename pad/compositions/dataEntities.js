export default {
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
  profiles: {
    fields: {
      avatar: {
        dataType: 'photo'
      },
      firstName: {
        validations: [
          'notEmpty'
        ]
      },
      lastName: {
        validations: [
          'notEmpty'
        ]
      },
      username: {
        dataType: 'email',
        foreignkey: 'mockLogins.username',
        validations: [
          'notEmpty'
        ]
      },
    }
  }
};
