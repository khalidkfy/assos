<template>
<div class="sidenav">
  <img src="../../assets/img/log.jpeg" alt="" class="logos">
      <router-link v-if="hasPermission('beneficiary_show')" to="/table" active-class="actives">عرض المستفيدين</router-link>
      <router-link v-if="hasPermission('beneficiary_create')" to="/add" active-class="actives">اضافة مستفيدين </router-link>
      <router-link v-if="hasPermission('subscriptions_show')" to="listSubs" active-class="actives"> الاشتراكات</router-link>
      <router-link v-if="hasPermission('courses_show')" to="showcorse" active-class="actives">الدورات</router-link>
      <router-link v-if="hasPermission('helps_show')" to="showaid" active-class="actives">المساعدات</router-link>
      <router-link v-if="hasPermission('reports_show')" to="reports" active-class="actives">التقارير</router-link>
      <router-link v-if="hasPermission('settings_show')" to="settings" active-class="actives">الإعدادات</router-link>

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
