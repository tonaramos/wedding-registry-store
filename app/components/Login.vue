<template>
  <page>
    <FlexboxLayout class="page" flexDirection="column" backgroundColor="#ffff">
      <stackLayout class="form">
        <Label class="header" :text="registryName"/>
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
        <Button text='Log In' @tap="submit" class="btn-primary" />
        <Label *v-show="loggedIn" text="skip"
            class="login-label" @tap="goTo('ItemList')">
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
      submit() {
        // Check if input fields are correct
        console.log('SUBMIT BUTTON PRESSED', this.user.name)
      }
    },
    data() {
      return {
        loggedIn: true,
        user: {
          name: '',
          email: '',
          pasword: '',
        }
      }
    },
    name: "Login",
    components: {
      // ItemList,
    },
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
    font-size: 25;
    font-weight: 600;
    margin-bottom: 70;
    text-align: center;
    color: #f09c67;
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
    margin: 30 5 15 5;
  }

  .login-label {
      horizontal-align: center;
      color: #A8A8A8;
      font-size: 16px;
  }

  .sign-up-label {
      margin-bottom: 20px;
  }

</style>
