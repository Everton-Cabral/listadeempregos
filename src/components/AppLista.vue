<template>
    <div class="listaPrincipal" :style=" lista.featured ? 'background-color:hsl(180, 29%, 50%)': '#fff'">
        <div class="listaCorpo">
            <img id="logo" :src="'../../public/'+lista.logo" alt="img">
           
            <div class="listaInfo">
                {{lista.company}}
                 <span id="new" v-show="lista.new">NEW!</span>
                 <span id="featured" v-show="lista.featured">FEATURED</span>
                 <p id="position">{{lista.position}}</p>
                 <p id="detalhes">{{lista.postedAt}} • {{lista.contract}} • {{lista.location}}</p>
            </div>
            <div class="divisao"></div>
            <div class="habilidades">
                <span class="habilidade" @click="clique('role',lista.role)">{{lista.role}}</span>
                <span class="habilidade" @click="clique('level',lista.level)">{{lista.level}}</span>
                <span class="habilidade" @click="clique('tools',t)" v-for="t in lista.tools" :key="t">{{t}}</span>
                <span class="habilidade" @click="clique('languages',habilidade)"  v-for="habilidade in lista.languages" :key="habilidade">
                         {{habilidade}}

                </span>
            </div>
        </div>
      
      
    </div>
</template>

<script>
export default {
    props:{
        lista: Object
    },
    data(){
        return{
            
        }
    },
    methods:{
        clique(propriedade,params){
            this.$emit('filtro', {propriedade:propriedade, params:params})
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');
    .listaPrincipal{
        background-color: #fff;
        width: 90%;
        height: 231px;
        margin-top: 40px;
        border-radius: 5px;
        box-shadow: 2px 5px 10px #7b8e8e
    }
    .listaCorpo{
        background-color: #fff;
        width: 98.5%;
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
</style>
