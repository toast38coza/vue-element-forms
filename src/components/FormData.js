/* export const TEMPLATE_FORM_DATA = {
  // this defines the basic module for you form
  data: { foo: 'bar', baz: 'bus' },
  // this is your validation rules
  rules: []
} */

export const CONTACT_FORM_DATA = {
  data: { name: 'Joe Soap', email: null, phone: null, address: null, postalCode: null, suburb: null },
  rules: {
    name: [
      { required: true, message: 'Company name is required', trigger: 'change' }
    ],
    email: [
      { required: true, message: 'Email is required', trigger: 'change' },
      { type: 'email', message: 'Please provide a valid email', trigger: 'change' }
    ],
    phone: [
      { required: true, message: 'Company name is required', trigger: 'change' },
      { type: 'number', message: 'Phone number should contain only numbers', trigger: 'change' },
      { min: 6, message: 'Phone number must be at least 6 characters long', trigger: 'change' }
    ],
    address: [
      { required: true, message: 'address is required', trigger: 'change' }
    ],
    postalCode: [
      { required: true, message: 'postal code is required', trigger: 'change' }
    ],
    suburb: [
      { required: true, message: 'suburb is required', trigger: 'change' }
    ]
  }
}
