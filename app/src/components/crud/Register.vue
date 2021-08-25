<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>Cadastro de Usuários</h1>
      </div>
      <div class="col">
        <form class="form-inline mt-2 mt-md-0 pt-3" v-show="showSearch">
          <input class="form-control mr-sm-2" type="text" 
          placeholder="Search" aria-label="Search" v-model="search">
          <!--button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button -->
        </form>
      </div>
    </div>
    <div id="menssage" v-html="notice"></div>
    
    <div id="list" v-show="showList">
      <button id="show_form" type="button" class="btn btn-primary"
       v-on:click="formShow()">Cadastrar</button>
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
                <th>Editar</th>
                <th>Apagar</th>
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
                <td>
                  <button id="edit" type="button" class="btn btn-warning"
                  v-on:click="forEditing(item.id)">Editar</button>
                </td>
                <td>
                  <button id="delete" type="button" class="btn btn-danger"
                  v-on:click="forDelete(item.id)">Apagar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="form" v-show="!showList">
      <div class="row">
        <div class="col-sm">
          <form method="POST" action="/" id="form_register" v-on:submit.prevent="save()">
            <div class="form-group">
              <label for="id">Id</label>
                <input type="number" class="form-control" id="id" name="id" 
                 disabled="disabled" v-model="record.id">
            </div>
            <div class="form-group">
              <label for="name">Nome</label>
                <input type="text" class="form-control" id="name" name="name" 
                 placeholder="Informe nome completo." required="required" 
                 v-bind:disabled="disabled" v-model="record.name">
            </div>
            <div class="form-group">
              <label for="email">E-mail</label>
                <input type="email" class="form-control" id="email" name="email" 
                 placeholder="Informe e-mail válido." required="required" 
                 v-bind:disabled="disabled" v-model="record.email">
            </div>
            <div class="form-group">
              <label for="adress">Endereço</label>
                <input type="text" class="form-control" id="adress" name="adress" 
                 placeholder="Informe logradouro, número, complemento e bairro." 
                 required="required" v-bind:disabled="disabled" v-model="record.adress">
            </div>
            <div class="form-group">
              <label for="city">Cidade</label>
                <input type="text" class="form-control" id="city" name="city" 
                 placeholder="Informe a cidade do seu endereço." required="required" 
                 v-bind:disabled="disabled" v-model="record.city">
            </div>
            <div class="form-group">
              <label for="uf">UF</label>
                <input type="text" class="form-control" id="uf" name="uf" 
                 placeholder="Informe a sigla do seu estado." required="required" 
                 v-bind:disabled="disabled" v-model="record.uf">
            </div>
            <div class="form-inline">
              <button id="del" type="button" class="btn btn-primary mr-sm-2" 
              v-on:click="toDelete(record.id)" v-show="!displayButton">Excluir</button>
              <button id="save" type="submit" class="btn btn-primary mr-sm-2" 
              v-show="displayButton">Salvar</button>
              <button id="cancel" type="button" class="btn btn-primary" 
              v-on:click="cancel()">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
  },
  data() {
    return {
      showList:true,
      showSearch:true,
      displayButton:true,
      disabled:false,
      listing:null,
      notice:'',
      search:'',
      recordFormData:null,
      record:{
        id:null, 
        name:'',
        email:'',
        adress:'',
        city:'',
        uf:'',
      }
    }
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

    showNotice(msg, tipo){
      let dados = '';
      if(tipo == 'success'){
        dados = `<div class="alert alert-success" role="alert">
                    <strong>${msg}</strong>
                 </div>`;
      } else if(tipo == 'erro'){
        dados = `<div class="alert alert-danger" role="alert">
                    <strong>${msg}</strong>
                 </div>`;
      }
      this.notice = dados;
    },

    hiddenNotices(){
      this.notice = '';
    },

    formShow(){
      this.hiddenNotices();
      this.showList = false;
      this.showSearch = false;
      this.displayButton = true;
    },

    save(){
      this.recordFormData = new FormData();
      this.recordFormData.append('id', this.record.id);
      this.recordFormData.append('name', this.record.name);
      this.recordFormData.append('email', this.record.email);
      this.recordFormData.append('adress', this.record.adress);
      this.recordFormData.append('city', this.record.city);
      this.recordFormData.append('uf', this.record.uf);

      if(this.record.id != null){
        this.edit(this.recordFormData);
      } else{
        this.register(this.recordFormData);
        //this.showList = true;
      }
    },

    register(dataForm){
      this.$services.add(dataForm).then(resp => {
        if(!this.checkReturnHttp(resp)){
          this.cleanForm();
          this.listData();
          this.showList = true;
        }
      }).catch(resp => {
        let erro = 'Erro ao cadastrar!';
        this.showNotice(erro, 'erro');
      })
    },

    checkReturnHttp(resp){
      if(resp.erro){
        this.showNotice(resp.msg, 'erro');
        return true;
      } else{
        if(resp.msg != null){
        this.showNotice(resp.msg, 'success');
        return false;
        }
      }
    },

    cleanForm(){
      let htmlForm = document.getElementById("form_register");
      htmlForm.reset();
      
      this.recordFormData = new FormData();
      this.record = {
        id:null, 
        name:'',
        email:'',
        adress:'',
        city:'',
        uf:'',
      };
    },

    forEditing(id){
      this.hiddenNotices();
      this.displayButton = true;
      this.showSearch = false;
      this.$services.getId(id).then(resp => {
        if(!this.checkReturnHttp(resp)){
          this.record.id = resp.dados[0].id;
          this.record.name = resp.dados[0].name;
          this.record.email = resp.dados[0].email;
          this.record.adress = resp.dados[0].adress;
          this.record.city = resp.dados[0].city;
          this.record.uf = resp.dados[0].uf;
          this.showList = false;
        }
      }).catch(resp => {
        let erro = 'Ocorreu um erro!';
        this.showNotice(erro, 'erro');
      });
    },

    forDelete(id){
      this.hiddenNotices();
      this.disabled = true;
      this.displayButton = false;
      this.showSearch = false;
      this.$services.getId(id).then(resp => {
        if(!this.checkReturnHttp(resp)){
          this.record.id = resp.dados[0].id;
          this.record.name = resp.dados[0].name;
          this.record.email = resp.dados[0].email;
          this.record.adress = resp.dados[0].adress;
          this.record.city = resp.dados[0].city;
          this.record.uf = resp.dados[0].uf;
          this.showList = false;
          let erro = 'Se clicar em "Excluir" irá apagar definitivamente este registro.';
          this.showNotice(erro, 'erro');
        }
      }).catch(resp => {
        let erro = 'Ocorreu um erro!';
        this.showNotice(erro, 'erro');
      });
    },

    cancel(){
      this.hiddenNotices();
      this.cleanForm();
      this.showList = true;
      this.showSearch = true;
    },

    edit(dataForm){
      this.$services.edit(dataForm).then(resp => {
        if(!this.checkReturnHttp(resp)){
          this.cleanForm();
          this.listData();
          this.showList = true;
        }
      }).catch(resp => {
        let erro = 'Erro ao editar registro!';
        this.showNotice(erro, 'erro');
      })
    },

    toDelete(id){
      this.$services.delete(id).then(resp => {
        if(!this.checkReturnHttp(resp)){
          this.listData();
          this.showList = true;
        }
      }).catch(resp => {
        let erro = 'Erro ao apagar o registro!';
        this.showNotice(erro, 'erro');
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
