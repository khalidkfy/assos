<template>
  <div class="heade">
    عرض المساعدة
  </div>
  <container>


    <h5 class="text-secondary mx-5">{{ name }}</h5>
    <hr class="mx-5"/>
    <a class="btn me-5" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
       aria-controls="collapseExample">
      بحث <i class="fa fa-search mx-2" aria-hidden="true"></i>

    </a>
    <router-link
        class="btn nw px-4 mx-5"
        :to="{ name: 'aid.people.print', query: { q: selcted, c: $route.query.q  } }"
    >
      طباعة</router-link
    >
    <div class="collapse" id="collapseExample">
      <div class=" card-body">
        <div class="row justify-content-around">

          <input
              type="text"
              class="form-control m-2"
              style="width: 40%"
              aria-label="Default select example"
              v-model="nme"
              @change="basicdata"
              placeholder="الاسم"
          />
          <input
              type="text"
              class="form-control m-2"
              style="width: 40%"
              aria-label="Default select example"
              v-model="affilt"
              @change="basicdata"
              placeholder="رقم المستفيد"
          />

        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-start mt-2 mx-5 h-100">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" v-model="selectAll"/>
          </th>
          <th scope="col">#</th>
          <th scope="col">رقم المستفيد</th>
          <th scope="col">اسم المستفيد</th>
          <th scope="col">رقم الهاتف</th>
          <th scope="col">رقم المشروع</th>
          <th scope="col">تاريخ الاستلام</th>
          <th scope="col">بيانات التنمية</th>
          <th scope="col">بيانات العمل</th>
          <th scope="col">العام</th>
          <th scope="col">الحالة</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr class="text-center" v-for="(item , index) in informats" :key="item.id">
          <td><input
              type="checkbox"
              class="mt-3"
              :value="item.affiliate_no"
              v-model="selcted"
          /></td>
          <td>{{ index + 1 }}</td>
          <td>{{ item.affiliate_no }}</td>
          <td>{{ item.beneficiary_name }}</td>
          <td>{{ item.mobile_number }}</td>
          <td>{{ item.project_number }}</td>
          <td>{{ item.received_date }}</td>
          <td>{{ item.income_development }}</td>
          <td>{{ item.income_work }}</td>
          <td>{{ item.year }}</td>
          <td v-if="done==2"><i class="fa fa-check" aria-hidden="true" style="color: green"></i></td>
          <td v-else></td>
          <td>
            <button class="delete" @click="delt(item.id)"><i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
    <button class="btn mx-5" @click="upload">اعتماد</button>

    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <input
            type="number"
            class="form-control m-2"
            style="width: 40%"
            v-model="page"
            @change="basicdata"
            placeholder="رقم الهوية"
        />
        <small class="mx-2">عدد الصفحات {{ nums }}</small>
      </div>

      <div class="d-flex align-items-center">
        <select
            type="number"
            class="form-control m-2"
            style="width: 100%"
            v-model="per"
            @change="basicdata"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  </container>
</template>
<script>
import axios from "axios";
import container from "@/components/containers/container.vue";

export default {
  components: {container},
  name: "personal",

  data() {
    return {
      year: "",
      name: "",
      affiliate: "",
      id_nu: "",
      informats: [],
      title: "",
      page: 1,
      nums: null,
      nme: "",
      affilt: "",
      per: 10,
      selcted: [],
      done: this.$route.query.d,
    };
  },
  created() {
    this.basicdata();
  },
  methods: {
    upload() {
      const token = sessionStorage.getItem("token");
      axios.post(
          "api/aidpeople/toggle",
          {
            aid_id: this.$route.query.q,
            aid_people_id: this.selcted
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },

          }
      )
          .then((res) => {
            console.log(res.data);

          })
          .catch((e) => {
            console.log(e);
          });
    },
    basicdata() {
      const token = sessionStorage.getItem("token");
      axios
          .get(`api/aid/show?aid_id=${this.$route.query.q}&name=${this.nme}&affiliate_no=${this.affilt}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
            params: {
              page: this.page,
              per_page: this.per,
            },
          })
          .then((res) => {
            console.log(res.data.data);
            this.informats = res.data.data.AidPeople;
            this.name = res.data.data.Aid.project_name;
            this.nums = res.data.paging.last_page;

          })
          .catch((e) => {
            console.log(e);
          });
    },

    delt(id) {
      const token = sessionStorage.getItem("token");
      axios
          .get(
              `api/aidpeople/destroy?aid_people_id=` + id,

              {
                headers: {
                  Authorization: "Bearer " + token,
                },

              }
          )
          .then((res) => {
            console.log(res);
            location.reload();

          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  computed: {
    selectAll: {
      get() {
        if (this.informats && this.informats.length > 0) {
          // A informats array exists with at least one item
          let allChecked = true;
          for (const user of this.informats) {
            if (!this.selcted.includes(user.affiliate_no)) {
              allChecked = false; // If even one is not included in array
            }

            // Break out of loop if mismatch already found
            if (!allChecked) break;
          }
          return allChecked;
        }
        return false;
      },
      set(value) {
        const checked = [];
        if (value) {
          this.informats.forEach((user) => {
            checked.push(user.affiliate_no);
          });
        }
        this.selcted = checked;
      },
    },
  },

};
</script>
