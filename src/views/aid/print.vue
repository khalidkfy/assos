<template>
  <div class="back">
    <div class="" id="printableArea" >
      <div class='hd1' style='width: 80%;margin: auto;'  v-for="(item, index) in nuuuu" :key="index">
        <div v-if="nums[index] " class="cont">
          <!--<img src="../../assets/img/bacg.jpeg" class="amg" alt=""/>-->
          <table class="table my-4 mx-3 ">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <img src="../../assets/img/log.jpeg" alt="logo" width="100" height="100">
              </td>
            </tr>
            <tr>
              <td class="font-weight-bolder px-2" style="font-weight: bolder">رقم المنتسب</td>
              <td class="font-weight-bolder px-2" >{{ item.affiliate_no }}</td>
              <td class="font-weight-bolder px-2" style="font-weight: bolder">رقم المشروع</td>
              <td class="font-weight-bolder px-2" >{{ item.project_number }}</td>
              <td class="font-weight-bolder px-2" style="font-weight: bolder">اسم المشروع</td>
              <td class="font-weight-bolder px-2" >{{ item.project_name }}</td>
            </tr>
            <tr>
              <td class="font-weight-bolder px-2" style="font-weight: bolder">الاسم رباعي</td>
              <td class="font-weight-bolder px-2" >{{ item.beneficiary_name }}</td>
              <td class="font-weight-bolder px-2" style="font-weight: bolder">رقم الجوال</td>
              <td class="font-weight-bolder px-2">{{ item.mobile_number }}</td>
              <td class="font-weight-bolder px-2"></td>
              <td class="font-weight-bolder px-2"></td>
            </tr>
            <tr>
              <td class="font-weight-bolder px-2" style="font-weight: bolder">التاريخ</td>
              <td class="font-weight-bolder px-2" >{{ item.aid.project_date }}</td>
              <td class="font-weight-bolder px-2" ></td>
              <td class="font-weight-bolder px-2" ></td>
              <td class="font-weight-bolder px-2" ></td>
              <td class="font-weight-bolder px-2 serial" >#{{++index}}</td>
            </tr>
          </table>


          <!--<img :src="'http://134.122.119.130:8080/' + item.image" class="imgs" alt="">-->
        </div>
      </div>
    </div>
  </div>


  <div class="d-flex justify-content-start mx-5">
    <button
        @click.prevent="
				printDiv();
			"
        class="btn  d-print-none mx-3"
    >
      طباعة
    </button>
  </div>

</template>
<style scoped>
.cont {
  position: relative;
}
.hd1:nth-child(6n) {
  /*display: block !important;*/
  page-break-after: always;
}
.serial {
  font-weight: bold;
  border: 2px solid;
  text-align: center;
  margin: 10px 0;
  padding: 10px;
}
.new {
  display: flex;
  flex-wrap: wrap;
  font-size: 3px;
}

.imgs {
  position: absolute;
  top: 117px;
  right: 269px;
  width: 65px;
  height: 85px;
  z-index: 999;
}

.amg {
  height: 260px;
  display: inline;
  width: 100%;
}

.abs {
  position: absolute;
  top: 115px;
  right: 103px;
  z-index: 999;
  font-size: 13px;
}

.year {
  position: absolute;
  top: 70px;
  right: 45px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #4992F2;
  font-weight: 700;
  z-index: 999;
  font-size: 30px;
}

.abs0 {
  position: absolute;
  top: 85px;
  left: 28px;
  z-index: 999;
  font-size: 13px;
}

.abs2 {
  position: absolute;
  top: 140px;
  right: 95px;
  font-size: 13px;
  z-index: 999;
}

.abs3 {
  position: absolute;
  top: 183px;
  right: 100px;
  z-index: 999;
  font-size: 13px;

}

.abs4 {
  position: absolute;
  z-index: 999;
  font-size: 13px;
  top: 160px;
  right: 100px;
}

.abs5 {
  position: absolute;
  z-index: 999;
  top: 205px;
  font-size: 13px;
  right: 100px;
}

.abs9 {
  position: absolute;
  z-index: 999;
  top: 205px;
  font-size: 13px;
  right: 150px;
}
@media print { .parent { page-break-after: always; } }
</style>

<script>
import axios from "axios";

export default {
  name: "personal",
  data() {
    return {
      year: "2022",
      informats: [],
      nums: this.$route.query.q,
    };
  },

  created() {
    this.basicdata();
  },
  methods: {
    printDiv() {
      window.print();
    },
    basicdata() {
      const token = sessionStorage.getItem("token");
      axios
          .get(`api/aid/show?aid_id=${this.$route.query.c}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
            params: {
              per_page: 3500,
            },
          })
          .then((res) => {
            this.informats = res.data.data.AidPeople;
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  computed: {
    nuuuu() {
      return this.informats.filter(x => this.nums.includes(x.affiliate_no))
    },

  }
};
</script>
