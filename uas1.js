Vue.component("isian", {
    template: `
    <div class="container">
        <h1 class="title">My Daily List</h1>
        <div class="addsearch">
            <input
            v-model="add"
            type="text"
            class="addsearch placeatas"
            placeholder="Ketik lalu enter"
            @keyup.enter="enter"/>
        <input type="text" 
            v-model='search' 
            class="addsearch" 
            placeholder="Cari catatan disini" />
    </div>
    <div class="isian">
        <h1 class="subtitle">Daftar Catatan Harian</h1>
        <div class="isian-list placebawah" v-for="(list,index) in pencarian">
            <input type="text" 
                class="hasil" 
                v-model="list.activity" 
                :value="list.activity" 
                :disabled="list.disable" />
            <button @click='edit(index, list.disable)' class="edit">
                Edit
            </button>
            <button @click='hapus(index)' class="delete">
                Hapus
            </button>
        </div>
    </div>
    <div class="clearsection">
        <button @click='reset' class="reset">
            Hapus Semua
        </button>
    </div>
    `,
    data() {
      return {
        add: "",
        catatan: [],
        search: "",
      };
    },
    methods: {
      enter: function () {
        this.catatan.push({
          activity: this.add,
          disable: true,
        });
        this.add = "";
      },
      edit(index, val) {
        if (val == true) {
          this.catatan[index].disable = false;
        } else {
          this.catatan[index].disable = true;
        }
      },
      hapus(index) {
        Vue.delete(this.catatan, index);
      },
      reset() {
        this.catatan = [];
      },
    },
    computed: {
      pencarian: function () {
        return this.catatan.filter((list) => {
          return list.activity.match(this.search);
        });
      },
    },
  }),
    new Vue({
      el: "#app",
    })