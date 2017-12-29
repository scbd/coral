<template>


<div class="lstring">
<div class="field has-addons " v-for="local in locales" style="margin-bottom: .75rem;">

            <div class="control is-expanded " >
                <input v-if="type !== 'textarea'"

                    ref="input"
                    class="input "
                    :class="[statusType, size]"


                    v-model="newValue[local]"
                    :maxlength="maxlength"
                    v-bind="$attrs"
                    @input="input($event,local)"
                    @blur="$emit('blur', $event) && checkHtml5Validity()"
                    @focus="$emit('focus', $event)">

                <textarea v-else
                    ref="textarea"
                    class="textarea"
                    :class="[statusType, size]"
                    v-model="newValue[local]"
                    :maxlength="maxlength"
                    v-bind="$attrs"
                    @input="input($event,local)"
                    @blur="$emit('blur', $event) && checkHtml5Validity()"
                    @focus="$emit('focus', $event)">
                </textarea>

                <!-- <b-icon v-if="icon"
                    class="is-left"
                    :icon="icon"
                    :pack="iconPack"
                    :size="size">
                </b-icon> -->

                <!-- <b-icon v-if="!loading && (passwordReveal || statusType)"
                    class="is-right"
                    :class="[!passwordReveal ? statusType : null, { 'is-primary is-clickable': passwordReveal }]"
                    :icon="passwordReveal ? passwordVisibleIcon : statusTypeIcon"
                    :size="size"
                    both
                    @click.native="togglePasswordVisibility">
                </b-icon> -->

                <small class="help counter" v-if="maxlength && hasCounter">{{ valueLength }} / {{ maxlength }}</small>
            </div>

            <div class="control">
              <a class="button is-static">
                {{local}}
              </a>
            </div>



</div>
</div>
</template>

<script>

    export default {
        name: 'bInput',
        inheritAttrs: false,
        // mixins: [FormElementMixin],
        // components: {
        //     [Icon.name]: Icon
        // },
        props: {
            value: {
              type: Object,
              default: function () {
                return { en: '' }
              }
            },
            type: {
                type: String,
                default: 'text'
            },
            passwordReveal: Boolean,
            hasCounter: {
                type: Boolean,
                default: true
            },

            loading: Boolean,
            maxlength: [Number, String],
            size: String,
            locales: {
              type: Array,
              default: function () {
                return ['en']
              }
            },
        },
        data() {
            return {
                newValue: this.value,
                newType: this.type,
                isValid: true,
                statusType:'',
                // newAutocomplete: this.autocomplete || config.defaultInputAutocomplete,
                isPasswordVisible: false,
                _elementRef: this.type === 'textarea'
                    ? 'textarea'
                    : 'input'
            }
        },
        computed: {
            /**
             * Check if have any icon in the right side.
             */
            hasIconRight() {
                return this.passwordReveal || this.loading || this.statusType
            },
            /**
             * Position of the icon or if it's both sides.
             */
            iconPosition() {
                if (this.icon && this.hasIconRight) {
                    return 'has-icons-left has-icons-right'
                } else if (!this.icon && this.hasIconRight) {
                    return 'has-icons-right'
                } else if (this.icon) {
                    return 'has-icons-left'
                }
            },
            /**
             *
             */
            statusTypeIcon() {
                switch (this.statusType) {
                    case 'is-success': return 'done'
                    case 'is-danger': return 'error'
                    case 'is-info': return 'info'
                    case 'is-warning': return 'warning'
                }
            },
            /**
             * Check if have any message prop from parent if it's a Field.
             */
            hasMessage() {
                return this.$parent.$data._isField && this.$parent.newMessage
            },
            /**
             * Current password-reveal icon name.
             */
            passwordVisibleIcon() {
                return !this.isPasswordVisible ? 'visibility' : 'visibility_off'
            },
            /**
             * Get value length
             */
            valueLength() {
                return this.newValue ? this.newValue.length : 0
            }
        },
        watch: {
            /**
             * When v-model is changed:
             *   1. Set internal value.
             *   2. If it's invalid, validate again.
             */
            value(value) {
              // console.log(value);
                // this.newValue = value
                // !this.isValid && this.checkHtml5Validity()
            }
        },
        methods: {
            /**
             * Input's input listener.
             *
             *   1. Emit input event to update the user v-model.
             *   2. If it's invalid, validate again.
             *
             * We're using value instead of v-model because
             * v-model cannot be binded with a dynamic type input.
             */
            input(event,local) {
                // const value = event.target.value
                this.newValue[local] = event.target.value
                this.$emit('input', this.newValue)
                !this.isValid && this.checkHtml5Validity()
            },
            /**
             * Toggle the visibility of a password-reveal input
             * by changing the type and focus the input right away.
             */
            togglePasswordVisibility() {
                this.isPasswordVisible = !this.isPasswordVisible
                this.newType = this.isPasswordVisible ? 'text' : 'password'
                this.$nextTick(() => {
                    this.$refs.input.focus()
                })
            },
            focus() {
    if (this.$refs[this.$data._elementRef] === undefined) return

    if (!this.$data._isSelect && !this.$data._isAutocomplete && !this.$data._isDatepicker) {
        this.$nextTick(() => this.$refs[this.$data._elementRef].select())
    } else {
        this.$nextTick(() => this.$refs[this.$data._elementRef].focus())
    }
},
checkHtml5Validity() {
  return true;
    if (this.$refs[this.$data._elementRef] === undefined) return

    const el = this.$data._isAutocomplete || this.$data._isDatepicker
        ? this.$refs.input.$refs.input
        : this.$refs[this.$data._elementRef]

    let type = null
    let message = null
    let isValid = true
    if (!el.checkValidity()) {
        type = 'is-danger'
        message = el.validationMessage
        isValid = false
    }
    this.isValid = isValid

    if (this.parentField) {
        // Set type only if not defined
        if (!this.parentField.type) {
            this.parentField.newType = type
        }
        // Set message only if not defined
        if (!this.parentField.message) {
            this.parentField.newMessage = message
        }
    }

    return this.isValid
}
        }
    }
</script>

<style lang="sass" >

  @import "~assets/css/main"

  @import "~bulma/sass/elements/_all"
  .lstring
    width: 100%
    margin-bottom: 0.75rem

  .lstring:last-child
    margin-bottom: 0

</style>

