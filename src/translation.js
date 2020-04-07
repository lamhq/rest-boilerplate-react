const translation = {
  // languages
  en: {
    // namespaces
    common: {
      'runtime-error': 'Something went wrong',
      'server-error': 'Server error',
      'request-timeout': 'Request timeout. Please try again later.',
      'network-unavailable': 'Network unavailable. Please check your connection.',
      'invalid-user-input': 'There\'re some errors with your input.',
      'resource-not-found': 'Resource not found.',
      unauthenticated: 'You need to login to perform this action.',
      unauthorized: 'You are not allowed to perform this action.',
      'required-input': 'This field can not be blank.',
      'invalid-email': 'Invalid email.',
      'password-too-long': 'Password is too long, maximum: {{max}} characters',
      'password-too-short': 'Password is too short, minimum: {{min}} characters',
      'load-data-fail': 'Failed to load the list.',
      'page-not-found': 'Page not found',
      'page-not-found-msg': 'No page was found at this URL. Try going back to homepage.',
      'back-to-home': 'Back to home',
      'error-page-content': 'Oops. Looks like it\'s broken, please try again later. If you continue to see this error, please contact ab@example.com',
    },
    login: {
      'user-not-found': 'This user is not available.',
      'invalid-password': 'Invalid password.',
      'user-is-disabled': 'This user is disabled.',
    },
    'forgot-password': {
      success: 'Please check your inbox and reset the password within 1 hour',
      'user-not-found': 'This user is not available.',
    },
    'reset-password': {
      success: 'Your password has been updated. You can login with the new password.',
    },
    'user-management': {
      'delete-user-warning': 'Deleting User!',
      'delete-user-message': 'Are you sure to delete "{{user.displayName}}" ?',
      'delete-users-message': 'Are you sure to delete {{count}} user(s) ?',
    },
  },
};

export default translation;
