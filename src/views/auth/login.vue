<template>
  <div class="row justify-content-start align-items-center hg" >
          <div class="col-md-6 logo">
          <img src="../../assets/img/log.jpeg" alt="">
      </div>
      <div class="col-md-6 px-4 nod">
          <h1>تسجيل الدخول</h1>
  <form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">اسم المستخدم</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="username"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >كلمة المرور</label
        >
        <input
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="********"
          v-model="password"
        />
      </div>
     <button type="submit" class="btn " v-on:click.prevent="login">تسجيل الدخول</button>

    </form>
      </div>
  
  
  </div>
</template>
<style scoped>


form {
  background-color: white;
  padding: 20px;
  width: 400px;
  border-radius: 5px;
}
input{
  background-color: whitesmoke;

}
.nod{
  background-color: white !important;

}
.logo{
 background-color: whitesmoke;
 height: 100%;
 display: flex;
 align-content: center;
 align-items: center;
 justify-content: center;
}
.hg{
 height: 100vh;
}
img{
height: 300px;
}
</style>
<script>
import axios from "axios";

export default {
  name: "needs",
  

  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {
    this.login();
  },
  methods: {
    login() {
      axios
        .post("api/auth/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          const token = res.data.data.token;
          sessionStorage.setItem("token", token);
          this.show()
          // this.$router.push({ name: "lists" });
        })
        .catch(() => {
              this.failed()
});
    },
    show(){
   const  Swal = this.$swal ; 
      const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'تم تسجيل الدخول بنجاح'
}).then(() => {
          this.$router.push({ name: "lists" });
        });
  
    },
    failed(){
       this.Swal.fire({
  icon: 'error',
  title: 'هناك خطأ ما !',
  text: 'تأكد من الاسم وكلمة السر',
    confirmButtonText: 'نعم',

})
    }
  },
};
</script>
