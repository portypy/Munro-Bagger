<template lang="html">
    <div id="MunrosList">
                <div id="MunrosListHeader">
                   <h5>282 munro's</h5>
		                <h1>Scottish Munros</h1>
              	</div>
                <div class="tabs">
                    <ul>
                        <li :class="[ taboption === 'selectmunro' ? 'is-active' : '']"><a @click="taboption='selectmunro'">select munro</a></li>
                        <li :class="[ taboption === 'allmunros' ? 'is-active' : '']"><a @click="taboption='allmunros'">all munros</a></li>
                        <li :class="[ taboption === 'mybag' ? 'is-active' : '']"><a @click="taboption='mybag'">my bagged</a></li>
                    </ul>
                </div>

                <div class="box help-content">
                    <div v-if="taboption ==='selectmunro'">
                       <selected-munro :selectedMunro="selectedMunro"/>
                    </div>
                    <div v-if="taboption ==='allmunros'">
                        <div class="search-wrapper">
                        <input type="text" v-model="search" placeholder="Search munro.."/>
                        
                          <div id="filters" > 
                        <button v-on:click="filterHeight">Height</button>
                        <button v-on:click="filterName">Name</button>
                          </div>
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
import SelectedMunro from './SelectedMunro';
import BaggedMunro from './BaggedMunro';


export default {
    name: 'munros-list',

     data() {
            return {
                taboption: 'selectmunro',
                search: '',
                selectedMunro: []
            }
        },
    components: {
        'munro': Munro,
        'selected-munro': SelectedMunro,
        'bagged-munro': BaggedMunro,
    },
    props: ['munros',
            'bagged',
            ],


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
      eventBus.$on('selectMunro', (selectedMunro) => {
          this.taboption='selectmunro'
          this.selectedMunro = selectedMunro
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
     width:auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;  
}
.search-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;
}


input[type=text] {
  color:#0b2d3148;
  width: 60%;
  padding: 8px 12px;
  margin: 8px 0;
  
  box-sizing: border-box;
  
  border: 1px solid #0b2d3148;
  border-radius: 40px;
}
ul {
   display: flex;
    padding-inline-start: 0px;
    margin-bottom: 2em;
    margin-top: 2em;
}
#filters > button {
    list-style: none;
  
  background-color: white; 
  border-style: solid;
  border-color:#0b2d3148;
  border-width: 1px;
  padding: 5px 20px;
  margin-right: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  box-shadow: none;
  cursor: pointer;
  border-radius: 30px;
}
.tabs li{
  list-style: none;
  
  background-color: white; 
  border: none;
  padding: 5px 20px;
  margin-right: 15px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.044), 0 5px 15px 0 rgba(0, 0, 0, 0.064);
  cursor: pointer;
  border-radius: 30px;
}
.tabs li.is-active a {
  
    list-style: none;
    color: black;
    font-weight: 600;
    /* background-color: #0b2d3148; */
}


#munrosListHeader {
  margin-bottom: -1em;
  margin-top: 5em;
  font-weight: 500;
}

</style>