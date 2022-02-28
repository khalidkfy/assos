<template>
<div class="sidenav">
  <img src="../../assets/img/log.jpeg" alt="" class="logos">
    <router-link to="/table" active-class="actives">عرض المستفيدين</router-link>
     <router-link to="/add" active-class="actives">اضافة مستفيدين </router-link>
       <router-link to="listSubs" active-class="actives"> الاشتراكات</router-link>
          <router-link to="showsource" active-class="actives">مصادر الدخل </router-link> 
          <router-link to="showcorse" active-class="actives">الدورات</router-link> 
          <router-link to="showaid" active-class="actives">المساعدات</router-link> 
         <router-link to="/setting" active-class="actives">الاعدادات </router-link> 

         <p v-on:click.prevent="logout" style="cursor: pointer;">تسجيل الخروج </p> 

</div>

</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    logout() {
  sessionStorage.clear();
  this.$router.push({ name: "login" });
  }
}}

</script>
