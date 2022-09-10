import Vue from 'vue'
import Vuex from 'vuex'
import listaJson from '@/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        listaJson,
        lista: listaJson,
        listaFiltrada: []
    },
    getters:{
        filtrando(state){
            
               
         
            
            
            state.lista = state.listaJson.filter((emprego)=>{

              
             let itens = state.listaFiltrada.every((item_lista)=>{
                     if(item_lista === emprego.role || item_lista === emprego.level
                         || emprego.languages.includes(item_lista) || emprego.tools.includes(item_lista) ) return true
                   
                })

                if(itens) return emprego
            })
            //console.log(lista1)
        
             return state.lista

        }
    }
})