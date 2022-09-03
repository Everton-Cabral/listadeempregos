<template>
    <div id="app">

        <div class="topbar">
         <!-- <img id="top-bar" src="../../public/images/bg-header-mobile.svg" alt="top-bar"> -->
        </div>
        <transition   name="bounceDown" >
        <div class="filtro" style="animation-duration: 1s" v-show="filtro.length > 0">
                <div class="itensFiltro">
                    <span id="itemFiltro" v-for="(f,i) in filtro" :key="f.params">
                        {{f.params}}
                    <span @click="filtro.splice(i,1)" id="btn-excluir">X</span></span>
                </div>
                <span  @click="filtro = []" id="clear">Clear</span>
            </div>
        </transition>
        <transition-group  name="fadeDown" id="app">
            <AppLista :filtro="filtro"  v-for="(l,i) in lista" :key="l.id" :lista="lista[i]" 
            @filtro="filtro.push($event);"></AppLista>
        </transition-group>
     
    </div>
</template>

<script>
import listaJson from '@/data.json'
import AppLista from '../components/AppLista.vue'

export default {
    components:{ AppLista },
data(){
   return{
    listaJson: listaJson,
    lista: listaJson,
    filtro:[],
    listafinal: '',
   
   }
},


watch:{
    filtro:{
        handler(){
           this.lista = this.listaJson
        for(var i=0; i<this.filtro.length;i++){
        this.lista =  this.lista.filter((l)=>{
           
            var pro = l[this.filtro[i].propriedade]
            var rams = this.filtro[i].params
            
           
            if(typeof pro  == 'object'){
              var a = pro.filter((p)=>{
                    if(p == this.filtro[i].params){
                        
                        return p
                    }
                    
                })
                pro = a[0]
            }
          

              if(pro == rams){
               // console.log( l[this.filtro[i].propriedade])
                
                return l
                    
              } 
             
                
              
            })
        }
   


        }
    }
}
}
</script>

<style>
    body{
        background-color: hsl(180, 52%, 96%);
    }
#app{
    width: 100%;
    height:auto;
    background-color: hsl(180, 52%, 96%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  
}
.topbar{
    width: 100%;
    height: 150px;
    background-color:  hsl(180, 29%, 50%);
    padding-bottom: 0px;
    margin-bottom: 40px;
    background-image: url('@/../public/images/bg-header-mobile.svg');
    background-repeat: no-repeat;
    background-size: cover;
    
}
.topbar #top-bar{
    width: 100%;
    margin-bottom: -4px;
    height: 100%;
}
.filtro{
    width: 80%;
    height: auto;
    background-color: #fff;
    border-radius: 5px;
    margin-top: -80px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: space-between;
    margin-bottom: 40px;

}
.itensFiltro{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
}
#itemFiltro{
    border: 1px solid hsl(180, 52%, 96%);
    background-color: hsl(180, 52%, 96%);
    color: hsl(180, 29%, 50%);
    margin-left: 20px;
    font-family: 'League Spartan', sans-serif; 
    display: flex;
    align-items: center;
    padding-left: 5px;
    
}
#btn-excluir{
    width: 30px;
    height: 30px;
    background-color:hsl(180, 29%, 50%);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-left: 5px;
}
#btn-excluir:hover{
    background-color: #2c3a3a;
    cursor: pointer;

}
#clear{
    margin-right: 10px;
    height: 100%;
    color: #7b8e8e;
    font-family: 'League Spartan', sans-serif;
}
#clear:hover{
    cursor: pointer;
    text-decoration: underline;
}
@media only screen and (min-width: 1440px) {
    .topbar{
        background-image: url('@/../public/images/bg-header-desktop.svg')
    }
    .filtro{
        width: 1154px;
    }
}
</style>
