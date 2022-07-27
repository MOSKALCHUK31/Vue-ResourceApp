<template>
    <card-base>
        <the-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</the-button>
        <the-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</the-button>
    </card-base>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResources,
        AddResource
    },
    provide() {
        return {
            resources: this.storedResources,
            addNewResource: this.addResource,
            removeResource: this.removeResource
        };
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? '' : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? '' : 'flat';
        }
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official guide',
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'The official searc name Google.',
                    link: 'https://google.com'
                }
            ]
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(data) {
            const {userTitle, userDescription, userLink} = data;
            const newResoucre = {
                id: userTitle.toLowerCase(),
                title: userTitle,
                description: userDescription,
                link: userLink
            };

            this.storedResources.push(newResoucre);
            this.selectedTab = 'stored-resources';
        },
        removeResource(id) {
            const index = this.storedResources.findIndex(el => el.id === id);
            this.storedResources.splice(index, 1);
        }
    }
}
</script>