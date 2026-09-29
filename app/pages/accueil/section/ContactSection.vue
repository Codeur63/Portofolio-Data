<script setup lang="ts"></script>
import Input from "@/components/ui/Input.vue"
import Button from "@/components/ui/Button.vue"

import { ref } from "vue"
const name = ref("")
const email = ref("")
const message = ref("")
<template>
    <section class="relative isolate px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:min-h-screen">
        <div class="max-x-7x mx-auto">
            <div></div>
            <div>
                <h2
                class="text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-[3.7rem] 2xl:text-[4rem]"                
                > Contact </h2>
            </div>
            <div class="flex justify-center gap-16">
                <form class="relative w-full">
                    <!-- Background  -->
                    <div class="block xl:hidden absolute z-0 inset-0  bg-[url('/images/contact/avatar-light.png')] bg-cover bg-center bg-transparent opacity-10 rounded-xl"/>
                    <div class="grid grid-cols-1 gap-10 max-w-[500px] py-6 mx-auto ">
                        <div>
                            <Input v-model="name" type="text" label="Name" placeholder="Votre nom" :required="true" class="border border-gray-300 border-border px-5 py-3 rounded-md w-full" />
                        </div>
                        <div>
                            <Input v-model="email" type="email" label="Email" placeholder="Votre email" :required="true" class="border border-gray-300 border-border px-5 py-3 rounded-md w-full" />
                        </div>
                        <div>
                            <Input v-model="message" type="textarea" label="Message" placeholder="Votre message" :required="true" class=" border border-gray-300 border-border px-5 py-3 rounded-md w-full min-h-[300px]"/>
                        </div>
                        <div>
                            <Button type="submit" class="w-full border  border-border border-primary rounded-md bg-primary py-4">Envoyer</Button>
                        </div>
                    </div>
                </form>
                <div class="hidden xl:block">
                    <img src="/images/contact/avatar-light.png" alt="Image de contact" class="block dark:hidden object-cover w-full h-full" />
                    <img src="/images/contact/avatar-light.png" alt="Image de contact" class="hidden dark:block object-cover w-full h-full" />
                </div>
            </div>
        </div>
    </section>
</template>
