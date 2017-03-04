<template>
<el-row>
  <el-col :span="12">
    <div class="result">
      <h2>Example form</h2>
      <el-data-form
        @eldataform:validationchanged='validationChanged'
        v-model='contactFormData.data'
        :rules='contactFormData.rules' >
        <div slot='postalCode' >
          This is a custom field: <input v-model='contactFormData.data.postalCode' />
        </div>
      </el-data-form>
    </div>
    <!--
    <div>
      <h4>Code:</h4>
      <pre><code>
..
      </code></pre>
    </div>
    -->
  </el-col>
  <el-col :span="12" >
    <div class='bg-silver' style='padding:10px;' >
      <h5>Data:</h5>
      <div v-show='formIsValid' >
        <i class='el-icon-circle-check' ></i> Form is valid
      </div>
      <pre>{{ contactFormData.data }}</pre>
    </div>
  </el-col>
</el-row>
</template>

<script>
import ElDataForm from './ElDataForm'

import {
  CONTACT_FORM_DATA
} from './FormData'

export default {
  name: 'RegistrationFrom',
  components: {
    ElDataForm
  },
  data () {
    return {
      contactFormData: CONTACT_FORM_DATA,
      formIsValid: false
    }
  },
  methods: {
    validationChanged (isValid) {
      this.formIsValid = isValid
    }
  }
}
</script>
