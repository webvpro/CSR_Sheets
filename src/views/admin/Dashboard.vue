<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section
    aria-labelledby="primary-heading"
    class="flex flex-col flex-1 h-full min-w-0 overflow-y-auto lg:order-last"
  >
    <h1 id="primary-heading" class="sr-only">Home</h1>
    <!-- Your content -->
  </section>

  <!-- Secondary column (hidden on smaller screens) -->
  <aside class="hidden lg:order-first lg:block lg:flex-shrink-0">
    <div
      class="relative flex flex-col h-full overflow-y-auto bg-gray-100 border-r border-gray-200 w-96"
    >
      <!-- Your content -->
    </div>
  </aside>
</template>

<script setup>
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/vue/solid";
import {
  CursorClickIcon,
  MailOpenIcon,
  UsersIcon,
} from "@heroicons/vue/outline";

const stats = [
  {
    id: 1,
    name: "Total Subscribers",
    stat: "71,897",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Avg. Open Rate",
    stat: "58.16%",
    icon: MailOpenIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Avg. Click Rate",
    stat: "24.57%",
    icon: CursorClickIcon,
    change: "3.2%",
    changeType: "decrease",
  },
];
</script>
