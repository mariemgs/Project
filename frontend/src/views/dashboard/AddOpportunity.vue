<template>
<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Opportunity</h2>
      <form @submit.prevent="submitForm">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Opportunity Name</label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Opportunity name" required="">
              </div>
              <div class="w-full">
                  <label for="contact_person" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Person</label>
                  <input type="text" name="contact_person" id="contact_person" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Contact Person" required="">
              </div>
              <div class="w-full">
                  <label for="contact_person" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                  <input type="tel" name="phone_number" id="phone_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="54-444-555"
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}">
              </div>
              <div class="w-full">
                  <label for="estimated_price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estimated Price</label>
                  <input type="number" name="estimated_price" id="estimated_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="">
              </div>
             
              <div>
                  <label for="Priority" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Priority </label>
                  <select id="Priority" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select Priority</option>
                      <option value="low"> Low </option>
                      <option value = "medium"> Medium </option>
                      <option value = "high"> High </option>
                  </select>
              </div>
             
              <div class="w-full">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email </label>
                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="yourEmail@gmail.com" required="">
              </div>
              <div class="w-full">
                  <label for="URL" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> URL </label>
                  <input type="text" name="URL" id="URL" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="URL" required="">
              </div>
              <div class="w-full">
                  <label for="Type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Opportunity Type</label>
                  <input type="text" name="type" id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Opportunity Type" required="">
              </div>
              <div class="w-full">
                  <label for="PublicationDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Publication Date   </label>
                  <input type="date"  name="pub_date" id="pub_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required="">
              </div>
              <div class="w-full">
                  <label for="Deadline" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Deadline</label>
                  <input type="date"  pattern="\d{4}-\d{2}-\d{2}" name="deadline" id="deadline" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
              </div>

              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Opportunity description here"></textarea>
              </div>
          </div>
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Add Opportunity
          </button>
      </form>
  </div>
</section>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'AddOpportunity',
        data() {
            return {
                name:'',
                contact_person: '',
                description: '',
                email: '',
                URL: '',
                pub_date: '',
                deadline: '',
                type: '',
                phone_number:'',
                estimated_price: 0,
                Priority:'Low',            
            } 
        },
        methods: {
          async submitForm() {
            this.$store.commit('setIsLoading', true)
            const opportunity = {
              name: this.name,
              contact_person: this.contact_person,
              description: this.description,
              email: this.email,
              URL: this.URL,
              pub_date : this.pub_date,
              deadline : this.deadline,
              type: this.type,
              phone_number: this.phone_number,
              estimated_price: this.estimated_price,
              Priority :this.Priority,
            }
            console.log(pub_date.value)

            await axios
                  .post('http://localhost:8000/api/v1/opportunities/',opportunity)
                  .then(response => { 
                    console.log(response)
                    this.$router.push('/dashboard/opportunities')
                  })
                  .catch(error => {
                    console.log(error)
                  })
            this.$store.commit('setIsLoading', true)
          }
        }
    }
    

</script>