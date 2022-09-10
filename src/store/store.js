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
            state.listaFiltrada.filter((f)=>{

                state.lista = state.lista.filter((l)=>{
                        if(l.role === f || l.level === f) return l
                           let tool = l.tools.filter((t)=>{
                                if(t === f) return t
                            })
                        if(tool.length > 0 ) return l
                            
                            let habilidade = l.languages.filter((h)=>{
                                if(h === f) return h 
                            })
                        if( habilidade.length > 0) return l
                })
            })
            if(state.listaFiltrada.length < 1) return state.listaJson
            return state.lista
        }
    }
})