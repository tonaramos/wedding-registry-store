<template>
  <page>
    <FlexboxLayout class="page" flexDirection="column" backgroundColor="#ffff">
      <stackLayout class="form">
        <Label class="header" :text="registryName"/>
        <Label class="registryTitle" text="Wedding Registry"/>
        <GridLayout rows="auto, auto, auto">
          <StackLayout row="0" class="input-field">
            <TextField 
              class="input"
              ref="name" 
              hint="Name"
              autocorrect="true"
              v-model="user.name"
              returnKeyType="next"
              @returnPress="focusEmail">
            </TextField>
          </StackLayout>
          <StackLayout row="1" class="input-field">
            <TextField
              class="input"
              ref="email"
              hint="Email"
              keyboardType="email"
              autocorrect="false"
              v-model="user.email"
              returnKeyType="next"
              @returnPress="focusPassword">
            </TextField>
          </StackLayout>
          <StackLayout row="2" class="input-field">
            <TextField
              class="input"
              ref="password"
              hint="Password"
              secure="true"
              v-model="user.password"
              returnKeyType="done">
            </TextField>
          </StackLayout>
        </GridLayout>
        <Label text="Please enter a valid Email" :class=" !user.validEmail && user.validationAttempted ? 'alertVisible' : 'alertNotVisible'" />
        <Button text='Log In' @tap="logInHandler" class="btn-primary" />
        <Label text="skip" class="login-label" @tap="goTo('ItemList')">
        </Label>
      </StackLayout>
    </FlexboxLayout>
  </page>
</template>

<script >
import routes from "../routes/index";

  export default {
    methods: {
      goTo(name) {
        this.$navigateTo(routes[name], { clearHistory: true });
      },
      focusPassword() {
        this.$refs.password.nativeView.focus();
      },
      focusEmail() {
        this.$refs.email.nativeView.focus();
      },
      logInHandler() {
        const validEmail = this.emailValidator(this.user.email);
        this.$set(this.user, 'validEmail', validEmail);
        this.$set(this.user, 'validationAttempted', true);
        if (this.user.validationAttempted && !this.user.validEmail) {
          this.$set(this.user, 'email', '');
        } else  if (this.user.validationAttempted && this.user.validEmail) {
          this.goTo('ItemList');
        }
      },
      emailValidator(value) {
        let isValid = null;
        // Checking for two alphabetical values before @ followed by one alphabetical value followed by a . followed by one last alphabetical value
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value);
        return isValid;
      }
    },
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: '',
          validName: true,
          validEmail: true,
          validPassword: true,
          validationAttempted: false,
          loggedIn: null,
        }
      }
    },
    name: "Login",
    computed: {
      registryName() {
        return this.$store.state.registryName;
      }
    }
  };
</script>

<style scoped>
  .page {
    flex-Direction: column;
    align-items: center;
  }
  .form {
    margin-top: 15;
    margin-left: 30;
    margin-right: 30;
    flex-grow: 2;
    vertical-align: top; 
  }
  .header {
    horizontal-align: center;
    font-size: 35;
    font-weight: 600;
    margin-top: 35;
    text-align: center;
    color: #da7434;
  }
  .registryTitle {
    color: #f7a26e;
    horizontal-align: center;
    font-size: 18;
    font-weight: 400;
    margin-bottom: 30;
  }
  .input-field {
    margin-bottom: 25px;
  }
  .input {
    font-size: 18px;
    placeholder-color: #A8A8A8;
  }
  .input:disabled {
    background-color: white;
    opacity: 0.5;
  }
  .btn-primary {
    background-Color: #4c8492;
    margin: 20 5 15 5;
  }
  .login-label {
    horizontal-align: center;
    color: #A8A8A8;
    font-size: 16px;
  }
  .sign-up-label {
    margin-bottom: 20px;
  }
  .alertVisible {
    font-size: 16;
    color: #da7434;
    horizontal-align: center;
    text-align: center;
  }
  .alertNotVisible {
    visibility: hidden;
    color: #da7434;
    horizontal-align: center;
    text-align: center;
  }
</style>
