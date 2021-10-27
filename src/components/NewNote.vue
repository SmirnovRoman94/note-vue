<template>
    <div class="new-note">
        <label>Title</label>
        <div class="add-note">
            <input v-model="note.title" type="text">
        <select v-model="note.type">
            <option :value="option.type" v-for="(option, index) in noteType" :key="index">{{option.name}}</option>
        </select> 
        </div>
        <label>Description</label>
        <textarea v-model="note.descr"></textarea>
        <button class="btn btnPrimary" @click="addNote">New note</button>
    </div>
</template>


<script>
export default {
    props:{
        note:{
            type: Object,
            required: true
        }
    },
    data(){
        return{ 
            noteType: this.$store.getters.getNoteType, 
        }
    },
    methods:{
        addNote(){
            let {title, descr, type} = this.note
            if (title === "") { 
                this.message = "Заголовок не может быть пустым!"
                return false
            }
            this.$store.dispatch('addNote', { 
                title,
                descr,
                date: new Date(Date.now()).toLocaleString(),
                type,
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .new-note{ 
        text-align: center;
    }
    button{
        margin: 20px auto;
    }
    .add-note{
        display: flex;
        justify-content: space-between;
        input{ 
            margin-right: 20px;
        }
    }
</style>