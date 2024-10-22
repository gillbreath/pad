export default {
  mockLogins: {
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
    loginForm: {
      path: '/login',
      children: [
        {
          elementType: 'dataEntity',
          children: [
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
              elementType: 'routerLink',
              to: '/forgot-password',
              innerHtml: 'Forgot password',
            },
            {
              elementType: 'formControl',
              options: {
                type: 'submit',
                buttonText: 'SIGN IN',
              }
            },
            {
              elementType: 'routerLink',
              to: '/new-user',
              innerHtml: 'New user?'
            }
          ],
          dataEntityKey: 'mockLogins',
          renderType: 'find',
          findOptions: {
            successRedirect: '/home'
          }
        },
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
  }
};
