<template>
<nav class="flex items-center justify-between bg-gray-800 h-20 shadow-2xl">
    <RouterLink to="/" class="logo"> 
      <h1 class="text-white ml-4 cursor-pointer text-2xl">ITC CRM</h1>
    </RouterLink>
    <ul class="flex">
      <li>
        <RouterLink to="/Login">
           <h1 class="text-white mr-4 cursor-pointer bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded" href="#"><i class="fas fa-home"> </i> Login </h1> 
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
    export default {
       name: 'Navbar'
    }
</script>