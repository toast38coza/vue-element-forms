# vue-element-forms

> Data driven forms for VueJS and [Element.io](http://element.eleme.io/)

## Getting started

**Install**

```
npm install --save npm install git+https://git@github.com/toast38coza/vue-element-forms
```

**Use:**

**Data**

```
// Data
export const CONTACT_FORM_DATA = {
  data: {
  	name: 'Joe Soap',
  	email: null,
  	phone: null,
  	address: null,
  	postalCode: null,
  	suburb: null
  },
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
    ]
  }
}
```

**JavaScript**
```
import ElDataForm from 'vue-element-forms/src/components/ElDataForm'

export default {
  name: 'ExampleForm',
  components: { ElDataForm },
  data () {
    return {
      contactFormData: CONTACT_FORM_DATA
    }
  }
}
```

**HTML:**

```
<!-- basic -->
<el-data-form
  v-model='contactFormData.data'
  :rules='contactFormData.rules' >
</el-data-form>

<!-- you can also override the input for any field -->
<el-data-form
  v-model='contactFormData.data'
  :rules='contactFormData.rules' >
  <div slot='postalCode' >
    This is a custom field: <input v-model='contactFormData.data.postalCode' />
  </div>
</el-data-form>
```

**Todo**

- [ ] Form Builder
- [ ] Support more types of inputs (currently just supports text)
- [ ] Inform the parent of the validation status
- [ ] Support all `el-form`'s props
- [ ] ...

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
