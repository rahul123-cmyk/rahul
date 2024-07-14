





<template> 
  <section class="py-20 bg-slate-100">
  <v-container>
  <h1 class="mb-6 text-5xl text-center font-bold "> {{member.title}}</h1>
<div  class="grid grid-cols-1 md:grid-cols-3 gap-10" >
<div v-for="member in member.members" :key="member.id" class="flex items-center gap-4 border
hover:shadow-lg  ease-linear duration-300 ">
<div class="w-36">
<v-img :src="member.photo" :lazy-src="member.photo" ></v-img></div>
<div >

<h1><span class="italic font-semibold">name:</span> <span> {{member.name}}</span></h1>
<h1><span class="italic font-sembold"> title:</span>  {{member.title}}</h1>
<h1> <v-icon icon="mdi-account-box"></v-icon> {{member.designation}}</h1>
<h1> <v-icon icon="mdi-file-phone"></v-icon>{{member.phone}}</h1>
<h1> <v-icon icon="mdi-email-box"></v-icon>{{member.email}}</h1>





</div>


</div>




</div>
  </v-container>

  </section>

  <!-- administrative members profile -->

<section class="mb-11 mt-20">
<v-container>
<h1 class="text-4xl  text-center font-semibold "> {{teacher.title}}</h1>
</v-container>
</section>

</template>






<script setup>
import { useMembersStore } from "`/store/member`";
const membersStore= useMembersStore();
await membersStore.getmembers();


const member = membersStore.members.find((m) => m.slug == "academic-members-profile" );
const teacher = membersStore.members.find((m) => m.slug == "administrative-members-profile" );


</script>


<!-- <template>
 <section class="py-20 bg-[#F8F9FA] ">
    <v-container>
      <div v-for="teacher in teacher.data" :key="teacher.id">
        <div v-if="teacher.id % 2 !== 0">
          <h1 class="text-center text-5xl font-semibold">
            {{ teacher.title }}
          </h1>
          <div class="grid grid-cols-4 gap-7 py-14 items-center md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1">
            <div
              v-for="members in teacher.members"
              :key="members.id"
              class="w-52"
              
            >
              <div>
                <v-img :src="members.photo" :lazy-src="members.photo"></v-img>
              </div>
              <div class="text-center font-semibold capitalize">
                {{ members.name }}
              </div>

              <div class="py-4">
                <div class="px-5 font-semibold text-blue-800">
                  {{ members.title }}
                </div>
                <div>
                  <v-icon icon="mdi-account-box"></v-icon
                  >{{ members.designation }}
                </div>
                <div>
                  <v-icon icon="mdi-file-phone"></v-icon>{{ members.phone }}
                </div>

                <div><v-icon icon="mdi-email"></v-icon>{{ members.email }}</div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center text-5xl font-semibold text-blue-800">
          <h1>{{ teacher.title }}</h1>
        </div>
      </div>
    </v-container>
  </section> 
</template> -->
