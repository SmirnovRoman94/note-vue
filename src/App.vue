<template>
  <div class="wrapper">

    <!-- header -->

    <div class="wrapper-content">
      <section>
        <div class="container"> 
          <h1>{{ title }}</h1> 

          <message v-if="message" :message="message"/>

          <newNote :note="note" />
            

          <div class="notes-header">
            <h2>Ваши заметки</h2> 

            <!-- search -->
            <search 
              :value ="search"  
              placeholder="Найдите вашу заметку"
              @search="search = $event" />

            <!-- icons control -->
            <div class="icons">
              <svg :class="{ active: grid}"  @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid}" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
              </div>
          </div>  

          <notes :notes="notesFilter" :grid="grid"/> 
        </div>
      </section>
    </div>

     <!-- footer -->
    
  </div>
</template>

<script> 
import message from "@/components/Message.vue"
import newNote from "@/components/NewNote.vue"
import notes from "@/components/Notes.vue"
import search from "@/components/Search.vue"
export default {
  components: {
    message,
    newNote,
    notes,
    search
  },
  data() {
    return { 
      title: 'Notes App',
      message: null,
      search: '',
      grid: true,
      note: {
          title: '',
          descr: '',
          type: 'standart'
      },
      notes: this.$store.getters.getNotes
    }
  },
  computed:{
    notesFilter(){ 
      return this.$store.getters.getFilteredNotes(this.search) 
    }
  }
} 
</script> 

<style lang="scss" scoped>
  .notes-header{
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin-top: 30px;
    h2{
      font-size: 32px;
    }
  }
  .icons{
    svg{
      cursor: pointer;
      margin-right: 12px;
      &:last-child{
        margin-right: 0px;
      } 
    }
    .active{
      color: #474dcf;
    }
  }
</style>