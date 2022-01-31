<template>
<div class="sidenav">
  <img src="../../assets/img/log.jpeg" alt="" class="logos">
    <router-link to="/table">بيانات المنتسبين - جدولي</router-link>
  <router-link to="/add">اضافة منتسبين للجمعية</router-link>
    <router-link to="listSubs">جدول الاشتراكات</router-link>

  <router-link to="/edit">المساعدات</router-link> 
</div>

</template>

<script>
export default {
  name: 'Sidebar',

}

</script>
