<template>
    <base-dialog v-if="showError" title="Invalid Input" @close="closeDialog">
        <template #default>
            <p>Unforntunatelly at least one of the inputs value is invalid</p>
            <p>Please check your inputs and make sure that they aren't empty</p>
        </template>
        <template #actions>
            <the-button @click="closeDialog">Okay</the-button>
        </template>
    </base-dialog>
    <card-base>
        <form class="form-control" @submit.prevent="onSubmit">
            <div>
                <label for="title">Title</label>
                <input type="text" name="title" id="title" v-model="userTitle">
            </div>
            <div>
                <label for="description">Description</label>
                <textarea name="description" id="desciption" rows="5" v-model="userDescription"></textarea>
            </div>
            <div>
                <label for="link">Link</label>
                <input type="url" name="link" id="link" v-model="userLink">
            </div>
            <div>
                <the-button type="submit">Add Resource</the-button>
            </div>
        </form>
    </card-base>
</template>

<script>
export default {
    inject: ['addNewResource'],
    data() {
        return {
            userTitle: '',
            userDescription: '',
            userLink: '',
            showError: false
        }
    },
    methods: {
        onSubmit() {
            if (this.userTitle.trim() === '', this.userDescription.trim() === '', this.userLink.trim() === '') {
                this.showError = true;
                return;
            }

            this.addNewResource(this.$data);
        },
        closeDialog() {
            this.showError = false;
        }
    }
}

</script>

<style scoped>
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        padding: 0.15rem;
        border: 1px solid #ccc;
        margin-bottom: 1rem;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #3a0061;
        background-color: #f7ebff;
    }

    .form-control {
        margin: 1rem 0;
    }
</style>