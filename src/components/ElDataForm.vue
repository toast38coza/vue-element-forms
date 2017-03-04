<template>
<div>
<el-form
  :model="formData"
  :rules="rules"
  ref="dataForm"
  label-width="120px" >
  <template v-for='field in fields' >
  <slot :name='field'>
  <el-form-item
    @el.form.blur='validate'
    :label="field"
    :prop="field" >
    <el-input
      v-model="formData[field]" ></el-input>
  </el-form-item>
  </slot>
  </template>
</el-form>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'ElDataForm',
  props: {
    value: { type: Object, required: true },
    rules: { type: Object, required: true }
  },
  data () {
    return {
      formData: this.value,
      fields: Object.keys(this.value),
      isValid: false
    }
  },
  methods: {
    // not sure how to use this to tell the parent if this data is valid ..
    validate () {
      let originalValidness = this.isValid
      this.$refs['dataForm'].validate((valid) => {
        if (originalValidness !== valid) {
          this.isValid = valid
          this.$emit('eldataform:validationchanged', valid)
        }
      })
    }
  }
}
</script>
