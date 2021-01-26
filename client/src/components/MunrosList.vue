<template lang="html">
  <div id="MunrosList">
   <munro-list-header/>
                <div class="tabs">
                    <ul>
                        <li :class="[ taboption === 'selectmunro' ? 'is-active' : '']"><a @click="taboption='selectmunro'">select munro</a></li>
                        <li :class="[ taboption === 'allmunros' ? 'is-active' : '']"><a @click="taboption='allmunros'">all munros</a></li>
                        <li :class="[ taboption === 'mybag' ? 'is-active' : '']"><a @click="taboption='mybag'">my bagged</a></li>
                    </ul>
                </div>

                <div class="box help-content">
                    <div v-if="taboption ==='selectmunro'">
                       <selected-munro/>
                        <weather-section/>
                    </div>
                    <div v-if="taboption ==='allmunros'">
                        <div class="search-wrapper">
                        <input type="text" v-model="search" placeholder="Search munro.."/>
                        </div>
                          <div id="filters" > 
                      <button v-on:click="filterHeight">Height</button>
                      <button v-on:click="filterName">Name</button>
                      </div>
                        <munro v-for="munro, index in filteredList" :key="index" :munro="munro" />
                    </div>
                    <div v-if="taboption ==='mybag'">
                       <bagged-munro v-for="baggedMunro in bagged" :baggedMunro="baggedMunro" />
                    </div>
                    </pre>
                </div>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
import Munro from './Munro';
import MunroListHeader from './MunroListHeader';
import SelectedMunro from './SelectedMunro';
import Weather from './Weather'
import BaggedMunro from './BaggedMunro';


export default {
    name: 'munros-list',

     data() {
            return {
                taboption: 'selectmunro',
                search: ''
            }
        },
    components: {
        'munro': Munro,
        'munro-list-header': MunroListHeader,
        'selected-munro': SelectedMunro,
        'weather-section': Weather,
        'bagged-munro': BaggedMunro,
    },
    props: ['munros',
            'bagged'],


    methods: {
    filterHeight() {
      this.munros.sort((munro1, munro2) => munro1.height - munro2.height);
    },
    filterName(){
       this.munros.sort( function( a, b ) {
        a = a.name;
        b = b.name;
        return a < b ? -1 : a > b ? 1 : 0;
    });
    }
    },
    mounted() {
      eventBus.$on('selectMunro', () => {
          this.taboption='selectmunro'
      });
    },
    computed: {
    filteredList() {
      return this.munros.filter(munro => {
        return munro.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }

}
</script>

<style lang="css" >
#MunroList {
    width: 100%; 
    font-family: Avenir, Helvetica, Arial, sans-serif;  
}

.tabs li.is-active a {
    list-style: none;
    border-bottom-color: #000000;
    color: #000000;
    border-bottom: 3px solid;
    font-weight: bold;
}
code, pre {
    color: #1b1e21 !important;
    background-color: white !important;
}

</style>