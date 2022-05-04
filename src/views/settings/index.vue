<template>
  <div class="heade">
    الإعدادات
  </div>
  <container>
    <div class="row py-3">
      <div class="col-md-12 mb-3">
        <h6 class="title">معلومات عامة</h6>
        <div class="d-flex mt-4">
          <div class="mx-2 my-2">
            <router-link class="link" :to="{name :'settings.categs.index'}">التصنيف</router-link>
          </div>
          <div class="mx-2 my-2">
            <router-link class="link" :to="{name :'settings.specs.index'}">التخصصات</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-3">
        <h6 class="title">العنوان</h6>
        <div class="d-flex mt-4">
          <div class="mx-2 my-2">
            <router-link class="link" to="/governorates">المحافظة</router-link>
          </div>
          <div class="mx-2 my-2">
            <router-link class="link" to="/districts">المنطقة</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-3">
        <h6 class="title">الأسرة والمنزل</h6>
        <div class="d-flex mt-4">
          <div class="mx-2 my-2">
            <router-link class="link" :to="{name :'settings.housings.index'}">حيازة السكن</router-link>
          </div>
          <div class="mx-2 my-2">
            <router-link class="link" :to="{name :'settings.housingTypes.index'}">نوع السكن</router-link>
          </div>
          <div class="mx-2 my-2">
            <router-link class="link" :to="{name :'settings.fur_cases.index'}">حالة الأثاث</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-3">
        <h6 class="title">الموظفين</h6>
        <div class="d-flex mt-4">
          <div class="mx-2 my-2">
            <router-link class="link" :to="{name :'settings.jobs.index'}">الوظائف</router-link>
          </div>
          <div class="mx-2 my-2">
            <router-link class="link" :to="{name :'settings.employees.index'}">الموظفين</router-link>
          </div>
          <div class="mx-2 my-2">
            <router-link class="link" :to="{name :'settings.logs.index'}">الأحداث</router-link>
          </div>
          <div class="mx-2 my-2">
            <router-link class="link" :to="{name :'settings.permissions.index'}">الصلاحيات</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-3">
        <h6 class="title">مصادر الدخل</h6>
        <div class="d-flex mt-4">
          <div class="mx-2 my-2">
            <router-link class="link" :to="{name: 'settings.incomes.index'}">مصادر الدخل</router-link>
          </div>
          <div class="mx-2 my-2">
            <router-link class="link" :to="{name: 'settings.aid_types.index'}">نوع المساعدة</router-link>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import container from "@/components/containers/container.vue";

export default {
  mounted() {
  },
  data() {
    return {}
  },
  methods: {},
  components: {container},
}
</script>

<style scoped>
  .title {
    background-color: #009879;
    color: #fff;
    padding: 8px;
    text-align: center;
    width: 140px;
  }
  .link {
    text-decoration: none;
    font-weight: bold;
    color: #000;
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 8px;
    border-radius: 12px;
  }
</style>
