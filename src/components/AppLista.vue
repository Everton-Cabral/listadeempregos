<template>
    <div class="listaPrincipal" :class="marcacaoLateral">
        <div class="listaCorpo">
           
            
            <img id="logo" :src="'../../public/'+item.logo" alt="img">
           
            <div class="listaInfo">
                {{item.company}}
                 <span id="new" v-show="item.new">NEW!</span>
                 <span id="featured" v-show="item.featured">FEATURED</span>
                 <p id="position">{{item.position}}</p>
                 <p id="detalhes">{{item.postedAt}} • {{item.contract}} • {{item.location}}</p>
            </div>
            <div class="divisao"></div>
            <div class="habilidades">
                <span :class= "classeDinamica(item.role)" @click="add_listaFiltrada(item.role)">
                    {{item.role}}
                </span>
             
                <span :class="classeDinamica(item.level)" @click="add_listaFiltrada(item.level)" >
                    {{item.level}}
                 </span>
                 
               
                <span :class="classeDinamica(t)" v-for="t in item.tools" :key="t" @click="add_listaFiltrada(t)">
                    {{t}}
                </span>
               
                <span :class="classeDinamica(habilidade)"  v-for="habilidade in item.languages" :key="habilidade" @click="add_listaFiltrada(habilidade)">
                         {{habilidade}}
                </span>
               
            </div>
        </div>
      
     
    </div>
</template>

<script>
export default {
    props:{
        item: Object,
    },

    methods:{
        add_listaFiltrada(params){
            let itensClicados =  this.$store.state.listaFiltrada
            itensClicados.push(params)
            this.$store.state.listaFiltrada = [...new Set(itensClicados)]
        }, 
        classeDinamica(params){
           return this.$store.state.listaFiltrada.includes(params) ? 'habilidade-selecionada' : 'habilidade'
        }
                          
    },
    computed:{
        classe(){
         
            return true
        },
        marcacaoLateral(){
            let resultado = ''
            if(this.item.featured){
                resultado = 'marcacaoLateral'
            }
            return resultado
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');
    .listaPrincipal{
        background-color: #fff;
        width: 80%;
        height: 228px;
        margin-top: 40px;
        border-radius: 5px;
        box-shadow: 2px 5px 10px #7b8e8e;
        transition: 1s;
    }
    .marcacaoLateral{
        background-color: hsl(180, 29%, 50%);
    }
    .listaCorpo{
        background-color: #fff;
        width: 99%;
        height: 100%;
        float: right;
        border-radius: 5px;
    }
    #logo{
        width: 48px;
        height: 48px;
        margin-top: -25px;
        margin-left: 20px;
    }
    .listaInfo{
        font-family: 'League Spartan', sans-serif;
        color: hsl(180, 29%, 50%);
        width: auto;
        height: auto;
        margin-left: 20px;
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 18px;

    }
    #new{
        border: 1px solid hsl(180, 29%, 50%);
        padding: 5px;
        border-radius: 15px;
        color: #fff;
        background-color: hsl(180, 29%, 50%); 
        font-size: 12px;
        margin-left: 30px;
        margin-right: 5px;
    }
    #featured{
        border: 1px solid black;
        padding: 5px;
        border-radius: 15px;
        color: #fff;
        background-color: black; 
        font-weight: 500;
        font-size: 12px;
    }
    #position{
        color: black;
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    #detalhes{
        color: #7b8e8e;
        font-size: 15px;
    }
    .divisao{
        width: 90%;
        height: 0.5px;
        background-color: #7b8e8e;
        margin-left: 5%;
    }
    .habilidades{
        margin: 15px;
        height: auto;
        display: flex;
        justify-content: space-around;
        justify-content: left;
        flex-wrap: wrap;
    }
    .habilidade{
        border: 1px solid hsl(180, 52%, 96%);
        background-color: hsl(180, 52%, 96%);
        color: hsl(180, 29%, 50%);
        padding: 5px;
        margin-left: 6px;
        font-family: 'League Spartan', sans-serif;
        margin: 5px;    
        border-radius: 5px;
        transition: 0.5s;
    }
    .habilidade:hover{
        background-color: hsl(180, 29%, 50%);
        color: #fff;
        cursor: pointer;
    }
    .habilidade-selecionada{
        border: 1px solid hsl(180, 29%, 50%);
        background-color: hsl(180, 29%, 50%);
        color: #fff;
        padding: 5px;
        margin-left: 6px;
        font-family: 'League Spartan', sans-serif;
        margin: 5px;    
        border-radius: 5px;
        transition: 0.5s;
    }
    @media only screen and (min-width: 1440px) {
        #logo{
        width: 90px;
        height: 90px;
        margin-top: 10px;
        margin-left: 25px;
        }
        .divisao{
            display: none;
        }
        .listaPrincipal{
            height: 200px;
            width: 1154px;
        }
        .listaCorpo{
            display: flex;
            align-items: center;
        }
       .listaInfo{
        width: 50%;
       }
       .habilidade{
        font-size: 18px;
       }
    }
</style>
