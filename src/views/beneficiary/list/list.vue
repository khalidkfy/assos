<template>
            <container>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="year"
          @change="basicdata"
        >
          <option>2021</option>
          <option>2022</option>
        </select>
        <hr />
        <div class="d-flex justify-content-center align-items-start mt-5 h-100">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">الاسم</th>
                <th scope="col">الحالة</th>
                <th scope="col">رقم الهوية</th>
                <th scope="col">السنة</th>
                <th scope="col">عرض البيانات</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody v-for="informat in informats" :key="informat.id">
              <tr>
                <th>{{ informat.id }}</th>
                <th>{{ informat.name }}</th>
                <th>{{ informat.class }}</th>
                <th>{{ informat.id_number }}</th>
                <th>{{ informat.year }}</th>
                <th>
                   <router-link
                    class="links"
                    :to="{ name: 'show', query: { q: informat.id } }"
                                        style="color:black;"

                  >
                    عرض</router-link
                  >
                </th>
                <th>
                  <router-link
                    class="links"
                    :to="{ name: 'edit', query: { q: informat.id } }"
                                        style="color:black;"

                  >
                    تعديل</router-link
                  > 

            
                </th>

                   <th>
                  <router-link
                    class="links"
                    :to="{ name: 'subs', query: { q: informat.id } }"
                    style="color:black;"
                  >
                    اضافة اشتراك</router-link
                  > 

            
                </th>
              </tr>
            </tbody>
          </table>
        </div>
                </container>

</template>
<script>
import axios from "axios";
import container from '@/components/containers/container.vue';

export default {
  components: { container },
  name: "personal",

  data() {
    return {
      year: "2022",
      informats: [],
    };
  },
  created() {
    this.basicdata();
  },
  methods: {
    basicdata() {
      const token = sessionStorage.getItem("token");

      axios
        .get(
          `api/beneficiary/index?year=${this.year}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log(res.data.data[0]);
          this.informats = res.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
