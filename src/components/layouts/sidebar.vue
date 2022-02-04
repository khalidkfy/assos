<template>
<div class="sidenav">
  <img src="../../assets/img/log.jpeg" alt="" class="logos">
    <router-link to="/table">عرض المستفيدين</router-link>
     <router-link to="/add">اضافة مستفيدين </router-link>
       <router-link to="listSubs">عرض الاشتراكات</router-link>
         <router-link to="/setting">الاعدادات </router-link> 

</div>

</template>

<script>
export default {
  name: 'Sidebar',

}

</script>
