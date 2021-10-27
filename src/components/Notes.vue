<template>
    <div class="notes"> 
        <div class="note" :class="[{ full: !grid}, note.type]"   v-for="(note, id) in notes" :key="id" >
            <div class="note-header" :class="{ full: !grid}">
                <input class="noteTitleInput" type="text" ref="input{{id}}" v-model="note.title" @focus="saveText(note.title)" @keyup.escape="returnText(note,'title'), $event.target.blur()"> 
                <p style="cursor: pointer" @click="remove(id)">X</p>
            </div>
            <div class="note-body">
                <textarea class="noteDescrInput" type="text" ref="textarea" v-model="note.descr" @focus="saveText(note.descr)" @keyup.escape="returnText(note,'descr'), $event.target.blur()"></textarea>
                <span>{{ note.date }}</span> 
            </div>  
        </div>
        
    </div> 
</template>


<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        },
        grid:{
            type: Boolean,
            required: true
        }
    },
    data () {
        return {
            oldText: ''
        }
    },
    methods:{
        remove(index){ 
            this.$store.dispatch('deleteNote', index) 
        },
        saveText(text){
            this.oldText = text
        },
        returnText(note,id){
            if (event.keyCode == 27 ){
                if(id == 'title')
                    note.title = this.oldText
                if(id == 'descr')
                    note.descr = this.oldText
            } 
        }
    }
}
</script>


<style lang="scss" scoped>
    .notes{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 0px; 
    }
    
    
    .note{
        width: 40%;
        padding: 18px 20px;
        margin-bottom: 20px;
        background-color: #ffffff;
        transition: all 0.25s cubic-bezier(.02,.01,.47,1);
        box-shadow: 0px 30px 30px rgba(0,0,0,.02);
        &:hover{
            box-shadow: 0 30px 30px rgba(0,0,0,.04);
            transform: translate(0, -6px);
            transition-delay: 0s !important;
        }
        &.full{
            width: 100%;
            text-align: center;
            justify-content: center;
            input, textarea{
                text-align: center;
                margin-right: 16px;
                &:last-child{
                    margin-right: 0;
                }
            }
            p{
                margin-bottom: 30px;
            }
        }
    }
    .note-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            color: #402caf;
        } 
        &.full{
            justify-content: center;
        }
        .noteTitleInput{
            padding: 5px 0px;
            border: none;
            background-color: transparent;
        }
    }
    .note-body{
        p{
            margin: 20px 0;
        }
        .noteDescrInput{
            font-family: 'Montserrat';
            padding: 5px 0px;
            border: none;
            background-color: transparent;
        }
    }
    .standart{
        background-color: white;
    }
    .warning{
        background-color: yellow;
    }
    .important{
        background-color: red;
    }
</style>