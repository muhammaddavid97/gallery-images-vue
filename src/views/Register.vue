<template>
<ValidationObserver ref="observer">
    <b-form slot-scope="{ validate }" @submit.prevent="validate().then(handleSubmit)">
      <ValidationProvider rules="required" name="Name">
        <b-form-group slot-scope="{ valid, errors }" label="Name">
            <b-form-input
              type="text"
              v-model="user.name"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Masukan nama anda">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider rules="required|email" name="Email">
        <b-form-group
          slot-scope="{ valid, errors }"
          label="Email">
            <b-form-input
              type="email"
              v-model="user.email"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Masukan email anda">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider rules="required" name="Mobile">
        <b-form-group
          slot-scope="{ valid, errors }"
          label="Mobile">
            <b-form-input
              type="text"
              v-model="user.phone"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Masukan nomor hp anda">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider name="City" rules="required">
        <b-form-group slot-scope="{ valid, errors }" label="City:">
          <b-form-select
            :state="errors[0] ? false : (valid ? true : null)"
            v-model="user.city">
            <option v-for="(option, indeks) in kotaAsal" :value="option.value" :key="indeks">
              {{option.text}}
            </option>
          </b-form-select>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider rules="required" name="Password" vid="password">
        <b-form-group
          slot-scope="{ valid, errors }"
          label="Password">
            <b-form-input
              type="password"
              v-model="user.password"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Masukan password">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider rules="required|confirmed:password" name="Confirm Password">
        <b-form-group
          slot-scope="{ valid, errors }"
          label="Confirm Password">
            <b-form-input
              type="password"
              v-model="user.confirmation"
              placeholder="Konfirmasi password anda"
              :state="errors[0] ? false : (valid ? true : null)">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider name="Hobbies" rules="required|length:1">
        <b-form-group slot-scope="{ valid, errors }">
          <b-form-checkbox-group
            :state="errors[0] ? false : (valid ? true : null)"
            v-model="user.hobbies">
            <b-form-checkbox v-for="(hobby, indeks) in hobiUser" :value="hobby.value" :key="indeks">
              {{hobby.text}}
            </b-form-checkbox>
          </b-form-checkbox-group>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <b-button block type="submit" variant="primary">Submit</b-button>
    </b-form>
</ValidationObserver>
</template>


<script>
  import {ValidationObserver, ValidationProvider} from 'vee-validate';
  import city from '../city.json';
  import hobi from '../hobi.json';

  export default{
    components:{ValidationObserver, ValidationProvider},
    data(){
      return{
        user:{
          name:'',
          email:'',
          phone:'',
          city:[],
          password:'',
          confirmation:'',
          hobbies:[]
        }
      }
    },
    computed:{
      kotaAsal: function(){
        return city
      },
      hobiUser : function(){
        return hobi
      }
    },
    methods:{
      handleSubmit: function(){
        if (Object.values(this.user.name && this.user.email && this.user.phone && this.user.city && this.user.password && this.user.confirmation && this.user.hobbies).length !== 0){
          this.$toast.success('Register Berhasil', {
                 type:'success',
                 position:'top-right',
                 duration:3000,
                 dismissible:true
          });
          this.$router.push('/pinterest');
        }else{
          this.$toast.error('Data harus lengkap', {
                 type:'error',
                 position:'top-right',
                 duration:5000,
                 dismissible:true
          });
        }
      }
    }
  }
</script>

<style lang="css" scope>
  form{
    max-width: 500px;
    margin: 0 auto;
    text-align: left;
  }

  .col-form-label{
    font-weight: 600;
  }

  .fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to{
    opacity: 0s;
  }
</style>
