<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>Usuários Cadastrados</h1>
      </div>
      <div class="col">
        <form class="form-inline mt-2 mt-md-0 pt-2">
          <input class="form-control mr-sm-2" type="text" 
          placeholder="Search" aria-label="Search" v-model="search">
          <!--button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button -->
        </form>
      </div>
    </div>
    <div id="list" v-show="showList">
      <div id="list_register"  class="list-register">
        <div class="table-responsive">
          <table class="table table-striped table-bordered table-hover table-sm">
            <thead>
              <tr>
                <th>#Id</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Enderço</th>
                <th>Cidade</th>
                <th>UF</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="filter(item)" v-for="item in listing">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>{{item.adress}}</td>
                <td>{{item.city}}</td>
                <td>{{item.uf}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Home',
  props: {
  },

  data(){
    return {
      showList:true,
      listing:null, 
      search:'',
    }
  },

  computed:{
  },

  methods: {
    listData(){
      this.$services.getAll().then(resp => {
        if(resp.erro){
          console.log("Deu erro!");
        }else {
          this.listing = resp.dados.map(function(object){
            return{id:object.id, name:object.name, email:object.email,
            adress:object.adress, city:object.city, uf:object.uf}
          })
        }
      }).catch(resp => {
        console.log("Deu erro!")
      })
    },

    filter(item){
        return (
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          item.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
    },
  },
  mounted(){
    this.listData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list-register {
    padding-top: 10px;
  }
</style>
