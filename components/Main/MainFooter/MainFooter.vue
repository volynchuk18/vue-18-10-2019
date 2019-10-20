<template>
  <footer class="main-footer">
    <div class="main-footer-header">
      <h2>Contact Us</h2>
    </div>
    <div class="main-footer-content">
      <form
        @submit.prevent="sendFormHandler"
        class="main-footer-content__form"
      >
        <div
          class="main-footer-content__form-input-container"
          :class="{'main-footer-content__form-input-container-error': nameError}"
        >
          <span class="main-footer-content__form-input-container-error-message">{{nameError}}</span>
          <input
            maxlength="30"
            v-model="name"
            placeholder="Name"
            class="main-footer-content__form-input-container-input"
          >
        </div>
        <div
          class="main-footer-content__form-input-container"
          :class="{'main-footer-content__form-input-container-error': phoneError}"
        >
          <span class="main-footer-content__form-input-container-error-message">{{phoneError}}</span>
          <input
            maxlength="12"
            v-model="phone"
            placeholder="Phone"
            class="main-footer-content__form-input-container-input"
          >
        </div>
        <div
          class="main-footer-content__form-input-container"
          :class="{'main-footer-content__form-input-container-error': emailError}"
        >
          <span class="main-footer-content__form-input-container-error-message">{{emailError}}</span>
          <input
            v-model="eMail"
            placeholder="E-mail"
            class="main-footer-content__form-input-container-input"
          >
        </div>
        <div
          class="main-footer-content__form-checkbox-container"
          :class="{'main-footer-content__form-checkbox-container-error': checkBoxError}"
        >
          <span class="main-footer-content__form-checkbox-error-message">{{checkBoxError}}</span>
          <input
            type="checkbox"
            v-model="checkBox"
            placeholder="E-mail"
            class="main-footer-content__form-checkbox"
          >
          <span>I agree the processing of personal data</span>
        </div>
        <button
          class="main-footer-content__form-submit-button"
          :class="{'main-footer-content__form-submit-button-disabled': loading}"
        >
          GET IN TOUCH
        </button>
      </form>
      <div class="main-footer-content__info">
        Please tell us more about your request and give us info about your company and country
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "MainFooter",
    data() {
      return {
        name: null,
        phone: null,
        eMail: null,
        checkBox: null,
        nameRegex: /^[a-zA-Zа-яА-Я\s]+$/,
        emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        mask: '38093',
        beforeSubmit: true,
        loading: false,
      }
    },
    watch: {
      name(to, from) {
        if (!this.nameRegex.test(to) && to) {
          this.name = from
        }
      },
      phone(to, from) {
        if (to && (!Number.isInteger(+to) || to.indexOf('+') !== -1 || to.indexOf('-') !== -1)) {
          this.phone = from
        } else if (to && !from && !to.startsWith(this.mask) && to.length < 12 - this.mask.length) {
          this.phone = this.mask + to
        }
      },
    },
    methods: {
      async sendFormHandler() {
        this.beforeSubmit = false;
        if (this.formError || this.loading) {
          return
        }
        this.loading = true;
        let res = await this.$axios.$post('http://httpbin.org/post', {
          name: this.name,
          phone: this.phone,
          eMail: this.eMail
        });
        this.loading = false;
        console.log(res)
      },
    },
    computed: {
      formError() {
        return this.nameError || this.emailError || this.phoneError || this.checkBoxError
      },
      nameError() {
        return this.beforeSubmit || this.nameValid ? '' : 'Input valid name'
      },
      emailError() {
        return this.beforeSubmit || this.emailValid ? '' : 'Input valid email'
      },
      phoneError() {
        return this.beforeSubmit || this.phoneValid ? '' : 'Input valid phone number'
      },
      checkBoxError() {
        return this.beforeSubmit || this.checkBoxValid ? '' : 'You must agree the processing of personal data'
      },

      nameValid() {
        return this.name && this.name.length > 0
      },
      emailValid() {
        return this.emailRegex.test(this.eMail)
      },
      phoneValid() {
        return this.phone && this.phone.length === 12
      },
      checkBoxValid() {
        return this.checkBox
      },
    }
  }
</script>

<style scoped lang="scss">
  .main-footer {
    color: white;
    font-size: 18px;
    height: 600px;
    padding: 90px 60px 0;
    background: no-repeat url('../../../static/images/pattern.png');
    display: flex;
    flex-direction: column;

    &-content {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;

      &__form {
        width: 48%;
        display: flex;
        flex-direction: column;

        &-submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: black;
          font-size: 11px;
          width: 280px;
          height: 85px;
          margin-top: 50px;
          font-weight: 600;

          &-disabled {
            opacity: 0.5;
          }
        }

        &-checkbox-container {
          position: relative;
          display: flex;
          align-items: center;
          margin-top: 20px;
        }

        &-checkbox {
          width: 15px;
          height: 15px;
          margin-right: 15px;

          &-error-message {
            position: absolute;
            font-size: 13px;
            top: 100%;
            color: orangered;
          }
        }

        &-input {
          &-container {
            display: flex;
            padding-bottom: 15px;
            border-bottom: 1px solid white;
            position: relative;

            &-error {
              border-bottom: 1px solid orangered;
            }

            &-error-message {
              position: absolute;
              font-size: 13px;
              bottom: 0;
              color: orangered;
            }

            &-input {
              width: 100%;

              &::placeholder {
                color: white;
              }
            }
          }

          &-container:not(:first-child) {
            margin-top: 22px;
          }
        }
      }

      &__info {
        width: 48%;
        color: black;
      }
    }
  }
</style>
